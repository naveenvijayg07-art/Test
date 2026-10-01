import { useState } from 'react';
import {
    Box, Typography, Paper, Button, TextField, MenuItem,
    Table, TableHead, TableBody, TableRow, TableCell, IconButton
} from "@mui/material";
import type { PurchaseOrder,PurchaseOrderLine} from './type';
import { AiAssistant } from '../AiAssistant';



export const CreatePurchase = () => {
    const [formData, setFormData] = useState<PurchaseOrder>({
        id: '',
          poNumber: '',        // e.g. "PO-001"
          poDate:'',
          SupplierName: '',
          orderDate: '',
          
          grandTotal: 0,
          status: 'Draft',
           remarks: '',
            entryBy:'',
    });

    const handleInputChange = (field: keyof PurchaseOrder, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // const handleSave = () => {
    //     console.log('Saving order:', formData);
    //     // call your API here
    // };

    const [lines, setLines] = useState<PurchaseOrderLine[]>([
        { itemName: '', qty: 1, rate: 0 },
    ]);

    const handleLineChange = (index: number, field: keyof PurchaseOrderLine, value: string) => {
        setLines((prev) =>
            prev.map((line, i) => {
                if (i !== index) return line;
                // qty and rate are numbers, itemName stays text
                return { ...line, [field]: field === 'itemName' ? value : Number(value) };
            })
        );
    };

    const addLine = () => {
        setLines((prev) => [...prev, { itemName: '', qty: 1, rate: 0 }]);
    };

    const removeLine = (index: number) => {
        setLines((prev) => prev.filter((_, i) => i !== index));
    };

    const totalAmount = lines.reduce((sum, line) => sum + line.qty * line.rate, 0);

    const handleSave = () => {
        console.log('Saving order:', { ...formData, lines });
    };

    const headerCellStyle = {
        color: '#e2e8f0',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        bgcolor: 'rgba(168, 85, 247, 0.12)',
        borderBottom: '2px solid #a855f7',
    };
    const formLabelStyle = {
        color: '#e2e8f0',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.08em',
        mb: 0.5,
        pl: 1,
        borderLeft: '3px solid #a855f7',
    };
    return (
        <Box>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <div>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f8fafc' }}>
                        New Purchase Order
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        Fill in the details below to create a new vendor order
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{ bgcolor: 'primary.main', color: '#09090b', fontWeight: 'bold' }}
                >
                    Save Order
                </Button>
            </Box>

            {/* Main Card */}
            {/* Main Card */}
            <Paper
                elevation={1}
                sx={{ p: 3, borderRadius: 2, bgcolor: '#0f0f13', border: '1px solid rgba(255,255,255,0.05)' }}
            >
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                    {/* PO Number */}
                    <Box>
                        <Typography sx={formLabelStyle}>PO Number</Typography>
                        <TextField
                            size="small"
                            fullWidth
                            placeholder="Enter PO number"
                            value={formData.poNumber}
                            onChange={(e) => handleInputChange('poNumber', e.target.value)}
                        />
                    </Box>

                    {/* PO Date */}
                    <Box>
                        <Typography sx={formLabelStyle}>PO Date</Typography>
                        <TextField
                            size="small"
                            fullWidth
                            type="date"
                            value={formData.poDate}
                            onChange={(e) => handleInputChange('poDate', e.target.value)}
                        />
                    </Box>

                    {/* Supplier */}
                    <Box>
                        <Typography sx={formLabelStyle}>Supplier</Typography>
                        <TextField
                            select
                            size="small"
                            fullWidth
                            
                            value={formData.SupplierName}
                            onChange={(e) => handleInputChange('SupplierName', e.target.value)}
                        >
                            <MenuItem value="" disabled>Select supplier</MenuItem>
                            <MenuItem value="RR Tex">RR Tex</MenuItem>
                            <MenuItem value="Akr">Akr</MenuItem>
                        </TextField>
                    </Box>

                    {/* Status */}
                    <Box>
                        <Typography sx={formLabelStyle}>Status</Typography>
                        <TextField
                            select
                            size="small"
                            fullWidth
                            value={formData.status}
                            onChange={(e) => handleInputChange('status', e.target.value)}
                        >
                            <MenuItem value="Draft">Draft</MenuItem>
                            <MenuItem value="Approved">Approved</MenuItem>
                            <MenuItem value="Closed">Closed</MenuItem>
                        </TextField>
                    </Box>
                </Box>
                
           
                   
            </Paper>

            {/* Details Grid */}
            <Paper
                elevation={1}
                sx={{ p: 3, mt: 3, borderRadius: 2, bgcolor: '#0f0f13', border: '1px solid rgba(255,255,255,0.05)' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ color: '#f8fafc' }}>Order Details</Typography>
                    <Button variant="outlined" onClick={addLine}>+ Add Item</Button>
                </Box>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={headerCellStyle}>#</TableCell>
                            <TableCell sx={headerCellStyle}>Item Name</TableCell>
                            <TableCell sx={headerCellStyle}>Qty</TableCell>
                            <TableCell sx={headerCellStyle}>Rate</TableCell>
                            <TableCell sx={headerCellStyle}>Amount</TableCell>
                            <TableCell sx={headerCellStyle} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {lines.map((line, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ color: '#f8fafc' }}>{index + 1}</TableCell>
                                <TableCell>
                                    <TextField
                                        size="small"
                                        fullWidth
                                        value={line.itemName}
                                        onChange={(e) => handleLineChange(index, 'itemName', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        size="small"
                                        type="number"
                                        value={line.qty}
                                        onChange={(e) => handleLineChange(index, 'qty', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        size="small"
                                        type="number"
                                        value={line.rate}
                                        onChange={(e) => handleLineChange(index, 'rate', e.target.value)}
                                    />
                                </TableCell>
                                <TableCell sx={{ color: '#f8fafc' }}>
                                    {(line.qty * line.rate).toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    <IconButton onClick={() => removeLine(index)} sx={{ color: '#f87171' }}>
                                        ✕
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Typography sx={{ color: '#f8fafc', fontWeight: 'bold', textAlign: 'right', mt: 2 }}>
                    Total: {totalAmount.toFixed(2)}
                </Typography>
            </Paper>
  {/* Footer */}
<Paper
    elevation={1}
    sx={{ p: 3, mt: 3, borderRadius: 2, bgcolor: '#0f0f13', border: '1px solid rgba(255,255,255,0.05)' }}
>
    <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 2 }}>
        <Box>
            <Typography sx={formLabelStyle}>Remarks</Typography>
            <TextField
                size="small"
                fullWidth
                multiline
                rows={3}
                placeholder="Enter remarks"
                value={formData.remarks}
                onChange={(e) => handleInputChange('remarks', e.target.value)}
            />
        </Box>

        <Box>
            <Typography sx={formLabelStyle}>Entry By</Typography>
            <TextField
                size="small"
                fullWidth
                placeholder="Enter your name"
                value={formData.entryBy}
                onChange={(e) => handleInputChange('entryBy', e.target.value)}
            />
        </Box>
    </Box>
</Paper>
<AiAssistant order={{ ...formData, lines }} />
 
        </Box>
        
    );
};