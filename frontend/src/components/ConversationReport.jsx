// import React, { useEffect, useState, useMemo } from "react";

// const ConversationReport = ({ messages = [] }) => {
//   const [sentimentData, setSentimentData] = useState({
//     positive: 0,
//     neutral: 0,
//     negative: 0,
//   });
//   const [keywords, setKeywords] = useState([]);
//   const [roadmap, setRoadmap] = useState([]);

//   // Improved sentiment analysis
//   const analyzeSentiment = (text) => {
//     if (!text || typeof text !== "string") return "neutral";

//     const positiveWords = [
//       "good", "great", "excellent", "awesome", "happy", "love", "helpful",
//       "perfect", "amazing", "wonderful", "fantastic", "yes", "agree"
//     ];
//     const negativeWords = [
//       "bad", "sad", "angry", "frustrated", "terrible", "awful", "hate",
//       "worst", "stress", "problem", "issue", "wrong", "no", "disagree"
//     ];

//     const words = text.toLowerCase().split(/\s+/);
//     let score = 0;

//     words.forEach((word) => {
//       if (positiveWords.includes(word)) score += 2;
//       if (negativeWords.includes(word)) score -= 2;
//     });

//     if (score > 2) return "positive";
//     if (score < -2) return "negative";
//     return "neutral";
//   };

//   // Extract meaningful keywords
//   const extractKeywords = (msgs) => {
//     const commonWords = new Set([
//       "i", "you", "the", "and", "is", "are", "was", "were", "a", "an",
//       "to", "of", "in", "on", "for", "with", "it", "this", "that", "they"
//     ]);

//     const freq = {};

//     msgs.forEach((msg) => {
//       if (!msg?.text) return;
//       const words = msg.text
//         .toLowerCase()
//         .replace(/[^\w\s]/g, "") // remove punctuation
//         .split(/\s+/)
//         .filter((w) => w.length > 3 && !commonWords.has(w));

//       words.forEach((word) => {
//         freq[word] = (freq[word] || 0) + 1;
//       });
//     });

//     return Object.entries(freq)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 6) // top 6 keywords
//       .map(([word]) => word);
//   };

//   // Generate conversation roadmap
//   const generateRoadmap = (msgs) => {
//     return msgs.map((msg, index) => ({
//       step: index + 1,
//       text: msg.text?.trim() || "",
//       sentiment: analyzeSentiment(msg.text),
//       timestamp: msg.timestamp || null,
//     }));
//   };

//   // Memoized calculations for better performance
//   const processedData = useMemo(() => {
//     if (!messages || messages.length === 0) {
//       return {
//         sentimentData: { positive: 0, neutral: 0, negative: 0 },
//         keywords: [],
//         roadmap: [],
//       };
//     }

//     let pos = 0, neu = 0, neg = 0;

//     messages.forEach((msg) => {
//       const sentiment = analyzeSentiment(msg.text);
//       if (sentiment === "positive") pos++;
//       else if (sentiment === "neutral") neu++;
//       else neg++;
//     });

//     return {
//       sentimentData: { positive: pos, neutral: neu, negative: neg },
//       keywords: extractKeywords(messages),
//       roadmap: generateRoadmap(messages),
//     };
//   }, [messages]);

//   // Update state when processed data changes
//   useEffect(() => {
//     setSentimentData(processedData.sentimentData);
//     setKeywords(processedData.keywords);
//     setRoadmap(processedData.roadmap);
//   }, [processedData]);

//   // Calculate total messages for percentage
//   const totalMessages = messages.length;
//   const sentimentPercentages = useMemo(() => ({
//     positive: totalMessages ? Math.round((sentimentData.positive / totalMessages) * 100) : 0,
//     neutral: totalMessages ? Math.round((sentimentData.neutral / totalMessages) * 100) : 0,
//     negative: totalMessages ? Math.round((sentimentData.negative / totalMessages) * 100) : 0,
//   }), [sentimentData, totalMessages]);

//   if (messages.length === 0) {
//     return (
//       <div className="conversation-report empty">
//         <h3>Live Conversation Report</h3>
//         <p>No messages yet. Start chatting to see live analytics.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="conversation-report" style={{ 
//       borderTop: "1px solid #e0e0e0", 
//       padding: "16px", 
//       marginTop: "12px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px"
//     }}>
//       <h3>Live Conversation Report</h3>

