/*** 
### Experiments - Done
- Highly structured code

###Experiments - Todo 
- Ref : https://github.com/expressjs/express/blob/4.13.1/examples/route-map/index.js#L52-L66

*/

/**
*** Basic Modules
**/
var express = require('express');
var router = express.Router();

/**
*** Controllers
**/
var UserController = require('../Controllers/UserController');
var AuthController = require('../Controllers/AuthController');
var SiswaController = require('../Controllers/SiswaController');
var MapelController = require('../Controllers/MapelController');
var MinatController = require('../Controllers/MinatController');
var ProductController = require('../Controllers/ProductController');
var CategoryController = require('../Controllers/CategoryController');
var KelasController = require('../Controllers/KelasController');
var GuruController = require('../Controllers/GuruController');

/**
*** Routes
**/

// router.use(AuthController.authMiddleware)//router auth middleware

router.all('/', function(req, res, next) {
  res.json({'success':true, message:'Welcome to Xpress'});
});

router.all('/list', function(req, res, next) {
  res.json({'success':true, 'message':router.stack});
});

// router.get('/auth', AuthController.authenticate);
// router.get('/auth/decode', AuthController.decode);// for testing only
// router.get('/user/products', UserController.products);
// router.get('/user/profile', UserController.profile);

router.post('/create', SiswaController.create);
router.get('/tampil/:id', SiswaController.tampil);
router.delete('/delete/:id', SiswaController.deleteSiswa);
router.put('/update/:id', SiswaController.update);

router.post('/createmapel', MapelController.create);
router.get('/tampilmapel', MapelController.tampil);
router.delete('/deletemap/:id', MapelController.destroy);
router.put('/updatemap/:id', MapelController.update);

router.post('/createminat', MinatController.create);
router.get('/tampilminat/:id', MinatController.tampil);
router.put('/update/:id', MinatController.update);

router.post('/users', UserController.UserCreate);
router.get('/tampil', UserController.tampil);

router.post('/prod', ProductController.create);
router.post('/category', CategoryController.create);

router.post('/class', KelasController.create);
router.get('/tampilkelas/:id', KelasController.tampil);

router.post('/guru', GuruController.create);
router.get('/tampilguru', GuruController.tampil);

module.exports = router;
