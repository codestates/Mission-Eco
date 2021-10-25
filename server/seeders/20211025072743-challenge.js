"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("challenges", [
      {
        img: "#DBD0C0",
        name: "캔뿌셔",
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#1C0C5B",
        name: "소프넛",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#F0A500",
        name: "용기내챌린지",
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#F9F3DF",
        name: "고기 안 먹기",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#3D2C8D",
        name: "무라벨 페트병",
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#FF7777",
        name: "분리수거",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#6D9886",
        name: "천연 수세미 사용",
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#FF0075",
        name: "플로깅",
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#D1E8E4",
        name: "물 없이 세차하기",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#F78812",
        name: "따릉이 이용하기",
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("challenges", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
