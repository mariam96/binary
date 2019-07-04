var Node = require('../models/Node.js')
module.exports = {
    addnode: async function (data, res) {
        var currentnode = null
        var root_node = null
        var node = await new Node({
            data: data,
            left_node: null,
            right_node: null
        });
        await Node.findOne({}).exec(async function (err, result) {
            root_node = result;
            if (root_node == null) {
                await node.save(function (err, result) {
                    currentnode = result
                    if (err) {
                        throw err;
                    }
                });
                res.send({ success: true, msg: "abcd" })
                return;
            }
            await node.save(function (err, result) {
                currentnode = result
                console.log("Current Node Save", currentnode)
                if (err) {
                    throw err;
                }
            });
            var parent = root_node;
            console.log("While Begin")
            while (true) {
                console.log("Inside While")
                if (parent.data > node.data) {
                    console.log("Condition 1")
                    if (parent.left_node == null) {
                        console.log("Condition 1.1 Parent", parent)
                        parent.left_node = await node.id
                        await Node.findOneAndUpdate({ _id: parent.id }, { $set: { left_node: node.id } }).exec(function (err, result) {
                            console.log("Left Node Updated ", result)
                        })
                        break;
                    }
                    else {
                        console.log("Condition 1 Else Part", parent);
                        parent = await Node.findOne({ _id: parent.left_node })
                        console.log("Condition 1 Else Part End", parent);
                    }
                }
                else {
                    console.log("Inside Condition 2 ")
                    if (parent.right_node == null) {
                        console.log("Inside Condition 2.1 ", parent)
                        parent.right_node = await node.id
                        await Node.findOneAndUpdate({ _id: parent.id }, { $set: { right_node: node.id } }).exec(function (err, result) {
                            console.log("Right Node Updated ", parent)
                        })
                        break;
                    }
                    else {
                        console.log("Condition 2 Else Part ", parent);
                        parent = await Node.findOne({ _id: parent.right_node })
                        console.log("Condition 2 Else End ", parent);
                    }
                }
            }
        })
        res.send({ success: true, msg: "sucessfull" })
        console.log("While End")
    },
    
    getsubtree: async function getsubtree(node,res,arry){
        return new Promise(async(resolve,reject)=>{
           
       
        console.log("array")
        console.log(arry.length)
        
        
        await Node.findOne({_id: node}).exec(async function(err,result){

            console.log(result)
            if(result){
                if(result.left_node !==null){
                   await Node.findOne({_id:result.left_node}).exec(async function(err,result){
                       
                       
                       
                        left_id =result._id
                        arry.push(result);
                       await getsubtree(result._id,res, arry);
                      

                    })
                }
                if(result.right_node !==null){
                   await Node.findOne({_id:result.right_node}).exec(async function(err,result){
                      
                       // res.send({status: true, data:result})
                        console.log("rigth-result",result)
                        arry.push(result);                     
                       await getsubtree(result._id,res, arry);

                        
                    })
                }
                 
            }
        });
         // return arry;
        
      })
        console.log('dddddddddddddddddddddddddddddddddddddddddddddddddd')  
          console.log("arry1***********************************************88",arry)
           resolve(arry) 
    }
    

}

// factorial = function(x) { 

//     if (x === 0)
//      {
//         return 1;
//      }
//        return x * factorial(x - 1);
     
             
// }
//   console.log(factorial(5));