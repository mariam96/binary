var mongoose = require("mongoose");
var NodeSchema = new mongoose.Schema({
    
    left_node: String,
    right_node: String,
    data:Number
    
});
module.exports = mongoose.model("Node", NodeSchema);