module.exports = app => {
    const disabilities = require("../controllers/disabilities.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Adjustment
    router.post("/", disabilities.create);
  
    // Retrieve all Adjustments
    router.get("/", disabilities.findAll);
  
    // Retrieve all published Adjustments
    router.get("/published", disabilities.findAllPublished);
  
    // Retrieve a single Adjustment with id
    router.get("/:id", disabilities.findOne);
  
    // Update a Adjustment with id
    router.put("/:id", disabilities.update);
  
    // Delete a Adjustment with id
    router.delete("/:id", disabilities.delete);
  
    // Delete all Adjustments
    router.delete("/", disabilities.deleteAll);

    app.use('/api/disabilities', router);
}