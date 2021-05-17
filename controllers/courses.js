const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/add",(req,res) => {
    res.render("add-course");
})

router.post("/create",(req,res) =>{

    const course = new CourseModel();
    course.Name = req.body.Name;
    course.Email =req.body.Email;
    course.PhoneNO=req.body.PhoneNO;
    course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list")
        }
        else
        {
          res.send("Error");
        }
    })

})

router.get("/list", (req, res) => {
    CourseModel.find((error, docs) =>{
        if(!error)
        {
            
            res.render("list", { data : docs })
        }
        else
        {
            res.send("Error")
        }
    });
   
});
module.exports = router;