import mongoose from 'mongoose';

const agencySchema = mongoose.Schema({
  agencyName: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  website: {
    type: String,
  },
  companyAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });
const Agency = mongoose.model('Agency', agencySchema);

export default Agency;
