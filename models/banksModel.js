module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define(
    "bank",
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      bankCode: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      bankName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Bank;
};
