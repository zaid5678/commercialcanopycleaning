import nodemailer from 'nodemailer'
import busboy from 'busboy'

function parseMultipart(event) {
  return new Promise((resolve, reject) => {
    const fields = {}
    const files = []

    const bb = busboy({
      headers: { 'content-type': event.headers['content-type'] },
      limits: { fileSize: 10 * 1024 * 1024 }, // 10MB per file
    })

    bb.on('field', (name, val) => {
      fields[name] = val
    })

    bb.on('file', (name, stream, info) => {
      const chunks = []
      stream.on('data', chunk => chunks.push(chunk))
      stream.on('end', () => {
        files.push({
          filename: info.filename,
          mimeType: info.mimeType,
          content: Buffer.concat(chunks),
        })
      })
    })

    bb.on('finish', () => resolve({ fields, files }))
    bb.on('error', reject)

    const body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64')
      : Buffer.from(event.body || '')

    bb.write(body)
    bb.end()
  })
}

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { fields, files } = await parseMultipart(event)

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    })

    // Notification email to you
    await transporter.sendMail({
      from: `"Commercial Canopy Cleaning" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: fields.email,
      subject: `New Enquiry from ${fields.name} — ${fields.service}`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #222;">
          <h2 style="color: #1A5FA8; margin-bottom: 20px;">New Enquiry — Commercial Canopy Cleaning</h2>
          <table role="presentation" style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding: 6px 0; color: #888; width: 120px;">Name</td><td style="padding: 6px 0;"><strong>${fields.name}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #888;">Company</td><td style="padding: 6px 0;">${fields.company || 'Not provided'}</td></tr>
            <tr><td style="padding: 6px 0; color: #888;">Email</td><td style="padding: 6px 0;"><a href="mailto:${fields.email}">${fields.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #888;">Phone</td><td style="padding: 6px 0;">${fields.phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 6px 0; color: #888;">Service</td><td style="padding: 6px 0;">${fields.service}</td></tr>
            <tr><td style="padding: 6px 0; color: #888;">Message</td><td style="padding: 6px 0;">${fields.message}</td></tr>
            ${files.length > 0 ? `<tr><td style="padding: 6px 0; color: #888;">Files</td><td style="padding: 6px 0;">${files.map(f => f.filename).join(', ')}</td></tr>` : ''}
          </table>
        </div>
      `,
      attachments: files.map(f => ({
        filename: f.filename,
        content: f.content,
        contentType: f.mimeType,
      })),
    })

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Commercial Canopy Cleaning" <${process.env.ZOHO_USER}>`,
      to: fields.email,
      subject: `We've received your enquiry — Commercial Canopy Cleaning`,
      html: `
        <div style="font-family: sans-serif; font-size: 14px; color: #222;">
          <p>Hi ${fields.name},</p>
          <p>Thank you for reaching out to us. We have received your enquiry for <strong>${fields.service}</strong> and will be in touch within 2 business days.</p>
          <p>If you need to speak to us urgently, call us directly on <a href="tel:07517758507">07517 758507</a>.</p>
          <br/>
          <p>Best regards,<br/>Commercial Canopy Cleaning</p>
        </div>
      `,
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('Contact function error:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message }),
    }
  }
}
