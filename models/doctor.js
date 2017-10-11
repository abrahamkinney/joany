var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DoctorSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Doctor', DoctorSchema);
