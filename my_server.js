const { parse } = require('querystring');
const http = require('http');
const port = 5000;

const myBearer = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1MzczNjAzNTgsImlzcyI6Ind3dy5waHlsdW10ZWNoLmNvbSIsInN1YiI6InNhIiwiZXhwIjoxNTM4Mj0MzU4fQ.f-Gzrh3RvR3IgVZvVDy2s6HUhkpKlnISLLuVRerZMVTJjuYOJFjeGPtGqiuNgeoDHdOiAhKXyAnk0nGdUlid9Q";
const requestHandler = (request, response) => {
  console.log(request.url);
//  console.log(JSON.stringify(request.headers));
  console.log(" ES UN POST ? "+request.method);
    if (request.method === 'POST') {
        console.log("SI  ES UN POST ");
        let body = '';
        request.on('data', chunk => {
            console.log(" Hay data: "+chunk.toString());
            body += chunk.toString();
        });
        request.on('end', () => {
            console.log(" END y  PARSEA EL BODY ");
            console.log(parse(body));
            if(request.url == "/controller/login"){
                response.setHeader('Authorization', myBearer);
            }
            response.end('ok');
        });
    }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`);
})