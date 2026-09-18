const fs = require("fs");

const readableStream = fs.createReadStream("largeFile.txt", "utf8");

readableStream.on("data", (chunk) => {
  console.log("Received chunk", chunk);
});

readableStream.on("end", (chunk) => {
  console.log("Finished reading file");
});

readableStream.on("error", (err) => {
  console.error("Error reading file");
});

/*
const fs = require("fs");

const file = fs.createWriteStream("./big.file");

for (let i = 0; i <= 1e6; i++) {
  file.write("my name is Sachin Kumar");
}

file.end();

 */

const { Transform } = require("stream");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const writableStream = fs.createWriteStream("outFile.txt");

writableStream.on("finish", () => {
  console.log("finished writing files");
});

//concept of piping

readableStream.pipe(upperCaseTransform).pipe(writableStream);
