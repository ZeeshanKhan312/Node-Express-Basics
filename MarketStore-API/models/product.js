const mongoose=require('mongoose')

const product=new mongoose.Schema({ 
    name:{
        type:String,
        required:[true,'product name must be provided'],
        length:15
    },
    price:{
        type:Number,
        required:[true,'product price must be provided'],
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        // enum:['ikea','liddy','caressa','marcos']
        enum:{
            values:['ikea','liddy','caressa','marcos','DanZee'],
            msg:'{VALUE} is not supported'
        }
    }
})

module.exports=mongoose.model('Product',product);