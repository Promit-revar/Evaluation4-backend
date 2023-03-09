'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('collections', [{
      contentTypeId: 'cc6fc2a0-be58-11ed-afa1-0242ac120002',
      collectionId: '9baafcba-be59-11ed-afa1-0242ac120002',
      data:'{"Name":"John Doe"}',
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('collections', null, {});
     
  }
};
