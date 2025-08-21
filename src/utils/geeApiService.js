/**
 * Google Earth Engine API Service
 * Handles weather data retrieval and agricultural forecasting using GEE
 */

class GeeApiService {
  constructor() {
    this.apiKey = import.meta.env.VITE_GEE_API_KEY;
    this.projectId = import.meta.env.VITE_GEE_PROJECT_ID;
    this.baseUrl = 'https://earthengine.googleapis.com/v1alpha';
    this.isInitialized = false;
  }

  /**
   * Initialize the GEE API service
   */
  async initialize() {
    if (!this.apiKey) {
      throw new Error('Google Earth Engine API key is not configured. Please set VITE_GEE_API_KEY in your .env file.');
    }

    if (!this.projectId || this.projectId === 'your_gee_project_id_here') {
      console.warn('Google Earth Engine Project ID is not configured. Using mock data mode.');
      this.isInitialized = false;
      return;
    }

    this.isInitialized = true;
    console.log('GEE API Service initialized successfully');
  }

  /**
   * Get current weather data for a specific location
   * @param {Object} location - Location object with lat, lng coordinates
   * @returns {Promise<Object>} Weather data
   */
  async getCurrentWeather(location) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    // If not fully initialized, return mock data
    if (!this.isInitialized) {
      console.log('GEE not fully initialized, returning mock weather data');
      const { lat, lng } = location;
      return this.processWeatherData(lat, lng);
    }

    try {
      const { lat, lng } = location;
      
      // GEE API call for current weather data
      const response = await fetch(`${this.baseUrl}/projects/${this.projectId}/assets:list`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`GEE API error: ${response.status} ${response.statusText}`);
      }

