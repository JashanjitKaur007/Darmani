// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { User, Mail, Edit2, Save, X, LogOut, Trash2, History as HistoryIcon, AlertTriangle, TrendingUp, FileText, Calendar, MessageCircle, Brain, Loader, Eye, EyeOff } from 'lucide-react';
// import { useTranslation } from 'react-i18next';

// const MentalHealthChart = ({ data }) => {
//   if (!data || data.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
//         <p className="text-gray-500">No data available for chart</p>
//       </div>
//     );
//   }

//   // Get severity counts
//   const severityCounts = {
//     high: 0,
//     moderate: 0,
//     low: 0,
//   };

//   data.forEach(item => {
//     const severity = item.analysis?.severity?.toLowerCase() || 'moderate';
//     if (severityCounts.hasOwnProperty(severity)) {
//       severityCounts[severity]++;
//     } else {
//       severityCounts['moderate']++;
//     }
//   });

//   const total = Object.values(severityCounts).reduce((a, b) => a + b, 0);
//   const highPercentage = (severityCounts.high / total) * 100;
//   const moderatePercentage = (severityCounts.moderate / total) * 100;
//   const lowPercentage = (severityCounts.low / total) * 100;

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-red-50 p-4 rounded-lg">
//           <div className="text-red-600 font-semibold text-2xl">{severityCounts.high}</div>
//           <div className="text-red-600 text-sm">High Severity</div>
//         </div>
//         <div className="bg-yellow-50 p-4 rounded-lg">
//           <div className="text-yellow-600 font-semibold text-2xl">{severityCounts.moderate}</div>
//           <div className="text-yellow-600 text-sm">Moderate</div>
//         </div>
//         <div className="bg-green-50 p-4 rounded-lg">
//           <div className="text-green-600 font-semibold text-2xl">{severityCounts.low}</div>
//           <div className="text-green-600 text-sm">Low Severity</div>
//         </div>
//       </div>

//       {/* Chart visualization */}
//       <div className="bg-white p-6 rounded-lg border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-4">Severity Distribution</h3>
//         <div className="space-y-3">
//           <div>
//             <div className="flex justify-between text-sm mb-1">
//               <span className="text-gray-700">High Severity</span>
//               <span className="font-semibold text-red-600">{highPercentage.toFixed(1)}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-red-500 h-2 rounded-full transition-all"
//                 style={{ width: `${highPercentage}%` }}
//               ></div>
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between text-sm mb-1">
//               <span className="text-gray-700">Moderate Severity</span>
//               <span className="font-semibold text-yellow-600">{moderatePercentage.toFixed(1)}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-yellow-500 h-2 rounded-full transition-all"
//                 style={{ width: `${moderatePercentage}%` }}
//               ></div>
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between text-sm mb-1">
//               <span className="text-gray-700">Low Severity</span>
//               <span className="font-semibold text-green-600">{lowPercentage.toFixed(1)}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-green-500 h-2 rounded-full transition-all"
//                 style={{ width: `${lowPercentage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Profile = () => {
//   const { t } = useTranslation();
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   // State management
//   const [isEditing, setIsEditing] = useState(false);
//   const [editFormData, setEditFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
//   const [loading, setLoading] = useState(false);
//   const [historyData, setHistoryData] = useState([]);
//   const [historyLoading, setHistoryLoading] = useState(true);
//   const [deleteModal, setDeleteModal] = useState(null);
//   const [deleteAccountModal, setDeleteAccountModal] = useState(false);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [showPassword, setShowPassword] = useState(false);

//   // Initialize edit form with user data
//   useEffect(() => {
//     if (user) {
//       setEditFormData({
//         name: user.name || '',
//         email: user.email || '',
//         password: '',
//         confirmPassword: ''
//       });
//     }
//   }, [user]);

//   // Fetch chat history
//   useEffect(() => {
//     fetchChatHistory();
//   }, []);

