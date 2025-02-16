require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
        auth: {
                user: process.env.EMAIL, // Your Gmail address
                        pass: process.env.PASSWORD, // Your Gmail app password
                            },
                            });

                            app.post("/send-email", async (req, res) => {
                                const { name, email, message } = req.body;

                                    const mailOptions = {
                                            from: process.env.EMAIL,
                                                    to: process.env.EMAIL,
                                                            subject: `New Contact Form Submission from ${name}`,
                                                                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                                                                        };

                                                                            try {
                                                                                    await transporter.sendMail(mailOptions);
                                                                                            res.json({ message: "Email sent successfully!" });
                                                                                                } catch (error) {
                                                                                                        res.status(500).json({ message: "Failed to send email", error });
                                                                                                            }
                                                                                                            });

                                                                                                            // Start server
                                                                                                            const PORT = process.env.PORT || 3000;
                                                                                                            app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
                                                                                                            