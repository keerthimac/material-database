module.exports = (sequelize, DataTypes) => {
  const plumImage = sequelize.define(
    "plumImage",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumImage;
};
