const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    id: Objectld,
    frstName: String,
    surname: String,
    adress: Objectld,
});
const adressSchema = new Schema({
    students: {
        type: mongoose.Types.ObjectId,
        ref: 'Adress',
    },
    title: 'string',
});


const Adress = mongoose.model('Adress', adressSchema);
const Students = mongoose.model('Students', studentsSchema);
