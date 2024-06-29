import * as http from 'http';
import { app } from './app';

const server = http.createServer(app);

const PORT = process.env.PORT || 3333; // Default to 3333 if PORT is not set
server.listen(PORT, () => {
    console.log(`Servidor rodando na port ${PORT}`);
});

export { server };
