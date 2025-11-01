import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent,
  Stack,
  Chip
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import { motion } from 'framer-motion';
import { 
  Work, 
  School, 
  Code,
  Business,
  Star
} from '@mui/icons-material';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education' | 'project';
  description: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Software Developer',
    company: 'Spraxa Solutions',
    location: 'Ghaziabad, India',
    duration: 'Jan 2015 - Present',
    type: 'work',
    description: [
      'Leading a technical team of 8 members, ensuring effective delivery of tickets and timely communication with project managers and clients',
      'Managing team communication with project managers and clients to fulfill technical requirements',
      'Developed enterprise applications using MERN Stack, .NET, and IoT integrations',
      'Implemented scalable solutions for web platforms and mobile applications'
    ],
    technologies: ['React.js', 'Node.js', '.NET', 'C#', 'SQL Server', 'MongoDB', 'IoT', 'WebSocket'],
    icon: <Work />
  },
  {
    id: 2,
    title: 'Master of Computer Applications (MCA)',
    company: 'GLA University, Mathura',
    location: 'Mathura, India',
    duration: '2015',
    type: 'education',
    description: [
      'Completed Master of Computer Applications with focus on advanced software development',
      'Specialized in web technologies and database management systems',
      'Developed expertise in software architecture and system design',
      'Worked on various projects involving modern web frameworks'
    ],
    technologies: ['C++', 'SQL', 'Web Technologies', 'Software Engineering'],
    icon: <School />
  },
  {
    id: 3,
    title: 'Bachelor of Computer Applications (BCA)',
    company: 'GLA Institute of Technology and Management, Mathura',
    location: 'Mathura, India',
    duration: '2012',
    type: 'education',
    description: [
      'Completed Bachelor of Computer Applications with strong foundation in programming',
      'Gained expertise in fundamental computer science concepts',
      'Developed skills in multiple programming languages and frameworks',
      'Participated in various technical events and competitions'
    ],
    technologies: ['C', 'C++', 'Database Systems', 'Web Development'],
    icon: <School />
  },
  {
    id: 4,
    title: 'CoolR Portal',
    company: 'Enterprise Project',
    location: 'Spraxa Solutions',
    duration: 'Enterprise Application',
    type: 'project',
    description: [
      '.NET based project using ExtJS for frontend and SQL Server as database',
      'Designed to manage and view master data for CoolR platform',
      'Supports API-based data ingestion and Excel import functionality',
      'Features comprehensive user interface for data management'
    ],
    technologies: ['.NET', 'SQL Server', 'ExtJS', 'Redis', 'Web API'],
    icon: <Code />
  },
  {
    id: 5,
    title: 'Playbook Dashboard',
    company: 'IoT Analytics Platform',
    location: 'Spraxa Solutions',
    duration: 'Analytics Dashboard',
    type: 'project',
    description: [
      'React.js application with Node.js backend for CoolR device customers',
      'Dashboard for monitoring device performance and order tracking',
      'Provides detailed insights and analytics for asset management',
      'Real-time tracking and performance metrics visualization'
    ],
    technologies: ['React.js', 'Node.js', 'SQL Server', 'Swagger', 'Material-UI'],
    icon: <Code />
  },
  {
    id: 6,
    title: 'CoolR Smart Device Mobile App',
    company: 'IoT Mobile Application',
    location: 'Spraxa Solutions',
    duration: 'Mobile Application',
    type: 'project',
    description: [
      'Mobile application for IoT device interaction with cloud integration',
      'Downloads data from IoT devices using Bluetooth Low Energy (BLE)',
      'Transfers data to cloud and displays real-time information in the app',
      'Seamless integration between mobile app and IoT ecosystem'
    ],
    technologies: ['Mobile Development', 'IoT', 'BLE', 'Cloud Integration'],
    icon: <Code />
  }
];

