import puppeteer from 'puppeteer';

export const getBookTotalPage = async () => {
   const browser = await puppeteer.launch({
      headless: false,
      args: ['--window-size=1920,1080'],
   });
   const page = await browser.newPage();
   await page.setViewport({ height: 750, width: 360, isMobile: true });
   await page.goto(
      'http://127.0.0.1:5500/?url=https://s3.amazonaws.com/moby-dick/moby-dick.epub&userId=2032',
   );

   // await browser.close();
   return 'I am Book';
};
