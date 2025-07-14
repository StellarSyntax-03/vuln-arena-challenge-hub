import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Database, 
  FileX, 
  Search, 
  Users, 
  Trophy, 
  Lock, 
  Code2,
  Bug,
  AlertTriangle,
  Eye,
  Terminal
} from 'lucide-react';

const Features = () => {
  const vulnerabilityTypes = [
    { 
      icon: Database, 
      title: "SQL Injection", 
      description: "Practice finding and exploiting database vulnerabilities",
      difficulty: "Medium",
      color: "text-accent"
    },
    { 
      icon: Code2, 
      title: "XSS Attacks", 
      description: "Cross-site scripting challenges and payload development",
      difficulty: "Easy",
      color: "text-warning"
    },
    { 
      icon: FileX, 
      title: "File Upload", 
      description: "Bypass file upload restrictions and gain system access",
      difficulty: "Hard",
      color: "text-destructive"
    },
    { 
      icon: Lock, 
      title: "Authentication", 
      description: "Break login systems and session management",
      difficulty: "Medium",
      color: "text-cyber-blue"
    },
    { 
      icon: Bug, 
      title: "Logic Flaws", 
      description: "Find business logic vulnerabilities in applications",
      difficulty: "Hard",
      color: "text-cyber-purple"
    },
    { 
      icon: Terminal, 
      title: "Command Injection", 
      description: "Execute arbitrary commands on vulnerable systems",
      difficulty: "Expert",
      color: "text-primary"
    }
  ];

  const platforms = [
    {
      title: "E-Commerce Store",
      description: "A vulnerable online shopping platform with multiple security flaws",
      features: ["User registration", "Product catalog", "Shopping cart", "Payment system"],
      vulnerabilities: "15+ vulnerabilities",
      difficulty: "Beginner Friendly"
    },
    {
      title: "Social Media App",
      description: "Social networking platform with privacy and security issues",
      features: ["User profiles", "File uploads", "Messaging", "Admin panel"],
      vulnerabilities: "20+ vulnerabilities",
      difficulty: "Intermediate"
    },
    {
      title: "Banking System",
      description: "Financial application with critical security weaknesses",
      features: ["Account management", "Transactions", "Loan applications", "API endpoints"],
      vulnerabilities: "25+ vulnerabilities", 
      difficulty: "Advanced"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        {/* Vulnerability Types */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Vulnerability Categories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Every <span className="text-primary">Attack Vector</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practice real-world penetration testing techniques across different vulnerability types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {vulnerabilityTypes.map((vuln, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-cyber transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <vuln.icon className={`h-8 w-8 ${vuln.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {vuln.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {vuln.title}
                </CardTitle>
                <CardDescription>{vuln.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="w-full group-hover:border-primary/50">
                  <Eye className="h-4 w-4 mr-2" />
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vulnerable Platforms */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            <Shield className="h-4 w-4 mr-2" />
            Practice Platforms
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-World <span className="text-primary">Vulnerable Applications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-featured applications designed for security testing and exploitation practice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{platform.title}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Features</h4>
                  <ul className="space-y-1">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border/50">
                  <div className="text-xs text-muted-foreground">
                    {platform.vulnerabilities}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {platform.difficulty}
                  </Badge>
                </div>
                <Button className="w-full bg-gradient-cyber hover:shadow-glow">
                  <Shield className="h-4 w-4 mr-2" />
                  Launch Lab
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competition Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-border/50 text-center p-8">
            <Trophy className="h-12 w-12 text-warning mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Scoring</h3>
            <p className="text-muted-foreground">
              Real-time leaderboards and scoring system for competitions
            </p>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 text-center p-8">
            <Users className="h-12 w-12 text-cyber-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Challenges</h3>
            <p className="text-muted-foreground">
              Collaborate with teammates or compete individually
            </p>
          </Card>
          
          <Card className="bg-gradient-card border-border/50 text-center p-8">
            <Search className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hint System</h3>
            <p className="text-muted-foreground">
              Progressive hints to guide learning without giving away solutions
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;