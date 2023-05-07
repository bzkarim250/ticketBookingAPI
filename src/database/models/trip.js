import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  agency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Agency',
    required: true
  },
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  travelTime: {
    type: [String],
    required: true
  },
  price: { type: Number, required: true },
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
