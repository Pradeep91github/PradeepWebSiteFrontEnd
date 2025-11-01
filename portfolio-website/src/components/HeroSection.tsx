import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Avatar, 
  Button, 
  Stack,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, Email, LinkedIn, GitHub } from '@mui/icons-material';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'auto',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #151a32 50%, #0f1419 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Background Animation */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.15,
          background: `
            radial-gradient(circle at 20% 50%, #64ffda 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #ff6b6b 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #4fc3f7 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 100,
          height: 100,
          background: 'linear-gradient(45deg, #64ffda, #4fc3f7)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(40px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 80,
          height: 80,
          background: 'linear-gradient(45deg, #ff6b6b, #64ffda)',
          borderRadius: '50%',
          opacity: 0.1,
          filter: 'blur(30px)',
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 4 } }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: { xs: 'center', md: 'center' }, 
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 3, md: 6 }
        }}>
          {/* Profile Photo - Left Side */}
          <Box sx={{ 
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    right: -8,
                    bottom: -8,
                    background: 'linear-gradient(45deg, #64ffda, #ff6b6b, #4fc3f7)',
                    borderRadius: '50%',
                    opacity: 0.6,
                    filter: 'blur(15px)',
                    zIndex: -1,
                    animation: 'pulse 3s ease-in-out infinite',
                  }
                }}
              >
                <Avatar
                  src="/pradeep.jpg"
                  alt="Pradeep Kumar"
                  sx={{
                    width: { xs: 180, md: 280 },
                    height: { xs: 180, md: 280 },
                    border: '3px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 10px 25px rgba(100, 255, 218, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 15px 35px rgba(100, 255, 218, 0.4)',
                    }
                  }}
                />
              </Box>
            </motion.div>
          </Box>
          
          {/* Main Content Area - Right Side */}
          <Box sx={{ 
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
            width: '100%',
            minWidth: 0
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Chip 
                label="👋 Hello, I'm"
                size="small"
                sx={{ 
                  mb: 1.5,
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  color: 'primary.main',
                  fontWeight: 500,
                  fontSize: '0.75rem'
                }}
              />
              
              <Typography 
                variant="h1" 
                component="h1"
                sx={{ 
                  mb: 0.5,
                  background: 'linear-gradient(45deg, #64ffda 30%, #ffffff 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                Pradeep Kumar
              </Typography>
              
              <Typography 
                variant="h4" 
                component="h2"
                sx={{ 
                  mb: 1.5,
                  color: 'text.secondary',
                  fontWeight: 500,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: { xs: '80px', md: '120px' },
                    height: '3px',
                    background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
                    mt: 1,
                    mx: { xs: 'auto', md: 0 },
                    borderRadius: 2,
                  }
                }}
              >
                Senior Full Stack Developer
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 2,
                  color: 'text.secondary',
                  fontSize: { xs: '0.9rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  maxWidth: '100%',
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                Passionate full-stack developer with 10+ years of experience crafting scalable enterprise applications, 
                web platforms, and IoT solutions. Expert in MERN Stack, .NET, C#, and leading technical teams to deliver 
                innovative digital experiences.
              </Typography>
              
              {/* Contact Information */}
              <Box sx={{ mb: 2.5 }}>
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2 }}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ 
                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                    color: 'text.secondary'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography component="span">📧</Typography>
                    <Typography component="span">pradeep.chaudhary100791@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography component="span">📱</Typography>
                    <Typography component="span">+91 9958990503</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography component="span">📍</Typography>
                    <Typography component="span">Ghaziabad, India</Typography>
                  </Box>
                </Stack>
              </Box>
              
              <Stack 
                direction="row"
                spacing={2} 
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 2.5 }}
              >
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  size="small"
                  component="a"
                  href="/resume.pdf"
                  download="Pradeep_Kumar_Resume.pdf"
                  sx={{
                    backgroundColor: 'primary.main',
                    color: 'black',
                    fontWeight: 600,
                    px: 2.5,
                    py: 1,
                    fontSize: '0.85rem',
                    borderRadius: 2,
                    boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)',
                    '&:hover': {
                      backgroundColor: 'primary.light',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(100, 255, 218, 0.4)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Download CV
                </Button>
                
                <Button
                  variant="outlined"
                  startIcon={<Email />}
                  size="small"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontWeight: 600,
                    px: 2.5,
                    py: 1,
                    fontSize: '0.85rem',
                    borderRadius: 2,
                    '&:hover': {
                      borderColor: 'primary.light',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
              
              {/* Social Links */}
              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Button
                  sx={{ 
                    minWidth: 'auto', 
                    p: 1,
                    borderRadius: 2,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <LinkedIn sx={{ fontSize: '1.2rem' }} />
                </Button>
                <Button
                  sx={{ 
                    minWidth: 'auto', 
                    p: 1,
                    borderRadius: 2,
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    }
                  }}
                >
                  <GitHub sx={{ fontSize: '1.2rem' }} />
                </Button>
              </Stack>
            </motion.div>
          </Box>
        </Box>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Box
          sx={{
            width: 2,
            height: 40,
            backgroundColor: 'primary.main',
            borderRadius: 1,
            opacity: 0.7,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default HeroSection;