//       {/* Sentiment Analysis */}
//       <div style={{ marginBottom: "16px" }}>
//         <strong>Sentiment Analysis</strong>
//         <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
//           <div>😊 Positive: {sentimentData.positive} ({sentimentPercentages.positive}%)</div>
//           <div>😐 Neutral: {sentimentData.neutral} ({sentimentPercentages.neutral}%)</div>
//           <div>😠 Negative: {sentimentData.negative} ({sentimentPercentages.negative}%)</div>
//         </div>
//       </div>

//       {/* Key Topics */}
//       <div style={{ marginBottom: "16px" }}>
//         <strong>Key Topics</strong>
//         <div style={{ marginTop: "8px" }}>
//           {keywords.length > 0 ? (
//             keywords.map((keyword, idx) => (
//               <span
//                 key={idx}
//                 style={{
//                   display: "inline-block",
//                   background: "#e3f2fd",
//                   padding: "4px 10px",
//                   margin: "4px 6px 4px 0",
//                   borderRadius: "16px",
//                   fontSize: "14px",
//                 }}
//               >
//                 #{keyword}
//               </span>
//             ))
//           ) : (
//             "No significant topics detected yet"
//           )}
//         </div>
//       </div>

//       {/* Discussion Roadmap */}
//       <div>
//         <strong>Conversation Flow</strong>
//         <ol style={{ marginTop: "8px", paddingLeft: "20px" }}>
//           {roadmap.map((step) => (
//             <li key={step.step} style={{ marginBottom: "8px" }}>
//               <span
//                 style={{
//                   fontWeight: "bold",
//                   color: step.sentiment === "positive" ? "green" :
//                          step.sentiment === "negative" ? "red" : "orange",
//                 }}
//               >
//                 [{step.sentiment.toUpperCase()}]
//               </span>{" "}
//               {step.text}
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default ConversationReport;




import React, { useEffect, useState, useMemo } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar,
  Area, AreaChart
} from "recharts";

// Calming color palette
const colors = {
  primary: "#4A90E2",      // soft blue
  success: "#50C878",      // soft green
  warning: "#F4A261",      // soft orange/amber
  calm: "#81C3D6",
  anxiety: "#F4A261",
  content: "#98D8C8",
  fatigue: "#A8A8D0",
  neutral: "#B0B0B0",
  background: "#F8FAFC",
  card: "#FFFFFF",
};

