import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        // Initialize Resend inside the handler to avoid build-time errors
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('❌ RESEND_API_KEY environment variable is not set');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();
        const { name, email, phone, service, message, recaptchaToken } = body;

        console.log('📧 Contact form submission received:', { name, email, service });

        // Verify reCAPTCHA token
        if (!recaptchaToken) {
            console.error('❌ reCAPTCHA token missing');
            return NextResponse.json(
                { error: 'reCAPTCHA verification failed' },
                { status: 400 }
            );
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY;
        if (!secretKey) {
            console.error('❌ RECAPTCHA_SECRET_KEY not configured');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Verify token with Google
        const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `secret=${secretKey}&response=${recaptchaToken}`,
        });

        const verifyData = await verifyResponse.json();

        if (!verifyData.success || verifyData.score < 0.5) {
            console.error('❌ reCAPTCHA verification failed:', verifyData);
            return NextResponse.json(
                { error: 'reCAPTCHA verification failed. Please try again.' },
                { status: 400 }
            );
        }

        console.log('✅ reCAPTCHA verified. Score:', verifyData.score);

        // Validate required fields
        if (!name || !email || !message) {
            console.error('❌ Validation failed: Missing required fields');
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send email using Resend
        console.log('📤 Attempting to send email via Resend...');
        const { data, error } = await resend.emails.send({
            from: 'Frame Falcon Studios <hello@framefalcon.com>',
            to: ['hello@framefalcon.com'], // Resend's test inbox - change to hello@framefalcon.com after domain verification
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Service:</strong> ${service || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email, // Allow replying directly to the customer
        });

        if (error) {
            console.error('❌ Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email', details: error },
                { status: 500 }
            );
        }

        console.log('✅ Email sent successfully:', data);
        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ API error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}
