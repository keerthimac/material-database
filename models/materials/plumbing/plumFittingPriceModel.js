module.exports = (sequelize, DataTypes) => {
  const plumFittingPrice = sequelize.define(
    "plumFittingPrice",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumFittingPrice: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumFittingPrice;
};
