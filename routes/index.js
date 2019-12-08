var express = require('express');
var router = express.Router();

let application_controller = require('../controllers/applicationsController');

router.get('/', application_controller.index);
router.get('/index', application_controller.index);
router.get('/tambah', application_controller.tambah);
router.post('/tambah_pengguna', application_controller.tambah_pengguna);
router.get('/lihat/:id', application_controller.lihat);
router.get('/ubah/:id', application_controller.ubah);
router.post('/ubah_pengguna', application_controller.ubah_pengguna);
router.get('/hapus/:id', application_controller.hapus);

module.exports = router;