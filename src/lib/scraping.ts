import puppeteer from 'puppeteer';

const scrapeData = async (url: string): Promise<string[]> => {
  try {
    // Initialize a new browser instance
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process'],
    });
    const page = await browser.newPage();

    // Navigate to the url
    await page.goto(url);

    // Scrape the data
    const headlines = await page.$$eval('h1', (headers) =>
      headers.map((header) => header.textContent || '')
    );

    // Close the browser
    await browser.close();

    return headlines;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default scrapeData;
