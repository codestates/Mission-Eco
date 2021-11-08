"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        email: "1@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "환경공주",
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hy@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "환경요정",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "sk@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "그린에코",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "yh@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "지구방위대",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "hj@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "지구5형제",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "123@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "지구사랑나라사랑",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "11@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "코코",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "1234@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "쁘띠공주",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "22@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "지구지킴이",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "a@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "에코요정",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "ab@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "고기완자",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "abc@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "박해커",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "q@mission.com",
        password:
          "$2b$10$E6iKTW9D8/QvmLp6aPRBrOd9X4r0h8jrqEdJokwFmiNjwWkL1o3Li",
        nickname: "김코딩",
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
