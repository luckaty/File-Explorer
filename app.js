1//You will build this project using pure node to gain a thorough understanding of node. the are obviously easier ways of building this using external modules, but that is the purpose of thi project as you would miss out on many code concepts.


//require node modules
const http = require('http');

//file imports
const respond = require('./lib/respond.js');

//connection settings
const port = process.env.port || 3000;

//create server
const server = http.createServer(respond);

//listern to client requests om the specific port, the port should be available
server.listen(port, () => {
   console.log(`listerning on port: ${port}`); 
});