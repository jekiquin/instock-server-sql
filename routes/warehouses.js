const router = require('express').Router();

const {
	getAllWarehouses,
	getWarehouseById,
	verifyWarehouseId
} = require('../controllers/warehouse');

router.get('/', getAllWarehouses);
router.use('/:warehouseId', verifyWarehouseId);
router.get('/:warehouseId', getWarehouseById);

module.exports = router;
