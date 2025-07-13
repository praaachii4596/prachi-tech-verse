import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Award, Calendar, GraduationCap, Star } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Full Stack Web Development Intern',
    company: 'MangosOrange',
    duration: '2025',
    type: 'Internship',
    description: 'Working on modern web applications using React.js, Node.js, Express.js, and MongoDB.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Git'],
    achievements: [
      'Collaborated on multiple client projects using modern web technologies',
      'Gained hands-on experience in full-stack development lifecycle',
      'Worked in agile methodology with experienced development team'
    ],
    icon: Briefcase,
    color: 'text-neon-cyan'
  }
];

const achievements = [
  {
    title: 'Google Cloud Expertise',
    description: '118 Labs completed and 34 Badges earned on Google Cloud Arcade / SkillsBoost',
    icon: Award,
    color: 'text-neon-purple'
  },
  {
    title: '1st Runner Up - Internal Hackathon',
    description: 'UI/UX Design Category - Recognized for innovative design solutions',
    icon: Award,
    color: 'text-neon-cyan'
  },
  {
    title: '1st Runner Up - Internal Exhibition',
    description: 'Piezoelectric Tile Project - Presented a working prototype of a smart energy-harvesting tile',
    icon: Award,
    color: 'text-neon-teal'
  },
  {
    title: 'Academic Excellence',
    description: 'Scored 95% in CBSE Class XII and 91.4% in ICSE Class X',
    icon: GraduationCap,
    color: 'text-primary'
  },
  {
    title: 'Project Innovation',
    description: 'Built multiple real-world ML and Full Stack projects with practical applications',
    icon: Star,
    color: 'text-neon-purple'
  }
];

const certifications = [
  'Machine Learning - Simplilearn',
  'Google Cloud - Trust and Security',
  'Google Cloud - Scaling with Cloud Operations',
  'Full Stack Development'
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience, continuous learning, and real-world projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Experience</h3>
          <div className="relative">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={exp.id} className="relative">
                  <Card className="card-glow card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-cyber flex items-center justify-center ${exp.color}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{exp.title}</CardTitle>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-lg font-semibold text-primary">{exp.company}</span>
                              <Badge variant="outline">{exp.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-secondary/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="card-glow card-hover text-center">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-cyber flex items-center justify-center ${achievement.color}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications & Courses</h3>
          <Card className="card-glow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};