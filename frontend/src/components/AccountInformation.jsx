

// frontend/src/components/AccountInformation.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { 
  User, Mail, Calendar, Edit2, Save, X, Eye, EyeOff, Loader, 
  Sparkles, Shield 
} from "lucide-react";

const AccountInformation = () => {
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setEditFormData({
        name: user.name || "",
        email: user.email || "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editFormData.password && editFormData.password !== editFormData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    // Simulate API update (replace with real backend call later)
    setTimeout(() => {
      const updatedUser = { 
        ...user, 
        name: editFormData.name, 
        email: editFormData.email 
      };
      
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      setLoading(false);
      setIsEditing(false);
      window.location.reload(); // Temporary - replace with context update later
    }, 800);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-96 text-slate-500">
        Please log in to view your account information.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Account Information</h1>
            <p className="text-slate-600">Manage your personal details and preferences</p>
          </div>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-3xl font-semibold transition-all active:scale-[0.985] shadow-sm"
          >
            <Edit2 size={20} />
            Edit Profile
          </button>
        )}
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Profile Overview */}
        {!isEditing ? (
          <div className="p-10 space-y-8">
            <div className="flex items-center gap-6 p-8 bg-emerald-50 rounded-3xl">
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-sm">
                <User className="w-12 h-12 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">{user.name}</h2>
                <p className="text-emerald-700 font-medium">{user.email}</p>
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500">
                  <Shield className="w-4 h-4" />
                  Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : '2025'}
                </div>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center">
                    <User className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Full Name</p>
                    <p className="text-xl font-semibold text-slate-900">{user.name}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email Address</p>
                    <p className="text-xl font-semibold text-slate-900">{user.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 md:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Member Since</p>
                    <p className="text-xl font-semibold text-slate-900">
                      {user.createdAt 
                        ? new Date(user.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric'
                          }) 
                        : 'N/A'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Edit Mode */
          <div className="p-10 space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-semibold text-slate-900">Update Your Information</h3>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  New Password <span className="text-slate-400">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={editFormData.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current password"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                </div>
              </div>

              {editFormData.password && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={editFormData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-300 transition-all"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 rounded-3xl font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.985] disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin w-5 h-5" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Changes
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditFormData({
                    name: user.name || "",
                    email: user.email || "",
                    password: "",
                    confirmPassword: "",
                  });
                }}
                className="flex-1 border border-slate-300 hover:bg-slate-50 py-4 rounded-3xl font-semibold text-slate-700 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Gentle Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-500">
          Your information is secure and encrypted. Changes may take a moment to reflect.
        </p>
      </div>
    </div>
  );
};

export default AccountInformation;