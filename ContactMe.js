const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/sendMail", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        service: "gmail",
        auth: {
            user: 'cuongthinh5213@gmail.com',
            pass: 'ybkw phgg lvze cnwh'
        }
    });

    try {
        const info = await transporter.sendMail({
            from: '"Benh Vien Xuong Khop👻" <cuongthinh5213@gmail.com>',
            to: '<cuongthinh5213@gmail.com>',
            subject: 'Customer Service',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <p style="font-size: 16px; color: #333;">Ten Khanh Hang: ${name}</p>
                    <p style="font-size: 16px; color: #333;">Mail cua Khách: ${email}</p>
                    <p style="font-size: 16px; color: #333;">Message: ${message}</p>
                </div>
            `,
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`SERVER Run with PORT ${PORT}`);
});
