module.exports = (sequelize, DataTypes) => {
  const plumPipeEndType = sequelize.define(
    "plumPipeEndType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumPipeEndType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumPipeEndType;
};
