// 1
console.log("Hello World");

// 2
const os = require("os");

console.log(`Architecture ${os.arch}`);
console.log(`CPUs ${os.cpus()}`);
console.log(`OS ${os.platform}`);

// 3
const fs = require("fs");

const fileName = `${__dirname}/test.txt`; // source file path

fs.readFile(fileName, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data.toString()); // without toString() this logs a buffer
  }
});

// synchronous reading
const data = fs.readFileSync(fileName);
console.log(data.toString());

// 4
const outFileName = `${__dirname}/test-copy.txt`; // destination file path

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

// writing and reading using pipe
readStream.pipe(writeStream);

// writing using write
writeStream.write("Node js is awesome");
writeStream.close();
writeStream.on("close", () => {
  console.log("File writing is completed");
});

// listening to data event and logs output
readStream.on("data", (data) => console.log(data.toString()));
readStream.close();
// listing to end event
readStream.on("end", () => console.log("File reading is completed"));

// 5
const http = require("http");

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Hello World</h1>");
    response.end();
  })
  .listen(3000);

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");
    switch (request.method) {
      case "GET":
        response.write("<h1>Hello World</h1>");
        response.end();
        break;
      case "POST":
        request.on("data", (data) => {
          response.write(`<h1>Hello ${data}</h1>`);
          response.end();
        });
        break;
      case "PUT":
        response.on("data", (data) => {
          return `Put request received with ${data}`;
        });
        response.on("error", (error) => {
          return `Put request failed with ${data}`;
        });
    }
  })
  .listen(3000, (error) => console.log("Server is listening to port 3000"));
