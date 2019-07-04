var express = require('express');
var router = express.Router();
// var router =require('router')

var nodes = require('../controller/binary.js')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/insert', function(req,res){
	console.log("in insertion")
	// console.log(req.params)
	nodes.insertnode(req,res)
});
router.get("/search/:id", function(req,res){
	console.log("in searching")
	nodes.getnode(req,res)
})
module.exports = router;
