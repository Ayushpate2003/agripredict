import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import SupportTicketSystem from './components/SupportTicketSystem';
import LiveChatSection from './components/LiveChatSection';
import FAQSection from './components/FAQSection';
import CommunityForum from './components/CommunityForum';
import ResourceCenter from './components/ResourceCenter';
import RegionalSupport from './components/RegionalSupport';

const ContactSupportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <ContactHero />
        <ContactMethods />
        <SupportTicketSystem />
        <LiveChatSection />
        <FAQSection />
        <CommunityForum />
        <ResourceCenter />
        <RegionalSupport />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Removed logo and name section as requested */}
            <div className="md:col-span-2 flex items-center text-white/60 text-sm">
              © {new Date()?.getFullYear()} Krishi-Drishti. All rights reserved.
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Support</h3>
              <div className="space-y-3 text-sm text-white/80">
                <div>Emergency: +1 (555) URGENT-24</div>
                <div>General: +1 (555) FARM-123</div>
                <div>support@agripredict.com</div>
                <div>Live Chat Available 24/7</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div>User Guides</div>
                <div>Video Tutorials</div>
                <div>API Documentation</div>
                <div>Community Forum</div>
                <div>Knowledge Base</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSupportPage;