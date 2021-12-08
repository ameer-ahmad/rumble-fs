import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    status: Boolean,
    section: {
        type: String,
        default: 'A'
    }
});

const todo = mongoose.model('todo', todoSchema);

export default todo;