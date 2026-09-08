
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      businessName,
      contactName,
      email,
      phone,
      businessType,
      interests,
      message,
    } = await req.json();

    if (!businessName || !contactName || !email || !phone || !businessType) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Email server is not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const interestsText =
      Array.isArray(interests) && interests.length
        ? interests.join(", ")
        : "None selected";

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Wholesale Inquiry - ${businessName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;background:#fff;color:#222">
          <h2 style="color:#8C2332">New Wholesale Inquiry</h2>

          <p><strong>Business Name:</strong> ${businessName}</p>
          <p><strong>Contact Name:</strong> ${contactName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>

          <hr />

          <h3 style="color:#8C2332">Wine Interests</h3>
          <p>${interestsText}</p>

          <hr />

          <h3 style="color:#8C2332">Message</h3>
          <p style="white-space:pre-wrap">${message || "No message provided"}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Wholesale inquiry sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}