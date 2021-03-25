const { Product, Supplier } = require('../models');

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: Supplier });
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id }, include: Supplier });
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const { name, desc, price, quantity, supplierId } = req.body;
    const product = await Product.create({ name, desc, price, quantity, supplierId });
    res.status(201).json({ product });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
