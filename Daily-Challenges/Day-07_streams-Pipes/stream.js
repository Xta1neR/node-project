const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const filePath = "./input.txt";
  const rstream = fs.createReadStream(filePath);

  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });

  rstream.on("end", () => {
    res.end(" end");
  });

  rstream.on("error", (err) => {
    console.error(err);
    res.statusCode = 404;
    res.end("File not found");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});