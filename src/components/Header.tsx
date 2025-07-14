import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, User, Menu, X, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary animate-cyber-pulse" />
            <h1 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              VulnHub Academy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Labs</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Challenges</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Leaderboard</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 w-64 bg-background/50"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-gradient-cyber hover:shadow-glow">
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors px-2 py-1">Courses</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors px-2 py-1">Labs</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors px-2 py-1">Challenges</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors px-2 py-1">Leaderboard</a>
              <div className="relative mt-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search courses..." className="pl-10" />
              </div>
              <div className="flex space-x-2 mt-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-cyber">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;