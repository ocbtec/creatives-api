const mongoose = require('mongoose');

const CreativesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  emailVisible: {
    type: Boolean
  },
  emailNotificationAllowed: {
    type: Boolean
  },
  subscribeToNewsletter: {
    type: Boolean
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  website: {
    type: String
  },
  category: {
    type: [String],
    required: true
  },
  social: {
    deviantArt: {
      type: String
    },
    flickr: {
      type: String
    },
    soundcloud: {
      type: String
    },
    instagram: {
      type: String
    },
    behance: {
      type: String
    },
    vimeo: {
      type: String
    }
  },
  services: {
    type: Boolean
  },
  creative: {
    type: String,
    default: 'true'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Creatives = mongoose.model('creatives', CreativesSchema);