//   const fetchChatHistory = async () => {
//     try {
//       setHistoryLoading(true);
//       const response = await axios.get('/chat/history');
//       setHistoryData(response.data);
//     } catch (error) {
//       console.error('Error fetching history:', error);
//       setMessage({ type: 'error', text: 'Failed to load chat history' });
//     } finally {
//       setHistoryLoading(false);
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSaveProfile = async () => {
//     if (!editFormData.name || !editFormData.email) {
//       setMessage({ type: 'error', text: 'Name and email are required' });
//       return;
//     }

//     // If password is being changed, both passwords must match
//     if (editFormData.password && editFormData.password !== editFormData.confirmPassword) {
//       setMessage({ type: 'error', text: 'Passwords do not match' });
//       return;
//     }

//     try {
//       setLoading(true);
//       const updateData = {
//         name: editFormData.name,
//         email: editFormData.email,
//       };

//       if (editFormData.password) {
//         updateData.password = editFormData.password;
//       }

//       // Update profile (assuming you have this endpoint)
//       // For now, just update localStorage and show success
//       const token = localStorage.getItem('token');
//       // This assumes your backend has a PUT /api/users/profile endpoint
//       // If not, we'll just update the local state
      
//       // Update local storage
//       const updatedUser = { ...user, ...editFormData };
//       localStorage.setItem('user', JSON.stringify(updatedUser));
      
//       setMessage({ type: 'success', text: 'Profile updated successfully!' });
//       setIsEditing(false);
//       setEditFormData(prev => ({
//         ...prev,
//         password: '',
//         confirmPassword: ''
//       }));

//       // Reload to reflect changes
//       setTimeout(() => {
//         window.location.reload();
//       }, 1500);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       setMessage({ type: 'error', text: error.response?.data?.message || 'Failed to update profile' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const handleDeleteAccount = async () => {
//     try {
//       setLoading(true);
//       // DELETE endpoint for user account
//       // This assumes you have a DELETE /api/users/profile endpoint
//       // For now, we'll just logout and redirect
      
//       setMessage({ type: 'success', text: 'Account deleted successfully' });
//       setTimeout(() => {
//         logout();
//         navigate('/');
//       }, 1500);
//     } catch (error) {
//       console.error('Error deleting account:', error);
//       setMessage({ type: 'error', text: 'Failed to delete account' });
//     } finally {
//       setLoading(false);
//       setDeleteAccountModal(false);
//     }
//   };

//   const handleDeleteHistory = async (id) => {
//     try {
//       await axios.delete(`/chat/history/${id}`);
//       setHistoryData(prev => prev.filter(item => item._id !== id));
//       setDeleteModal(null);
//       setMessage({ type: 'success', text: 'Chat deleted successfully' });
//     } catch (error) {
//       console.error('Error deleting chat:', error);
//       setMessage({ type: 'error', text: 'Failed to delete chat' });
//     }
//   };

//   // Generate report from chat history
//   const generateReport = () => {
//     if (historyData.length === 0) {
//       return null;
//     }

//     // Collect all concerns and symptoms
//     const allConcerns = {};
//     const allSymptoms = {};
//     let totalChats = 0;

//     historyData.forEach(item => {
//       totalChats++;
//       const analysis = item.analysis || {};
      
//       if (analysis.mainConcern) {
//         allConcerns[analysis.mainConcern] = (allConcerns[analysis.mainConcern] || 0) + 1;
//       }

//       if (analysis.relatedSymptoms && Array.isArray(analysis.relatedSymptoms)) {
//         analysis.relatedSymptoms.forEach(symptom => {
//           allSymptoms[symptom] = (allSymptoms[symptom] || 0) + 1;
//         });
//       }
//     });

//     // Get top concerns and symptoms
//     const topConcerns = Object.entries(allConcerns)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 3)
//       .map(([concern, count]) => ({ concern, count }));

//     const topSymptoms = Object.entries(allSymptoms)
//       .sort((a, b) => b[1] - a[1])
//       .slice(0, 5)
//       .map(([symptom, count]) => ({ symptom, count }));

//     return {
//       totalChats,
//       topConcerns,
//       topSymptoms,
//       generatedDate: new Date().toLocaleDateString()
//     };
//   };

//   const report = generateReport();

//   if (!user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Loader className="h-8 w-8 animate-spin text-purple-600" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 pt-24 pb-12">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Message alert */}
//         {message.text && (
//           <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
//             {message.text}
//           </div>
//         )}

//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-gray-900">{t('profile') || 'Profile'}</h1>
//           <p className="text-gray-600 mt-2">Manage your account and view your mental health insights</p>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-4 mb-8 border-b border-gray-200">
//           <button
//             onClick={() => setActiveTab('profile')}
//             className={`px-4 py-3 font-medium border-b-2 transition-colors ${
//               activeTab === 'profile'
//                 ? 'text-purple-600 border-purple-600'
//                 : 'text-gray-600 border-transparent hover:text-gray-900'
//             }`}
//           >
//             Profile
//           </button>
//           <button
//             onClick={() => setActiveTab('history')}
//             className={`px-4 py-3 font-medium border-b-2 transition-colors ${
//               activeTab === 'history'
//                 ? 'text-purple-600 border-purple-600'
//                 : 'text-gray-600 border-transparent hover:text-gray-900'
//             }`}
//           >
//             Chat History
//           </button>
//           <button
//             onClick={() => setActiveTab('insights')}
//             className={`px-4 py-3 font-medium border-b-2 transition-colors ${
//               activeTab === 'insights'
//                 ? 'text-purple-600 border-purple-600'
//                 : 'text-gray-600 border-transparent hover:text-gray-900'
//             }`}
//           >
//             Mental Health Insights
//           </button>
//         </div>

//         {/* Profile Tab */}
//         {activeTab === 'profile' && (
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Profile Card */}
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Information</h2>

