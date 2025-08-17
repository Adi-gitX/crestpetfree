import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  CheckCircle,
  Star,
  Phone,
  Video,
  User
} from 'lucide-react';

interface TimeSlot {
  time: string;
  available: boolean;
  price: number;
  originalPrice: number;
  discount: number;
}

interface Appointment {
  date: string;
  time: string;
  type: string;
  price: number;
  veterinarian: string;
}

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState('wellness');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState<Appointment | null>(null);

  const appointmentTypes = [
    {
      id: 'wellness',
      name: 'Wellness Exam',
      description: 'Complete health checkup for your pet',
      icon: CheckCircle,
      basePrice: 250
    },
    {
      id: 'dental',
      name: 'Dental Cleaning',
      description: 'Professional teeth cleaning and oral health check',
      icon: Star,
      basePrice: 400
    },
    {
      id: 'urgent',
      name: 'Urgent Care',
      description: 'Same-day care for non-emergency issues',
      icon: Clock,
      basePrice: 180
    }
  ];

  const timeSlots: TimeSlot[] = [
    { time: '9:00 AM', available: true, price: 49, originalPrice: 250, discount: 80 },
    { time: '10:30 AM', available: true, price: 52, originalPrice: 250, discount: 79 },
    { time: '12:00 PM', available: false, price: 49, originalPrice: 250, discount: 80 },
    { time: '2:00 PM', available: true, price: 45, originalPrice: 250, discount: 82 },
    { time: '3:30 PM', available: true, price: 49, originalPrice: 250, discount: 80 },
    { time: '5:00 PM', available: true, price: 55, originalPrice: 250, discount: 78 }
  ];

  const veterinarians = [
    'Dr. Sarah Mitchell',
    'Dr. James Rodriguez',
    'Dr. Emily Chen',
    'Dr. Michael Johnson'
  ];

  const handleBooking = () => {
    if (!selectedTime) return;

    const selectedSlot = timeSlots.find(slot => slot.time === selectedTime);
    const selectedAppointmentType = appointmentTypes.find(type => type.id === selectedType);
    
    if (selectedSlot && selectedAppointmentType) {
      const appointment: Appointment = {
        date: selectedDate,
        time: selectedTime,
        type: selectedAppointmentType.name,
        price: selectedSlot.price,
        veterinarian: veterinarians[Math.floor(Math.random() * veterinarians.length)]
      };

      setAppointmentDetails(appointment);
      setShowConfirmation(true);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Book Your Appointment 📅
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect time for your pet's care - with up to 80% savings!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Appointment Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Appointment Type Selection */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                What does your pet need? 🐾
              </h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                {appointmentTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedType === type.id
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 bg-white hover:border-purple-300 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <type.icon className={`w-8 h-8 mx-auto mb-3 ${
                      selectedType === type.id ? 'text-purple-600' : 'text-gray-600'
                    }`} />
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <p className="text-sm opacity-80">{type.description}</p>
                    <div className="mt-3 text-sm font-bold">
                      From ${Math.round(type.basePrice * 0.2)}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-purple-600" />
                Pick a Date
              </h2>
              
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none text-lg"
              />
              
              <p className="mt-3 text-purple-600 font-medium">
                Selected: {formatDate(selectedDate)}
              </p>
            </motion.div>

            {/* Time Slots */}
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-600" />
                Available Times
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <motion.button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                      !slot.available
                        ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : selectedTime === slot.time
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 bg-white hover:border-purple-300 text-gray-700'
                    }`}
                    whileHover={slot.available ? { scale: 1.02 } : {}}
                    whileTap={slot.available ? { scale: 0.98 } : {}}
                  >
                    <div className="font-semibold">{slot.time}</div>
                    {slot.available && (
                      <>
                        <div className="text-sm text-gray-500 line-through">
                          ${slot.originalPrice}
                        </div>
                        <div className="text-lg font-bold text-purple-600">
                          ${slot.price}
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          Save {slot.discount}%!
                        </div>
                      </>
                    )}
                    {!slot.available && (
                      <div className="text-sm">Booked</div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="space-y-6">
            <motion.div
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl sticky top-24"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Booking Summary 📋
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <span className="font-medium">
                    {appointmentTypes.find(type => type.id === selectedType)?.name}
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>{formatDate(selectedDate)}</span>
                </div>
                
                {selectedTime && (
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                    <span>{selectedTime}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span>In-person visit</span>
                </div>
              </div>

              {selectedTime && (
                <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Original Price:</span>
                    <span className="text-gray-500 line-through text-lg">
                      ${timeSlots.find(slot => slot.time === selectedTime)?.originalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Crest Price:</span>
                    <span className="text-2xl font-bold text-purple-600">
                      ${timeSlots.find(slot => slot.time === selectedTime)?.price}
                    </span>
                  </div>
                  <div className="text-center text-green-600 font-medium">
                    You save {timeSlots.find(slot => slot.time === selectedTime)?.discount}%!
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime - no fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>HIPAA compliant & secure</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 AI support included</span>
                </div>
              </div>

              <motion.button
                onClick={handleBooking}
                disabled={!selectedTime}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-2xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-300"
                whileHover={selectedTime ? { scale: 1.02 } : {}}
                whileTap={selectedTime ? { scale: 0.98 } : {}}
              >
                {selectedTime ? 'Book Appointment' : 'Select a Time'}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && appointmentDetails && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Appointment Confirmed! 🎉
                </h3>
                
                <div className="space-y-3 text-left bg-gray-50 rounded-2xl p-6 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">{appointmentDetails.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">{formatDate(appointmentDetails.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{appointmentDetails.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Veterinarian:</span>
                    <span className="font-semibold">{appointmentDetails.veterinarian}</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-purple-600">${appointmentDetails.price}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6">
                  We've sent confirmation details to your email. You can cancel anytime with no fees!
                </p>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Done
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingPage;