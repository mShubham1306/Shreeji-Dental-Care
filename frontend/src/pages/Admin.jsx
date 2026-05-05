import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Users, Plus, CheckCircle, RefreshCcw } from 'lucide-react';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [queueData, setQueueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [walkinName, setWalkinName] = useState('');
  const [walkinPhone, setWalkinPhone] = useState('');
  const [adding, setAdding] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [appRes, queueRes] = await Promise.all([
        api.get('/appointments'),
        api.get('/queue')
      ]);
      setAppointments(appRes.data);
      setQueueData(queueRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddWalkin = async (e) => {
    e.preventDefault();
    if (!walkinName) return;
    setAdding(true);
    try {
      await api.post('/walkin', { name: walkinName, phone: walkinPhone });
      setWalkinName('');
      setWalkinPhone('');
      fetchData(); // Refresh data
    } catch (error) {
      console.error(error);
    } finally {
      setAdding(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
       await api.put(`/appointments/${id}/status`, { status });
       fetchData();
    } catch(err) {
       console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-textPrimary">Clinic Admin Panel</h1>
          <button onClick={fetchData} className="flex items-center text-primary bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors font-medium">
            <RefreshCcw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Dashboard Stats */}
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm text-textMuted font-medium">Active Token (Now Serving)</p>
              <h3 className="text-3xl font-bold text-textPrimary">{queueData?.active_token || 0}</h3>
            </div>
          </div>
          
          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm text-textMuted font-medium">Total Completed</p>
              <h3 className="text-3xl font-bold text-textPrimary">
                {appointments.filter(a => a.status === 'completed').length}
              </h3>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mr-4">
               <Users className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm text-textMuted font-medium">Total Waiting</p>
              <h3 className="text-3xl font-bold text-textPrimary">
                 {appointments.filter(a => a.status === 'waiting').length}
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Walkin Form */}
          <div className="lg:col-span-1">
            <div className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-textPrimary mb-6 flex items-center">
                <Plus className="w-5 h-5 mr-2 text-primary" /> Add Walk-in Patient
              </h2>
              <form onSubmit={handleAddWalkin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1">Patient Name</label>
                  <input 
                    type="text" 
                    value={walkinName} 
                    onChange={e => setWalkinName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    value={walkinPhone} 
                    onChange={e => setWalkinPhone(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Enter phone"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={adding}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                >
                  {adding ? 'Adding...' : 'Generate Token'}
                </button>
              </form>
            </div>
          </div>

          {/* Queue List */}
          <div className="lg:col-span-2">
             <div className="bg-surface p-6 rounded-2xl shadow-sm border border-gray-100">
               <h2 className="text-xl font-bold text-textPrimary mb-6">Today's Appointments Queue</h2>
               <div className="overflow-x-auto">
                 <table className="w-full">
                   <thead className="bg-gray-50 border-b border-gray-100">
                     <tr>
                       <th className="text-left py-3 px-4 text-sm font-medium text-textMuted lowercase capitalize">Token</th>
                       <th className="text-left py-3 px-4 text-sm font-medium text-textMuted lowercase capitalize">Patient</th>
                       <th className="text-left py-3 px-4 text-sm font-medium text-textMuted lowercase capitalize">Type</th>
                       <th className="text-left py-3 px-4 text-sm font-medium text-textMuted lowercase capitalize">Status</th>
                       <th className="text-right py-3 px-4 text-sm font-medium text-textMuted lowercase capitalize">Actions</th>
                     </tr>
                   </thead>
                   <tbody>
                     {appointments.map((apt) => (
                       <tr key={apt.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                         <td className="py-4 px-4">
                           <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded">#{apt.token_number}</span>
                         </td>
                         <td className="py-4 px-4">
                           <div className="font-semibold text-textPrimary">{apt.name}</div>
                           <div className="text-xs text-textMuted">{apt.phone || 'No phone'}</div>
                         </td>
                         <td className="py-4 px-4">
                           <span className={`text-xs px-2 py-1 rounded-full font-medium ${apt.type === 'walkin' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'}`}>
                              {apt.type}
                           </span>
                         </td>
                         <td className="py-4 px-4">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              apt.status === 'completed' ? 'bg-green-100 text-green-700' :
                              apt.status === 'waiting' ? 'bg-blue-100 text-blue-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {apt.status}
                            </span>
                         </td>
                         <td className="py-4 px-4 text-right">
                           {apt.status === 'waiting' && (
                             <div className="flex justify-end space-x-2">
                               <button 
                                 onClick={() => updateStatus(apt.id, 'completed')}
                                 className="px-3 py-1 bg-green-50 text-green-600 rounded hover:bg-green-100 text-sm font-medium transition-colors"
                               >
                                 Complete
                               </button>
                               <button 
                                 onClick={() => updateStatus(apt.id, 'cancelled')}
                                 className="px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100 text-sm font-medium transition-colors"
                               >
                                 Cancel
                               </button>
                             </div>
                           )}
                         </td>
                       </tr>
                     ))}
                     {appointments.length === 0 && (
                       <tr>
                         <td colSpan="5" className="py-8 text-center text-textMuted">No appointments yet today.</td>
                       </tr>
                     )}
                   </tbody>
                 </table>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;
