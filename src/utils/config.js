/**
 * Application Configuration
 * Centralized configuration management for environment variables
 */

const config = {
  // Google Earth Engine Configuration
  gee: {
    apiKey: import.meta.env.VITE_GEE_API_KEY,
    projectId: import.meta.env.VITE_GEE_PROJECT_ID,
    baseUrl: 'https://earthengine.googleapis.com/v1alpha',
  },

  // Weather API Configuration (fallback)
  weather: {
    openWeatherApiKey: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },

  // Application Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'AgriPredict',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.agripredict.com',
  },

  // Development Configuration
  development: {
    debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
    logLevel: import.meta.env.VITE_LOG_LEVEL || 'info',
  },

  // Validation methods
  validateGeeConfig() {
    const errors = [];
    
    if (!this.gee.apiKey) {
      errors.push('VITE_GEE_API_KEY is not configured');
    }
    
    if (!this.gee.projectId || this.gee.projectId === 'your_gee_project_id_here') {
      errors.push('VITE_GEE_PROJECT_ID is not configured');
    }

    if (errors.length > 0) {
      console.warn('Google Earth Engine Configuration Warnings:', errors);
      console.warn('Using enhanced mock data mode. Configure Project ID for real GEE data.');
      return false;
    }

    return true;
  },

  validateWeatherConfig() {
    const errors = [];
    
    if (!this.weather.openWeatherApiKey) {
      errors.push('VITE_OPENWEATHER_API_KEY is not configured (fallback weather service)');
    }

    if (errors.length > 0) {
      console.warn('Weather Configuration Warnings:', errors);
      console.warn('Some weather features may not work without proper API keys.');
      return false;
    }

    return true;
  },

  // Get configuration status
  getConfigStatus() {
    return {
      gee: this.validateGeeConfig(),
      weather: this.validateWeatherConfig(),
      isProduction: import.meta.env.PROD,
      isDevelopment: import.meta.env.DEV,
    };
  },

  // Helper method to get API key with validation
  getGeeApiKey() {
    if (!this.gee.apiKey) {
      throw new Error(
        'Google Earth Engine API key is not configured. ' +
        'Please set VITE_GEE_API_KEY in your .env file. ' +
        'Copy env.example to .env and fill in your API keys.'
      );
    }
    return this.gee.apiKey;
  },

  getGeeProjectId() {
    if (!this.gee.projectId) {
      throw new Error(
        'Google Earth Engine Project ID is not configured. ' +
        'Please set VITE_GEE_PROJECT_ID in your .env file. ' +
        'Copy env.example to .env and fill in your project ID.'
      );
    }
    return this.gee.projectId;
  },

  // Log configuration status on initialization
  logConfigStatus() {
    const status = this.getConfigStatus();
    
    console.group('🔧 AgriPredict Configuration Status');
    console.log('Environment:', import.meta.env.MODE);
    console.log('Google Earth Engine:', status.gee ? '✅ Configured' : '❌ Not Configured');
    console.log('Weather API (Fallback):', status.weather ? '✅ Configured' : '⚠️ Not Configured');
    
    if (!status.gee) {
      console.warn('⚠️ Google Earth Engine is not configured. Weather forecasting features will use mock data.');
      console.warn('📝 To configure GEE:');
      console.warn('   1. Copy env.example to .env');
      console.warn('   2. Get your GEE API key from Google Cloud Console');
      console.warn('   3. Set VITE_GEE_API_KEY and VITE_GEE_PROJECT_ID in .env');
    }
    
    console.groupEnd();
  }
};

// Log configuration status on module load
if (typeof window !== 'undefined') {
  config.logConfigStatus();
}

export default config;
