module.exports = (sequelize, DataTypes) => {
  const plumBrand = sequelize.define(
    "plumBrand",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumBrand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumBrand;
};
