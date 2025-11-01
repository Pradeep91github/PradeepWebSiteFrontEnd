import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleMenuClick(item.href)}
            sx={{ cursor: 'pointer' }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontWeight: 500,
                  fontSize: '1.1rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled 
            ? 'rgba(10, 14, 39, 0.95)' 
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled 
            ? '1px solid rgba(100, 255, 218, 0.1)' 
            : 'none',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(10, 14, 39, 0.8)' 
            : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1100,
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 4 } }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                fontSize: '1.5rem',
                background: 'linear-gradient(45deg, #64ffda, #ffffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
              }}
              onClick={() => handleMenuClick('#home')}
            >
              PK
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Button
                      onClick={() => handleMenuClick(item.href)}
                      sx={{
                        color: 'text.primary',
                        fontWeight: 500,
                        px: 3,
                        py: 1,
                        borderRadius: 2,
                        position: 'relative',
                        '&:hover': {
                          backgroundColor: 'rgba(100, 255, 218, 0.1)',
                          color: 'primary.main',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: 0,
                          height: 2,
                          backgroundColor: 'primary.main',
                          transition: 'all 0.3s ease',
                          transform: 'translateX(-50%)',
                        },
                        '&:hover::after': {
                          width: '80%',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            border: '1px solid rgba(100, 255, 218, 0.1)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;