const http = require("node:http");

const server = http.createServer((request, response) => {
    response.write(`<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Actividad 3 - A. hibridas</title><style>body {margin: 0; background-color: rgb(52, 52, 112); color: whitesmoke; font-family: Arial, Helvetica, sans-serif;} p {font-size: 1.5rem;} header {max-width: 960px; margin: 24px auto 0; padding: 20px 24px; background-color: rgb(24, 24, 68); border-radius: 12px; font-size: 2rem; font-weight: 700; text-align: center;} main {max-width: 960px; margin: 0 auto; padding: 24px;} table {width: 100%; border-collapse: collapse; background-color: white; color: rgb(24, 24, 68); border-radius: 12px; overflow: hidden;} th, td {padding: 12px; border-bottom: 1px solid rgba(24, 24, 68, 0.15); text-align: left;} th {background-color: rgb(235, 238, 255);}</style></head><body>`);
    response.write(`<header>Mi espectacular página web!</header><main>`);

    if (request.url == "/") {
        response.write(`<p>Martín Goldaracena</p>`);
    }

    if (request.url == "/materia") {
        response.write(`<p>Aplicaciones Híbridas</p>`);
        response.write(`<p>26-1</p>`);
        response.write(`<p>DWN4AV</p>`);
    }

    if (request.url == "/profesor") {
        response.write(`<p>Victor Villafañe</p>`);
    }

    if (request.url == "/otra") {
        response.write(`<p>Página no encontrada</p>`);
    }

    if (request.url == "/productos") {
        response.write(`<table><tr><th>ID</th><th>Nombre</th><th>Precio</th></tr><tr><td>1</td><td>Café Expreso</td><td>200</td></tr><tr><td>2</td><td>Café Americano</td><td>250</td></tr><tr><td>3</td><td>Café Cortado</td><td>200</td></tr><tr><td>4</td><td>Café Doble</td><td>250</td></tr><tr><td>5</td><td>Café Lágrima</td><td>200</td></tr></table>`);
    }

    response.end(`</main></body></html>`);
});

server.listen(2023, () => console.log("funcionando"));
