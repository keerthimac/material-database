module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define(
    "bank",
    {
      bankCode: {
        type: DataTypes.INTEGER,
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
