module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    'Customer',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'customers'
    }
  );

  Customer.associate = models => {
    Customer.hasMany(models.Order, {
      foreignKey: {
        name: 'customerId',
        allowNull: false,
        field: 'customer_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Customer;
};
