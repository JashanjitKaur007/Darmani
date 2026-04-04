// const mongoose = require('mongoose');

// const roadmapStepSchema = new mongoose.Schema({
//   step: {
//     type: Number,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   questions: [{
//     type: String,
//     required: true
//   }]
// });

// const roadmapSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   sessionId: {
//     type: String,
//     required: true
//   },
//   title: {
//     type: String,
//     required: true
//   },
//   steps: [roadmapStepSchema],
//   generatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Roadmap', roadmapSchema);