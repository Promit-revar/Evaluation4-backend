'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Attributes', [{
        name: 'Name',
        type: 'string',
        contentTypeId: 'cc6fc2a0-be58-11ed-afa1-0242ac120002',
        attributeId:'424a1e62-be63-11ed-afa1-0242ac120002',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Attributes', null, {});
    
  }
};
