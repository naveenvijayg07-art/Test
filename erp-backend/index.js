import express from 'express';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (must come BEFORE the routes)
app.use(cors());
app.use(express.json());

// AI

app.post('/api/ai/chat', async (req, res) => {
    try {
        const { message, order } = req.body;
const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
        model:  'openai/gpt-oss-120b',
        messages: [
            { role: 'system', content: 'You are a helpful assistant inside a garment ERP purchase order screen. Keep answers short and simple.' },
            { role: 'user', content: `Current order: ${JSON.stringify(order)}\n\nQuestion: ${message}` },
        ],
    }),
});

const data = await response.json();
if (!data.choices) {
    console.error('Gemini error:', JSON.stringify(data, null, 2));
    return res.status(500).json({ error: 'AI request failed' });
}
          res.json({ reply: data.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'AI request failed' });
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('ERP Backend is running!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});