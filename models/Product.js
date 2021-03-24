module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      tableName: 'products'
    }
  );

  Product.associate = models => {
    Product.hasMany(models.OrderItem, {
      foreignKey: {
        name: 'productId',
        allowNull: false,
        field: 'product_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
    Product.belongsTo(models.Supplier, {
      foreignKey: {
        name: 'supplierId',
        allowNull: false,
        field: 'supplier_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Product;
};
