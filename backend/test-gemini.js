// Quick test script to verify Gemini API setup
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || '').trim();

if (!apiKey) {
  console.log('❌ No API key found in .env file');
  process.exit(1);
}

console.log('🔑 API key found');
console.log('🧪 Testing Gemini API connection...\n');

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Test with the correct model for your account
    console.log('📡 Trying gemini-2.5-flash model...');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    
    const result = await model.generateContent('Hello, can you respond with "API working"?');
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ SUCCESS! Gemini API is working');
    console.log('📝 Response:', text);
    
  } catch (error) {
    console.log('❌ ERROR:', error.message);
    
    if (error.status === 403) {
      console.log('\n🔧 SOLUTION: Enable the Gemini API in your Google Cloud Console:');
      console.log('   1. Visit: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
      console.log('   2. Select your project');
      console.log('   3. Click "ENABLE"');
      console.log('   4. Wait 2-3 minutes and try again');
    } else if (error.status === 400) {
      console.log('\n🔧 SOLUTION: Check your API key:');
      console.log('   1. Visit: https://aistudio.google.com/app/apikey');
      console.log('   2. Create a new API key');
      console.log('   3. Update your .env file with the new key');
    } else if (error.status === 404) {
      console.log('\n🔧 SOLUTION: Model not available. This usually means API not enabled.');
    }
  }
}

testGemini();