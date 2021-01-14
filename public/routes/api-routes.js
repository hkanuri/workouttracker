const db = require("../models/index")


module.exports = function(app){ 
    app.get("/api/workouts",function (req,res){   
        db.Workout.find({}).then(function(workouts){
            res.json(workouts)
        })
    });
}








