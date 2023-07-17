import { getShoppingLists } from '@/lib/shoppingLists';
import Link from 'next/link';

export default async function Home() {
  const shoppingLists = await getShoppingLists();
  return (
    <main>
      <h1>Shopping Lists</h1>
      <ul>
        {shoppingLists.map((list) => (
          <li key={list.id}>
            <Link href={`/lists/${list.id}`}>{list.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
