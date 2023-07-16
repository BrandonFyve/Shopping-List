// Import the scraping function
import { NextApiRequest, NextApiResponse } from 'next';
import scrapeData from '../../lib/scraping';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url =
    'https://www.freecodecamp.org/news/react-server-components-for-beginners/';

  // Fetch and parse data from the website
  const data = await scrapeData(url);

  // Return data as JSON
  res.status(200).json(data);
}
