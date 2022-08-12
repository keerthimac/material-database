module.exports = (sequelize, DataTypes) => {
  const plumFitting = sequelize.define(
    "plumFitting",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumFitting: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumFitting;
};
