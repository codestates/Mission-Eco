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
     * }], {});const userId = await queryInterface.bulkInsert("users", [{}], {
      returning: ["id"],
    });
    const userId = await queryInterface.bulkInsert("users", [{}], {
      returning: ["id"],
    });
     */

    await queryInterface.bulkInsert("challengelogs", [
      {
        img: "#88E0EF",
        challengelog_contents: "캔은 내가 요리사",
        user_id: "1",
        challenge_id: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#161E54",
        challengelog_contents: "오늘은 소오오오 안 먹기이이 맛있는 고오오옹",
        user_id: "2",
        challenge_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#FF5151",
        challengelog_contents: "소프트 소프트아스크림 빨래는 소프넛",
        user_id: "3",
        challenge_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#87AAAA",
        challengelog_contents: "수수수수세미",
        user_id: "2",
        challenge_id: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#E26A2C",
        challengelog_contents: "플로깅 나의 일상 찰칵 기념하며...",
        user_id: "3",
        challenge_id: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#700B97",
        challengelog_contents: "무라벨 뜯어버려",
        user_id: "1",
        challenge_id: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#C36A2D",
        challengelog_contents: "세차할 땐.. 물없이...",
        user_id: "3",
        challenge_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#FF9292",
        challengelog_contents: "지구 지킴이",
        user_id: "2",
        challenge_id: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
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
    await queryInterface.bulkDelete("challengelogs", null, {});
  },
};
