var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DoctorSchema   = new Schema({
    name: String,
    address: String,
    latitude: String,
    longitude: String,
});

module.exports = mongoose.model('Doctor', DoctorSchema);


// doctors:
// ● doctor_id
// ● group_id
// ● name
// ● address
// ● latitude
// ● longitude
// doctors_specialties:
// ● doctor_id
// ● specialty_id
// specialties
// ● specialty_id
// ● name
