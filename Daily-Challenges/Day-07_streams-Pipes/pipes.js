const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const filePath = "./pipes.txt";
  const rstream = fs.createReadStream(filePath);

  // Pipe the read stream to the response stream
  rstream.pipe(res);

  rstream.on("error", (err) => {
    console.error(err);
    res.statusCode = 404;
    res.end("File not found");
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});