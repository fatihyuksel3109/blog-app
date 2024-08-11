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


export async function GET(request) {
    try {
        // Connect to the database
        await ConnectDB();
        console.log('DB connected')

        // Fetch all emails from the database
        const emails = await EmailModel.find({});

        // Return success response with emails
        return NextResponse.json({ emails });
    } catch (error) {
        // Handle and log error
        console.error('Error fetching emails:', error);
        return NextResponse.json({ success: false, msg: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success: true, msg: 'Email Deleted'});
} 