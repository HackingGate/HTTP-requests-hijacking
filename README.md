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

## HTTP Hijacking

Hijack your DNS. Point traget domains to your node server's IP address.

## HTTPS hijacking

Self-signed SSL certificate is not trusted on client devices so connection won't complete.

To fix that, generate a root certificate or use [SSL proxying](https://docs.proxyman.io/basic-features/ssl-proxying) feature on a [web debugging proxy](https://proxyman.io).

(charles 4.6.2 don't support TLS 1.2, I'm using Proxyman 2.34.1 on my Mac instead.)

## Known Limitations

- If you don't have the original certificate then SSL pining is not supported. ([Can we bypass SSL Pinning?](https://proxyman.io/posts/2019-11-15-Can-we-bypass-ssl-pinning))