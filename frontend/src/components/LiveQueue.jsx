import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import { Clock, Users, ChevronRight } from 'lucide-react';

const LiveQueue = () => {
  const [queueData, setQueueData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQueue = async () => {
    try {
      const response = await api.get('/queue');
      setQueueData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching queue:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
    // Poll every 10 seconds for real-time updates
    const interval = setInterval(fetchQueue, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-background" id="queue">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-semibold text-sm">Live updates</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-textPrimary leading-tight mb-6">
              Smart Token <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Queue System</span>
            </h2>
            <p className="text-lg text-textMuted mb-8 leading-relaxed max-w-lg">
              Keep an eye on the current wait time from anywhere. Coordinate your appointment via WhatsApp, and arrive exactly when it's your turn.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time token tracking",
                "Accurate wait time estimations",
                "Direct WhatsApp booking coordination"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-textPrimary font-medium">
                  <div className="mr-4 p-1 rounded-full bg-secondary/20 text-secondary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: The Widget */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
             
             <div className="bg-surface border border-gray-100 rounded-3xl p-8 shadow-2xl relative z-10">
               <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
                  <h3 className="text-2xl font-bold text-textPrimary">Live Queue Status</h3>
                  <button onClick={fetchQueue} className="text-primary p-2 hover:bg-primary/5 rounded-full transition-colors" title="Refresh">
                    <svg className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
               </div>

               {loading && !queueData ? (
                 <div className="space-y-6">
                   <div className="h-24 bg-gray-100 rounded-2xl animate-pulse"></div>
                   <div className="h-24 bg-gray-100 rounded-2xl animate-pulse"></div>
                 </div>
               ) : (
                 <div className="space-y-6">
                   {/* Current Serving */}
                   <div className="bg-primary/5 rounded-2xl p-6 flex items-center justify-between border border-primary/10">
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-md">
                         {queueData?.active_token || '-'}
                       </div>
                       <div>
                         <p className="text-sm text-textMuted font-medium uppercase tracking-wider">Now Serving</p>
                         <p className="text-lg font-bold text-textPrimary">Token Number</p>
                       </div>
                     </div>
                     <div className="text-primary">
                       <Users className="w-8 h-8 opacity-50" />
                     </div>
                   </div>

                   {/* Next Available & ETA */}
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <p className="text-sm text-textMuted font-medium mb-1">Next Token Available</p>
                        <p className="text-3xl font-bold text-textPrimary">{queueData?.next_token || '-'}</p>
                     </div>
                     <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                        <div className="flex items-center gap-2 mb-1 text-textMuted">
                           <Clock className="w-4 h-4" />
                           <p className="text-sm font-medium">Est. Wait Time</p>
                        </div>
                        <p className="text-3xl font-bold text-textPrimary">
                          {queueData?.estimated_wait_time ? `${queueData.estimated_wait_time}m` : '0m'}
                        </p>
                     </div>
                   </div>

                   </div>
               )}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveQueue;
