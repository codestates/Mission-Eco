"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("challengelogs", "user_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("challengelogs", {
      fields: ["user_id"],
      type: "foreign key",
      name: "users_challengelogs_id_fk",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("challengelogs", "user_id");
  },
};
