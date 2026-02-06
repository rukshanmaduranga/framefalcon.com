import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        console.log('📧 Contact form submission received:', { name, email, service });

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
