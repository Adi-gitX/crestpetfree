import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Calendar,
  DollarSign,
  Activity,
  Zap,
  MessageCircle,
  Camera,
  TrendingUp,
  Clock,
  
  ArrowRight,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const upcomingAppointments = [
    {
      id: 1,
      type: 'Wellness Exam',
      date: '2025-01-15',
      time: '2:00 PM',
      vet: 'Dr. Sarah Mitchell',
      price: 49,
      originalPrice: 250
    },
    {
      id: 2,
      type: 'Dental Cleaning',
      date: '2025-02-01',
      time: '10:30 AM',
      vet: 'Dr. James Rodriguez',
      price: 85,
      originalPrice: 400
    }
  ];

  const healthInsights = [
    {
      id: 1,
      date: '2025-01-02',
      type: 'ToothScan™',
      result: 'Good oral health detected',
      confidence: 92
    },
    {
      id: 2,
      date: '2024-12-28',
      type: 'PoopScan™',
      result: 'Normal digestive health',
      confidence: 88
    },
    {
      id: 3,
      date: '2024-12-15',
      type: 'General Health',
      result: 'Active and healthy',
      confidence: 95
    }
  ];

  const totalSavings = 516; // Example total
  const thisMonthSavings = 201;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome back! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Here's how Buddy's health is looking today
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link to="/chat">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Chat with Dr. Paw
                </motion.button>
              </Link>
              <Link to="/booking">
                <motion.button
                  className="bg-white border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-2xl font-semibold hover:bg-purple-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-5 h-5 inline mr-2" />
                  Book Appointment
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            {
              icon: DollarSign,
              title: 'Total Savings',
              value: `$${totalSavings}`,
              subtitle: 'Since joining Crest',
              color: 'from-green-500 to-emerald-500',
              change: '+$201 this month'
            },
            {
              icon: Activity,
              title: 'Health Score',
              value: '92%',
              subtitle: 'Overall wellness',
              color: 'from-blue-500 to-indigo-500',
              change: '+5% this week'
            },
            {
              icon: Calendar,
              title: 'Next Appointment',
              value: 'Jan 15',
              subtitle: 'Wellness exam',
              color: 'from-purple-500 to-pink-500',
              change: 'In 8 days'
            },
            {
              icon: Zap,
              title: 'AI Insights',
              value: '12',
              subtitle: 'This month',
              color: 'from-orange-500 to-red-500',
              change: '+3 new insights'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">{stat.title}</h3>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <p className="text-sm text-gray-600 mb-2">{stat.subtitle}</p>
              <div className="text-xs text-green-600 font-medium">{stat.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                  Upcoming Appointments
                </h2>
                <Link to="/booking" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Book New
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-lg">{appointment.type}</h3>
                        <p className="text-gray-600">
                          {new Date(appointment.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })} at {appointment.time}
                        </p>
                        <p className="text-sm text-gray-500">with {appointment.vet}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 line-through">
                          ${appointment.originalPrice}
                        </div>
                        <div className="text-2xl font-bold text-purple-600">
                          ${appointment.price}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                          Save {Math.round(((appointment.originalPrice - appointment.price) / appointment.originalPrice) * 100)}%!
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Health Insights */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-purple-600" />
                  Recent Health Insights
                </h2>
                <Link to="/chat" className="text-purple-600 hover:text-purple-700 font-semibold">
                  New Scan
                </Link>
              </div>

              <div className="space-y-4">
                {healthInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      {insight.type.includes('Tooth') ? (
                        <Camera className="w-6 h-6 text-white" />
                      ) : insight.type.includes('Poop') ? (
                        <Zap className="w-6 h-6 text-white" />
                      ) : (
                        <Heart className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-gray-800">{insight.type}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(insight.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-gray-700">{insight.result}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${
                        insight.confidence >= 90 ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        {insight.confidence}% confidence
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Actions</h3>
              
              <div className="space-y-4">
                <Link to="/chat">
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-between"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <span>Ask Dr. Paw</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link to="/chat">
                  <motion.button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl font-semibold flex items-center justify-between"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Camera className="w-5 h-5 mr-3" />
                      <span>Upload Photo</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <Link to="/booking">
                  <motion.button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl font-semibold flex items-center justify-between"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Urgent Care</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Savings Summary */}
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Savings This Year
              </h3>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2">${totalSavings}</div>
                <p className="opacity-90">Total saved with Crest</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>This Month:</span>
                  <span className="font-bold">${thisMonthSavings}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Average per Visit:</span>
                  <span className="font-bold">79% off</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Visits This Year:</span>
                  <span className="font-bold">8</span>
                </div>
              </div>

              <p className="text-sm opacity-75 mt-4 text-center">
                Keep up the great work taking care of Buddy! 🐾
              </p>
            </motion.div>

            {/* Pet Profile */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800">Pet Profile</h3>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  🐕
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Buddy</h4>
                <p className="text-gray-600 mb-4">Golden Retriever • 3 years old</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-purple-50 rounded-xl p-3">
                    <div className="font-semibold text-purple-700">Weight</div>
                    <div className="text-gray-700">65 lbs</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="font-semibold text-blue-700">Last Visit</div>
                    <div className="text-gray-700">Dec 15</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;