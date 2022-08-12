module.exports = (sequelize, DataTypes) => {
  const plumPriceVersion = sequelize.define(
    "plumPriceVersion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumPriceVersion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumPriceVersion;
};
