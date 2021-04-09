import mongoose from 'mongoose';

const BuyerListSchema = new mongoose.Schema({
    buyer :{
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

const model = mongoose.model('buyerList',BuyerListSchema);

export default model;