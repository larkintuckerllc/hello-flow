// @flow
/* eslint-disable no-console */
import http from 'http';

function foo(x: ?number): string {
  if (x) {
    // return x; // BROKEN
    return x.toString(); // FIXED
  }
  return 'default string';
}

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(foo(2));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
