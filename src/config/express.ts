import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const createServer = (): Application => {
   const app = express();
   app.use(express.urlencoded({ extended: true }));
   app.use(cors());
   app.use(express.json());

   app.get('/', (_req: Request, res: Response) => {
      res.send('I am ok');
   });

   return app;
};

export { createServer };
