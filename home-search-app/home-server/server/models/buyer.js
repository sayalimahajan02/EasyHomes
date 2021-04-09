import mongoose from 'mongoose';

const BuyerSchema = new mongoose.Schema({
    buyerId :{
        type: Number,
        required : "buyer id is required"
    },
    userProfile :{
        type: Object
    }
    
},
{
    versionKey : false
})

TodoSchema.virtual('id').get(function (){
    return this._id.toHexString();
})

TodoSchema.set('toJSON',{virtuals : true});

const model = mongoose.model('buyer',BuyerSchema);

export default model;