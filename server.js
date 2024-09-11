const express = require('express');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // replace with your MySQL username
    password: 'beni3us3smicql!12$M',  // replace with your MySQL password
    database: 'virtualcareDB'  // your database name
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // Your email
        pass: process.env.EMAIL_PASS   // Your email password
    }
});

// Endpoint to add an admin and send a confirmation email
app.post('/add-admin', (req, res) => {
    const { username, email, password, access_code } = req.body;
    const sql = `INSERT INTO admins (username, email, password, access_code) VALUES (?, ?, ?, ?)`;

    db.query(sql, [username, email, password, access_code], (err, result) => {
        if (err) throw err;

        // Send an email to the admin
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to VirtualCare!',
            text: `Hello ${username}, you have been successfully registered as an admin.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Error sending email');
            }
            res.send('Admin registered and email sent!');
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});