import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stack,
  Card,
  CardContent,
  TextField,
  Button,
  Snackbar,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import { Send } from '@mui/icons-material';




const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    setSnackbar({
      open: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      severity: 'success'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.paper',
        position: 'relative'
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          background: `
            radial-gradient(circle at 30% 30%, #64ffda 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, #ff6b6b 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, #4fc3f7 0%, transparent 50%)
          `,
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 3, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" sx={{ mb: { xs: 2, md: 3 } }}>
            <Typography 
              variant="h3" 
              component="h2"
              sx={{ 
                mb: 1,
                background: 'linear-gradient(45deg, #64ffda 30%, #ffffff 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                fontWeight: 600,
              }}
            >
              Get In Touch
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                maxWidth: '400px',
                mx: 'auto'
              }}
            >
              Let's discuss new opportunities and exciting projects!
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Form - Professional Layout */}
        <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              sx={{
                backgroundColor: 'background.default',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: 6,
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(100, 255, 218, 0.1)',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #64ffda, #4fc3f7, #64ffda, transparent)',
                },
                '&:hover': {
                  borderColor: 'rgba(100, 255, 218, 0.3)',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(100, 255, 218, 0.2)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              <CardContent sx={{ p: { xs: 5, md: 8 } }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                  <Typography 
                    variant="h3" 
                    component="h3"
                    sx={{ 
                      mb: 2,
                      background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 50%, #ffffff 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 700,
                      fontSize: { xs: '1.6rem', md: '2.2rem' },
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Let's Connect
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      maxWidth: '500px',
                      mx: 'auto',
                      lineHeight: 1.6,
                      fontWeight: 400
                    }}
                  >
                    Ready to bring your ideas to life? Let's discuss your next project.
                  </Typography>
                </Box>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={{ xs: 4, md: 5 }}>
                    {/* Row 1: Name, Email, Subject */}
                    <Stack 
                      direction={{ xs: 'column', md: 'row' }} 
                      spacing={{ xs: 4, md: 5 }}
                    >
                      <Box sx={{ flex: 1 }}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                                borderWidth: 1.5,
                              },
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                '& fieldset': {
                                  borderColor: 'rgba(100, 255, 218, 0.4)',
                                },
                              },
                              '&.Mui-focused': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& fieldset': {
                                  borderColor: '#64ffda',
                                  borderWidth: 2,
                                  boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.1)',
                                },
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#64ffda',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                                borderWidth: 1.5,
                              },
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                '& fieldset': {
                                  borderColor: 'rgba(100, 255, 218, 0.4)',
                                },
                              },
                              '&.Mui-focused': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& fieldset': {
                                  borderColor: '#64ffda',
                                  borderWidth: 2,
                                  boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.1)',
                                },
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#64ffda',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 3,
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.2)',
                                borderWidth: 1.5,
                              },
                              '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                '& fieldset': {
                                  borderColor: 'rgba(100, 255, 218, 0.4)',
                                },
                              },
                              '&.Mui-focused': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                '& fieldset': {
                                  borderColor: '#64ffda',
                                  borderWidth: 2,
                                  boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.1)',
                                },
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: 'rgba(255, 255, 255, 0.7)',
                              '&.Mui-focused': {
                                color: '#64ffda',
                              },
                            },
                            '& .MuiOutlinedInput-input': {
                              color: 'white',
                            },
                          }}
                        />
                      </Box>
                    </Stack>
                    
                    {/* Row 2: Message (Full width aligned with fields above) */}
                    <Box>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)',
                            transition: 'all 0.3s ease',
                            '& fieldset': {
                              borderColor: 'rgba(100, 255, 218, 0.2)',
                              borderWidth: 1.5,
                            },
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                              '& fieldset': {
                                borderColor: 'rgba(100, 255, 218, 0.4)',
                              },
                            },
                            '&.Mui-focused': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              '& fieldset': {
                                borderColor: '#64ffda',
                                borderWidth: 2,
                                boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.1)',
                              },
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255, 255, 255, 0.7)',
                            '&.Mui-focused': {
                              color: '#64ffda',
                            },
                          },
                          '& .MuiOutlinedInput-input': {
                            color: 'white',
                          },
                          '& .MuiInputBase-input::placeholder': {
                            color: 'rgba(255, 255, 255, 0.5)',
                            opacity: 1,
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                  
                  {/* Submit Button - Centered at Bottom */}
                  <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<Send />}
                      size="large"
                      sx={{
                        background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
                        color: '#0a0e27',
                        fontWeight: 700,
                        py: 2.5,
                        px: 8,
                        borderRadius: 4,
                        fontSize: '1.1rem',
                        minWidth: 220,
                        textTransform: 'none',
                        letterSpacing: '0.5px',
                        boxShadow: '0 10px 30px rgba(100, 255, 218, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                          transition: 'left 0.5s ease',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4fc3f7 0%, #64ffda 100%)',
                          transform: 'translateY(-3px) scale(1.02)',
                          boxShadow: '0 15px 40px rgba(100, 255, 218, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                          '&::before': {
                            left: '100%',
                          },
                        },
                        '&:active': {
                          transform: 'translateY(-1px) scale(0.98)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Send Message
                    </Button>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        mt: 2,
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: '0.85rem'
                      }}
                    >
                      I typically respond within 24 hours
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Box>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;