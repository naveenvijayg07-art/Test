import type { ReactNode } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Badge,
    Chip,
    Avatar,
    Divider,

} from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PostAddIcon from '@mui/icons-material/PostAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


interface LayoutProps {
    activeTab: 'list' | 'create';
    onSelectTab: (tab: 'list' | 'create') => void;
    orderCount: number;
    children: ReactNode;
}

export const Layout = ({ activeTab, onSelectTab, orderCount, children }: LayoutProps) => {
    return (
        <Box sx={{ display: 'flex', width: '100vw', minHeight: '100vh', bgcolor: '#09090b' }}>
            {/* ======================================================== */}
            {/* 1. FIXED LEFT SIDEBAR (Dark Charcoal / Violet Panel)    */}
            {/* ======================================================== */}
            <Box
                component="aside"
                sx={{
                    width: 270,
                    flexShrink: 0,
                    bgcolor: '#0f0f13',
                    borderRight: '1px solid rgba(167, 139, 250, 0.12)',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1200,
                }}
            >
                {/* Brand / Logo Area */}
                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                        sx={{
                            width: 42,
                            height: 42,
                            borderRadius: 2.5,
                            background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 20px rgba(167, 139, 250, 0.45)',
                        }}
                    >
                        <StorefrontIcon sx={{ color: '#09090b', fontSize: 24 }} />
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2, color: '#f8fafc' }}>
                            <Box component="span" sx={{ color: '#a78bfa' }}>ERP</Box>
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.72rem', letterSpacing: 0.5 }}>
                        
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)' }} />

                {/* Navigation Category Label */}
                <Box sx={{ px: 3, pt: 3, pb: 1 }}>
                    <Typography
                        variant="caption"
                        sx={{
                           color: 'primary.main',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            fontSize: '0.68rem',
                        }}
                    >
                        Purchase Management
                    </Typography>
                </Box>

                {/* Navigation Items */}
                <List sx={{ px: 1.5, py: 0.5 }}>
                    {/* Module 2: Order List */}
                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            onClick={() => onSelectTab('list')}
                            sx={{
                                borderRadius: 2.5,
                                py: 1.2,
                                px: 2,
                                transition: 'all 0.2s ease',
                                bgcolor: activeTab === 'list' ? 'rgba(167, 139, 250, 0.14)' : 'transparent',
                                border: activeTab === 'list' ? '1px solid rgba(167, 139, 250, 0.35)' : '1px solid transparent',
                                boxShadow: activeTab === 'list' ? '0 0 16px rgba(167, 139, 250, 0.15)' : 'none',
                                '&:hover': {
                                    bgcolor: activeTab === 'list' ? 'rgba(167, 139, 250, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 38,
                                    color: activeTab === 'list' ? '#c4b5fd' : '#94a3b8',
                                }}
                            >
                                <ReceiptLongIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Purchase Order List"
                                slotProps={{
                                    primary: {
                                        sx: {
                                            fontSize: '0.88rem',
                                            fontWeight: activeTab === 'create' ? 700 : 500,
                                            color: activeTab === 'create' ? '#f8fafc' : '#cbd5e1',
                                        }
                                    }
                                }}
                            />

                            <Chip
                                label={orderCount}
                                size="small"
                                sx={{
                                    height: 20,
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    bgcolor: activeTab === 'list' ? '#a78bfa' : '#27272a',
                                    color: activeTab === 'list' ? '#09090b' : '#a1a1aa',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>

                    {/* Module 1: Order Entry */}
                    <ListItem disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            onClick={() => onSelectTab('create')}
                            sx={{
                                borderRadius: 2.5,
                                py: 1.2,
                                px: 2,
                                transition: 'all 0.2s ease',
                                bgcolor: activeTab === 'create' ? 'rgba(167, 139, 250, 0.14)' : 'transparent',
                                border: activeTab === 'create' ? '1px solid rgba(167, 139, 250, 0.35)' : '1px solid transparent',
                                boxShadow: activeTab === 'create' ? '0 0 16px rgba(167, 139, 250, 0.15)' : 'none',
                                '&:hover': {
                                    bgcolor: activeTab === 'create' ? 'rgba(167, 139, 250, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 38,
                                    color: activeTab === 'create' ? '#c4b5fd' : '#94a3b8',
                                }}
                            >
                                <PostAddIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Purchase Order Entry"
                                slotProps={{
                                    primary: {
                                        sx: {
                                            fontSize: '0.88rem',
                                            fontWeight: activeTab === 'create' ? 700 : 500,
                                            color: activeTab === 'create' ? '#f8fafc' : '#cbd5e1',
                                        }
                                    }
                                }}
                            />


                            {activeTab === 'create' && (
                                <Box
                                    sx={{
                                        width: 7,
                                        height: 7,
                                        borderRadius: '50%',
                                        bgcolor: '#a78bfa',
                                        boxShadow: '0 0 8px #a78bfa',
                                    }}
                                />
                            )}
                        </ListItemButton>
                    </ListItem>
                </List>

                {/* Bottom System Status & User Profile */}
                <Box sx={{ mt: 'auto', p: 2 }}>
                    {/* Status Chip */}
                    <Box
                        sx={{
                            p: 1.5,
                            mb: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(24, 24, 27, 0.8)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.2,
                        }}
                    >
                        <FiberManualRecordIcon sx={{ color: '#10b981', fontSize: 12 }} />
                        <Typography variant="caption" sx={{ color: '#94a3b8', fontSize: '0.75rem' }}>
                            System Status: <Box component="span" sx={{ color: '#34d399', fontWeight: 600 }}>Active</Box>
                        </Typography>
                    </Box>

                    <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)', mb: 2 }} />

                    {/* User Account */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                            sx={{
                                width: 38,
                                height: 38,
                                bgcolor: '#8b5cf6',
                                color: '#fff',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                border: '2px solid rgba(196, 181, 253, 0.3)',
                            }}
                        >
                            
                        </Avatar>
                        <Box sx={{ overflow: 'hidden' }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#f8fafc' }} noWrap>
                                
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748b' }} noWrap>
                                Procurement Manager
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ======================================================== */}
            {/* 2. MAIN WORKSPACE AREA                                  */}
            {/* ======================================================== */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    ml: '270px', // Offset by sidebar width
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: '#09090b',
                }}
            >
                {/* Top Header Bar */}
                <Box
                    sx={{
                        height: 64,
                        px: 4,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                        bgcolor: 'rgba(15, 15, 19, 0.75)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1100,
                    }}
                >
                    {/* Breadcrumb / Title */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="caption" sx={{ color: '#64748b', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                            Procurement /
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#c4b5fd' }}>
                            {activeTab === 'list' ? 'Purchase Order List' : 'Purchase Order Entry'}
                        </Typography>
                    </Box>

                    {/* Right Header Controls */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Badge badgeContent={2} color="secondary" sx={{ cursor: 'pointer' }}>
                            <NotificationsNoneIcon sx={{ color: '#94a3b8' }} />
                        </Badge>
                        <Chip
                            label="Live Sandbox"
                            size="small"
                            sx={{
                                bgcolor: 'rgba(167, 139, 250, 0.1)',
                                color: '#a78bfa',
                                border: '1px solid rgba(167, 139, 250, 0.25)',
                                fontWeight: 600,
                                fontSize: '0.72rem',
                            }}
                        />
                    </Box>
                </Box>

                {/* Main Content Area */}
                <Box sx={{ p: 4, flexGrow: 1 }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};