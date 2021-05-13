const mongoose=require('mongoose');
const tooltipSchema =mongoose.Schema({
    columnName: {
    type:String,
    required:true
  },
  columnCode: {
    type:String,
    required:true
  },
  tooltip: {
    type:String,
    required:true
  }
});
module.exports=mongoose.model('tooltipTable',tooltipSchema);
