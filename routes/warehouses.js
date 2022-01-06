const router = require('express').Router();

const { verifyInventoryId, getInventoryById } = require('../controllers/inventory');
const {
	getAllWarehouses,
	getWarehouseById,
	verifyWarehouseId
} = require('../controllers/warehouse');

router.get('/', getAllWarehouses);
router.use('/:warehouseId', verifyWarehouseId);
router.get('/:warehouseId', getWarehouseById);
router.get('/:warehouseId/:inventoryId', verifyInventoryId, getInventoryById);

module.exports = router;
