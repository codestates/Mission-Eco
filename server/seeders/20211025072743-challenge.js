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
        contents: "캔 뿌셔뿌셔",
        level: 3,
      },
      {
        img: "#1C0C5B",
        name: "소프넛",
        contents: "소프소프소프넛",
        level: 1,
      },
      {
        img: "#F0A500",
        name: "용기내챌린지",
        contents: "힘을내라 용자여",
        level: 2,
      },
      {
        img: "#F9F3DF",
        name: "고기 안 먹기",
        contents: "고기는 맛있어",
        level: 1,
      },
      {
        img: "#3D2C8D",
        name: "무라벨 페트병",
        contents: "이름 뜯어버려",
        level: 2,
      },
      {
        img: "#FF7777",
        name: "분리수거",
        contents: "분리수거는 잘 해야해",
        level: 1,
      },
      {
        img: "#6D9886",
        name: "천연 수세미 사용",
        contents: "뽀드득뽀드득",
        level: 3,
      },
      {
        img: "#FF0075",
        name: "플로깅",
        contents: "멋진 사람",
        level: 3,
      },
      {
        img: "#D1E8E4",
        name: "물 없이 세차하기",
        contents: "이걸..?",
        level: 1,
      },
      {
        img: "#F78812",
        name: "따릉이 이용하기",
        contents: "따르릉 따르릉 비켜가세요~",
        level: 2,
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
