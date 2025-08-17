import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Heart,
  Zap,
  DollarSign,
  Activity,
  Camera,
  MessageCircle,
  Phone,
  Shield,
  Clock,
  Star,
  ArrowRight,
  Play,
  CheckCircle
} from 'lucide-react';

const HomePage = () => {
  const [pricingValue, setPricingValue] = useState(250);
  const crestPrice = Math.round(pricingValue * 0.2);
  const savings = Math.round(((pricingValue - crestPrice) / pricingValue) * 100);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              Pet Care Without
              <br />
              the Stress
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              24/7 AI vet support, instant bookings & up to{' '}
              <span className="font-bold text-purple-600">80% savings</span> ✨
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/trial">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                  <span className="block text-sm font-normal opacity-90">
                    No Card Needed
                  </span>
                </motion.button>
              </Link>

              <Link to="/chat">
                <motion.button
                  className="bg-white/80 backdrop-blur-lg text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:bg-purple-50 transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Dr. Paw
                  <Play className="w-5 h-5 inline ml-2" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              className="relative max-w-lg mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-8 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">Dr. Paw AI</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <Camera className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="bg-purple-100 p-4 rounded-xl mb-4">
                    <p className="text-sm text-gray-700">
                      "Your pup looks healthy! 🐕 I recommend a dental check-up soon. Would you like me to book an appointment?"
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">
                      Book Now
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm">
                      Tell me more
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Pet Parents Love Us 🐾
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Emergency Help',
                description: '24/7 instant AI support when your pet needs help most',
                color: 'from-red-500 to-pink-500'
              },
              {
                icon: DollarSign,
                title: 'Save Money',
                description: 'Up to 80% savings on vet visits with transparent pricing',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Activity,
                title: 'Health Track',
                description: 'Smart health monitoring with AI-powered insights',
                color: 'from-purple-500 to-blue-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Your AI Vet Team 🤖
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dr. Paw AI */}
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dr. Paw AI</h3>
                  <p className="opacity-90">Chat & Photo Analysis</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>ToothScan™ Technology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>PoopScan™ Analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Instant Health Insights</span>
                </li>
              </ul>
              <Link to="/chat">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Try Dr. Paw
                </button>
              </Link>
            </motion.div>

            {/* Marcia AI */}
            <motion.div
              className="bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl p-8 text-white"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Marcia AI</h3>
                  <p className="opacity-90">SMS & Call Support</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>24/7 Text Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Emergency Calling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Appointment Booking</span>
                </li>
              </ul>
              <button className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Coming Soon
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works ⚡
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Show Your Pet',
                description: 'Upload a photo or video of your furry friend',
                icon: Camera
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Get instant health insights from Dr. Paw AI',
                icon: Activity
              },
              {
                step: '03',
                title: 'Take Action',
                description: 'Book appointment or follow AI recommendations',
                icon: ArrowRight
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-purple-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Pricing Module */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Fetch Savings 💰
          </motion.h2>

          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-gray-800">
                Wellness Exam Cost:
              </label>
              <input
                type="range"
                min="100"
                max="500"
                value={pricingValue}
                onChange={(e) => setPricingValue(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$100</span>
                <span>$500</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-red-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Traditional Vet</h3>
                <div className="text-4xl font-bold text-red-600">${pricingValue}</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Crest Price</h3>
                <div className="text-4xl font-bold text-purple-600">${crestPrice}</div>
                <div className="text-sm text-purple-500 mt-2">
                  Save {savings}%!
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <motion.div
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                You save ${pricingValue - crestPrice}!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted by Pet Parents 🛡️
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Shield,
                title: 'HIPAA Compliant',
                description: '100% secure & private'
              },
              {
                icon: Clock,
                title: 'Cancel Anytime',
                description: 'No long-term commitments'
              },
              {
                icon: Star,
                title: 'No Membership Fees',
                description: 'Pay only for what you use'
              }
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Paw-ty? 🎉
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Start your free trial today – no card required!
            </p>
            
            <Link to="/trial">
              <motion.button
                className="bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6 inline ml-2" />
              </motion.button>
            </Link>

            <p className="text-sm mt-4 opacity-75">
              No card required • Cancel anytime • 100% HIPAA compliant
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;