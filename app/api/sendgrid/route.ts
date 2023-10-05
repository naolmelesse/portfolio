import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

const API_KEY : any = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(API_KEY);
export async function POST(req: any) {
  try {
    const data = await  req.json();
    
    await sendgrid.send({
      to: "ndmelesse@gmail.com", // Your email where you'll receive emails
      from: "naolmelesse91@gmail.com", // your website email address here
      subject: `😁 ${data.subject} - ${data.fullname}`,
      text: data.message,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #F1EFEF;
                  margin: 0;
                  padding: 0;
              }

              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              }

              .header {
                  text-align: center;
                  background-color: #001524;
                  padding: 20px;
                  border-radius: 10px 10px 0 0;
              }

              .header h1 {
                  font-size: 24px;
                  color: #fff;
              }

              .content {
                  padding: 20px;
              }

              .content p {
                  font-size: 16px;
                  line-height: 1.5;
                  color: #333333;
              }

              .footer {
                  text-align: center;
                  background-color: #001524;
                  padding: 10px;
                  border-radius: 0 0 10px 10px;
              }

              .footer p {
                  font-size: 14px;
                  color: #fff;
              }

              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #D6CC99;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Contact Form Submission</h1>
              </div>
              <div class="content">
                  <p>Hello,</p>
                  <p>You've received a new message through your portfolio website's contact form:</p>
                  <p><strong>Name:</strong> ${data.fullname}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Message:</strong></p>
                  <p>${data.message}</p>
                  <a href="mailto:${data.email}" class="button">Reply to Message</a>
              </div>
              <div class="footer">
                  <p>Thank you for using the contact form on https://naolmelesse.vercel.app .</p>
              </div>
          </div>
      </body>
      </html>
`
    });
    return NextResponse.json({ error: null });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ error: "Error occurred man: " + error.message });
  }

}
