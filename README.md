# HTTP-requests-hijacking
Reveal what's inside the HTTP requests without send data to its actual destination

## Getting Started

On any unix like machine. Make sure `node` is installed and port `80/443` is not in use.

1. Clone the project
```sh
git clone https://github.com/HackingGate/HTTP-requests-hijacking
cd HTTP-requests-hijacking
```

2. Install dependencies
```
npm install
```

3. Generate a self-signed SSL certificate
```sh
# Commands form https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

4. Run the node server (`sudo` may required)
```sh
node app.js
```