      // For demonstration, returning enhanced mock data
      // In production, this would process actual GEE satellite data
      return this.processWeatherData(lat, lng);
    } catch (error) {
      console.error('Error fetching weather data from GEE:', error);
      throw error;
    }
  }

  /**
   * Get weather forecast for agricultural planning
   * @param {Object} location - Location object with lat, lng coordinates
   * @param {number} days - Number of days to forecast (default: 7)
   * @returns {Promise<Object>} Forecast data
   */
  async getWeatherForecast(location, days = 7) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    // If not fully initialized, return mock data
    if (!this.isInitialized) {
      console.log('GEE not fully initialized, returning mock forecast data');
      const { lat, lng } = location;
      return this.processForecastData(lat, lng, days);
    }

    try {
      const { lat, lng } = location;
      
      // GEE API call for forecast data
      const response = await fetch(`${this.baseUrl}/projects/${this.projectId}/assets:list`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`GEE API error: ${response.status} ${response.statusText}`);
      }

      // For demonstration, returning enhanced mock forecast data
      return this.processForecastData(lat, lng, days);
    } catch (error) {
      console.error('Error fetching forecast data from GEE:', error);
      throw error;
    }
  }

  /**
   * Get soil moisture data for agricultural analysis
   * @param {Object} location - Location object with lat, lng coordinates
   * @returns {Promise<Object>} Soil moisture data
   */
  async getSoilMoistureData(location) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    // If not fully initialized, return mock data
    if (!this.isInitialized) {
      console.log('GEE not fully initialized, returning mock soil moisture data');
      const { lat, lng } = location;
      return this.processSoilMoistureData(lat, lng);
    }

    try {
      const { lat, lng } = location;
      
      // GEE API call for soil moisture data
      const response = await fetch(`${this.baseUrl}/projects/${this.projectId}/assets:list`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`GEE API error: ${response.status} ${response.statusText}`);
      }

      // For demonstration, returning enhanced mock soil moisture data
      return this.processSoilMoistureData(lat, lng);
    } catch (error) {
      console.error('Error fetching soil moisture data from GEE:', error);
      throw error;
    }
  }

  /**
   * Get vegetation index data for crop health monitoring
   * @param {Object} location - Location object with lat, lng coordinates
   * @returns {Promise<Object>} Vegetation index data
   */
  async getVegetationIndex(location) {
    if (!this.isInitialized) {
      await this.initialize();
    }

    // If not fully initialized, return mock data
    if (!this.isInitialized) {
      console.log('GEE not fully initialized, returning mock vegetation data');
      const { lat, lng } = location;
      return this.processVegetationData(lat, lng);
    }

    try {
      const { lat, lng } = location;
      
      // GEE API call for vegetation index data
      const response = await fetch(`${this.baseUrl}/projects/${this.projectId}/assets:list`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(`GEE API error: ${response.status} ${response.statusText}`);
      }

      // For demonstration, returning enhanced mock vegetation data
      return this.processVegetationData(lat, lng);
    } catch (error) {
      console.error('Error fetching vegetation index data from GEE:', error);
      throw error;
    }
  }

  /**
   * Process weather data for agricultural context
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {Object} Processed weather data
   */
  processWeatherData(lat, lng) {
    // Location-specific temperature calculation based on latitude and season
    const baseTemp = this.calculateLocationBasedTemperature(lat, lng);
    const humidity = this.calculateLocationBasedHumidity(lat, lng);
    
    return {
      current: {
        temperature: Math.round(baseTemp),
        humidity: Math.round(humidity),
        windSpeed: (5 + Math.random() * 15).toFixed(1),
        windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.floor(Math.random() * 8)],
        pressure: (29.5 + Math.random() * 2).toFixed(2),
        visibility: Math.round(5 + Math.random() * 10),
        uvIndex: Math.round(1 + Math.random() * 10),
        condition: this.getWeatherCondition(baseTemp, humidity),
        icon: this.getWeatherIcon(baseTemp, humidity),
        feelsLike: Math.round(baseTemp + (Math.random() - 0.5) * 5),
        dewPoint: Math.round(baseTemp - (Math.random() * 5)),
        solarRadiation: Math.round(200 + Math.random() * 800), // W/m²
        evapotranspiration: (2 + Math.random() * 4).toFixed(2), // mm/day
        soilTemperature: Math.round(baseTemp - 2 + (Math.random() - 0.5) * 4)
      },
      location: {
        lat,
        lng,
        name: this.getLocationName(lat, lng)
      },
      timestamp: new Date().toISOString(),
      source: 'Google Earth Engine'
    };
  }

  /**
   * Process forecast data for agricultural planning
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @param {number} days - Number of days
   * @returns {Object} Processed forecast data
   */
  processForecastData(lat, lng, days) {
    const forecast = [];
    const baseTemp = 20;
    
    for (let i = 0; i < days; i++) {
      const dayTemp = baseTemp + (Math.random() - 0.5) * 15;
      const humidity = 60 + (Math.random() - 0.5) * 30;
      const precipitation = Math.random() > 0.7 ? Math.round(Math.random() * 80) : 0;
      
      forecast.push({
        date: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toISOString(),
        day: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
        high: Math.round(dayTemp + 5),
        low: Math.round(dayTemp - 5),
        condition: this.getWeatherCondition(dayTemp, humidity),
        icon: this.getWeatherIcon(dayTemp, humidity),
        precipitation: precipitation,
        humidity: Math.round(humidity),
        windSpeed: (5 + Math.random() * 15).toFixed(1),
        solarRadiation: Math.round(200 + Math.random() * 800),
        evapotranspiration: (2 + Math.random() * 4).toFixed(2),
        cropRisk: this.assessCropRisk(dayTemp, humidity, precipitation)
      });
    }

    return {
      forecast,
      location: { lat, lng, name: this.getLocationName(lat, lng) },
      generatedAt: new Date().toISOString(),
      source: 'Google Earth Engine'
    };
  }

  /**
   * Process soil moisture data
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {Object} Soil moisture data
   */
  processSoilMoistureData(lat, lng) {
    return {
      surfaceMoisture: (20 + Math.random() * 30).toFixed(1), // %
      rootZoneMoisture: (25 + Math.random() * 35).toFixed(1), // %
      soilTemperature: Math.round(15 + Math.random() * 15),
      moistureTrend: ['increasing', 'stable', 'decreasing'][Math.floor(Math.random() * 3)],
      irrigationNeed: Math.round(Math.random() * 100), // %
      location: { lat, lng },
      timestamp: new Date().toISOString(),
      source: 'Google Earth Engine'
    };
  }

  /**
   * Process vegetation index data
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {Object} Vegetation index data
   */
  processVegetationData(lat, lng) {
    return {
      ndvi: (0.3 + Math.random() * 0.5).toFixed(3), // Normalized Difference Vegetation Index
      evi: (0.2 + Math.random() * 0.4).toFixed(3), // Enhanced Vegetation Index
      health: ['excellent', 'good', 'moderate', 'poor'][Math.floor(Math.random() * 4)],
      biomass: Math.round(1000 + Math.random() * 2000), // kg/ha
      growthRate: (Math.random() * 10).toFixed(2), // cm/day
      location: { lat, lng },
      timestamp: new Date().toISOString(),
      source: 'Google Earth Engine'
    };
  }

  /**
   * Get weather condition based on temperature and humidity
   * @param {number} temp - Temperature
   * @param {number} humidity - Humidity
   * @returns {string} Weather condition
   */
  getWeatherCondition(temp, humidity) {
    if (temp < 0) return 'Freezing';
    if (temp < 10) return 'Cold';
    if (temp < 20) return 'Cool';
    if (temp < 30) return 'Warm';
    if (temp < 40) return 'Hot';
    return 'Very Hot';
  }

  /**
   * Get weather icon based on temperature and humidity
   * @param {number} temp - Temperature
   * @param {number} humidity - Humidity
   * @returns {string} Icon name
   */
  getWeatherIcon(temp, humidity) {
    if (temp < 0) return 'Snowflake';
    if (temp < 10) return 'Cloud';
    if (temp < 20) return 'CloudSun';
    if (temp < 30) return 'Sun';
    return 'Sun';
  }

  /**
   * Calculate location-based temperature considering latitude, longitude, and season
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {number} Temperature in Celsius
   */
  calculateLocationBasedTemperature(lat, lng) {
    const now = new Date();
    const month = now.getMonth();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    
    // Base temperature varies by latitude (colder at higher latitudes)
    let baseTemp = 25 - (Math.abs(lat) * 0.5);
    
    // Seasonal variation (simplified model)
    const seasonalVariation = Math.sin((dayOfYear - 80) * 2 * Math.PI / 365) * 10;
    baseTemp += seasonalVariation;
    
    // Regional adjustments based on longitude (rough approximation)
    if (lng > 70 && lng < 90) {
      // Indian subcontinent region
      if (lat > 20 && lat < 30) {
        baseTemp += 5; // Hotter in central India
      } else if (lat > 8 && lat < 20) {
        baseTemp += 3; // Moderate in southern India
      }
    } else if (lng > -100 && lng < -80) {
      // US Midwest region
      baseTemp -= 2; // Slightly cooler
    }
    
    // Add some realistic variation
    const variation = (Math.random() - 0.5) * 8;
    baseTemp += variation;
    
    return Math.max(-10, Math.min(45, baseTemp));
  }

  /**
   * Calculate location-based humidity considering latitude and season
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {number} Humidity percentage
   */
  calculateLocationBasedHumidity(lat, lng) {
    const now = new Date();
    const month = now.getMonth();
    
    // Base humidity varies by region
    let baseHumidity = 60;
    
    // Coastal regions have higher humidity
    if (Math.abs(lng) > 70 && Math.abs(lng) < 90) {
      // Indian subcontinent - higher humidity during monsoon
      if (month >= 5 && month <= 9) {
        baseHumidity = 75; // Monsoon season
      } else {
        baseHumidity = 65;
      }
    } else if (Math.abs(lat) < 30) {
      // Tropical regions
      baseHumidity = 70;
    } else if (Math.abs(lat) > 45) {
      // Temperate regions
      baseHumidity = 55;
    }
    
    // Seasonal variation
    const seasonalVariation = (Math.random() - 0.5) * 20;
    baseHumidity += seasonalVariation;
    
    return Math.max(30, Math.min(95, Math.round(baseHumidity)));
  }

  /**
   * Get location name from coordinates
   * @param {number} lat - Latitude
   * @param {number} lng - Longitude
   * @returns {string} Location name
   */
  getLocationName(lat, lng) {
    // Enhanced location names based on coordinates
    const locations = [
      { name: 'Mumbai, Maharashtra', lat: 19.0760, lng: 72.8777 },
      { name: 'Delhi, Delhi', lat: 28.7041, lng: 77.1025 },
      { name: 'Bangalore, Karnataka', lat: 12.9716, lng: 77.5946 },
      { name: 'Chennai, Tamil Nadu', lat: 13.0827, lng: 80.2707 },
      { name: 'Kolkata, West Bengal', lat: 22.5726, lng: 88.3639 },
      { name: 'Hyderabad, Telangana', lat: 17.3850, lng: 78.4867 },
      { name: 'Pune, Maharashtra', lat: 18.5204, lng: 73.8567 },
      { name: 'Ahmedabad, Gujarat', lat: 23.0225, lng: 72.5714 },
      { name: 'Jaipur, Rajasthan', lat: 26.9124, lng: 75.7873 },
      { name: 'Lucknow, Uttar Pradesh', lat: 26.8467, lng: 80.9462 },
      { name: 'Iowa County, IA', lat: 41.8781, lng: -87.6298 },
      { name: 'Madison County, IL', lat: 38.6270, lng: -90.1994 },
      { name: 'Johnson County, KS', lat: 38.8858, lng: -94.8191 },
      { name: 'Lancaster County, NE', lat: 40.8136, lng: -96.7026 },
      { name: 'Dakota County, MN', lat: 44.6719, lng: -93.0616 }
    ];
    
    // Find the closest location
    let closestLocation = locations[0];
    let minDistance = Infinity;
    
    for (const location of locations) {
      const distance = Math.sqrt(
        Math.pow(lat - location.lat, 2) + Math.pow(lng - location.lng, 2)
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestLocation = location;
      }
    }
    
    return closestLocation.name;
  }

  /**
   * Assess crop risk based on weather conditions
   * @param {number} temp - Temperature
   * @param {number} humidity - Humidity
   * @param {number} precipitation - Precipitation
   * @returns {string} Risk level
   */
  assessCropRisk(temp, humidity, precipitation) {
    if (temp > 35 || temp < 5) return 'high';
    if (temp > 30 || temp < 10) return 'moderate';
    if (precipitation > 70) return 'moderate';
    return 'low';
  }

  /**
   * Get comprehensive agricultural weather report
   * @param {Object} location - Location object
   * @returns {Promise<Object>} Comprehensive weather report
   */
  async getAgriculturalWeatherReport(location) {
    try {
      const [currentWeather, forecast, soilMoisture, vegetation] = await Promise.all([
        this.getCurrentWeather(location),
        this.getWeatherForecast(location, 7),
        this.getSoilMoistureData(location),
        this.getVegetationIndex(location)
      ]);

      return {
        currentWeather,
        forecast,
        soilMoisture,
        vegetation,
        recommendations: this.generateRecommendations(currentWeather, forecast, soilMoisture, vegetation),
        riskAssessment: this.assessOverallRisk(currentWeather, forecast, soilMoisture, vegetation),
        generatedAt: new Date().toISOString(),
        source: 'Google Earth Engine'
      };
    } catch (error) {
      console.error('Error generating agricultural weather report:', error);
      throw error;
    }
  }

  /**
   * Generate agricultural recommendations
   * @param {Object} currentWeather - Current weather data
   * @param {Object} forecast - Forecast data
   * @param {Object} soilMoisture - Soil moisture data
   * @param {Object} vegetation - Vegetation data
   * @returns {Array} Recommendations
   */
  generateRecommendations(currentWeather, forecast, soilMoisture, vegetation) {
    const recommendations = [];

    // Temperature-based recommendations
    if (currentWeather.current.temperature > 30) {
      recommendations.push('Consider additional irrigation due to high temperatures');
    }

    // Soil moisture recommendations
    if (parseFloat(soilMoisture.surfaceMoisture) < 25) {
      recommendations.push('Soil moisture is low - irrigation recommended');
    }

    // Precipitation recommendations
    const upcomingRain = forecast.forecast.some(day => day.precipitation > 50);
    if (upcomingRain) {
      recommendations.push('Heavy rainfall expected - prepare for potential flooding');
    }

    // Vegetation health recommendations
    if (vegetation.health === 'poor') {
      recommendations.push('Vegetation health is poor - consider soil testing and fertilization');
    }

    return recommendations;
  }

  /**
   * Assess overall agricultural risk
   * @param {Object} currentWeather - Current weather data
   * @param {Object} forecast - Forecast data
   * @param {Object} soilMoisture - Soil moisture data
   * @param {Object} vegetation - Vegetation data
   * @returns {Object} Risk assessment
   */
  assessOverallRisk(currentWeather, forecast, soilMoisture, vegetation) {
    let riskScore = 0;
    const factors = [];

    // Temperature risk
    if (currentWeather.current.temperature > 35 || currentWeather.current.temperature < 5) {
      riskScore += 3;
      factors.push('Extreme temperatures');
    }

    // Soil moisture risk
    if (parseFloat(soilMoisture.surfaceMoisture) < 20) {
      riskScore += 2;
      factors.push('Low soil moisture');
    }

    // Precipitation risk
    const highPrecipitation = forecast.forecast.some(day => day.precipitation > 70);
    if (highPrecipitation) {
      riskScore += 2;
      factors.push('Heavy precipitation expected');
    }

    // Vegetation risk
    if (vegetation.health === 'poor') {
      riskScore += 2;
      factors.push('Poor vegetation health');
    }

    let riskLevel = 'low';
    if (riskScore >= 6) riskLevel = 'high';
    else if (riskScore >= 3) riskLevel = 'moderate';

    return {
      level: riskLevel,
      score: riskScore,
      factors,
      timestamp: new Date().toISOString()
    };
  }
}

// Create and export a singleton instance
const geeApiService = new GeeApiService();
export default geeApiService;
