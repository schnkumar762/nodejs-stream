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
