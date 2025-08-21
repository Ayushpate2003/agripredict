import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('predictions');

  const faqCategories = [
    { id: 'predictions', label: 'Crop Predictions', icon: 'Sprout' },
    { id: 'weather', label: 'Weather Data', icon: 'Cloud' },
    { id: 'technical', label: 'Technical Issues', icon: 'Settings' },
    { id: 'account', label: 'Account & Billing', icon: 'User' }
  ];

  const faqData = {
    predictions: [
      {
        id: 1,
        question: 'How do I interpret prediction confidence levels?',
        answer: `Confidence levels indicate the reliability of our AI predictions:\n\n• **High (80-95%)**: Very reliable predictions based on comprehensive data\n• **Medium (60-79%)**: Good predictions with some uncertainty factors\n• **Low (40-59%)**: Preliminary predictions requiring additional monitoring\n\nFactors affecting confidence include historical data availability, weather pattern stability, and soil condition consistency. Higher confidence levels typically occur during stable weather periods with complete historical data.`
      },
      {
        id: 2,
        question: 'What weather factors affect crop yields most?',
        answer: `Our AI model considers multiple weather factors with varying impact:\n\n**Primary Factors:**\n• Temperature patterns (day/night variations)\n• Precipitation timing and intensity\n• Solar radiation levels\n• Humidity and evapotranspiration rates\n\n**Secondary Factors:**\n• Wind patterns and speed\n• Frost occurrence and timing\n• Extreme weather events\n• Seasonal temperature trends\n\nThe model weighs these factors differently based on crop type, growth stage, and regional climate patterns.`
      },
      {
        id: 3,
        question: 'How often are predictions updated?',
        answer: `Prediction updates vary by data type and season:\n\n**Real-time Updates:**\n• Weather data: Every 6 hours\n• Satellite imagery: Daily during growing season\n• Soil moisture: Every 12 hours\n\n**Prediction Refresh:**\n• Short-term (1-7 days): Every 6 hours\n• Medium-term (1-4 weeks): Daily\n• Long-term (seasonal): Weekly\n\nDuring critical periods like planting or harvest, we increase update frequency to provide the most current insights for time-sensitive decisions.`
      },
      {
        id: 4,
        question: 'How accurate are the AI predictions?',
        answer: `Our prediction accuracy varies by timeframe and conditions:\n\n**Accuracy Rates:**\n• 7-day predictions: 85-92% accuracy\n• 30-day predictions: 75-85% accuracy\n• Seasonal predictions: 70-80% accuracy\n\n**Factors Affecting Accuracy:**\n• Historical data completeness\n• Weather pattern stability\n• Crop type and variety\n• Regional climate consistency\n\nWe continuously validate predictions against actual outcomes and publish monthly accuracy reports for transparency.`
      }
    ],
    weather: [
      {
        id: 5,
        question: 'Where does weather data come from?',
        answer: `We aggregate weather data from multiple authoritative sources:\n\n**Primary Sources:**\n• National Weather Service (NOAA)\n• European Centre for Medium-Range Weather Forecasts (ECMWF)\n• NASA satellite imagery and data\n• Local weather station networks\n\n**Data Types:**\n• Real-time meteorological observations\n• Satellite-derived measurements\n• Radar precipitation data\n• Climate model outputs\n\nThis multi-source approach ensures comprehensive coverage and data reliability for accurate agricultural predictions.`
      },
      {
        id: 6,
        question: 'Can I add my own weather station data?',
        answer: `Yes! We support integration of private weather station data:\n\n**Supported Formats:**\n• CSV file uploads\n• API connections to popular weather stations\n• Manual data entry for key measurements\n• Integration with Davis, Campbell Scientific, and other brands\n\n**Benefits:**\n• Improved local accuracy\n• Personalized microclimate analysis\n• Enhanced prediction confidence\n• Historical data preservation\n\nContact our technical support team for assistance with weather station integration and data formatting requirements.`
      }
    ],
    technical: [
      {
        id: 7,
        question: 'Why can\'t I access my dashboard?',
        answer: `Common dashboard access issues and solutions:\n\n**Login Problems:**\n• Clear browser cache and cookies\n• Try incognito/private browsing mode\n• Reset password if needed\n• Check for browser compatibility\n\n**Loading Issues:**\n• Ensure stable internet connection\n• Disable browser extensions temporarily\n• Try different browser (Chrome, Firefox, Safari)\n• Check for system updates\n\n**Account Issues:**\n• Verify email confirmation\n• Check subscription status\n• Contact support for account verification\n\nIf problems persist, use our live chat for immediate technical assistance.`
      },
      {
        id: 8,
        question: 'How do I export prediction data?',
        answer: `Multiple export options are available for your prediction data:\n\n**Export Formats:**\n• PDF reports with charts and analysis\n• CSV files for spreadsheet analysis\n• JSON format for API integration\n• PNG/JPG charts for presentations\n\n**Export Process:**\n1. Navigate to your prediction dashboard\n2. Select the data range and crops\n3. Choose export format\n4. Click "Export Data" button\n5. Download will begin automatically\n\n**Bulk Export:**\nPremium users can export historical data in bulk. Contact support for assistance with large dataset exports.`
      }
    ],
    account: [
      {
        id: 9,
        question: 'How do I upgrade my account?',
        answer: `Account upgrade process is simple and flexible:\n\n**Upgrade Steps:**\n1. Go to Account Settings\n2. Click "Upgrade Plan"\n3. Compare plan features\n4. Select desired plan\n5. Complete secure payment\n\n**Available Plans:**\n• **Basic**: Free with limited predictions\n• **Farmer Pro**: $29/month with full features\n• **Agricultural Advisor**: $99/month with multi-client support\n• **Enterprise**: Custom pricing for large operations\n\n**Payment Options:**\n• Credit/debit cards\n• PayPal\n• Bank transfer for annual plans\n• Purchase orders for enterprise accounts`
      },
      {
        id: 10,
        question: 'Can I cancel my subscription anytime?',
        answer: `Yes, you can cancel your subscription at any time:\n\n**Cancellation Process:**\n1. Log into your account\n2. Go to Billing & Subscriptions\n3. Click "Cancel Subscription"\n4. Confirm cancellation\n5. Receive confirmation email\n\n**What Happens After Cancellation:**\n• Access continues until current billing period ends\n• Data remains available for 90 days\n• Can reactivate anytime with full data restoration\n• No cancellation fees or penalties\n\n**Refund Policy:**\n• Full refund within 30 days of initial purchase\n• Pro-rated refunds for annual plans\n• No refunds for partial months used`
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const formatAnswer = (answer) => {
    return answer?.split('\n')?.map((line, index) => {
      if (line?.startsWith('• **') && line?.includes('**:')) {
        const [boldPart, normalPart] = line?.split('**:');
        return (
          <div key={index} className="ml-4">
            <strong>{boldPart?.replace('• **', '')}</strong>: {normalPart}
          </div>
        );
      } else if (line?.startsWith('**') && line?.endsWith('**')) {
        return (
          <div key={index} className="font-semibold mt-3 mb-2">
            {line?.replace(/\*\*/g, '')}
          </div>
        );
      } else if (line?.startsWith('• ')) {
        return (
          <div key={index} className="ml-4">
            {line}
          </div>
        );
      } else if (line?.trim() === '') {
        return <div key={index} className="h-2" />;
      } else {
        return (
          <div key={index}>
            {line}
          </div>
        );
      }
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about AgriPredict's crop prediction platform, weather data, and technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 harvest-shadow sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {faqCategories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setSelectedCategory(category?.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left growth-transition ${
                      selectedCategory === category?.id
                        ? 'bg-primary text-white' :'text-muted-foreground hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <Icon name={category?.icon} size={20} />
                    <span className="font-medium">{category?.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqData?.[selectedCategory]?.map((faq) => (
                <div
                  key={faq?.id}
                  className="bg-white rounded-2xl harvest-shadow overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq?.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/20 growth-transition"
                  >
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq?.question}
                    </h3>
                    <Icon
                      name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                      size={20}
                      color="var(--color-muted-foreground)"
                      className="flex-shrink-0"
                    />
                  </button>
                  
                  {openFAQ === faq?.id && (
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="pt-4 text-muted-foreground leading-relaxed">
                        {formatAnswer(faq?.answer)}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
              <Icon name="HelpCircle" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our agricultural experts are here to help with personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 growth-transition flex items-center justify-center space-x-2">
                  <Icon name="MessageCircle" size={20} />
                  <span>Start Live Chat</span>
                </button>
                <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 growth-transition flex items-center justify-center space-x-2">
                  <Icon name="Mail" size={20} />
                  <span>Send Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;