import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  CheckCircle,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Mail,
  User,
  Phone
} from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
}

const TrialPage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    petName: '',
    petType: 'dog'
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setStep(3);
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email;
  const isStep2Valid = formData.petName && formData.petType;

  const benefits = [
    {
      icon: Zap,
      title: '24/7 AI Vet Support',
      description: 'Instant answers from Dr. Paw AI anytime'
    },
    {
      icon: CheckCircle,
      title: 'ToothScan™ & PoopScan™',
      description: 'Advanced photo analysis technology'
    },
    {
      icon: Star,
      title: 'Up to 80% Savings',
      description: 'Transparent pricing, huge discounts'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: '100% secure and private'
    }
  ];

  const petTypes = [
    { id: 'dog', name: 'Dog', emoji: '🐕' },
    { id: 'cat', name: 'Cat', emoji: '🐱' },
    { id: 'bird', name: 'Bird', emoji: '🐦' },
    { id: 'rabbit', name: 'Rabbit', emoji: '🐰' },
    { id: 'other', name: 'Other', emoji: '🐾' }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-6">
        {/* Progress Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= num
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > num ? <CheckCircle className="w-5 h-5" /> : num}
                </div>
                {num < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > num ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2 px-4">
            <span>Your Info</span>
            <span>Pet Details</span>
            <span>All Set!</span>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <motion.div
              key="step1"
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Let's Paw-ty! 🎉
                </h1>
                <p className="text-xl text-gray-600">
                  Start your free trial - no card required!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
                      placeholder="Your first name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-800">What you get:</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-purple-700">Trial Benefits:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>14-day free trial</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No credit card required</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Cancel anytime</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Full access to Dr. Paw AI</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>HIPAA compliant & secure</span>
                    </li>
                  </ul>
                </div>
              </div>

              <motion.button
                onClick={handleNext}
                disabled={!isStep1Valid}
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                whileHover={isStep1Valid ? { scale: 1.02 } : {}}
                whileTap={isStep1Valid ? { scale: 0.98 } : {}}
              >
                Continue
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </motion.button>
            </motion.div>
          )}

          {/* Step 2: Pet Information */}
          {step === 2 && (
            <motion.div
              key="step2"
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Tell us about your pet! 🐾
                </h1>
                <p className="text-xl text-gray-600">
                  Help Dr. Paw get to know your furry friend
                </p>
              </div>

              <div className="max-w-md mx-auto space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pet's Name
                  </label>
                  <input
                    type="text"
                    value={formData.petName}
                    onChange={(e) => handleInputChange('petName', e.target.value)}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
                    placeholder="What's your pet's name?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Pet Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {petTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        onClick={() => handleInputChange('petType', type.id)}
                        className={`p-4 rounded-2xl border-2 text-center transition-all duration-300 ${
                          formData.petType === type.id
                            ? 'border-purple-500 bg-purple-50 text-purple-700'
                            : 'border-gray-200 bg-white hover:border-purple-300 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-2xl mb-2">{type.emoji}</div>
                        <div className="font-semibold">{type.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  Back
                </button>
                <motion.button
                  onClick={handleNext}
                  disabled={!isStep2Valid || isLoading}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                  whileHover={isStep2Valid && !isLoading ? { scale: 1.02 } : {}}
                  whileTap={isStep2Valid && !isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Setting up...
                    </div>
                  ) : (
                    <>
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 inline ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div
              key="step3"
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Welcome to Crest! 🎉
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Your free trial is ready, {formData.firstName}!
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-purple-700 mb-4">
                  What's next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Check your email for login details</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Start chatting with Dr. Paw AI right away</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Upload photos for instant analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Book appointments with huge savings</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/chat'}
                >
                  Chat with Dr. Paw
                </motion.button>
                <motion.button
                  className="flex-1 bg-white border-2 border-purple-300 text-purple-600 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Go to Dashboard
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Remember: Your 14-day free trial includes everything. No card required, cancel anytime! 
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TrialPage;