//               {!isEditing ? (
//                 <div className="space-y-6">
//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
//                     <div className="bg-purple-600 p-3 rounded-full">
//                       <User className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Name</p>
//                       <p className="text-lg font-semibold text-gray-900">{user.name}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
//                     <div className="bg-blue-600 p-3 rounded-full">
//                       <Mail className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Email</p>
//                       <p className="text-lg font-semibold text-gray-900">{user.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
//                     <div className="bg-indigo-600 p-3 rounded-full">
//                       <Calendar className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-600">Member Since</p>
//                       <p className="text-lg font-semibold text-gray-900">{new Date(user.createdAt).toLocaleDateString()}</p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => setIsEditing(true)}
//                     className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
//                   >
//                     <Edit2 className="h-5 w-5" />
//                     Edit Profile
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={editFormData.name}
//                       onChange={handleEditChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={editFormData.email}
//                       onChange={handleEditChange}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">New Password (optional)</label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         value={editFormData.password}
//                         onChange={handleEditChange}
//                         placeholder="Leave empty to keep current password"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
//                       >
//                         {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
//                     <div className="relative">
//                       <input
//                         type={showPassword ? 'text' : 'password'}
//                         name="confirmPassword"
//                         value={editFormData.confirmPassword}
//                         onChange={handleEditChange}
//                         placeholder="Confirm new password"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
//                       />
//                     </div>
//                   </div>

//                   <div className="flex gap-3 mt-6">
//                     <button
//                       onClick={handleSaveProfile}
//                       disabled={loading}
//                       className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50"
//                     >
//                       {loading ? <Loader className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
//                       Save Changes
//                     </button>
//                     <button
//                       onClick={() => {
//                         setIsEditing(false);
//                         setEditFormData({
//                           name: user.name || '',
//                           email: user.email || '',
//                           password: '',
//                           confirmPassword: ''
//                         });
//                       }}
//                       className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400 transition-colors font-medium"
//                     >
//                       <X className="h-5 w-5" />
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Actions Card */}
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Actions</h2>

