import prisma from './prisma';

export async function getShoppingLists() {
  try {
    const lists = await prisma.shoppingList.findMany();
    return lists;
  } catch (e) {
    console.error('Request error', e);
    return [];
  }
}

export async function getShoppingList(id: number) {
  try {
    const list = await prisma.shoppingList.findUnique({
      where: {
        id,
      },
    });
    return list;
  } catch (e) {
    console.error('Request error', e);
    return null;
  }
}

export async function createShoppingList(title: string) {
  try {
    const list = await prisma.shoppingList.create({
      data: {
        title,
      },
    });
    return list;
  } catch (e) {
    console.error('Request error', e);
    return null;
  }
}

export async function updateShoppingList(id: number, title: string) {
  try {
    const list = await prisma.shoppingList.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    return list;
  } catch (e) {
    console.error('Request error', e);
    return null;
  }
}

export async function deleteShoppingList(id: number) {
  try {
    const list = await prisma.shoppingList.delete({
      where: {
        id,
      },
    });
    return list;
  } catch (e) {
    console.error('Request error', e);
    return null;
  }
}
