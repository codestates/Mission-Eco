"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("challengelikes", [
      {
        user_id: 1,
        challenge_id: 5,
      },
      {
        user_id: 2,
        challenge_id: 1,
      },
      {
        user_id: 3,
        challenge_id: 2,
      },
      {
        user_id: 1,
        challenge_id: 1,
      },
      {
        user_id: 1,
        challenge_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("challengelikes", null, {});
  },
};
