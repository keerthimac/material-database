module.exports = (sequelize, DataTypes) => {
  const plumPipePrice = sequelize.define(
    "plumPipePrice",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumPipePrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumPipePrice;
};
