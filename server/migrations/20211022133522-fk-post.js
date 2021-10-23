"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("posts", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("posts", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_posts_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("posts", "user_id");
  },
};
