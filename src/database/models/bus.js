import mongoose from 'mongoose';

const busSchema = mongoose.Schema({
  plateNo: {
    type: String,
    unique: true,
  },
  seat: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
  availableSeats: {
    type: Number,
  }

}, { timestamps: true });
const Bus = mongoose.model('Bus', busSchema);
export default Bus;
