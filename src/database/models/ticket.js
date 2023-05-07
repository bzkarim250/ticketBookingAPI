import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus',
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
  },
  numberOfTickets: {
    type: Number,
    required: true
  },
  seatNumbers: [
    {
      type: Number,
      required: true
    }],
  departureTime: {
    type: Date,
    required: true
  },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ['confirmed', 'cancelled', 'expired'],
    default: 'confirmed'
  }
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);

export default Ticket;
