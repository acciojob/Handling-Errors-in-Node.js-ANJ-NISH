const fs = require('fs');
const http=require('http');

const args=process.argv.slice(2);

const server=http.createServer((req,res)=>{
  function printFileContents(filePath) {
  
    if(fs.existsSync(filePath))
    {
      fs.readFile(filePath, (err,data)=> {if(err){
        console.log(err);
      }else{
        console.log(data.toString());
      }})
    }
    else
    {
      console.log("Column '${columnName}' not found in the CSV.");
    }
  }
  res.end(printFileContents(args[0]));
})


server.listen(3000);
