import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Intentionally vulnerable login logic for educational purposes
    if (formData.username === 'admin' && formData.password === 'password123') {
      setError('');
      alert('Login successful! (This is intentionally insecure for educational purposes)');
    } else if (formData.username === 'demo' && formData.password === 'demo') {
      setError('');
      alert('Demo user login successful!');
    } else {
      setError('Invalid credentials. Hint: Try common usernames and passwords!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-gradient-card border-border/50 shadow-cyber">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            <Lock className="h-6 w-6 mx-auto mb-2 text-primary" />
            Login to VulnHub Academy
          </CardTitle>
          <CardDescription>
            Access your cybersecurity training platform
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="pl-10"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="pl-10 pr-10"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
              <strong>Hint for pentesters:</strong><br />
              • Try common username/password combinations<br />
              • Look for SQL injection opportunities<br />
              • Check for client-side validation bypass
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-gradient-cyber hover:shadow-glow">
              Login
            </Button>
            
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <a href="#" className="text-primary hover:underline">
                Sign up here
              </a>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <a href="#" className="text-primary hover:underline">
                Forgot your password?
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;