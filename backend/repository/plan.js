const db = require("../db");
const Plan = db.plans;
const Op = db.Sequelize.Op;

exports.create = async (plans) => {
      return await Plan.create(plans)
};

// Retrieve all Tutorials from the database.
exports.findAll = () => {
  return Plan.findAll()

};
