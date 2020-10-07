
'use strict' ;

let mongoose = require('mongoose');
let Schema = mongoose.Schema

//This creates the schemafor the structure in mongodb
//Sets up fields and their types
let ResourceSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a name for your resource'
    },
    url: {
        type: String,
        required: 'Please enter a valid URL for your resource'
    },
    skill: {
        type: [{
            type: String,
            enum: ['beginner', 'intermediate', 'advanaced']
        }],
        required: 'Please enter a skill level of beginner intermediate or advance'
    }
module.export = mongoose.model('Resources', ResourceSchema)
})
