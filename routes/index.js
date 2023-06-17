var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/index')

router.get('/getAllMahasiswa', ctrl.users.getAllMahasiswa)

module.exports = router;
