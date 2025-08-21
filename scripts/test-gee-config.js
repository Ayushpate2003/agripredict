#!/usr/bin/env node

/**
 * GEE Configuration Test Script
 * Tests the Google Earth Engine API configuration
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logInfo(message) {
  log(`ℹ️  ${message}`, 'blue');
}

function checkEnvFile() {
  const envPath = path.join(process.cwd(), '.env');
  
  if (!fs.existsSync(envPath)) {
    logError('.env file not found');
    logInfo('Please copy env.example to .env and configure your API keys');
    return false;
  }
  
  logSuccess('.env file found');
  return true;
}

function checkEnvVariables() {
  const envPath = path.join(process.cwd(), '.env');
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  const requiredVars = [
    'VITE_GEE_API_KEY',
    'VITE_GEE_PROJECT_ID'
  ];
  
  const optionalVars = [
    'VITE_OPENWEATHER_API_KEY'
  ];
  
  let allRequiredPresent = true;
  
  // Check required variables
  for (const varName of requiredVars) {
    if (envContent.includes(`${varName}=`)) {
      const value = envContent.match(new RegExp(`${varName}=(.+)`))?.[1];
      if (value && value !== 'your_google_earth_engine_api_key_here' && value !== 'your_gee_project_id_here') {
        logSuccess(`${varName} is configured`);
      } else {
        logError(`${varName} is not properly configured`);
        allRequiredPresent = false;
      }
    } else {
      logError(`${varName} is missing`);
      allRequiredPresent = false;
    }
  }
  
  // Check optional variables
  for (const varName of optionalVars) {
    if (envContent.includes(`${varName}=`)) {
      const value = envContent.match(new RegExp(`${varName}=(.+)`))?.[1];
      if (value && value !== 'your_openweather_api_key_here') {
        logSuccess(`${varName} is configured (optional)`);
      } else {
        logWarning(`${varName} is not configured (optional)`);
      }
    } else {
      logWarning(`${varName} is missing (optional)`);
    }
  }
  
  return allRequiredPresent;
}

function checkDependencies() {
  const packagePath = path.join(process.cwd(), 'package.json');
  
  if (!fs.existsSync(packagePath)) {
    logError('package.json not found');
    return false;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const requiredDeps = ['axios', 'dotenv'];
  
  let allDepsPresent = true;
  
  for (const dep of requiredDeps) {
    if (packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]) {
      logSuccess(`${dep} dependency is installed`);
    } else {
      logError(`${dep} dependency is missing`);
      allDepsPresent = false;
    }
  }
  
  return allDepsPresent;
}

function checkGeeServiceFile() {
  const servicePath = path.join(process.cwd(), 'src', 'utils', 'geeApiService.js');
  
  if (!fs.existsSync(servicePath)) {
    logError('GEE API service file not found');
    return false;
  }
  
  logSuccess('GEE API service file found');
  return true;
}

function checkConfigFile() {
  const configPath = path.join(process.cwd(), 'src', 'utils', 'config.js');
  
  if (!fs.existsSync(configPath)) {
    logError('Configuration file not found');
    return false;
  }
  
  logSuccess('Configuration file found');
  return true;
}

function main() {
  log('🔧 AgriPredict GEE Configuration Test', 'bright');
  log('=====================================', 'bright');
  
  let allChecksPassed = true;
  
  // Check if .env file exists
  if (!checkEnvFile()) {
    allChecksPassed = false;
  }
  
  // Check environment variables
  if (!checkEnvVariables()) {
    allChecksPassed = false;
  }
  
  // Check dependencies
  if (!checkDependencies()) {
    allChecksPassed = false;
  }
  
  // Check service files
  if (!checkGeeServiceFile()) {
    allChecksPassed = false;
  }
  
  if (!checkConfigFile()) {
    allChecksPassed = false;
  }
  
  log('', 'reset');
  log('📋 Summary:', 'bright');
  
  if (allChecksPassed) {
    logSuccess('All configuration checks passed!');
    logInfo('Your GEE API should be ready to use.');
    logInfo('Start the development server with: npm start');
  } else {
    logError('Some configuration issues were found.');
    logInfo('Please fix the issues above and run this test again.');
    logInfo('See GEE_SETUP.md for detailed setup instructions.');
  }
  
  log('', 'reset');
  log('📚 Next Steps:', 'bright');
  logInfo('1. Start the development server: npm start');
  logInfo('2. Open browser console to see configuration status');
  logInfo('3. Navigate to the forecast dashboard to test weather data');
  logInfo('4. Check GEE_SETUP.md for troubleshooting if needed');
}

// Run the test if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = {
  checkEnvFile,
  checkEnvVariables,
  checkDependencies,
  checkGeeServiceFile,
  checkConfigFile
};
