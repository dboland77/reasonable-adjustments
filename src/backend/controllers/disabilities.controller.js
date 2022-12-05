const db = require("../models");
const Disability = db.disabilities;
const Op = db.Sequelize.Op;


// Create and Save a new Adjustment
exports.create = (req, res) => {
  // Validate request
  if (!req.body.disability_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Disability entry
  const disability = {
    disability_name: req.body.disability_name,
    last_update: req.body.last_update,
  };

  // Save Disability in the database
  Disability.create(disability)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Disability."
      });
    });
};

// Retrieve all Adjustments from the database.
exports.findAll = (req, res) => {
  console.log("HELLLOOOOOO")
    const disability_name = req.query.disability_name;
    let condition = disability_name ? { title: { [Op.like]: `%${disability_name}%` } } : null;
  
    Disability.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Adjustment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Disability.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Disability with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Disability with id=" + id
        });
      });
};

// Update an Adjustment by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Disability.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Disability was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Disability with id=${id}. Maybe Disability was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Disability with id=" + id
        });
      });
};

// Delete an Adjustment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Disability.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Disability was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Disability with id=${id}. Maybe Disability was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Disability with id=" + id
        });
      });
};

// Delete all Adjustments from the database.
exports.deleteAll = (req, res) => {
    Disability.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Disabilities were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all disabilities."
          });
        });
};

// Find all published Adjustments
exports.findAllPublished = (req, res) => {
    Disability.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving disabilities."
      });
    });
};