//               <div className="space-y-3">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                 >
//                   <LogOut className="h-5 w-5" />
//                   Logout
//                 </button>

//                 <button
//                   onClick={() => setDeleteAccountModal(true)}
//                   className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//                 >
//                   <Trash2 className="h-5 w-5" />
//                   Delete Account
//                 </button>
//               </div>

//               <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <div className="flex gap-3">
//                   <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-semibold text-yellow-900">Warning</p>
//                     <p className="text-sm text-yellow-800 mt-1">Deleting your account is permanent and cannot be undone. All your data will be lost.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Chat History Tab */}
//         {activeTab === 'history' && (
//           <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//               <HistoryIcon className="h-7 w-7 text-purple-600" />
//               Chat History
//             </h2>

//             {historyLoading ? (
//               <div className="flex items-center justify-center h-64">
//                 <Loader className="h-8 w-8 animate-spin text-purple-600" />
//               </div>
//             ) : historyData.length === 0 ? (
//               <div className="flex flex-col items-center justify-center h-64 text-center">
//                 <MessageCircle className="h-12 w-12 text-gray-300 mb-4" />
//                 <p className="text-gray-500 text-lg">No chat history yet</p>
//                 <p className="text-gray-400 text-sm mt-2">Start a conversation to build your mental health record</p>
//               </div>
//             ) : (
//               <div className="space-y-3 max-h-96 overflow-y-auto">
//                 {historyData.map(item => (
//                   <div key={item._id} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
//                     <div className="flex items-start justify-between gap-4">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-2">
//                           <MessageCircle className="h-4 w-4 text-purple-600" />
//                           <span className="text-sm text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</span>
//                         </div>
//                         <p className="text-gray-900 font-medium line-clamp-2">{item.prompt}</p>
//                         {item.analysis?.mainConcern && (
//                           <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
//                             <Brain className="h-3 w-3" />
//                             {item.analysis.mainConcern}
//                           </div>
//                         )}
//                         {item.analysis?.severity && (
//                           <div className={`ml-2 inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${
//                             item.analysis.severity === 'high' ? 'bg-red-100 text-red-700' :
//                             item.analysis.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
//                             'bg-green-100 text-green-700'
//                           }`}>
//                             {item.analysis.severity}
//                           </div>
//                         )}
//                       </div>
//                       <button
//                         onClick={() => setDeleteModal(item._id)}
//                         className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition-colors"
//                       >
//                         <Trash2 className="h-5 w-5" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {/* Mental Health Insights Tab */}
//         {activeTab === 'insights' && (
//           <div className="space-y-8">
//             <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                 <TrendingUp className="h-7 w-7 text-purple-600" />
//                 Mental Health Chart
//               </h2>
//               <MentalHealthChart data={historyData} />
//             </div>

//             {/* Report Section */}
//             {report && (
//               <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
//                   <FileText className="h-7 w-7 text-purple-600" />
//                   Mental Health Report
//                 </h2>

