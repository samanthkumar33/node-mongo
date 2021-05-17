const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  Name :{
      type : String,
      required :"Required"
  },
  Email : { 
      type:String

  },
  PhoneNO:{
      type:String
  }
});
mongoose.model("Course",CourseSchema)