module.exports = (sequelize, Sequelize) => {
    const Disability = sequelize.define("disability", {
      disability_name: {
        type: Sequelize.STRING
      },
      last_update: {
        type: Sequelize.DATE
      }
    }
    , {
      timestamps: false
    }
    );
  
    return Disability;
  };