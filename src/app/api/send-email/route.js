
// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const {
//       businessName,
//       contactName,
//       email,
//       phone,
//       businessType,
//       interests,
//       message,
//     } = await req.json();

//     if (!businessName || !contactName || !email || !phone || !businessType) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         { status: 400 }
//       );
//     }

//     if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email server is not configured.",
//         },
//         { status: 500 }
//       );
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     const interestsText =
//       Array.isArray(interests) && interests.length
//         ? interests.join(", ")
//         : "None selected";

//     await transporter.sendMail({
//       from: process.env.GMAIL_USER,
//       to: process.env.GMAIL_USER,
//       replyTo: email,
//       subject: `New Wholesale Inquiry - ${businessName}`,
//       html: `
//         <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;padding:30px;background:#fff;color:#222">
//           <h2 style="color:#8C2332">New Wholesale Inquiry</h2>

//           <p><strong>Business Name:</strong> ${businessName}</p>
//           <p><strong>Contact Name:</strong> ${contactName}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p><strong>Business Type:</strong> ${businessType}</p>

//           <hr />

//           <h3 style="color:#8C2332">Wine Interests</h3>
//           <p>${interestsText}</p>

//           <hr />

//           <h3 style="color:#8C2332">Message</h3>
//           <p style="white-space:pre-wrap">${message || "No message provided"}</p>
//         </div>
//       `,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Wholesale inquiry sent successfully.",
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Failed to send email.",
//       },
//       { status: 500 }
//     );
//   }
// }





import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      // Wholesale fields
      businessName,
      contactName,
      email,
      phone,
      businessType,
      interests,
      message,

      // Call booking fields
      callName,
      callPhone,
      callEmail,
      callDate,
      callTime,
    } = await req.json();

    // =====================================================
    // CALL BOOKING
    // =====================================================

    if (callName || callPhone || callEmail || callDate || callTime) {
      if (
        !callName ||
        !callPhone ||
        !callEmail ||
        !callDate ||
        !callTime
      ) {
        return NextResponse.json(
          {
            success: false,
            message: "Please fill all call booking fields.",
          },
          { status: 400 }
        );
      }

      if (
        !process.env.GMAIL_USER ||
        !process.env.GMAIL_APP_PASSWORD
      ) {
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

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        replyTo: callEmail,
        subject: `New Call Booking Request - ${callName}`,

        html: `
          <div
            style="
              font-family:Arial,sans-serif;
              max-width:700px;
              margin:auto;
              padding:30px;
              background:#fff;
              color:#222;
              border:1px solid #eee;
            "
          >

            <div
              style="
                background:#120D0B;
                padding:25px;
                border-radius:12px;
                margin-bottom:25px;
              "
            >
              <h2
                style="
                  color:#E2C792;
                  margin:0;
                "
              >
                New Call Booking Request
              </h2>

              <p
                style="
                  color:#D4C3B5;
                  margin-bottom:0;
                "
              >
                A customer has requested a call.
              </p>
            </div>

            <h3 style="color:#8C2332">
              Customer Details
            </h3>

            <p>
              <strong>Name:</strong>
              ${callName}
            </p>

            <p>
              <strong>Phone:</strong>
              ${callPhone}
            </p>

            <p>
              <strong>Email:</strong>
              ${callEmail}
            </p>

            <hr
              style="
                border:none;
                border-top:1px solid #ddd;
                margin:25px 0;
              "
            />

            <h3 style="color:#8C2332">
              Requested Call
            </h3>

            <div
              style="
                background:#F8F5EF;
                padding:20px;
                border-radius:10px;
              "
            >

              <p>
                <strong>Date:</strong>
                ${callDate}
              </p>

              <p>
                <strong>Time:</strong>
                ${callTime}
              </p>

            </div>

            <hr
              style="
                border:none;
                border-top:1px solid #ddd;
                margin:25px 0;
              "
            />

            <p
              style="
                font-size:12px;
                color:#777;
              "
            >
              Please contact the customer using the phone number
              or email address provided above.
            </p>

          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Call booking request sent successfully.",
      });
    }

    // =====================================================
    // WHOLESALE INQUIRY
    // =====================================================

    if (
      !businessName ||
      !contactName ||
      !email ||
      !phone ||
      !businessType
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASSWORD
    ) {
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
        <div
          style="
            font-family:Arial,sans-serif;
            max-width:700px;
            margin:auto;
            padding:30px;
            background:#fff;
            color:#222
          "
        >

          <h2 style="color:#8C2332">
            New Wholesale Inquiry
          </h2>

          <p>
            <strong>Business Name:</strong>
            ${businessName}
          </p>

          <p>
            <strong>Contact Name:</strong>
            ${contactName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Business Type:</strong>
            ${businessType}
          </p>

          <hr />

          <h3 style="color:#8C2332">
            Wine Interests
          </h3>

          <p>
            ${interestsText}
          </p>

          <hr />

          <h3 style="color:#8C2332">
            Message
          </h3>

          <p style="white-space:pre-wrap">
            ${message || "No message provided"}
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Wholesale inquiry sent successfully.",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}