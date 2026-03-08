export const sendEmail = async (data: any) => {
  const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

  if (!BREVO_API_KEY || !CONTACT_EMAIL) {
    console.error('Email configuration missing. Please check your .env file for VITE_BREVO_API_KEY and VITE_CONTACT_EMAIL');
    return { success: false, error: 'Configuration missing' };
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: CONTACT_EMAIL, name: "IG Transformation Partners" },
        to: [{ email: CONTACT_EMAIL, name: "Admin" }],
        subject: `New Enquiry from ${data.fullName} - ${data.service}`,
        htmlContent: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
            <h2 style="color: #0d9488;">New Form Submission</h2>
            <p style="margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
              You have received a new enquiry from your landing page.
            </p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 150px;"><strong>Full Name:</strong></td>
                <td style="padding: 8px 0;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Mobile Number:</strong></td>
                <td style="padding: 8px 0;">${data.mobile}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Service Selected:</strong></td>
                <td style="padding: 8px 0; text-transform: capitalize;">${data.service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Requirement:</strong></td>
                <td style="padding: 8px 0;">${data.requirement}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 10px;">
              This email was sent automatically from Luxury Real Estate Landing Page.
            </p>
          </div>
        `,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return { success: false, error: errorData.message };
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: 'Failed to send email' };
  }
};
