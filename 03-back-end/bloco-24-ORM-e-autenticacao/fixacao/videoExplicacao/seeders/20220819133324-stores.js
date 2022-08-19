'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Stores", [
      {
        name:"italo",
        description:"Funcinou"
      },
      {
        name:"iveldo",
        description:"Funcinou tbem"
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    queryInterface.buldDelete("Stores", null, {})
  }
};
