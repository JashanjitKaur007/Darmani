// backend/utils/analytics.js
// Analytics service for processing chat conversations

/**
 * Improved sentiment analysis with better word lists and scoring
 */
const analyzeSentiment = (text) => {
  if (!text || typeof text !== 'string') return 'neutral';

  const positiveWords = [
    'good', 'great', 'excellent', 'awesome', 'happy', 'love', 'helpful',
    'amazing', 'wonderful', 'fantastic', 'perfect', 'yes', 'agree', 'better',
    'calm', 'peaceful', 'relieved', 'hopeful', 'motivated'
  ];

  const negativeWords = [
    'bad', 'sad', 'angry', 'frustrated', 'terrible', 'awful', 'hate',
    'worst', 'stress', 'stressed', 'anxious', 'worried', 'overwhelmed',
    'depressed', 'tired', 'exhausted', 'hopeless', 'no', 'disagree', 'problem'
  ];

  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
  let score = 0;

  words.forEach((word) => {
    if (positiveWords.includes(word)) score += 2;
    if (negativeWords.includes(word)) score -= 2;
  });

  if (score > 3) return 'positive';
  if (score < -3) return 'negative';
  return 'neutral';
};

/**
 * Extract meaningful keywords from messages
 */
const extractKeywords = (messages) => {
  if (!messages || messages.length === 0) return [];

  const commonWords = new Set([
    'i', 'you', 'the', 'and', 'is', 'are', 'was', 'were', 'a', 'an',
    'to', 'of', 'in', 'on', 'for', 'with', 'it', 'this', 'that', 'they',
    'me', 'my', 'your', 'we', 'our', 'have', 'has', 'had', 'but', 'not'
  ]);

  const freq = {};

  messages.forEach((msg) => {
    if (!msg?.text) return;

    const words = msg.text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')           // remove punctuation
      .split(/\s+/)
      .filter(word => word.length > 3 && !commonWords.has(word));

    words.forEach((word) => {
      freq[word] = (freq[word] || 0) + 1;
    });
  });

  // Return top 8 keywords
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([word]) => word);
};

/**
 * Generate conversation roadmap with full message and sentiment
 */
const generateRoadmap = (messages) => {
  if (!messages || messages.length === 0) return [];

  return messages.map((msg, idx) => ({
    step: idx + 1,
    text: msg.text?.trim() || '',
    sentiment: analyzeSentiment(msg.text),
    timestamp: msg.timestamp || null,
    sender: msg.sender || (msg.isUser ? 'user' : 'ai') || 'unknown'
  }));
};

/**
 * Main function to generate complete conversation report
 */
const generateReport = (messages) => {
  if (!messages || messages.length === 0) {
    return {
      sentimentSummary: { positive: 0, neutral: 0, negative: 0 },
      keywords: [],
      roadmap: [],
      totalMessages: 0,
      summary: "No messages to analyze yet."
    };
  }

  const sentimentSummary = { positive: 0, neutral: 0, negative: 0 };

  messages.forEach((msg) => {
    const sentiment = analyzeSentiment(msg.text);
    if (sentiment === 'positive') sentimentSummary.positive++;
    else if (sentiment === 'negative') sentimentSummary.negative++;
    else sentimentSummary.neutral++;
  });

  const keywords = extractKeywords(messages);
  const roadmap = generateRoadmap(messages);

  // Calculate percentages
  const total = messages.length;
  const percentages = {
    positive: Math.round((sentimentSummary.positive / total) * 100) || 0,
    neutral: Math.round((sentimentSummary.neutral / total) * 100) || 0,
    negative: Math.round((sentimentSummary.negative / total) * 100) || 0,
  };

  return {
    sentimentSummary,
    sentimentPercentages: percentages,
    keywords,
    roadmap,
    totalMessages: total,
    summary: `Analyzed ${total} messages in this conversation.`,
    generatedAt: new Date().toISOString()
  };
};

/**
 * Get overall conversation mood
 */
const getOverallMood = (messages) => {
  const report = generateReport(messages);
  const { positive, negative, neutral } = report.sentimentSummary;

  if (positive > negative + neutral) return 'positive';
  if (negative > positive + neutral) return 'negative';
  return 'mixed';
};

module.exports = {
  analyzeSentiment,
  extractKeywords,
  generateRoadmap,
  generateReport,
  getOverallMood,
};