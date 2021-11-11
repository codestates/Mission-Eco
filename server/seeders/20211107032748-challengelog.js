"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("challengelogs", [
      {
        img: "#88E0EF",
        challengelog_contents: "고기 노노",
        user_id: "1",
        challenge_id: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#161E54",
        challengelog_contents: "라벨 다 뜯어버려",
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
        challengelog_contents: "분리수거 잘 하자",
        user_id: "4",
        challenge_id: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#E26A2C",
        challengelog_contents: "수세미는 천연 수세미!",
        user_id: "3",
        challenge_id: "6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#700B97",
        challengelog_contents: "세차는 물없이...",
        user_id: "1",
        challenge_id: "8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#C36A2D",
        challengelog_contents: "소프넛으로 세제 해결~",
        user_id: "7",
        challenge_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        img: "#FF9292",
        challengelog_contents: "지구 지킴이",
        user_id: "5",
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
