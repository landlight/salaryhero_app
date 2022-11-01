module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      firstName: {
          type: DataTypes.STRING,
          field: 'first_name'
      },
      lastName: {
          type: DataTypes.STRING,
          field: 'last_name'
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: { 
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: "created_at"
      },
          updatedAt: { 
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
          field: "updated_at"
      } 
  });
  
  return Users;
}