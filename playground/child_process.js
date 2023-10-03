const {execSync} = require('child_process');

try{
    const result = execSync(`du -sh "/Users/luckyblessed/Desktop/WEBSITES/Node\ Project\ -\ File\ explorer"`).toString();
    console.log(result);
    
}catch(err){
    console.log(`Error: ${err}`);
}
