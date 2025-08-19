import express, { Request, Response, Express } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
}))

interface ContactFormBody {
  name: string;
  email: string;
  message: string;
}

app.post('/api/contact', async (req: Request<{}, {}, ContactFormBody>, res: Response): Promise<void> => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
      res.status(400).json({ error: 'All fields are required' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // replace with your SMTP host
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
  if (error) {
    console.error("Transporter verification failed:", error);
  } else {
    console.log("Server is ready to take messages");
  }})

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Message from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent successfully:", info.response);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending message" });
  }
});

export default app;