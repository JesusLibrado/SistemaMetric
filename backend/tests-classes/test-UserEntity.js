var UserEntity = require('../classes/UserEntity'); //You have to go out of the folder

var u = new UserEntity();
u.email = 'john_doe@server.com';
console.log(u.toString());