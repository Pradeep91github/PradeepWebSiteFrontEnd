import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Stack,
  LinearProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Code, 
  Web, 
  Storage, 
  Security,
  Speed
} from '@mui/icons-material';

interface Technology {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  category: string;
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React.js', level: 90, icon: <Web />, color: '#61dafb', category: 'Frontend' },
  { name: 'Redux', level: 88, icon: <Code />, color: '#764abc', category: 'Frontend' },
  { name: 'Material-UI', level: 92, icon: <Web />, color: '#0081cb', category: 'Frontend' },
  { name: 'HTML & CSS', level: 95, icon: <Web />, color: '#e34f26', category: 'Frontend' },
  { name: 'JavaScript', level: 95, icon: <Code />, color: '#f7df1e', category: 'Frontend' },
  
  // Backend
  { name: '.NET', level: 90, icon: <Code />, color: '#512bd4', category: 'Backend' },
  { name: 'C#', level: 95, icon: <Code />, color: '#239120', category: 'Backend' },
  { name: 'Node.js', level: 90, icon: <Speed />, color: '#339933', category: 'Backend' },
  { name: 'Express', level: 90, icon: <Speed />, color: '#000000', category: 'Backend' },
  { name: 'Web API', level: 93, icon: <Code />, color: '#512bd4', category: 'Backend' },
  
  // Database
  { name: 'SQL Server', level: 95, icon: <Storage />, color: '#cc2927', category: 'Database' },
  { name: 'MongoDB', level: 88, icon: <Storage />, color: '#47a248', category: 'Database' },
  { name: 'Redis', level: 85, icon: <Storage />, color: '#dc382d', category: 'Database' },
  { name: 'ElasticSearch', level: 80, icon: <Storage />, color: '#005571', category: 'Database' },
  
  // IoT & Tools
  { name: 'IoT Development', level: 90, icon: <Security />, color: '#00d4aa', category: 'IoT & Tools' },
  { name: 'MQTT', level: 88, icon: <Security />, color: '#660066', category: 'IoT & Tools' },
  { name: 'WebSocket', level: 85, icon: <Security />, color: '#010101', category: 'IoT & Tools' },
  { name: 'GitHub', level: 95, icon: <Security />, color: '#181717', category: 'IoT & Tools' },
  { name: 'Swagger', level: 85, icon: <Code />, color: '#85ea2d', category: 'IoT & Tools' },
];

const categories = ['Frontend', 'Backend', 'Database', 'IoT & Tools'];

const TechnologySection: React.FC = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, md: 5 },
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
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #64ffda 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, #ff6b6b 0%, transparent 50%)
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
                mb: 1.5,
                background: 'linear-gradient(45deg, #64ffda 30%, #ffffff 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.6rem', md: '2.2rem' },
                fontWeight: 700,
              }}
            >
              Technologies & Skills
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '0.9rem', md: '1rem' },
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.4
              }}
            >
              Technologies I work with to build digital experiences
            </Typography>
          </Box>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryTechs = technologies.filter(tech => tech.category === category);
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography 
                  variant="h4" 
                  component="h3"
                  sx={{ 
                    mb: 3,
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: { xs: '1.3rem', md: '1.7rem' },
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: '60px',
                      height: '3px',
                      background: 'linear-gradient(45deg, #64ffda, #ff6b6b)',
                      borderRadius: 2,
                    }
                  }}
                >
                  {category}
                </Typography>
                
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, 1fr)',
                      lg: 'repeat(3, 1fr)'
                    },
                    gap: { xs: 2.5, md: 3 }
                  }}
                >
                  {categoryTechs.map((tech) => (
                    <Box key={tech.name}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          sx={{
                            height: '100%',
                            backgroundColor: 'background.default',
                            border: '1px solid rgba(100, 255, 218, 0.1)',
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '4px',
                              background: `linear-gradient(45deg, ${tech.color}, ${tech.color}80)`,
                              transform: 'scaleX(0)',
                              transformOrigin: 'left',
                              transition: 'transform 0.3s ease',
                            },
                            '&:hover': {
                              borderColor: 'primary.main',
                              boxShadow: '0 15px 40px rgba(100, 255, 218, 0.2)',
                              transform: 'translateY(-8px)',
                              '&::before': {
                                transform: 'scaleX(1)',
                              }
                            }
                          }}
                        >
                          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                            <Stack 
                              direction="row" 
                              alignItems="center" 
                              spacing={3}
                              sx={{ mb: 2.5 }}
                            >
                              <Box
                                sx={{
                                  p: 1.5,
                                  borderRadius: 3,
                                  backgroundColor: `${tech.color}20`,
                                  color: tech.color,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '1.5rem',
                                  minWidth: 50,
                                  minHeight: 50,
                                  boxShadow: `0 4px 12px ${tech.color}30`,
                                }}
                              >
                                {tech.icon}
                              </Box>
                              <Typography 
                                variant="h6" 
                                sx={{ 
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  fontSize: { xs: '1rem', md: '1.1rem' }
                                }}
                              >
                                {tech.name}
                              </Typography>
                            </Stack>
                            
                            <Box sx={{ mb: 2 }}>
                              <Stack 
                                direction="row" 
                                justifyContent="space-between" 
                                alignItems="center"
                                sx={{ mb: 1 }}
                              >
                                <Typography 
                                  variant="body2" 
                                  sx={{ color: 'text.secondary' }}
                                >
                                  Proficiency
                                </Typography>
                                <Typography 
                                  variant="body2" 
                                  sx={{ 
                                    color: 'primary.main',
                                    fontWeight: 600
                                  }}
                                >
                                  {tech.level}%
                                </Typography>
                              </Stack>
                              
                              <LinearProgress
                                variant="determinate"
                                value={tech.level}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: tech.color,
                                    borderRadius: 4,
                                  }
                                }}
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </Container>
    </Box>
  );
};

export default TechnologySection;