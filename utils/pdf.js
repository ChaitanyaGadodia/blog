const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/resume_generator', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'public/resume/Chaitanya_Gadodia_Resume.pdf', format: 'A4', printBackground: true});

  await browser.close();
})();
