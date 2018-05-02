import mongoose from 'mongoose'
const Schema = mongoose.Schema

var CorrectionSchema = new Schema({
    articleUrl: {
        type: String
    },
    originalText: {
        type: String
    },
    usersText: {
        type: String
    },
    isApproved: {
        type: Boolean
    }
});

module.exports = mongoose.model('Corrections', CorrectionSchema);