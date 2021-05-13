const mongoose=require('mongoose');
const studentDataSchema=mongoose.Schema({
  prn: {
    type:String,
    unique: true,
    required:true
  },
  firstName: {
    type:String,
    required:true
  },
  lastName: {
    type:String,
    required:true
  },
  phoneNo: {
    type:String,
    required:true
  },
  email: {
    type:String,
    required:true
  },
  branch: {
    type:String,
    required:true
  },
  isPlaced:{
    type:Boolean,
    required:true
  }
});
module.exports=mongoose.model('StudentModel',studentDataSchema);
