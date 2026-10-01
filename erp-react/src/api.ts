const BASE_URL = 'http://localhost:5000';

export const askAi = async (message: string, order: object) => {
    const res = await fetch(`${BASE_URL}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, order }),
    });
    const data = await res.json();
    return data.reply || data.error;
};