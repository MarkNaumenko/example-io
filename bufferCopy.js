var fs = require('fs'),
    buffer = new Buffer(1000),

    inputFile = 'input.txt',
    outputFile = 'output.txt',

    strInput = fs.createReadStream(inputFile),
    strOutput = fs.createWriteStream(outputFile);

strInput.on('readable',()=>{
  while (null !== (buffer = strInput.read(20))) {
    console.log(`Received ${buffer.length} bytes of data.`);
    strOutput.write(buffer);
  }             
});
