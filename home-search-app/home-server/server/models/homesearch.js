import mongoose from 'mongoose';
const HomeSchema = new mongoose.Schema({
},
{
    // timestamps: true,
    versionKey: false
}
);

//A virtual property named id will be copied and converted into hexa-decimal string
HomeSchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// Converting the virtual id to JSON
HomeSchema.set('toJSON', { virtuals: true });

// const model = mongoose.model('TodoList', TodoSchema);
const model = mongoose.model('homesearch', HomeSchema);

export default model;