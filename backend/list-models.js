// Script to list available Gemini models for your API key
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '').trim();

if (!apiKey) {
  console.log('❌ No API key found in .env file');
  process.exit(1);
}

async function listModels() {
  try {
    console.log('🔍 Discovering available models...\n');
    
    // Try both v1 and v1beta endpoints
    const endpoints = [
      'https://generativelanguage.googleapis.com/v1/models',
      'https://generativelanguage.googleapis.com/v1beta/models'
    ];
    
    for (const endpoint of endpoints) {
      try {
        console.log(`📡 Checking ${endpoint.includes('v1beta') ? 'v1beta' : 'v1'} endpoint...`);
        
        const response = await fetch(`${endpoint}?key=${encodeURIComponent(apiKey)}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`✅ Success! Found ${data.models?.length || 0} models\n`);
          
          if (data.models && data.models.length > 0) {
            console.log('📋 Available models:');
            data.models.forEach(model => {
              const name = model.name?.replace('models/', '') || 'Unknown';
              const methods = model.supportedGenerationMethods || [];
              const supportsGenerate = methods.includes('generateContent');
              const icon = supportsGenerate ? '✅' : '❌';
              console.log(`${icon} ${name} (methods: ${methods.join(', ')})`);
            });
            
            console.log('\n🎯 Recommended models for generateContent:');
            const recommended = data.models.filter(m => 
              m.supportedGenerationMethods?.includes('generateContent')
            );
            recommended.forEach(model => {
              const name = model.name?.replace('models/', '') || 'Unknown';
              console.log(`   - ${name}`);
            });
            
            if (recommended.length > 0) {
              const bestModel = recommended[0].name?.replace('models/', '');
              console.log(`\n💡 Try setting in .env: GEMINI_MODEL=${bestModel}`);
            }
          }
          break; // Success, no need to try other endpoint
          
        } else {
          const text = await response.text();
          console.log(`❌ ${response.status} ${response.statusText}: ${text}\n`);
        }
      } catch (err) {
        console.log(`❌ Error: ${err.message}\n`);
      }
    }
    
  } catch (error) {
    console.log('❌ Failed to list models:', error.message);
  }
}

listModels();