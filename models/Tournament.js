const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const RosterSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


const SubmissionSchema = new mongoose.Schema({
    teamsize: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const TournamentSchema = new mongoose.Schema({
    photo: {
        type: String
    },
    content: {
        type: String
    },
    url: {
        type: String
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    },
    comments: [CommentSchema],
    roster: [RosterSchema],
    submissions: [SubmissionSchema]    
},{
    timestamps: true
})

module.exports = mongoose.model('Tournament', TournamentSchema)