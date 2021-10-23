"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "challenge_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("posts", {
      fields: ["challenge_id"],
      type: "foreign key",
      name: "challenges_posts_id_fk",
      references: {
        table: "challenges",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "challenge_id");
  },
};
