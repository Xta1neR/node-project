**Develop a Node.js program that writes data to a new text file using the fs module and confirms the operation's success. Utilize fs.writefile to create and write content to a new file.**

const fs = require('fs');

// Data to be written to the file
const data = 'Hello, World!';

// File path
const filePath = 'output.txt';

// Write data to the file
fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Data written to file successfully.');
});


**Write a program in a language of your choice that creates a socket client and socket server to exchange message over a network**
Certainly! In JavaScript, you can achieve this using the `net` module for creating both the server and the client. Here's an example:

```javascript
// Server (server.js)

const net = require('net');

// Define host and port
const HOST = '127.0.0.1';
const PORT = 12345;

// Create a server instance
const server = net.createServer((socket) => {
    // Handle incoming connections

    console.log('Client connected');

    // Handle data received from the client
    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
        // Echo the received data back to the client
        socket.write(data);
    });

    // Handle client connection termination
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Start listening for connections
server.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
```

```javascript
// Client (client.js)

const net = require('net');

// Define server address and port
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 12345;

// Create a client instance
const client = new net.Socket();

// Connect to the server
client.connect(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Connected to server at ${SERVER_HOST}:${SERVER_PORT}`);
    
    // Send a message to the server
    client.write('Hello, server!');
});

// Handle data received from the server
client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
});

// Handle server connection termination
client.on('close', () => {
    console.log('Connection closed');
});
```

To run this:

1. Save the server code in a file named `server.js` and the client code in a file named `client.js`.
2. Open two separate terminal windows.
3. In one terminal, run `node server.js` to start the server.
4. In the other terminal, run `node client.js` to start the client.
5. You should see the client sending a message to the server, and the server echoing it back to the client.


**Write Node.js code to access and manipulate collections within a MongoDB server.**

```const MongoClient = require('mongodb').MongoClient;

// Connection URI
const uri = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB server
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB server');

    // Access database and collection
    const db = client.db('mydatabase');
    const collection = db.collection('mycollection');

    // Insert document into collection
    collection.insertOne({ name: 'John', age: 30 }, (err, result) => {
        if (err) {
            console.error('Error inserting document:', err);
            return;
        }
        console.log('Document inserted:', result.ops[0]);
        
        // Find documents in collection
        collection.find({ age: { $gte: 25 } }).toArray((err, docs) => {
            if (err) {
                console.error('Error finding documents:', err);
                return;
            }
            console.log('Documents found:', docs);

            // Update document in collection
            collection.updateOne({ name: 'John' }, { $set: { age: 31 } }, (err, result) => {
                if (err) {
                    console.error('Error updating document:', err);
                    return;
                }
                console.log('Document updated:', result.result);

                // Delete document from collection
                collection.deleteOne({ name: 'John' }, (err, result) => {
                    if (err) {
                        console.error('Error deleting document:', err);
                        return;
                    }
                    console.log('Document deleted:', result.result);

                    // Close MongoDB connection
                    client.close();
                });
            });
        });
    });
});
```

**Create a Node.js program that reads a text file using the fs module and logs the content to the console. Use asynchronous and synchronous methods to handle file reading.**
```const fs = require('fs');

// File path
const filePath = 'example.txt';

// Asynchronous file reading
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err);
        return;
    }
    console.log('File content (asynchronously):');
    console.log(data);
});

// Synchronous file reading
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('File content (synchronously):');
    console.log(data);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}
```

**Write a Node.js program that processes JSON data by reading a JSON file, parsing its content, and manipulating the resulting JavaScript object.**

``` const fs = require('fs');

// File path
const filePath = 'data.json';

