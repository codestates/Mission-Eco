"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("challengelikes", [
      {
        user_id: 1,
        challenge_id: 1,
      },
      {
        user_id: 1,
        challenge_id: 2,
      },
      {
        user_id: 1,
        challenge_id: 3,
      },
      {
        user_id: 1,
        challenge_id: 4,
      },
      {
        user_id: 2,
        challenge_id: 1,
      },
      {
        user_id: 2,
        challenge_id: 2,
      },
      {
        user_id: 2,
        challenge_id: 3,
      },
      {
        user_id: 2,
        challenge_id: 4,
      },
      {
        user_id: 3,
        challenge_id: 1,
      },
      {
        user_id: 3,
        challenge_id: 2,
      },
      {
        user_id: 3,
        challenge_id: 3,
      },
      {
        user_id: 3,
        challenge_id: 4,
      },
      {
        user_id: 3,
        challenge_id: 5,
      },
      {
        user_id: 3,
        challenge_id: 6,
      },
      {
        user_id: 3,
        challenge_id: 7,
      },
      {
        user_id: 3,
        challenge_id: 8,
      },
      {
        user_id: 4,
        challenge_id: 1,
      },
      {
        user_id: 4,
        challenge_id: 2,
      },
      {
        user_id: 4,
        challenge_id: 3,
      },
      {
        user_id: 4,
        challenge_id: 4,
      },
      {
        user_id: 4,
        challenge_id: 5,
      },
      {
        user_id: 4,
        challenge_id: 6,
      },
      {
        user_id: 4,
        challenge_id: 7,
      },
      {
        user_id: 4,
        challenge_id: 8,
      },
      {
        user_id: 4,
        challenge_id: 9,
      },
      {
        user_id: 4,
        challenge_id: 10,
      },
      {
        user_id: 4,
        challenge_id: 11,
      },
      {
        user_id: 4,
        challenge_id: 12,
      },
      {
        user_id: 4,
        challenge_id: 13,
      },
      {
        user_id: 4,
        challenge_id: 14,
      },
      {
        user_id: 4,
        challenge_id: 15,
      },
      {
        user_id: 4,
        challenge_id: 16,
      },
      {
        user_id: 4,
        challenge_id: 17,
      },
      {
        user_id: 4,
        challenge_id: 18,
      },
      {
        user_id: 4,
        challenge_id: 19,
      },
      {
        user_id: 4,
        challenge_id: 20,
      },
      {
        user_id: 5,
        challenge_id: 1,
      },
      {
        user_id: 5,
        challenge_id: 2,
      },
      {
        user_id: 5,
        challenge_id: 3,
      },
      {
        user_id: 5,
        challenge_id: 4,
      },
      {
        user_id: 5,
        challenge_id: 5,
      },
      {
        user_id: 5,
        challenge_id: 6,
      },
      {
        user_id: 5,
        challenge_id: 7,
      },
      {
        user_id: 5,
        challenge_id: 8,
      },
      {
        user_id: 5,
        challenge_id: 9,
      },
      {
        user_id: 5,
        challenge_id: 10,
      },
      {
        user_id: 6,
        challenge_id: 11,
      },
      {
        user_id: 6,
        challenge_id: 12,
      },
      {
        user_id: 6,
        challenge_id: 13,
      },
      {
        user_id: 6,
        challenge_id: 14,
      },
      {
        user_id: 6,
        challenge_id: 15,
      },
      {
        user_id: 6,
        challenge_id: 16,
      },
      {
        user_id: 6,
        challenge_id: 17,
      },
      {
        user_id: 6,
        challenge_id: 18,
      },
      {
        user_id: 6,
        challenge_id: 19,
      },
      {
        user_id: 6,
        challenge_id: 20,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("challengelikes", null, {});
  },
};
