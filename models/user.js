"use strict";
const { Model } = require("sequelize");
const { hashingPass } = require("../helpers/helpers")
const bcrypt = require("bcryptjs")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Email cannot be empty",
          },
          isEmail: {
            msg: "Invalid email format",
          },
          notNull: {
            msg: "Email cannot be empty",
          },
          // unique: {
          //   msg: "Email must be unique",
          // },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password cannot be empty",
          },
          notNull: {
            msg: "Password cannot be empty",
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Username cannot be empty",
          },
          notNull: {
            msg: "Username cannot be empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance, options) {
          var salt = bcrypt.genSaltSync(8)
          var hash = bcrypt.hashSync(instance.password, salt)
          instance.password = hash
        }
      },
      sequelize,
      modelName: "User",
    }
  );
  //  User.beforeCreate(p => {
  //     p.password = hashingPass(p.password)
  // })
  return User;
};
