import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, company, email, jobTitle, message } = req.body || {};

    if (!name || !company || !email) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // WARNING: hardcoding API keys is insecure. Rotate this key later and move to env vars.
    const apiKey = 're_L498CUi3_GxsiBpNwbs7dqPosWek69kCa';
    const toEmail = process.env.TO_EMAIL || 'nguyenledev05@gmail.com';
    // Use Resend sandbox sender to ensure delivery without domain verification
    const fromEmail = 'onboarding@resend.dev';

    if (!apiKey) {
      return res.status(500).json({ message: 'Missing API key' });
    }

    const subject = `New Waitlist Registration + FREE Ebook - Nousu Collective`;
    const text = [
      `New Waitlist Registration:`,
      '',
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Job Title: ${jobTitle || 'Not specified'}`,
      `Message: ${message || 'No additional message'}`,
      '',
      `Please send the FREE Ultimate Outbound Sales Guide (40-page ebook).`
    ].join('\n');

    const html = `
      <div>
        <h2>New Waitlist Registration</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Job Title:</b> ${jobTitle || 'Not specified'}</p>
        <p><b>Message:</b> ${message || 'No additional message'}</p>
      </div>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        text,
        html,
        reply_to: email
      })
    });

    const payload = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      return res.status(502).json({ message: 'Failed to send email', details: payload });
    }

    return res.status(200).json({ ok: true, id: payload.id });
  } catch (err: any) {
    return res.status(500).json({ message: 'Unexpected error', error: err?.message || String(err) });
  }
}


