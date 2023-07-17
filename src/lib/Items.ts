import prisma from './prisma';

export async function getItems() {
  try {
    const items = await prisma.item.findMany();
    return items;
  } catch (e) {
    console.error('Request error', e);
    return [];
  }
}

export async function getItem(id: number) {
  try {
    const item = await prisma.item.findUnique({
      where: {
        id,
      },
    });
    return item;
  } catch (e) {
    console.error('Request error', e);
    return null;
  }
}

export async function getItemsByShoppingListId(shoppingListId: number) {
  try {
    const items = await prisma.item.findMany({
      where: {
        shoppingListId,
      },
    });
    return items;
  } catch (e) {
    console.error('Request error', e);
    return [];
  }
}
