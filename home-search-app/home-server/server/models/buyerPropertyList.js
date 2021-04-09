import mongoose from 'mongoose';

const BuyerPropertyListSchema = new mongoose.Schema({
    buyer :{
        type: Object
    },
    property :{
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

const model = mongoose.model('buyerPropertyList',BuyerPropertyListSchema);

export default model;