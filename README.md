# AgriPredict - Agricultural Intelligence Platform

A modern React-based agricultural intelligence platform that provides AI-powered crop forecasting, weather analysis, and agricultural recommendations using Google Earth Engine API.

## 🚀 Features

- **AI-Powered Forecasting** - Advanced machine learning models for crop yield predictions
- **Google Earth Engine Integration** - Real-time satellite data and weather analysis
- **Agricultural Weather Intelligence** - Comprehensive weather data with agricultural context
- **Soil Moisture Analysis** - Surface and root zone moisture monitoring
- **Vegetation Health Monitoring** - NDVI and EVI indices for crop health assessment
- **Risk Assessment** - Agricultural risk scoring and mitigation strategies
- **Regional Intelligence** - Location-specific agricultural insights
- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- Google Cloud Platform account (for Earth Engine API)
- Google Earth Engine access (request at https://earthengine.google.com/)

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Configure Google Earth Engine API:
   ```bash
   cp env.example .env
   ```
   
   Edit the `.env` file and add your GEE API credentials. See [GEE_SETUP.md](./GEE_SETUP.md) for detailed setup instructions.
   
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
agripredict/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions and services
│   │   ├── geeApiService.js  # Google Earth Engine API service
│   │   └── config.js         # Configuration management
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── .env                # Environment variables (create from env.example)
├── env.example         # Example environment configuration
├── GEE_SETUP.md        # Google Earth Engine setup guide
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.mjs     # Vite configuration
```

## 🌾 Agricultural Features

### Weather Forecasting
- Real-time weather data from Google Earth Engine
- Agricultural-specific weather metrics (evapotranspiration, solar radiation)
- 5-day weather forecasts with crop impact analysis
- Weather alerts and risk assessments

### Soil Analysis
- Surface and root zone moisture monitoring
- Soil temperature tracking
- Irrigation need calculations
- Moisture trend analysis

### Vegetation Monitoring
- NDVI (Normalized Difference Vegetation Index) tracking
- EVI (Enhanced Vegetation Index) analysis
- Vegetation health assessment
- Biomass estimation and growth rate calculations

### Risk Assessment
- Agricultural risk scoring based on multiple factors
- Weather-based risk mitigation strategies
- Crop-specific recommendations
- Seasonal planning insights

## 🔧 Configuration

### Google Earth Engine API Setup
See [GEE_SETUP.md](./GEE_SETUP.md) for detailed instructions on:
- Setting up Google Cloud Platform
- Enabling Earth Engine API
- Creating API credentials
- Configuring environment variables

### Environment Variables
Copy `env.example` to `.env` and configure:
- `VITE_GEE_API_KEY` - Your Google Earth Engine API key
- `VITE_GEE_PROJECT_ID` - Your Google Cloud project ID
- `VITE_OPENWEATHER_API_KEY` - Fallback weather API key (optional)

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration includes:

- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities

## 📱 Responsive Design

The app is built with responsive design using Tailwind CSS breakpoints.


## 📦 Deployment

Build the application for production:

```bash
npm run build
```

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS

Built with ❤️ on Rocket.new
