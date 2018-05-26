const db = require("../models");

module.exports = function (app) {

    // GET route
    app.get("/", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurgers) {
            let hbsObject = {
                burgers: dbBurgers
            };
            res.render("index", hbsObject);            
            console.log(dbBurgers);
        });
    });

    // POST route
    //req.body
    app.post("/", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbBurgers) {
            res.json(dbBurgers);
        });
    });

    // PUT route
    app.put("/api/burgers/:id", function (req, res) {
        db.Burgers.update({
            devoured: true
        },{
            where: {
                id: req.params.id
            }
        }).then(function(dbBurgers){
            res.json("/");
        })
    });
    //final brace of module export
};