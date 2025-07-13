import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'text-neon-cyan',
    skills: ['Python', 'JavaScript', 'C', 'C++', 'Java', 'HTML', 'CSS', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Wrench,
    color: 'text-neon-purple',
    skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    color: 'text-neon-teal',
    skills: ['MongoDB', 'MySQL', 'Docker', 'Git', 'LATEX', 'Arduino IDE', 'Figma', 'Canva']
  },
  {
    title: 'ML/AI & Data Science',
    icon: Brain,
    color: 'text-primary',
    skills: ['TensorFlow', 'scikit-learn', 'OpenCV', 'Tesseract OCR', 'TF-IDF', 'FuzzyWuzzy']
  }
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
  const IconComponent = category.icon;
  
  return (
    <Card className="card-glow card-hover h-full">
      <CardHeader className="text-center">
        <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-cyber flex items-center justify-center mb-4 ${category.color}`}>
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className={`text-xl ${category.color}`}>
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 justify-center">
          {category.skills.map((skill, skillIndex) => (
            <Badge
              key={skillIndex}
              variant="secondary"
              className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-300 cursor-default"
              style={{
                animationDelay: `${index * 200 + skillIndex * 100}ms`
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, 
            and cutting-edge technologies to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <SkillCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Proficiency Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Full Stack Development', level: 85 },
              { skill: 'Machine Learning', level: 75 },
              { skill: 'Problem Solving', level: 90 },
              { skill: 'Cloud Technologies', level: 70 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{item.skill}</span>
                  <span className="text-sm text-muted-foreground">{item.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-accent transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};