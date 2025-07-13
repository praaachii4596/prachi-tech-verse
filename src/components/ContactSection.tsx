import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, Send, MapPin, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'prachi.joshi@example.com',
    href: 'mailto:prachi.joshi@example.com',
    color: 'text-neon-cyan'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'praaachii4596',
    href: 'https://github.com/praaachii4596',
    color: 'text-neon-purple'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'prachi-joshi-4596z',
    href: 'https://www.linkedin.com/in/prachi-joshi-4596z',
    color: 'text-neon-teal'
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            I'm always excited to discuss new opportunities, collaborations, or just chat about tech!
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-green-500/10 text-green-400">
              <Coffee className="h-3 w-3 mr-1" />
              Open to Internships
            </Badge>
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
              <MapPin className="h-3 w-3 mr-1" />
              Available for Remote Work
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary/20 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-secondary/20 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                    rows={5}
                    className="bg-secondary/20 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-glow"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Get in touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently looking for internship opportunities and exciting projects to work on. 
                  Whether you want to discuss a potential collaboration, have a question about my work, 
                  or just want to say hello, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 group"
                      >
                        <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          <div className="text-sm text-muted-foreground">{item.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="card-glow">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-cyan">1</div>
                    <div className="text-sm text-muted-foreground">Active Internship</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-neon-teal">24/7</div>
                    <div className="text-sm text-muted-foreground">Learning Mode</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};