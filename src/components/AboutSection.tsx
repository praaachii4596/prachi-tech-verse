import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Brain, Lightbulb } from 'lucide-react';

const timelineData = [
  {
    year: '2022 - Present',
    title: 'B.Tech in Computer Science (AI & ML)',
    description: 'Currently pursuing my degree with focus on Artificial Intelligence and Machine Learning',
    icon: GraduationCap,
    color: 'text-neon-cyan'
  },
  {
    year: '2023',
    title: 'Full Stack Web Development Intern',
    description: 'Working with React.js, Node.js, Express.js, and MongoDB at MangosOrange',
    icon: Code,
    color: 'text-neon-purple'
  },
  {
    year: '2023',
    title: 'ML & AI Project Portfolio',
    description: 'Built multiple real-world projects including fake medicine detector and dog vs cat classifier',
    icon: Brain,
    color: 'text-neon-teal'
  },
  {
    year: '2022',
    title: 'Started My Tech Journey',
    description: 'Began exploring programming with Python and fell in love with problem-solving',
    icon: Lightbulb,
    color: 'text-primary'
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-cyber">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate tech enthusiast on a mission to solve real-world problems through innovative 
            technology solutions and AI-powered applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="card-glow card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Hello! I'm Prachi Joshi 👋
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a B.Tech Computer Science student specializing in AI & ML, with a deep passion 
                  for creating innovative solutions that make a real impact. My journey in tech has been 
                  driven by curiosity and the desire to solve meaningful problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From building full-stack web applications to developing machine learning models, 
                  I enjoy working across the entire technology stack. I'm currently gaining hands-on 
                  experience as a Full Stack Developer while exploring the fascinating world of AI/ML.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Open to Internships
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Available for Collaboration
                  </Badge>
                  <Badge variant="secondary" className="bg-neon-teal/10 text-neon-teal">
                    Innovation Enthusiast
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-neon-teal"></div>
              
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative flex items-start space-x-4 pb-8">
                    {/* Timeline Dot */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center ${item.color}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {item.year}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};