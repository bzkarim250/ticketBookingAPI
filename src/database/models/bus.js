import mongoose from 'mongoose';

const busSchema = mongoose.Schema({
  plateNo: {
    type: String,
    unique: true,
  },
  seat: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    default: true,
  },
  availableSeats: {
    type: Number,
    required: true
  },
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
  }
}, { timestamps: true });

const Bus = mongoose.model('Bus', busSchema);
export default Bus;
