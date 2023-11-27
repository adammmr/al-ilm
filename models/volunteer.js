const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    s_name: {
        type: String,
        // required: true
    },
    m_name: String,
    dob: {
        type: Date,
        // required: true
    },
    address: String,
    phone: {
        type: [String],
    //     validate: {
    //         validator: function (v) {
    //             return v.length > 0; // Ensure at least one phone number is provided
    //         },
    //         message: 'At least one phone number is required.'
    //     }
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    secret: {
        type: String,
        select: false // Make the secret field not visible when querying the database
    },
    professions: {
        type: [String],
        default: []
    },
    self_statement: String,
    v_work: String,
    pupils: {
        type: [String],
        default: []
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
