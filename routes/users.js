var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://samdarshi:samdarshi12@cluster0.lq0ei.mongodb.net/authentication?retryWrites=true&w=majority')
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(err)
})

var schema = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  username:String

})
module.exports=mongoose.model('UserModel' , schema)
