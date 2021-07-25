'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          id: 1,
          task: 'study nuxt.js',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          task: 'study express.js',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          task: 'study typescript.js',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
