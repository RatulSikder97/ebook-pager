import { Request, Response } from 'express';
import * as EBookPageCountProvider from 'src/provider/EBookPageCountProvider';

export const INDEX = (_req: Request, res: Response) => {
   return res.json({
      name: EBookPageCountProvider.getBookTotalPage(),
   });
};
