"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("badges", [
      {
        name: "나는야 에코새싹왕",
        img: "../img/badge/나는야 에코새싹왕.png",
        challenge_id: 2,
      },
      {
        name: "나는야 노라벨왕",
        img: "../img/badge/나는야 노라벨왕.png",
        challenge_id: 1,
      },
      {
        name: "나는야 용기왕",
        img: "../img/badge/나는야 용기왕.png",
        challenge_id: 3,
      },
      {
        name: "나는야 천연왕",
        img: "../img/badge/나는야 천연왕.png",
        challenge_id: 6,
      },
      {
        name: "나는야 저탄소왕",
        img: "../img/badge/나는야 저탄소왕.png",
        challenge_id: 9,
      },
      {
        name: "나는야 크러쉬왕",
        img: "../img/badge/나는야 크러쉬왕.png",
        challenge_id: 10,
      },
      {
        name: "나는야 뽑기왕",
        img: "../img/badge/나는야 뽑기왕.png",
        challenge_id: 13,
      },
      {
        name: "나는야 고체세제왕",
        img: "../img/badge/나는야 고체세제왕.png",
        challenge_id: 14,
      },
      {
        name: "나는야 에코쇼핑왕",
        img: "../img/badge/나는야 에코쇼핑왕.png",
        challenge_id: 16,
      },
      {
        name: "나는야 텀블러왕",
        img: "../img/badge/나는야 텀블러왕.png",
        challenge_id: 17,
      },
      {
        name: "나는야 효율왕",
        img: "../img/badge/나는야 효율왕.png",
        challenge_id: 21,
      },
      {
        name: "나는야 친환경왕",
        img: "../img/badge/나는야 친환경왕.png",
        challenge_id: 19,
      },
      {
        name: "나는야 마일리지왕",
        img: "../img/badge/나는야 마일리지왕.png",
        challenge_id: 20,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("badges", null, {});
  },
};
