import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "sandeep26062004@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Debug: check if API key is loaded
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json({ error: "Email service not configured" }, { status: 500 });
    }

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="margin:0 0 16px;font-size:20px;color:#111">New portfolio contact</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#666;width:80px">Name</td>
              <td style="padding:8px 0;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666">Email</td>
              <td style="padding:8px 0"><a href="mailto:${email}" style="color:#7c3aed">${email}</a></td>
            </tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
          <p style="margin:0;color:#444;line-height:1.6;white-space:pre-wrap">${message}</p>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee" />
          <p style="margin:0;font-size:12px;color:#999">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    console.log("Resend result:", JSON.stringify(result));

    if (result.error) {
      console.error("Resend error:", result.error);
      return Response.json({ error: result.error.message }, { status: 500 });
    }

    return Response.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to process request" },
      { status: 500 }
    );
  }
}