// Read JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    try {
        // Parse JSON data
        const jsonData = JSON.parse(data);

        // Manipulate the JavaScript object
        jsonData.students.push({ name: 'Alice', age: 25 });

        // Convert JavaScript object back to JSON string
        const updatedJsonData = JSON.stringify(jsonData, null, 2);

        // Write updated JSON data back to file
        fs.writeFile(filePath, updatedJsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('JSON data updated successfully.');
        });
    } catch (err) {
        console.error('Error parsing JSON data:', err);
    }
});
```

**Create a Node.js program that uses the buffer module to encode a string into a buffer and then decode it back to a string. Utilize buffer prompt to encode the string into a buffer. Use buff.toString() to decode the buffer back into a string.**

```const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter a string to encode
rl.question('Enter a string to encode: ', (inputString) => {
    // Encode the string into a buffer
    const encodedBuffer = Buffer.from(inputString, 'utf8');

    // Log the encoded buffer
    console.log('Encoded buffer:', encodedBuffer);

    // Decode the buffer back to a string
    const decodedString = encodedBuffer.toString('utf8');

    // Log the decoded string
    console.log('Decoded string:', decodedString);

    // Close the readline interface
    rl.close();
});
 ```

 **Create a new PostgreSQL database named TodoListDB and define a table named Tasks with the following columns, TaskID, TaskName, TaskDescription, DueDate. Include appropriate data type and constraints for each column.**

 ```-- Create the TodoListDB database
CREATE DATABASE TodoListDB;

-- Connect to the TodoListDB database
\c TodoListDB;

-- Create the Tasks table
CREATE TABLE Tasks (
    TaskID SERIAL PRIMARY KEY,                -- Auto-incrementing integer column for the task ID
    TaskName VARCHAR(100) NOT NULL,          -- String column for the task name, max length 100 characters, not null
    TaskDescription TEXT,                     -- Text column for the task description
    DueDate DATE                              -- Date column for the due date of the task
);
 ```

 **Write a program for implement timers and callbacks to achieve asynchronous operations in JavaScript and including methods of setTimeout and setInterval.**

 ```// Function to simulate an asynchronous operation with setTimeout
function simulateAsyncOperation(callback) {
    setTimeout(() => {
        callback(null, 'Async operation completed'); // Simulating success with a callback
    }, 2000); // Simulating a delay of 2 seconds
}

// Function to handle the asynchronous operation callback
function handleAsyncOperation(err, result) {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
    }
}

// Using setTimeout to perform an asynchronous operation
console.log('Starting async operation...');
simulateAsyncOperation(handleAsyncOperation);
console.log('Async operation initiated.');

// Using setInterval to perform an asynchronous operation at regular intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    intervalCount++;
    console.log(`Interval ${intervalCount}: Performing task...`);
    if (intervalCount === 3) {
        clearInterval(intervalId); // Stop the interval after 3 iterations
        console.log('Interval stopped.');
    }
}, 1000); // Interval set to 1 second
```

**Develop a real-time chat application using Socket.io that supports multiple clients, connecting to a shared chatroom.**

To develop a real-time chat application using Socket.io that supports multiple clients connecting to a shared chatroom, you can follow the steps below:

1. **Setup Node.js project**:
   Create a new directory for your project and initialize a Node.js project by running `npm init -y`.

2. **Install dependencies**:
   Install `express` and `socket.io` using npm:
   ```
   npm install express socket.io
   ```

3. **Create server.js**:
   Create a file named `server.js` and set up an Express server with Socket.io integration.

   ```javascript
   const express = require('express');
   const http = require('http');
   const socketIo = require('socket.io');

   const app = express();
   const server = http.createServer(app);
   const io = socketIo(server);

   // Serve static files from the public directory
   app.use(express.static('public'));

   // Socket.io connection handling
   io.on('connection', (socket) => {
       console.log('A user connected');

       // Handle incoming messages
       socket.on('chat message', (msg) => {
           io.emit('chat message', msg); // Broadcast the message to all clients
       });

       // Handle disconnection
       socket.on('disconnect', () => {
           console.log('User disconnected');
       });
   });

   // Start the server
   const PORT = process.env.PORT || 3000;
   server.listen(PORT, () => {
       console.log(`Server listening on port ${PORT}`);
   });
   ```

4. **Create client-side HTML**:
   Create a file named `index.html` in a `public` directory. This will serve as the client-side interface.

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Real-Time Chat</title>
       <script src="/socket.io/socket.io.js"></script>
       <script>
           const socket = io();

           // Send message to server
           function sendMessage() {
               const message = document.getElementById('message').value;
               socket.emit('chat message', message);
               document.getElementById('message').value = '';
           }

           // Receive message from server
           socket.on('chat message', (msg) => {
               const messages = document.getElementById('messages');
               const li = document.createElement('li');
               li.textContent = msg;
               messages.appendChild(li);
           });
       </script>
   </head>
   <body>
       <ul id="messages"></ul>
       <input id="message" autocomplete="off">
       <button onclick="sendMessage()">Send</button>
   </body>
   </html>
   ```

