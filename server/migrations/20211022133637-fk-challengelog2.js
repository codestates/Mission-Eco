"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("challengelogs", "challenge_id", {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addConstraint("challengelogs", {
      fields: ["challenge_id"],
      type: "foreign key",
      name: "challenges_challengelogs_id_fk",
      references: {
        table: "challenges",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("challengelogs", "challenge_id");
  },
};
