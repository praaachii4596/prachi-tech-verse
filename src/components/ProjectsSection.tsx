import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Brain, MessageSquare, Camera, Shield, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fake Medicine Detector',
    description: 'OCR + Flask app using TF-IDF and fuzzy matching to detect fake drugs from WHO database.',
    longDescription: 'A comprehensive solution to combat counterfeit medicines using advanced OCR technology and machine learning algorithms. The system extracts text from medicine packaging, processes it through TF-IDF vectorization, and uses fuzzy matching algorithms to cross-reference with the WHO Global Surveillance and Monitoring System database.',
    icon: Brain,
    color: 'text-neon-cyan',
    technologies: ['Python', 'Flask', 'OpenCV', 'Tesseract OCR', 'TF-IDF', 'FuzzyWuzzy', 'WHO API'],
    github: 'https://github.com/praaachii4596',
    demo: '#',
    status: 'Completed',
    impact: 'Achieved 92% accuracy in detecting counterfeit medicines'
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    description: 'Node.js, Express, MongoDB, and Socket.IO-powered chat backend with JWT-based user auth.',
    longDescription: 'A scalable real-time messaging application featuring secure authentication, real-time communication, and message persistence. Built with modern web technologies and following industry best practices for security and performance.',
    icon: MessageSquare,
    color: 'text-neon-purple',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'React.js'],
    github: 'https://github.com/praaachii4596',
    demo: '#',
    status: 'In Progress',
    impact: 'Supports 100+ concurrent users with <50ms latency'
  },
  {
    id: 3,
    title: 'Dog vs Cat Classifier',
    description: 'TensorFlow CNN achieving 90% accuracy on pet image classification.',
    longDescription: 'A convolutional neural network built from scratch using TensorFlow and Keras for binary image classification. The model uses data augmentation, dropout layers, and advanced optimization techniques to achieve high accuracy on the classic dogs vs cats dataset.',
    icon: Camera,
    color: 'text-neon-teal',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/praaachii4596',
    demo: '#',
    status: 'Completed',
    impact: '90% accuracy on 25,000 test images'
  },
  {
    id: 4,
    title: 'Women Safety IoT Device',
    description: 'Wearable device using Arduino + GPS + GSM for location-based SOS alerts.',
    longDescription: 'An innovative IoT solution designed to enhance women\'s safety through technology. The device features panic buttons, GPS tracking, real-time location sharing, and automated emergency alerts to predefined contacts and local authorities.',
    icon: Shield,
    color: 'text-primary',
    technologies: ['Arduino', 'GPS Module', 'GSM Module', 'C++', 'IoT', 'Mobile App'],
    github: 'https://github.com/praaachii4596',
    demo: '#',
    status: 'Completed',
    impact: 'Prototype tested with <10 second response time'
  },
  {
    id: 5,
    title: 'Piezoelectric Energy Tile',
    description: 'Smart tile to convert footsteps into usable energy with automation.',
    longDescription: 'A sustainable energy solution that harnesses kinetic energy from human footsteps using piezoelectric sensors. The system includes energy storage, power management, and automated lighting control for public spaces.',
    icon: Zap,
    color: 'text-accent',
    technologies: ['Arduino', 'Piezoelectric Sensors', 'Energy Storage', 'IoT', 'Automation'],
    github: 'https://github.com/praaachii4596',
    demo: '#',
    status: 'Completed',
    impact: 'Generated 5V output from single footstep'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const IconComponent = project.icon;
  
  return (
    <Card className="card-glow card-hover h-full group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center ${project.color}`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <Badge 
            variant={project.status === 'Completed' ? 'default' : 'secondary'}
            className={project.status === 'Completed' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}
          >
            {project.status}
          </Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="text-sm text-neon-cyan font-mono">
          {project.impact}
        </div>
        
        <div className="flex gap-2 pt-4">
          <Button variant="outline" size="sm" className="flex-1 group/btn">
            <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Code
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="flex-1 group/btn">
                <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <IconComponent className={`h-6 w-6 ${project.color}`} />
                  {project.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-secondary/20 rounded-lg">
                  <div className="font-semibold text-primary">Impact:</div>
                  <div className="text-sm">{project.impact}</div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Full Stack', 'IoT', 'Web Apps'];

  return (
    <section id="projects" className="section-padding bg-gradient-cyber">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Innovative solutions spanning AI/ML, full-stack development, and IoT. 
            Each project tackles real-world problems with cutting-edge technology.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};