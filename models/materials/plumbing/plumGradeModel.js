module.exports = (sequelize, DataTypes) => {
  const plumGrade = sequelize.define(
    "plumGrade",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumGrade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumGrade;
};
