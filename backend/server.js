import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

// Set up MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/shreeji_dental';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB (MEAN Stack)'))
  .catch(err => {
     console.error('Failed to connect to MongoDB, using fallback in-memory mode if needed. Error:', err.message);
  });

// Schema definition
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, default: '' },
  type: { type: String, required: true }, // 'online', 'walkin'
  status: { type: String, default: 'waiting' }, // 'waiting', 'completed', 'cancelled'
  token_number: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

const CLINIC_DATA = {
  "clinic_name": "Shreeji Dental Care",
  "doctor_name": "Dr. Amit Vankar",
  "qualification": "BDS",
  "experience": "12+ Years", // Updated based on image '12+ YEARS OF TRUST'
  "tagline": "Confident Smiles Start Here",
  "address": "GF/04, Yaksh Shree Complex, Below Vraj Hospital, Chhani Road, Vadodara - 390024",
  "phone": "+91 75673 68089",
  "timings": {
      "morning": "9:30 AM - 1:00 PM",
      "evening": "4:30 PM - 8:00 PM",
      "closed": "Sunday Closed"
  },
  "rating": 4.9,
  "reviews": 300,
  "services": [
      "Root Canal Treatment",
      "Dental Implants",
      "Teeth Whitening",
      "Tooth Extraction",
      "Crowns & Bridges",
      "Dentures",
      "Gum Treatment",
      "Dental Cleaning"
  ]
};

// Routes
app.get('/api/clinic', (req, res) => {
  res.json(CLINIC_DATA);
});

app.get('/api/services', (req, res) => {
  res.json({ services: CLINIC_DATA.services });
});

app.get('/api/queue', async (req, res) => {
  try {
    const activeAppt = await Appointment.findOne({ status: 'waiting' }).sort({ token_number: 1 });
    const active_token = activeAppt ? activeAppt.token_number : 0;

    const lastAppt = await Appointment.findOne().sort({ token_number: -1 });
    const next_token = lastAppt ? lastAppt.token_number + 1 : 1;

    const patients_ahead = await Appointment.countDocuments({
      status: 'waiting',
      token_number: { $gte: active_token, $lt: next_token }
    });
    
    const estimated_wait_time = patients_ahead * 15;

    res.json({
      active_token,
      next_token,
      estimated_wait_time
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const getEtaString = (token) => {
  const d = new Date();
  d.setHours(9, 30, 0, 0); // 9:30 AM
  d.setMinutes(d.getMinutes() + (token * 15));
  return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

app.post('/api/book', async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const lastAppt = await Appointment.findOne().sort({ token_number: -1 });
    const next_token = lastAppt ? lastAppt.token_number + 1 : 1;

    const appointment = new Appointment({ name, phone, type: 'online', token_number: next_token });
    await appointment.save();

    res.status(201).json({
      message: 'Appointment booked successfully',
      token_number: next_token,
      eta: getEtaString(next_token),
      appointment
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/walkin', async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const lastAppt = await Appointment.findOne().sort({ token_number: -1 });
    const next_token = lastAppt ? lastAppt.token_number + 1 : 1;

    const appointment = new Appointment({ name, phone, type: 'walkin', token_number: next_token });
    await appointment.save();

    res.status(201).json({
      message: 'Walk-in added successfully',
      token_number: next_token,
      eta: getEtaString(next_token),
      appointment
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ token_number: 1 });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/appointments/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    if (!['waiting', 'completed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }
    
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id, 
      { status },
      { new: true }
    );
    
    if (appointment) {
      res.json({ message: 'Status updated', appointment });
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
