const fs = require('fs');

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


printFileContents('./output.txt');
