// module.exports ={

//  	addnode: 	async function(pnode,data,res){
// 		console.log(pnode)	
// 		console.log(data)

// 		var root_node=null
// 		var node = await new Node({
// 				data: data,
// 				left_node : null,
// 				right_node : null
// 				});
// 			node.save(function(err){
// 				if (err){
// 					throw err;
// 				}
// 			});
// 		await Node.findOne({}).exec(function(err,result){

// 			console.log("qwqerwretret")
// 			console.log(err)

// 			console.log(result.data)
// 			root_node = result.data
// 			if(root_node == null){
			
// 			res.send({success: true, msg: "sucessfull"})
// 		return;
// 		}
// 		if(pnode == null){
// 			pnode = root_node
// 		}
// 		if(pnode.data > node.data){
// 			if(pnode.left_node == null){
// 				pnode.left_node = node.data
// 				console.log("left")
// 				console.log(pnode.left_node)
// 			}
// 			else{
// 				return addnode(pnode.left,data,res);
// 			}
// 		}
// 		if(pnode.data< node.data){
// 			if(pnode.right_node == null){
// 			pnode.right_node = node.data
// 			}
// 		}
// 		else{
// 			// return addnode(pnode.right,data,res);
// 			this.test();
// 		}

// 		})
// 		console.log(root_node)
		
// 	},
// 	test: function(){
// 		console.log("is working")
// 	}

// }
// RootNode: function(data)

// 	{ 
// 		console.log("in root")
// 	   	console.log(data) 
// 	    data : data; 
// 	    left_node : null; 
// 	    right_node : null; 
	   
// 	}, 
// 	add: function(data) 
// 	{ 
// 		 rootnode = null;
// 		console.log("dwsddwef")
// 		console.log(data)
// 	    var newNode = new Node({data}); 
// 	    if(rootnode === null) {
// 	        rootnode = newNode; 

// 	    }
// 	    else
// 	        this.addNode(rootnode, newNode); 
// 	}, 
// 	addNode: function(node, newNode) 

// 	{ 
// 		console.log("node")
// 		console.log(node)
// 		console.log(newNode)
	   
// 	    if(newNode.data < node.data) 
// 	    { 
// 	        if(node.left_node === null) {
// 	            node.left_node = newNode; 
// 	        }
// 	        else{
// 	           this.addNode(node.left, newNode);  
// 	        }
// 	    } 
	 
// 	    else
// 	    { 
// 	        if(node.right_node === null) {
// 	            node.right_node = newNode; 
// 	        }
// 	        else{
	  
	            
// 	           this.addNode(node.right_node,newNode); 
// 	        }
// 	    } 
// 	} 
