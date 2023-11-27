const mongoose = require('mongoose');

const pupilSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    s_name: {
        type: String,
        required: true
    },
    m_name: String,
    photo: String, // Assuming the photo is a URL or file path
    maiden_name: String,
    notes: [{
        text: String,
        created_at: {
            type: Date,
            default: Date.now
        }
    }],
    guardian: {
        type: String
        // mongoose.Schema.Types.ObjectId,
        // ref: 'Guardian'
    },
    lk_address: String,
    guardian_contact: {
        type: [String],
        default: []
    },
    dob: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    classes_enrol: [{
        type: String
        // mongoose.Schema.Types.ObjectId,
        // ref: 'Class'
    }]
});

const Pupil = mongoose.model('Pupil', pupilSchema);

module.exports = Pupil;
