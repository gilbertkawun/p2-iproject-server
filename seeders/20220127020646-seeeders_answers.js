'use strict';
const fs = require("fs")
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = JSON.parse(fs.readFileSync("./db/answers.json", "utf-8"))
     data.forEach(el => {
       el.createdAt = new Date()
       el.updatedAt = new Date()
     })
     return queryInterface.bulkInsert("Answers", data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete("Answers", data, {})

  }
};
