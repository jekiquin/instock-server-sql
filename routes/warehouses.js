const router = require('express').Router();

const { getAllWarehouses } = require('../controllers/warehouse');

router.get('/', getAllWarehouses);
module.exports = router;
