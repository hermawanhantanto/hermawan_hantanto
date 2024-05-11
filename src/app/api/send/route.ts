import { formSchema } from "@/app/validation";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "hermawan.inf@gmail.com",
    pass: "rkcttgxlmygxtrtx",
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = formSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.errors, status: 400 });
    }

    const mailOptions = {
      from: body.email,
      to: "hermawanhant.code@gmail.com",
      subject: body.subject,
      text: body.message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json({ status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