5. **Run the server**:
   Run the server using `node server.js`.

6. **Open multiple browser windows**:
   Open multiple browser windows or tabs and navigate to `http://localhost:3000`. You should be able to chat in real-time between different clients.

This creates a basic real-time chat application using Socket.io with support for multiple clients connecting to a shared chatroom. Feel free to extend and customize it further based on your requirements, such as adding user authentication, styling, or additional features.

**Create a Node.js program that sets up an HTTP server using the built-in HTTP module. Use the HTTP create server method to create a server instance. Listen for incoming requests using the server's request event and send a basic response back to the client.**

```const http = require('http');

// Create an HTTP server instance
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response back to the client
    res.end('Hello, World!\n');
});

// Listen for incoming requests
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```

**Consider a scenario where you need to read data from a file in NodeJS, transform the data, and then write it to another file using stream and buffers. Write a NodeJS program that accomplishes the following task.Create a readable stream to read data from file named input.txt. Use a transform stream to convert the data to uppercase. Create a writable stream to write the transform data to a file named output.txt.**

```const fs = require('fs');
const { Transform } = require('stream');

// Create a readable stream to read data from input.txt
const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8' });

// Create a transform stream to convert data to uppercase
const uppercaseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
        const uppercasedChunk = chunk.toString().toUpperCase();
        callback(null, uppercasedChunk);
    }
});

// Create a writable stream to write data to output.txt
const writableStream = fs.createWriteStream('output.txt', { encoding: 'utf8' });

// Pipe the readable stream through the transform stream to the writable stream
readableStream.pipe(uppercaseTransformStream).pipe(writableStream);

// Handle stream events
readableStream.on('error', (err) => {
    console.error('Error reading from input.txt:', err);
});

uppercaseTransformStream.on('error', (err) => {
    console.error('Error transforming data:', err);
});

writableStream.on('error', (err) => {
    console.error('Error writing to output.txt:', err);
});

writableStream.on('finish', () => {
    console.log('Data successfully written to output.txt');
});
```

**Create a Node.js server to respond synchronously with example.txt content on read file and report 404 not for other endpoints.**

```const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/example' && req.method === 'GET') {
        // Read the content of example.txt synchronously
        try {
            const content = fs.readFileSync('example.txt', 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(content);
        } catch (err) {
            console.error('Error reading example.txt:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        }
    } else {
        // Respond with 404 Not Found for other endpoints
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```

**Create an node jS server to asynchronously write content to example.txt on a specific endpoint responding with files returned successfully and return 404 not found for other endpoints.**
```const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/write' && req.method === 'POST') {
        let body = '';

        // Read request body
        req.on('data', (chunk) => {
            body += chunk;
        });

        // When request body is fully received
        req.on('end', () => {
            // Asynchronously write content to example.txt
            fs.writeFile('example.txt', body, (err) => {
                if (err) {
                    console.error('Error writing to example.txt:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    console.log('Content written to example.txt');
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end('File written successfully');
                }
            });
        });
    } else {
        // Respond with 404 Not Found for other endpoints
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```

**Apply your ExpressJS expertise by developing a middleware function. This function should log the timestamp, HTTP method, and URL for each incoming request to file. Name the request.log in the server. Ensure the file is created, if absent, and then new log entries are appended.**

```const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware function to log incoming requests
function requestLogger(req, res, next) {
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    // Create or append to the request.log file
    fs.appendFile(path.join(__dirname, 'request.log'), logEntry, (err) => {
        if (err) {
            console.error('Error writing to request.log:', err);
        }
    });

    // Proceed to the next middleware or route handler
    next();
}

// Use the requestLogger middleware for all routes
app.use(requestLogger);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```