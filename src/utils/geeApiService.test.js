/**
 * Google Earth Engine API Service Tests
 * Simple tests to verify the GEE API service functionality
 */

import geeApiService from './geeApiService';
import config from './config';

// Mock environment variables for testing
const mockEnv = {
  VITE_GEE_API_KEY: 'test-api-key',
  VITE_GEE_PROJECT_ID: 'test-project-id'
};

// Mock import.meta.env
global.import = {
  meta: {
    env: mockEnv
  }
};

describe('GEE API Service', () => {
  beforeEach(() => {
    // Reset the service state
    geeApiService.isInitialized = false;
  });

  test('should initialize with valid configuration', async () => {
    await expect(geeApiService.initialize()).resolves.not.toThrow();
    expect(geeApiService.isInitialized).toBe(true);
  });

  test('should throw error when API key is missing', async () => {
    const originalKey = geeApiService.apiKey;
    geeApiService.apiKey = null;
    
    await expect(geeApiService.initialize()).rejects.toThrow('Google Earth Engine API key is not configured');
    
    // Restore original key
    geeApiService.apiKey = originalKey;
  });

  test('should throw error when project ID is missing', async () => {
    const originalProjectId = geeApiService.projectId;
    geeApiService.projectId = null;
    
    await expect(geeApiService.initialize()).rejects.toThrow('Google Earth Engine Project ID is not configured');
    
    // Restore original project ID
    geeApiService.projectId = originalProjectId;
  });

  test('should process weather data correctly', () => {
    const lat = 41.8781;
    const lng = -87.6298;
    
    const weatherData = geeApiService.processWeatherData(lat, lng);
    
    expect(weatherData).toHaveProperty('current');
    expect(weatherData).toHaveProperty('location');
    expect(weatherData).toHaveProperty('timestamp');
    expect(weatherData).toHaveProperty('source');
    
    expect(weatherData.current).toHaveProperty('temperature');
    expect(weatherData.current).toHaveProperty('humidity');
    expect(weatherData.current).toHaveProperty('windSpeed');
    expect(weatherData.current).toHaveProperty('condition');
    expect(weatherData.current).toHaveProperty('icon');
    
    expect(weatherData.location).toEqual({ lat, lng, name: expect.any(String) });
    expect(weatherData.source).toBe('Google Earth Engine');
  });

  test('should process forecast data correctly', () => {
    const lat = 41.8781;
    const lng = -87.6298;
    const days = 7;
    
    const forecastData = geeApiService.processForecastData(lat, lng, days);
    
    expect(forecastData).toHaveProperty('forecast');
    expect(forecastData).toHaveProperty('location');
    expect(forecastData).toHaveProperty('generatedAt');
    expect(forecastData).toHaveProperty('source');
    
    expect(forecastData.forecast).toHaveLength(days);
    expect(forecastData.forecast[0]).toHaveProperty('date');
    expect(forecastData.forecast[0]).toHaveProperty('day');
    expect(forecastData.forecast[0]).toHaveProperty('high');
    expect(forecastData.forecast[0]).toHaveProperty('low');
    expect(forecastData.forecast[0]).toHaveProperty('condition');
    expect(forecastData.forecast[0]).toHaveProperty('icon');
    expect(forecastData.forecast[0]).toHaveProperty('precipitation');
    expect(forecastData.forecast[0]).toHaveProperty('cropRisk');
    
    expect(forecastData.location).toEqual({ lat, lng, name: expect.any(String) });
    expect(forecastData.source).toBe('Google Earth Engine');
  });

  test('should process soil moisture data correctly', () => {
    const lat = 41.8781;
    const lng = -87.6298;
    
    const soilData = geeApiService.processSoilMoistureData(lat, lng);
    
    expect(soilData).toHaveProperty('surfaceMoisture');
    expect(soilData).toHaveProperty('rootZoneMoisture');
    expect(soilData).toHaveProperty('soilTemperature');
    expect(soilData).toHaveProperty('moistureTrend');
    expect(soilData).toHaveProperty('irrigationNeed');
    expect(soilData).toHaveProperty('location');
    expect(soilData).toHaveProperty('timestamp');
    expect(soilData).toHaveProperty('source');
    
    expect(typeof soilData.surfaceMoisture).toBe('string');
    expect(typeof soilData.rootZoneMoisture).toBe('string');
    expect(typeof soilData.soilTemperature).toBe('number');
    expect(['increasing', 'stable', 'decreasing']).toContain(soilData.moistureTrend);
    expect(typeof soilData.irrigationNeed).toBe('number');
    expect(soilData.location).toEqual({ lat, lng });
    expect(soilData.source).toBe('Google Earth Engine');
  });

  test('should process vegetation data correctly', () => {
    const lat = 41.8781;
    const lng = -87.6298;
    
    const vegetationData = geeApiService.processVegetationData(lat, lng);
    
    expect(vegetationData).toHaveProperty('ndvi');
    expect(vegetationData).toHaveProperty('evi');
    expect(vegetationData).toHaveProperty('health');
    expect(vegetationData).toHaveProperty('biomass');
    expect(vegetationData).toHaveProperty('growthRate');
    expect(vegetationData).toHaveProperty('location');
    expect(vegetationData).toHaveProperty('timestamp');
    expect(vegetationData).toHaveProperty('source');
    
    expect(typeof vegetationData.ndvi).toBe('string');
    expect(typeof vegetationData.evi).toBe('string');
    expect(['excellent', 'good', 'moderate', 'poor']).toContain(vegetationData.health);
    expect(typeof vegetationData.biomass).toBe('number');
    expect(typeof vegetationData.growthRate).toBe('string');
    expect(vegetationData.location).toEqual({ lat, lng });
    expect(vegetationData.source).toBe('Google Earth Engine');
  });

  test('should assess crop risk correctly', () => {
    expect(geeApiService.assessCropRisk(40, 70, 0)).toBe('high'); // High temperature
    expect(geeApiService.assessCropRisk(0, 70, 0)).toBe('high'); // Low temperature
    expect(geeApiService.assessCropRisk(35, 70, 0)).toBe('high'); // High temperature
    expect(geeApiService.assessCropRisk(25, 70, 80)).toBe('moderate'); // High precipitation
    expect(geeApiService.assessCropRisk(20, 70, 0)).toBe('low'); // Normal conditions
  });

  test('should generate agricultural recommendations', () => {
    const currentWeather = {
      current: { temperature: 35 }
    };
    const forecast = {
      forecast: [{ precipitation: 60 }]
    };
    const soilMoisture = {
      surfaceMoisture: '20'
    };
    const vegetation = {
      health: 'poor'
    };
    
    const recommendations = geeApiService.generateRecommendations(
      currentWeather, forecast, soilMoisture, vegetation
    );
    
    expect(Array.isArray(recommendations)).toBe(true);
    expect(recommendations.length).toBeGreaterThan(0);
    expect(recommendations.some(rec => rec.includes('irrigation'))).toBe(true);
    expect(recommendations.some(rec => rec.includes('rainfall'))).toBe(true);
    expect(recommendations.some(rec => rec.includes('vegetation'))).toBe(true);
  });

  test('should assess overall risk correctly', () => {
    const currentWeather = {
      current: { temperature: 40 }
    };
    const forecast = {
      forecast: [{ precipitation: 80 }]
    };
    const soilMoisture = {
      surfaceMoisture: '15'
    };
    const vegetation = {
      health: 'poor'
    };
    
    const riskAssessment = geeApiService.assessOverallRisk(
      currentWeather, forecast, soilMoisture, vegetation
    );
    
    expect(riskAssessment).toHaveProperty('level');
    expect(riskAssessment).toHaveProperty('score');
    expect(riskAssessment).toHaveProperty('factors');
    expect(riskAssessment).toHaveProperty('timestamp');
    
    expect(['low', 'moderate', 'high']).toContain(riskAssessment.level);
    expect(typeof riskAssessment.score).toBe('number');
    expect(Array.isArray(riskAssessment.factors)).toBe(true);
    expect(riskAssessment.score).toBeGreaterThan(0);
  });
});

describe('Configuration', () => {
  test('should validate GEE configuration correctly', () => {
    const isValid = config.validateGeeConfig();
    expect(typeof isValid).toBe('boolean');
  });

  test('should get configuration status', () => {
    const status = config.getConfigStatus();
    
    expect(status).toHaveProperty('gee');
    expect(status).toHaveProperty('weather');
    expect(status).toHaveProperty('isProduction');
    expect(status).toHaveProperty('isDevelopment');
    
    expect(typeof status.gee).toBe('boolean');
    expect(typeof status.weather).toBe('boolean');
    expect(typeof status.isProduction).toBe('boolean');
    expect(typeof status.isDevelopment).toBe('boolean');
  });
});