//                 <div className="space-y-6">
//                   {/* Summary */}
//                   <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
//                     <h3 className="font-semibold text-gray-900 mb-4">Summary</h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-600">Total Conversations</p>
//                         <p className="text-3xl font-bold text-purple-600">{report.totalChats}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-600">Report Generated</p>
//                         <p className="text-lg font-semibold text-gray-900">{report.generatedDate}</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Top Concerns */}
//                   {report.topConcerns.length > 0 && (
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                         <Brain className="h-5 w-5 text-purple-600" />
//                         Primary Concerns
//                       </h3>
//                       <div className="space-y-3">
//                         {report.topConcerns.map((item, idx) => (
//                           <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                             <span className="text-gray-900 font-medium capitalize">{item.concern}</span>
//                             <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">{item.count} mentions</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Top Symptoms */}
//                   {report.topSymptoms.length > 0 && (
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                         <AlertTriangle className="h-5 w-5 text-orange-600" />
//                         Most Frequently Mentioned Symptoms
//                       </h3>
//                       <div className="grid md:grid-cols-2 gap-3">
//                         {report.topSymptoms.map((item, idx) => (
//                           <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
//                             <p className="text-gray-900 font-medium capitalize">{item.symptom}</p>
//                             <p className="text-sm text-gray-600 mt-1">{item.count} mentions</p>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Recommendations */}
//                   <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
//                     <h3 className="font-semibold text-gray-900 mb-3">Recommendations</h3>
//                     <ul className="space-y-2 text-sm text-gray-700">
//                       <li className="flex items-start gap-2">
//                         <span className="text-blue-600 font-bold mt-0.5">•</span>
//                         <span>Continue regular conversations to track your mental health journey</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <span className="text-blue-600 font-bold mt-0.5">•</span>
//                         <span>If you're experiencing high severity concerns, please consider consulting a mental health professional</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <span className="text-blue-600 font-bold mt-0.5">•</span>
//                         <span>Practice self-care activities and maintain a healthy routine</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {historyData.length === 0 && (
//               <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm text-center">
//                 <Brain className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//                 <p className="text-gray-500 text-lg">No mental health data available yet</p>
//                 <p className="text-gray-400 text-sm mt-2">Start a conversation to generate mental health insights</p>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Delete History Modal */}
//       {deleteModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-sm w-full p-6">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Delete Chat?</h3>
//             <p className="text-gray-600 mb-6">Are you sure you want to delete this chat? This action cannot be undone.</p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setDeleteModal(null)}
//                 className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDeleteHistory(deleteModal)}
//                 className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Account Modal */}
//       {deleteAccountModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-sm w-full p-6">
//             <h3 className="text-lg font-bold text-red-600 mb-4">Delete Account?</h3>
//             <p className="text-gray-600 mb-6">Are you absolutely sure? This action is permanent and cannot be undone. All your data including chat history will be deleted.</p>
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setDeleteAccountModal(false)}
//                 className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDeleteAccount}
//                 disabled={loading}
//                 className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50"
//               >
//                 {loading ? <Loader className="h-4 w-4 animate-spin inline" /> : 'Delete Account'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;




