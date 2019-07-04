var express = require('express')
var router =require('router')
var Node = require('../models/Node.js')
var service =require('../shared/services.js')
module.exports ={
	insertnode: function(req,res){
		console.log("work")
		// console.log(req)
		value = req.body.data;
		console.log(value)
		// service.RootNode(value);
		service.addnode(value,res);
		// service.factorial(5);

	},
	getnode: async function(req,res){
		value = req.body._id
		console.log(value)
		var arry=[];
		 await service.getsubtree(value,res, arry).then(async(response)=>{
		 	console.log("response",response)
		 },error=>{
		 	console.log("err",err)
		 });
		console.log("t",t)
		res.send({status:true, data:t
		})

	} 
}
		
		// service.test()
		// data = req.data
		// console.log(data)
		// console.log(value)
		// Node.find({}).exec( async function(err,result){
		// 	console.log(result)
		// 	console.log(result[0].root)
		// 	if(result.length !== 0){
		// 		if( req.body.data<result[0].root){
		// 			let node = new Node({
		// 				left_node:  req.body.data
		// 			})
		// 			node.save(function(err){
		// 				if(err){
		// 					throw err;
		// 				}
		// 			res.send({status: true, message: "Node is successfully save on left side"})
		// 			});
		// 		}
		// 		else{
		// 			let node = new Node({
		// 				right_node:  req.body.data
		// 			})
		// 			node.save(function(err){
		// 				if(err){
		// 					throw err;
		// 				}
		// 			res.send({status: true, message: "Node is successfully saved on right side"})
		// 			})
		// 		}
		// 	}
		// 	else{
		// 		let node = new Node({
		// 			root:  req.body.data
		// 		})
		// 		node.save(function(err){
		// 			if(err){
		// 				throw err;
		// 			}
		// 		res.send({status: true, message: "Root node is succesfully saved"})
		// 		})
		// 	}

		// })
	
