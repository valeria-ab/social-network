export const updateObjectInArray = (
  items: Array<any>,
  itemId: string,
  objPropName: any,
  newObjProps: any
) => {
 return items.map((u) => {
    if (u[objPropName] === itemId) {
      return { ...u, newObjProps };
    }
    return u;
  });
};