const ExperienceSection: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Work />;
      case 'education':
        return <School />;
      case 'project':
        return <Code />;
      default:
        return <Business />;
    }
  };

  const getTimelineColor = (type: string): 'primary' | 'secondary' | 'success' => {
    switch (type) {
      case 'work':
        return 'primary';
      case 'education':
        return 'secondary';
      case 'project':
        return 'success';
      default:
        return 'primary';
    }
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 8 },
        backgroundColor: 'background.default',
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
          opacity: 0.03,
          backgroundImage: `
            linear-gradient(45deg, #64ffda 25%, transparent 25%), 
            linear-gradient(-45deg, #64ffda 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #ff6b6b 75%), 
            linear-gradient(-45deg, transparent 75%, #ff6b6b 75%)
          `,
          backgroundSize: '20px 20px',
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
              Experience & Education
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
              Professional journey and key milestones
            </Typography>
          </Box>
        </motion.div>

        <Timeline 
          position="alternate"
          sx={{
            '& .MuiTimelineItem-root': {
              '&:before': {
                flex: 0,
                padding: 0,
              }
            }
          }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id}>
              <TimelineSeparator>
                <TimelineDot 
                  color={getTimelineColor(exp.type)}
                  sx={{ 
                    p: 2,
                    backgroundColor: exp.type === 'work' ? 'primary.main' : 
                                   exp.type === 'education' ? 'secondary.main' : 'success.main',
                    width: 60,
                    height: 60,
                    boxShadow: `0 8px 25px ${
                      exp.type === 'work' ? 'rgba(100, 255, 218, 0.4)' :
                      exp.type === 'education' ? 'rgba(255, 107, 107, 0.4)' :
                      'rgba(76, 175, 80, 0.4)'
                    }`,
                    '& svg': {
                      fontSize: '1.5rem'
                    }
                  }}
                >
                  {getTimelineIcon(exp.type)}
                </TimelineDot>
                {index < experiences.length - 1 && (
                  <TimelineConnector 
                    sx={{ 
                      backgroundColor: 'rgba(100, 255, 218, 0.3)',
                      width: 3,
                      background: 'linear-gradient(180deg, rgba(100, 255, 218, 0.5), rgba(100, 255, 218, 0.1))',
                      minHeight: 60
                    }} 
                  />
                )}
              </TimelineSeparator>
              
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      mb: 4,
                      backgroundColor: 'background.paper',
                      border: '1px solid rgba(100, 255, 218, 0.1)',
                      borderRadius: 4,
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
                        background: exp.type === 'work' ? 'linear-gradient(45deg, #64ffda, #4fc3f7)' :
                                   exp.type === 'education' ? 'linear-gradient(45deg, #ff6b6b, #ff8e8e)' :
                                   'linear-gradient(45deg, #4caf50, #81c784)',
                      },
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 15px 40px rgba(100, 255, 218, 0.25)',
                        transform: 'translateY(-8px)',
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                      <Stack spacing={2}>
                        {/* Header */}
                        <Box>
                          <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            spacing={2}
                            sx={{ mb: 2 }}
                          >
                            <Typography 
                              variant="h5" 
                              component="h3"
                              sx={{ 
                                fontWeight: 600,
                                color: 'text.primary',
                                fontSize: { xs: '1.3rem', md: '1.5rem' },
                                flex: 1
                              }}
                            >
                              {exp.title}
                            </Typography>
                            <Chip
                              icon={<Star />}
                              label={exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                              size="small"
                              sx={{
                                backgroundColor: exp.type === 'work' ? 'rgba(100, 255, 218, 0.1)' :
                                               exp.type === 'education' ? 'rgba(255, 107, 107, 0.1)' :
                                               'rgba(76, 175, 80, 0.1)',
                                color: exp.type === 'work' ? 'primary.main' :
                                       exp.type === 'education' ? 'secondary.main' :
                                       'success.main'
                              }}
                            />
                          </Stack>
                          
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              color: 'primary.main',
                              fontWeight: 500,
                              mb: 1,
                              fontSize: { xs: '1.1rem', md: '1.25rem' }
                            }}
                          >
                            {exp.company}
                          </Typography>
                          
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.secondary',
                              mb: 3,
                              fontSize: '1rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              '&::before': {
                                content: '"📍"',
                                fontSize: '1rem'
                              }
                            }}
                          >
                            {exp.location} • {exp.duration}
                          </Typography>
                        </Box>

                        {/* Description */}
                        <Box sx={{ mb: 3 }}>
                          <Stack spacing={2}>
                            {exp.description.map((desc, descIndex) => (
                              <Typography 
                                key={descIndex}
                                variant="body2" 
                                sx={{ 
                                  color: 'text.secondary',
                                  lineHeight: 1.7,
                                  fontSize: '1rem',
                                  display: 'flex',
                                  alignItems: 'flex-start',
                                  gap: 2,
                                  '&:before': {
                                    content: '"▶"',
                                    color: 'primary.main',
                                    fontWeight: 'bold',
                                    fontSize: '0.8rem',
                                    mt: 0.5,
                                    flexShrink: 0
                                  }
                                }}
                              >
                                {desc}
                              </Typography>
                            ))}
                          </Stack>
                        </Box>

                        {/* Technologies */}
                        <Box>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              color: 'text.primary',
                              fontWeight: 600,
                              mb: 2,
                              fontSize: '1rem'
                            }}
                          >
                            🛠️ Technologies:
                          </Typography>
                          <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                            {exp.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="medium"
                                sx={{
                                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                  color: 'primary.main',
                                  border: '1px solid rgba(100, 255, 218, 0.3)',
                                  fontWeight: 500,
                                  borderRadius: 3,
                                  px: 1,
                                  '&:hover': {
                                    backgroundColor: 'rgba(100, 255, 218, 0.2)',
                                    borderColor: 'primary.main',
                                    transform: 'translateY(-2px)',
                                  },
                                  transition: 'all 0.2s ease'
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
};

export default ExperienceSection;