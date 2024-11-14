const model = require('./model')


const { users } = require('./entities/EUsers')
const { deps } = require('./entities/EDeps')

const getUsers = async() => { users.findAll({raw:true}).then(result=>{
  console.log(result);
}).catch(err=>console.log(err));
}

const getDeps = async() => { deps.findAll({raw:true}).then(result=>{
  console.log(result);
}).catch(err=>console.log(err));
}

module.exports = {
  getUsers,
  getDeps
}