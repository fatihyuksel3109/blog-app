import { ConnectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Connect to the database
        await ConnectDB();

        // Extract form data
        const formData = await request.formData();
        const emailData = {
            email: formData.get('email'),
        };

        // Save email to the database
        await EmailModel.create(emailData);

        // Return success response
        return NextResponse.json({ success: true, msg: 'Email subscribed' }, { status: 201 });

    } catch (error) {
        // Handle and log error
        console.error('Error subscribing email:', error);
        return NextResponse.json({ success: false, msg: 'Internal Server Error' }, { status: 500 });
    }
}
