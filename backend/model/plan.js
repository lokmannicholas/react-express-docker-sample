module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("plan", {
        planName: {
        type: Sequelize.STRING
      },
      features: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      }
    });
  
    return Plan;
  };