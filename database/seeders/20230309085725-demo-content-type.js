'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ContentTypes', [{
      name: "Person",
      contentId: "cc6fc2a0-be58-11ed-afa1-0242ac120002",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ContentTypes', null, {});
  }
};


