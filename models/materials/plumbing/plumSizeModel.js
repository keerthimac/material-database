module.exports = (sequelize, DataTypes) => {
  const plumSize = sequelize.define(
    "plumSize",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumSizeImperial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plumSizeMetric: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumSize;
};
