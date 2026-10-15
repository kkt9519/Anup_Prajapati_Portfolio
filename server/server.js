import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Data directory for storing inquiries
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const messagesFile = path.join(dataDir, 'messages.json');
if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, JSON.stringify([], null, 2), 'utf-8');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    portfolioOwner: 'Anup Prajapati',
    role: 'B.Tech CSD • Software Engineer',
    academic: 'R.R. Institute of Modern Technology, Lucknow (AKTU)',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    nodeVersion: process.version,
  });
});

// Contact Submission Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }
  if (!subject || subject.trim().length < 3) {
    return res.status(400).json({ error: 'Subject must be at least 3 characters.' });
  }
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  const newMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
    ip: req.ip || req.headers['x-forwarded-for'] || '127.0.0.1',
  };

  try {
    const raw = fs.readFileSync(messagesFile, 'utf-8');
    const messages = JSON.parse(raw);
    messages.unshift(newMessage);
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2), 'utf-8');

    console.log(`[Contact Form] New message from ${newMessage.name} <${newMessage.email}>: "${newMessage.subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully. Anup Prajapati will get in touch with you shortly.',
      id: newMessage.id,
    });
  } catch (err) {
    console.error('Failed to save message:', err);
    return res.status(500).json({ error: 'Failed to record message on server.' });
  }
});

// Read messages (admin / testing)
app.get('/api/contact/messages', (req, res) => {
  try {
    const raw = fs.readFileSync(messagesFile, 'utf-8');
    const messages = JSON.parse(raw);
    res.json({ total: messages.length, messages });
  } catch (err) {
    res.status(500).json({ error: 'Could not load messages.' });
  }
});

// Serve client build if available (production / full-stack deployment)
const clientDist = path.join(__dirname, '../client/dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  Anup Prajapati Portfolio Full-Stack Application`);
  console.log(`  Server running on http://localhost:${PORT}`);
  console.log(`  Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});

