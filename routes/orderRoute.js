const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.get('/total-sale', orderController.getTotalSale);
router.get('/total-sale-customer', orderController.getTotalSaleEachCustomer);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrder);
router.post('/', orderController.createOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
