const router = require('express').Router();

const {
	getAllInventories,
	verifyInventoryId,
	getInventoryById
} = require('../controllers/inventory');

router.get('/', getAllInventories);
router.use('/:inventoryId', verifyInventoryId);
router.get('/:inventoryId', getInventoryById);

module.exports = router;
