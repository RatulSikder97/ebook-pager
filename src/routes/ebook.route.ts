import { Router } from 'express';
import * as EBookPagerController from 'src/controller/EBookPagerController';

const ebookRouter = Router();
ebookRouter.get('/ebook', EBookPagerController.INDEX);

export const EbookRouter = ebookRouter;
