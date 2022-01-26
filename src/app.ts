import * as moduleAlias from 'module-alias';

const sourcePath = 'src';

moduleAlias.addAliases({
   '@server': sourcePath,
   '@config': `${sourcePath}/config`,
   '@domain': `${sourcePath}/domain`,
   '@controller': `${sourcePath}/controller`,
   '@middleware': `${sourcePath}/middleware`,
});

import { createServer } from './config/express';
import { AddressInfo } from 'net';
import http from 'http';

const host = '0.0.0.0';
const port = '5000';
const startServer = async () => {
   const app = await createServer();
   const server = http.createServer(app).listen({ host, port }, () => {
      const addressInfo = server.address() as AddressInfo;
      console.log(
         `SERVER READY AT http://${addressInfo.address}:${addressInfo.port}`,
      );
   });

   const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
   signalTraps.forEach(type => {
      process.once(type, async () => {
         console.log(`process.once ${type}`);

         server.close(() => {
            console.log('HTTP SERVER CLOSED');
         });
      });
   });
};

startServer();
