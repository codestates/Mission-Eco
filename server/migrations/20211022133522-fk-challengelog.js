"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("challengeLogs", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("challengeLogs", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_challengeLogs_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("challengeLogs", "user_id");
  },
};
