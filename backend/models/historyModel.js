// const mongoose = require('mongoose');

// const historySchema = mongoose.Schema(
//   {
//     // This creates a reference to a specific User document
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: 'User', // The model to link to
//     },
//     sessionId: {
//       type: String,
//       required: false,
//     },
//     type: {
//       type: String,
//       enum: ['chat', 'face-analysis'],
//       default: 'chat'
//     },
//     messages: [{
//       prompt: {
//         type: String,
//         required: true,
//       },
//       response: {
//         type: String,
//         required: true,
//       },
//       analysis: {
//         mainConcern: String,
//         severity: String,
//         relatedSymptoms: [String],
//         cleanedResponse: String,
//       },
//       timestamp: {
//         type: Date,
//         default: Date.now,
//       }
//     }],
//     // Keep the first prompt and response at the root level for compatibility
//     prompt: {
//       type: String,
//       required: true,
//     },
//     response: {
//       type: String,
//       required: true,
//     },
//     analysis: {
//       sentiment: String,
//       severity: String,
//       topics: [String],
//       suggestions: [String],
//       mainConcern: String,
//       relatedSymptoms: [String],
//       cleanedResponse: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const History = mongoose.model('History', historySchema);

// module.exports = History;



// // models/history.js
// const mongoose = require('mongoose');

// const historySchema = mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
//     sessionId: { type: String },
//     type: { type: String, enum: ['chat', 'face-analysis'], default: 'chat' },
//     messages: [
//       {
//         prompt: { type: String, required: true },
//         response: { type: String, required: true },
//         analysis: {
//           mainConcern: String,
//           severity: String,
//           relatedSymptoms: [String],
//           cleanedResponse: String,
//         },
//         timestamp: { type: Date, default: Date.now },
//       },
//     ],
//     prompt: { type: String, required: true },
//     response: { type: String, required: true },
//     analysis: {
//       sentiment: String,
//       severity: String,
//       topics: [String],
//       suggestions: [String],
//       mainConcern: String,
//       relatedSymptoms: [String],
//       cleanedResponse: String,
//     },
//   },
//   { timestamps: true }
// );

// // Helper to get messages formatted for report
// historySchema.methods.formatMessagesForReport = function () {
//   return this.messages.map((msg) => ({
//     text: msg.response || msg.prompt,
//     prompt: msg.prompt,
//     response: msg.response,
//     analysis: msg.analysis || {},
//     timestamp: msg.timestamp,
//   }));
// };

// const History = mongoose.model('History', historySchema);

// module.exports = History;




// models/history.js
const mongoose = require('mongoose');

const historySchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    sessionId: { type: String },
    type: { type: String, enum: ['chat', 'face-analysis'], default: 'chat' },
    messages: [
      {
        prompt: { type: String, required: true },
        response: { type: String, required: true },
        analysis: {
          mainConcern: String,
          severity: String,
          relatedSymptoms: [String],
          cleanedResponse: String,
        },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    prompt: { type: String, required: true },
    response: { type: String, required: true },
    analysis: {
      sentiment: String,
      severity: String,
      topics: [String],
      suggestions: [String],
      mainConcern: String,
      relatedSymptoms: [String],
      cleanedResponse: String,
    },
  },
  { timestamps: true }
);

// Helper to get messages formatted for report
historySchema.methods.formatMessagesForReport = function () {
  return this.messages.map((msg) => ({
    text: msg.response || msg.prompt,
    prompt: msg.prompt,
    response: msg.response,
    analysis: msg.analysis || {},
    timestamp: msg.timestamp,
  }));
};

const History = mongoose.model('History', historySchema);

module.exports = History;