const MentalHealthReport = ({ messages = [] }) => {
  const [moodData, setMoodData] = useState([]);
  const [sentimentData, setSentimentData] = useState({ positive: 0, neutral: 0, negative: 0 });
  const [keywords, setKeywords] = useState([]);

  // Enhanced sentiment + simulated mood scoring (0-10)
  const analyzeMood = (text) => {
    if (!text) return { mood: 5, emotion: "neutral", stress: 5 };

    const positiveWords = ["good", "great", "happy", "calm", "peace", "love", "excellent", "wonderful", "relaxed", "better"];
    const negativeWords = ["stress", "anxious", "sad", "angry", "frustrated", "tired", "overwhelmed", "bad", "worried", "hate"];

    let score = 5;
    const lowerText = text.toLowerCase();

    positiveWords.forEach(word => {
      if (lowerText.includes(word)) score += 1.2;
    });
    negativeWords.forEach(word => {
      if (lowerText.includes(word)) score -= 1.5;
    });

    score = Math.max(1, Math.min(10, Math.round(score)));

    let emotion = "neutral";
    let stress = Math.round(11 - score * 0.8); // inverse relationship

    if (score >= 8) emotion = "calm";
    else if (score >= 6) emotion = "content";
    else if (score <= 3) emotion = "anxiety";
    else if (score <= 5) emotion = "fatigue";

    return { mood: score, emotion, stress };
  };

  // Process messages into time-series data (simulating daily entries)
  const processedData = useMemo(() => {
    // if (!messages || messages.length === 0) return { 
    //   moodTrend: [], sentiment: { positive: 0, neutral: 0, negative: 0 }, keywords: []
    //  };
    
    if (!messages || messages.length === 0) {
      return { 
        moodTrend: [], sentiment: { positive: 0, neutral: 0, negative: 0 }, emotionCount: { calm: 0, content: 0, anxiety: 0, fatigue: 0, neutral: 0 }, keywords: [] 
      };
    }

    let pos = 0, neu = 0, neg = 0;
    const moodTrend = [];
    const emotionCount = { calm: 0, content: 0, anxiety: 0, fatigue: 0, neutral: 0 };

    messages.forEach((msg, index) => {
      const analysis = analyzeMood(msg.text);
      const date = new Date();
      date.setDate(date.getDate() - (messages.length - index - 1)); // simulate past days

      moodTrend.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        mood: analysis.mood,
        stress: analysis.stress,
        emotion: analysis.emotion,
      });

      if (analysis.emotion === "calm" || analysis.emotion === "content") pos++;
      else if (analysis.emotion === "anxiety" || analysis.emotion === "fatigue") neg++;
      else neu++;

      emotionCount[analysis.emotion] = (emotionCount[analysis.emotion] || 0) + 1;
    });

    const total = messages.length;
    return {
      moodTrend,
      sentiment: { positive: pos, neutral: neu, negative: neg },
      emotionCount,
      keywords: ["work", "evening", "anxiety", "walk", "journal"], // placeholder - can be enhanced
    };
  }, [messages]);

  useEffect(() => {
    setMoodData(processedData.moodTrend);
    setSentimentData(processedData.sentiment);
    setKeywords(processedData.keywords);
  }, [processedData]);

  const totalEntries = messages.length;
  const avgMood = moodData.length ? (moodData.reduce((sum, d) => sum + d.mood, 0) / moodData.length).toFixed(1) : 5.0;

  // Emotional breakdown for Pie
  const emotionBreakdown = [
    { name: "Calm", value: processedData.emotionCount.calm || 0, color: colors.calm, percent: totalEntries ? Math.round(((processedData.emotionCount.calm || 0) / totalEntries) * 100) : 0 },
    { name: "Content", value: processedData.emotionCount.content || 0, color: colors.content, percent: totalEntries ? Math.round(((processedData.emotionCount.content || 0) / totalEntries) * 100) : 0 },
    { name: "Anxiety", value: processedData.emotionCount.anxiety || 0, color: colors.anxiety, percent: totalEntries ? Math.round(((processedData.emotionCount.anxiety || 0) / totalEntries) * 100) : 0 },
    { name: "Fatigue", value: processedData.emotionCount.fatigue || 0, color: colors.fatigue, percent: totalEntries ? Math.round(((processedData.emotionCount.fatigue || 0) / totalEntries) * 100) : 0 },
    { name: "Neutral", value: processedData.emotionCount.neutral || 0, color: colors.neutral, percent: totalEntries ? Math.round(((processedData.emotionCount.neutral || 0) / totalEntries) * 100) : 0 },
  ].filter(item => item.value > 0);

  if (messages.length === 0) {
    return (
      <div className="mental-health-report empty" style={{ padding: "24px", textAlign: "center", background: colors.background, borderRadius: "12px" }}>
        <h3>Your Mental Health Report</h3>
        <p>No entries yet. Start logging your thoughts to see your personal dashboard.</p>
      </div>
    );
  }

  return (
    <div className="mental-health-report" style={{ 
      background: colors.background, 
      padding: "24px", 
      borderRadius: "16px", 
      fontFamily: "system-ui, sans-serif",
      color: "#333"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h2 style={{ margin: 0, color: "#1e3a8a" }}>Your Mental Health Report • March 2026</h2>
        <select style={{ padding: "8px 12px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* 1. Overview Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "32px" }}>
        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "14px", color: "#666" }}>Average Mood Score</div>
          <div style={{ fontSize: "42px", fontWeight: "700", color: colors.success }}>{avgMood} <span style={{ fontSize: "18px" }}>/ 10</span></div>
          <div style={{ color: "#22c55e", fontSize: "14px" }}>↑ +0.8 from last week</div>
        </div>

        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "14px", color: "#666" }}>Stress Level</div>
          <div style={{ fontSize: "32px", fontWeight: "600", color: colors.warning }}>Medium</div>
          <div style={{ fontSize: "14px" }}>Peaking in evenings</div>
        </div>

        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ fontSize: "14px", color: "#666" }}>Dominant Emotions</div>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
            {emotionBreakdown.slice(0, 3).map((e, i) => (
              <span key={i} style={{ fontSize: "22px" }}>{e.name === "Calm" ? "😌" : e.name === "Content" ? "🙂" : "😟"}</span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", marginBottom: "32px", borderLeft: `5px solid ${colors.success}` }}>
        <strong style={{ color: "#1e3a8a" }}>This Week's Summary</strong>
        <p style={{ marginTop: "8px", lineHeight: "1.6" }}>
          You've shown steady improvement in overall mood, especially mid-day. Evenings still bring some anxiety spikes, often linked to work wrap-up. You're building resilience — keep noticing what helps you unwind.
        </p>
      </div>

      {/* 2. Mood Graph (Most Important) */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ marginBottom: "16px" }}>Mood Trend Over Time</h3>
        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={moodData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 10]} label={{ value: "Mood Score (0-10)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Line 
                type="natural" 
                dataKey="mood" 
                stroke={colors.primary} 
                strokeWidth={3} 
                dot={{ fill: colors.primary, r: 5 }} 
              />
              <Line 
                type="natural" 
                dataKey="stress" 
                stroke={colors.warning} 
                strokeWidth={2} 
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Emotional Breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}>
        <div>
          <h3>Emotional Breakdown</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={emotionBreakdown} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                {emotionBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3>Emotions by Time of Day</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={[
              { time: "Morning", anxiety: 3, calm: 7 },
              { time: "Afternoon", anxiety: 4, calm: 6 },
              { time: "Evening", anxiety: 7, calm: 4 },
              { time: "Night", anxiety: 5, calm: 5 },
            ]}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calm" fill={colors.calm} />
              <Bar dataKey="anxiety" fill={colors.anxiety} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 4. Trigger Insights */}
      <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", marginBottom: "32px" }}>
        <h3>Trigger Insights</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>Work-related discussions correlate with +2.1 stress increase (4× this period)</li>
          <li>Late-night activity after 10 PM links to higher anxiety and lower next-day mood</li>
          <li>Days with physical activity show +1.5 average mood boost</li>
        </ul>
      </div>

      {/* 5. Behavior Patterns + Progress */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "32px" }}>
        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px" }}>
          <h3>Behavior Patterns</h3>
          <p><strong>Most active time:</strong> 9 PM – 11 PM</p>
          <p><strong>Average session length:</strong> 4.2 minutes</p>
          <p><strong>Logging frequency:</strong> 5.8 days/week <span style={{ color: colors.success }}>(↑)</span></p>
        </div>

        <div style={{ background: colors.card, padding: "20px", borderRadius: "12px" }}>
          <h3>Progress This Week</h3>
          <p style={{ color: colors.success }}>Mood improved by <strong>+14%</strong></p>
          <p>Stress reduced by <strong>9%</strong></p>
          <p>Consistency streak: <strong>11 days</strong> 🔥</p>
        </div>
      </div>

      {/* 7. AI Recommendations */}
      <div style={{ background: colors.card, padding: "20px", borderRadius: "12px", marginBottom: "24px" }}>
        <h3>Personalized Recommendations</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
          <li>Try 5-minute box breathing around 8 PM — many with similar patterns saw anxiety drop noticeably.</li>
          <li>Journal right after work conversations to help reframe stress.</li>
          <li>Consider 10+ minutes of daylight exposure daily.</li>
        </ul>
      </div>

      {/* Risk Alerts */}
      <div style={{ background: "#FEF3F2", padding: "20px", borderRadius: "12px", borderLeft: "5px solid #F87171" }}>
        <h3 style={{ color: "#B91C1C" }}>Mild Alert</h3>
        <p>Evening anxiety spikes noted on 3 days. This is common — consider protecting your wind-down routine.</p>
        <p style={{ marginTop: "12px", fontSize: "14px" }}>No major risk signals overall. You're doing well maintaining balance.</p>
      </div>

      <div style={{ marginTop: "32px", textAlign: "center", fontSize: "14px", color: "#666" }}>
        Your data stays private • Export as PDF • Share with therapist (with consent)
      </div>
    </div>
  );
};

export default MentalHealthReport;