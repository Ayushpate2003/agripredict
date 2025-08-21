import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { 
      name: 'Dashboard', 
      path: '/forecast-dashboard-ai-prediction-interface',
      icon: 'BarChart3'
    },
    { 
      name: 'Regional Insights', 
      path: '/regional-insights-location-specific-intelligence',
      icon: 'MapPin'
    },
    { 
      name: 'Farmer Portal', 
      path: '/farmer-portal-personalized-dashboard-experience',
      icon: 'User'
    },
    { 
      name: 'Methodology', 
      path: '/about-methodology-scientific-transparency',
      icon: 'BookOpen'
    }
  ];

  const secondaryNavItems = [
    { 
      name: 'Contact & Support', 
      path: '/contact-support-agricultural-community-connection',
      icon: 'MessageCircle'
    }
  ];

  const isActiveRoute = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMoreMenu = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-agricultural-intelligence-platform" 
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <div className="w-8 h-8 agricultural-gradient rounded-lg flex items-center justify-center">
              <Icon name="Sprout" size={20} color="white" />
            </div>
            <span className="text-xl font-bold text-primary font-sans">
              AgriPredict
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium growth-transition ${
                  isActiveRoute(item?.path)
                    ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative">
              <button
                onClick={toggleMoreMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 growth-transition"
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              {isMoreMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md harvest-shadow border border-border">
                  <div className="py-1">
                    {secondaryNavItems?.map((item) => (
                      <Link
                        key={item?.path}
                        to={item?.path}
                        onClick={() => setIsMoreMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm growth-transition ${
                          isActiveRoute(item?.path)
                            ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                        }`}
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              iconName="LogIn"
              iconPosition="left"
            >
              Sign In
            </Button>
            <Button 
              variant="default" 
              size="sm"
              iconName="Zap"
              iconPosition="left"
            >
              Try Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 growth-transition"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-2">
              {primaryNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium growth-transition ${
                    isActiveRoute(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {secondaryNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium growth-transition ${
                    isActiveRoute(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="LogIn"
                  iconPosition="left"
                >
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="Zap"
                  iconPosition="left"
                >
                  Try Free Prediction
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
          style={{ zIndex: -1 }}
        />
      )}
      {/* Overlay for more menu */}
      {isMoreMenuOpen && (
        <div 
          className="fixed inset-0 lg:block hidden"
          onClick={() => setIsMoreMenuOpen(false)}
          style={{ zIndex: -1 }}
        />
      )}
    </header>
  );
};

export default Header;