import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import TechnologySection from './components/TechnologySection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import FloatingElements from './components/FloatingElements';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#ff6b6b',
    },
    background: {
      default: '#0a0e27',
      paper: '#151a32',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b8d0',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.025em',
      textTransform: 'none',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <FloatingElements />
      <Box sx={{ overflow: 'hidden' }}>
        <Box id="home">
          <HeroSection />
        </Box>
        <Box id="technologies">
          <TechnologySection />
        </Box>
        <Box id="experience">
          <ExperienceSection />
        </Box>
        <Box id="contact">
          <ContactSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
