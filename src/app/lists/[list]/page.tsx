import { getShoppingList } from '@/lib/shoppingLists';
import { getItemsByShoppingListId } from '@/lib/Items';

export default async function Lists({ params }: { params: { list: string } }) {
  const list = await getShoppingList(parseInt(params.list));
  const items = await getItemsByShoppingListId(parseInt(params.list));
  return (
    <main>
      <h1>{list?.title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
