import { useState } from 'react';
import {
    Box, Typography, Button, Paper, TextField, Chip,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import type { PurchaseOrderRow } from './type';
import { AiAssistant } from '../AiAssistant';

const initialOrders: PurchaseOrderRow[] = [
    { poNumber: 'PO-2026-001', poDate: '2026-09-28', SupplierName: 'RR Tex', itemsCount: 2, total: 35000, status: 'Approved' },
    { poNumber: 'PO-2026-002', poDate: '2026-09-29', SupplierName: 'Akr', itemsCount: 1, total: 12000, status: 'Draft' },
];

const statusColor: Record<string, string> = {
    Draft: '#94a3b8',
    Approved: '#4ade80',
    Closed: '#f87171',
};

export const PurchaseList = () => {
    const [orders] = useState<PurchaseOrderRow[]>(initialOrders);
    const [search, setSearch] = useState('');

    const filtered = orders.filter((o) =>
        (o.poNumber + o.SupplierName).toLowerCase().includes(search.toLowerCase())
    );

    const headerCellStyle = {
        color: '#e2e8f0',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.08em',
        bgcolor: 'rgba(168, 85, 247, 0.12)',
        borderBottom: '2px solid #a855f7',
    };

    const cellStyle = { color: '#f8fafc' };

    return (
        <Box>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <div>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#f8fafc' }}>
                        Purchase Orders
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                        View and manage all vendor orders
                    </Typography>
                </div>
                <Button
                    variant="contained"
                    sx={{ bgcolor: 'primary.main', color: '#09090b', fontWeight: 'bold' }}
                >
                    + Create Order
                </Button>
            </Box>

            {/* Search */}
            <TextField
                size="small"
                placeholder="Search PO number or supplier"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                sx={{ mb: 2, width: 320 }}
            />

            {/* Table */}
            <TableContainer
                component={Paper}
                elevation={1}
                sx={{ borderRadius: 2, bgcolor: '#0f0f13', border: '1px solid rgba(255,255,255,0.05)' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={headerCellStyle}>PO Number</TableCell>
                            <TableCell sx={headerCellStyle}>PO Date</TableCell>
                            <TableCell sx={headerCellStyle}>Supplier</TableCell>
                            <TableCell sx={headerCellStyle} align="center">Items</TableCell>
                            <TableCell sx={headerCellStyle} align="right">Total</TableCell>
                            <TableCell sx={headerCellStyle} align="center">Status</TableCell>
                            <TableCell sx={headerCellStyle}>Entry By</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filtered.map((order) => (
                            <TableRow
                                key={order.poNumber}
                                hover
                                sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.03)' } }}
                            >
                                <TableCell sx={cellStyle}>{order.poNumber}</TableCell>
                                <TableCell sx={cellStyle}>{order.poDate}</TableCell>
                                <TableCell sx={cellStyle}>{order.SupplierName}</TableCell>
                                <TableCell sx={cellStyle} align="center">{order.itemsCount}</TableCell>
                                <TableCell sx={cellStyle} align="right">
                                    {order.total.toLocaleString('en-IN')}
                                </TableCell>
                                <TableCell align="center">
                                    <Chip
                                        label={order.status}
                                        size="small"
                                        sx={{
                                            color: statusColor[order.status],
                                            border: `1px solid ${statusColor[order.status]}`,
                                            bgcolor: 'transparent',
                                        }}
                                    />
                                </TableCell>
                            
                            </TableRow>
                        ))}

                        {filtered.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} align="center" sx={{ color: '#94a3b8' }}>
                                    No orders found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <AiAssistant order={{ orders: filtered  }} />
        </Box>
    );
};