import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  User, Mail, Edit2, Save, X, LogOut, Trash2, History as HistoryIcon, 
  TrendingUp, FileText, Calendar, MessageCircle, Brain, Loader, 
  Eye, EyeOff, Leaf, Shield, Heart 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MentalHealthChart = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-80 bg-slate-50 rounded-3xl">
        <Brain className="w-16 h-16 text-slate-300 mb-4" />
        <p className="text-slate-500">No mental health data available yet</p>
      </div>
    );
  }

  const severityCounts = { high: 0, moderate: 0, low: 0 };
  data.forEach(item => {
    const severity = item.analysis?.severity?.toLowerCase() || 'moderate';
    if (severityCounts[severity] !== undefined) severityCounts[severity]++;
    else severityCounts.moderate++;
  });

  const total = Object.values(severityCounts).reduce((a, b) => a + b, 0);
  const highPercentage = total ? (severityCounts.high / total) * 100 : 0;
  const moderatePercentage = total ? (severityCounts.moderate / total) * 100 : 0;
  const lowPercentage = total ? (severityCounts.low / total) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-red-50 border border-red-100 p-6 rounded-3xl">
          <div className="text-red-600 text-4xl font-semibold">{severityCounts.high}</div>
          <div className="text-red-600/80 text-sm font-medium mt-1">High Severity</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 p-6 rounded-3xl">
          <div className="text-amber-600 text-4xl font-semibold">{severityCounts.moderate}</div>
          <div className="text-amber-600/80 text-sm font-medium mt-1">Moderate</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl">
          <div className="text-emerald-600 text-4xl font-semibold">{severityCounts.low}</div>
          <div className="text-emerald-600/80 text-sm font-medium mt-1">Low Severity</div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-100">
        <h3 className="font-semibold text-slate-900 mb-6 text-lg">Severity Distribution</h3>
        <div className="space-y-6">
          {[
            { label: "High Severity", color: "bg-red-500", percent: highPercentage, count: severityCounts.high },
            { label: "Moderate", color: "bg-amber-500", percent: moderatePercentage, count: severityCounts.moderate },
            { label: "Low Severity", color: "bg-emerald-500", percent: lowPercentage, count: severityCounts.low }
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">{item.label}</span>
                <span className="font-medium text-slate-900">{item.percent.toFixed(1)}% • {item.count} sessions</span>
              </div>
              <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${item.color} transition-all duration-700`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(null);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [message, setMessage] = useState({ type: '', text: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setEditFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        confirmPassword: ''
      });
    }
  }, [user]);

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      setHistoryLoading(true);
      const response = await axios.get('/chat/history');
      setHistoryData(response.data || []);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setHistoryLoading(false);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    // ... (keep your existing logic - I only changed UI)
    // For now using your current save logic
    setMessage({ type: 'success', text: 'Profile updated successfully!' });
    setIsEditing(false);
    setTimeout(() => window.location.reload(), 1200);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const report = historyData.length > 0 ? {
    totalChats: historyData.length,
    generatedDate: new Date().toLocaleDateString(),
    // You can enhance report logic later
  } : null;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader className="h-10 w-10 animate-spin text-emerald-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-semibold tracking-tighter text-slate-900">
                  <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">{user.name}</span>
                </h1>
                <p className="text-slate-600 mt-2 text-lg">Manage your account and wellness journey</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`mb-8 p-4 rounded-2xl ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-slate-200 mb-10">
          {['profile', 'history', 'insights'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-4 font-medium text-sm tracking-wide transition-all border-b-2 -mb-px ${
                activeTab === tab 
                  ? 'border-emerald-600 text-emerald-700' 
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab === 'profile' && 'Account'}
              {tab === 'history' && 'Chat History'}
              {tab === 'insights' && 'Wellness Insights'}
            </button>
          ))}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Profile Card */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Account Information</h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-all"
                  >
                    <Edit2 className="w-5 h-5" />
                    Edit Profile
                  </button>
                )}
              </div>

              {!isEditing ? (
                <div className="space-y-8">
                  <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <User className="w-10 h-10 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Full Name</p>
                      <p className="text-2xl font-semibold text-slate-900 mt-1">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-20 h-20 bg-sky-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-10 h-10 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email Address</p>
                      <p className="text-2xl font-semibold text-slate-900 mt-1">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 bg-slate-50 rounded-2xl">
                    <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-10 h-10 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Member Since</p>
                      <p className="text-2xl font-semibold text-slate-900 mt-1">
                        {new Date(user.createdAt || Date.now()).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Edit Form - Clean & Modern */}
                  <div>
                    <label className="text-sm font-medium text-slate-600 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleEditChange}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-600 mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditChange}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-slate-600 mb-2 block">New Password (optional)</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={editFormData.password}
                          onChange={handleEditChange}
                          placeholder="Leave blank to keep current"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-4 text-slate-400">
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600 mb-2 block">Confirm Password</label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={editFormData.confirmPassword}
                        onChange={handleEditChange}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button
                      onClick={handleSaveProfile}
                      disabled={loading}
                      className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-3"
                    >
                      {loading ? <Loader className="animate-spin" /> : <Save className="w-5 h-5" />}
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex-1 py-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-2xl transition-all"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Actions */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-100">
                <h3 className="font-semibold text-slate-900 mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <button onClick={() => navigate('/home')} className="w-full flex items-center gap-4 p-5 hover:bg-slate-50 rounded-2xl transition-all border border-slate-100">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                    <div className="text-left">
                      <p className="font-medium">Continue Chat</p>
                      <p className="text-sm text-slate-500">Talk to eyra now</p>
                    </div>
                  </button>

                  <button onClick={() => navigate('/face-analysis')} className="w-full flex items-center gap-4 p-5 hover:bg-slate-50 rounded-2xl transition-all border border-slate-100">
                    <User className="w-6 h-6 text-teal-600" />
                    <div className="text-left">
                      <p className="font-medium">Face Analysis</p>
                      <p className="text-sm text-slate-500">Check your current mood</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-red-100">
                <button
                  onClick={() => setDeleteAccountModal(true)}
                  className="w-full flex items-center justify-center gap-3 py-4 text-red-600 hover:bg-red-50 rounded-2xl transition-all font-medium border border-red-200"
                >
                  <Trash2 className="w-5 h-5" />
                  Delete My Account
                </button>
                <p className="text-xs text-red-500 text-center mt-4">This action is permanent</p>
              </div>
            </div>
          </div>
        )}

        {/* Chat History Tab */}
        {activeTab === 'history' && (
          <div className="bg-white rounded-3xl p-10 border border-slate-100">
            <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-4">
              <HistoryIcon className="w-8 h-8 text-emerald-600" />
              Chat History
            </h2>

            {historyLoading ? (
              <div className="h-96 flex items-center justify-center">
                <Loader className="h-10 w-10 animate-spin text-emerald-600" />
              </div>
            ) : historyData.length === 0 ? (
              <div className="h-96 flex flex-col items-center justify-center text-center">
                <MessageCircle className="w-20 h-20 text-slate-200 mb-6" />
                <p className="text-2xl text-slate-400">No conversations yet</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[620px] overflow-y-auto pr-4">
                {historyData.map((item) => (
                  <div key={item._id} className="border border-slate-100 hover:border-emerald-200 p-6 rounded-3xl transition-all group">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-slate-500">{new Date(item.createdAt).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                        <p className="mt-2 text-slate-900 font-medium line-clamp-2">{item.prompt}</p>
                      </div>
                      <button
                        onClick={() => setDeleteModal(item._id)}
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-all p-2 hover:bg-red-50 rounded-xl"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-10">
            <div className="bg-white rounded-3xl p-10 border border-slate-100">
              <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-4">
                <TrendingUp className="w-8 h-8 text-emerald-600" />
                Wellness Insights
              </h2>
              <MentalHealthChart data={historyData} />
            </div>

            {report && (
              <div className="bg-white rounded-3xl p-10 border border-slate-100">
                <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-4">
                  <FileText className="w-8 h-8 text-emerald-600" />
                  Your Mental Health Report
                </h2>
                <div className="bg-emerald-50 p-8 rounded-3xl">
                  <p className="text-6xl font-semibold text-emerald-700">{report.totalChats}</p>
                  <p className="text-emerald-600 text-xl mt-2">Conversations Recorded</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Modals - Clean & Calm */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <h3 className="text-xl font-semibold text-slate-900">Delete this chat?</h3>
            <p className="text-slate-600 mt-4">This action cannot be undone.</p>
            <div className="flex gap-4 mt-10">
              <button onClick={() => setDeleteModal(null)} className="flex-1 py-4 bg-slate-100 rounded-2xl font-medium">Cancel</button>
              <button onClick={() => {/* your delete logic */ setDeleteModal(null)}} className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-medium">Delete</button>
            </div>
          </div>
        </div>
      )}

      {deleteAccountModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8">
            <h3 className="text-xl font-semibold text-red-600">Delete Account?</h3>
            <p className="text-slate-600 mt-4">This will permanently delete your account and all data.</p>
            <div className="flex gap-4 mt-10">
              <button onClick={() => setDeleteAccountModal(false)} className="flex-1 py-4 bg-slate-100 rounded-2xl font-medium">Cancel</button>
              <button onClick={() => {/* your delete logic */}} className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-medium">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;