import express, { Application } from 'express';
import cors from 'cors';
import { EbookRouter } from 'src/routes/ebook.route';

const createServer = (): Application => {
   const app = express();
   app.use(express.urlencoded({ extended: true }));
   app.use(cors());
   app.use(express.json());

   app.get('/', (_req, res) => {
      return res.redirect('/ebook');
   });
   app.use('/', EbookRouter);

   return app;
};

export { createServer };
