import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Code2,
  ExternalLink,
  Send
} from "lucide-react";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_cdurqt4',
        'template_pxv2nqq',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'Qz03NbCXLGIWx6L2y'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "subbulakshmi1176@gmail.com",
      href: "mailto:subbulakshmi1176@gmail.com",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 6382261401",
      href: "tel:+916382261401",
      color: "bg-green-500/10 border-green-500/20"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Tamil Nadu, India",
      href: "#",
      color: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      username: "subbulakshmi-11tae7",
      href: "https://www.linkedin.com/in/subbulakshmi-11tae7",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      username: "Subbulakshmi1176",
      href: "https://github.com/Subbulakshmi1176",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      label: "LeetCode",
      username: "subbu17",
      href: "https://leetcode.com/u/subbu17/",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-section bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-subheading text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on exciting projects, 
                or simply connecting with fellow developers and tech enthusiasts. Feel free to reach 
                out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className={`shadow-soft border-border/50 hover:shadow-medium transition-all duration-300 hover:scale-105 ${contact.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{contact.label}</h4>
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`flex-1 justify-start gap-3 ${social.color} text-white border-transparent hover:scale-105 transition-all duration-300`}
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.icon}
                      <div className="text-left">
                        <div className="font-semibold">{social.label}</div>
                        <div className="text-sm opacity-90">@{social.username}</div>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-large border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Send Me a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-background rounded-2xl shadow-soft border border-border/50">
          <h3 className="text-subheading text-foreground mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have a specific project in mind or just want to explore possibilities, 
            I'm here to help turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start a Project
            </Button>
            <Button variant="outline" size="lg">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;