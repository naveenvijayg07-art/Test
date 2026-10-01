import { useState } from 'react';
import { Box, Typography, Paper, Button, TextField } from '@mui/material';
import { askAi } from '../api';

interface AiAssistantProps {
    order: object;
}

export const AiAssistant = ({ order }: AiAssistantProps) => {
    const [question, setQuestion] = useState('');
    const [reply, setReply] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAsk = async () => {
        setLoading(true);
        try {
            const answer = await askAi(question, order);
            setReply(answer);
        } catch {
            setReply('Cannot reach the server. Is the backend running?');
        }
        setLoading(false);
    };

    return (
        <Paper
            elevation={1}
            sx={{ p: 3, mt: 3, borderRadius: 2, bgcolor: '#0f0f13', border: '1px solid rgba(255,255,255,0.05)' }}
        >
            <Typography variant="h6" sx={{ color: '#f8fafc', mb: 2 }}>AI Assistant</Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <TextField
                    size="small"
                    fullWidth
                    placeholder="Example: Write remarks for this order"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <Button variant="contained" onClick={handleAsk} disabled={loading || !question}>
                    {loading ? 'Thinking...' : 'Ask'}
                </Button>
            </Box>

            {reply && (
                <Typography sx={{ color: '#e2e8f0', mt: 2, whiteSpace: 'pre-wrap' }}>
                    {reply}
                </Typography>
            )}
        </Paper>
    );
};