# Google Earth Engine API Setup Guide

This guide will help you set up Google Earth Engine (GEE) API integration for weather forecasting in the AgriPredict application.

## Prerequisites

1. **Google Cloud Platform Account**: You need a Google Cloud Platform account
2. **Google Earth Engine Access**: Request access to Google Earth Engine at [https://earthengine.google.com/](https://earthengine.google.com/)
3. **Node.js and npm**: Ensure you have Node.js installed on your system

## Step 1: Enable Google Earth Engine API

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Earth Engine API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Earth Engine API"
   - Click on it and press "Enable"

## Step 2: Create API Credentials

1. In the Google Cloud Console, go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. (Optional) Restrict the API key to only the Google Earth Engine API for security

## Step 3: Get Your Project ID

1. In the Google Cloud Console, note your Project ID (displayed at the top of the console)
2. This is usually in the format: `your-project-name-123456`

## Step 4: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file and add your credentials:
   ```env
   # Google Earth Engine API Configuration
   VITE_GEE_API_KEY=your_actual_gee_api_key_here
   VITE_GEE_PROJECT_ID=your_actual_project_id_here
   
   # Weather API Configuration (fallback)
   VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
   
   # Application Configuration
   VITE_APP_NAME=AgriPredict
   VITE_APP_VERSION=1.0.0
   VITE_API_BASE_URL=https://api.agripredict.com
   
   # Development Configuration
   VITE_DEBUG_MODE=true
   VITE_LOG_LEVEL=info
   ```

## Step 5: Install Dependencies

```bash
npm install
```

## Step 6: Start the Development Server

```bash
npm start
```

## Step 7: Verify Configuration

1. Open your browser's developer console (F12)
2. Look for the configuration status message:
   ```
   🔧 AgriPredict Configuration Status
   Environment: development
   Google Earth Engine: ✅ Configured
   Weather API (Fallback): ✅ Configured
   ```

## Features Enabled with GEE API

Once configured, the following features will be available:

### Real-time Weather Data
- Current temperature, humidity, wind speed, and pressure
- UV index and visibility
- Feels-like temperature and dew point
- Solar radiation and evapotranspiration rates

### Agricultural Forecasting
- 5-day weather forecast with agricultural context
- Soil moisture analysis (surface and root zone)
- Vegetation health monitoring (NDVI and EVI indices)
- Crop risk assessment based on weather conditions

### Smart Recommendations
- Irrigation recommendations based on soil moisture
- Weather-based agricultural advice
- Risk mitigation strategies
- Seasonal planning insights

### Advanced Analytics
- Vegetation biomass estimation
- Growth rate calculations
- Climate trend analysis
- Agricultural risk scoring

## Troubleshooting

### Common Issues

1. **"GEE not configured" warning**
   - Ensure your `.env` file exists and contains the correct API key
   - Verify the API key is not restricted to specific domains
   - Check that the Google Earth Engine API is enabled in your Google Cloud project

2. **"API key invalid" error**
   - Verify your API key is correct
   - Ensure the API key has access to Google Earth Engine API
   - Check if the API key has any restrictions that might block the request

3. **"Project ID not found" error**
   - Verify your project ID is correct
   - Ensure the project has the Google Earth Engine API enabled
   - Check that your account has access to the project

### Debug Mode

To enable debug mode for more detailed logging:

```env
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
```

### Fallback Mode

If GEE API is not configured, the application will automatically fall back to mock data with enhanced agricultural context. This ensures the application remains functional for development and testing purposes.

## Security Best Practices

1. **Never commit your `.env` file** to version control
2. **Restrict API keys** to specific domains/IPs in production
3. **Use environment-specific configurations** for different deployment environments
4. **Regularly rotate API keys** for enhanced security
5. **Monitor API usage** through Google Cloud Console

## Production Deployment

For production deployment:

1. Set `VITE_DEBUG_MODE=false`
2. Use production-grade API keys with appropriate restrictions
3. Configure proper CORS settings
4. Set up monitoring and alerting for API usage
5. Consider implementing rate limiting for API calls

## Support

If you encounter issues:

1. Check the browser console for detailed error messages
2. Verify your Google Cloud Console settings
3. Ensure all environment variables are properly set
4. Check the Google Earth Engine documentation for API changes

## Additional Resources

- [Google Earth Engine Documentation](https://developers.google.com/earth-engine)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Earth Engine API Reference](https://developers.google.com/earth-engine/api/reference)
- [Agricultural Applications with Earth Engine](https://developers.google.com/earth-engine/tutorials/tutorial_agriculture)

---

**Note**: The current implementation includes enhanced mock data for demonstration purposes. In production, replace the mock data processing with actual GEE API calls for real satellite and weather data.
