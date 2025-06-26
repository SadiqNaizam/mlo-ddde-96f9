import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Mail, Phone, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container py-12 text-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-foreground">Cloud Kitchen Luxe</span>
            </div>
            <p className="text-sm">
              The finest ingredients, delivered with sophistication. Experience the art of dining at home.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <a href="mailto:support@ckluxe.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>support@ckluxe.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p>&copy; {currentYear} Cloud Kitchen Luxe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;