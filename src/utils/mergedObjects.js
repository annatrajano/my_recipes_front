// Function to merge updated tags into a base JSON
export function mergedObject(
  baseObject,
  changesInObject,
  eid = null,
  objectItemTag = null
) {
  const updatedObject = { ...baseObject };

  for (const key in updatedObject) {
    // Treat regular keys in root object CB
    if (changesInObject.hasOwnProperty(key)) {
      updatedObject[key] = changesInObject[key];

      // Treat subObject in object 1
    } else if (
      typeof updatedObject[key] === "object" &&
      !Array.isArray(updatedObject[key])
    ) {
      updatedObject[key] = mergedObject(
        updatedObject[key],
        changesInObject,
        eid,
        objectItemTag
      );
      // Treat subArrays in object 2
    } else if (Array.isArray(updatedObject[key])) {
      if (eid === null) {
        updatedObject[key] = updatedObject[key].map((item) => {
          if (typeof item === "object") {
            return mergedObject(item, changesInObject);
          } else if (Array.isArray(item)) {
            return mergedObject(item, changesInObject, eid, objectItemTag);
          }
          return item;
        });
      } else if (objectItemTag !== null && eid !== null) {
        //
        updatedObject[key] = updatedObject[key].map((item) => {
          // Found eid 3
          if (item.eid === eid) {
            return {
              eid: item.eid,
              [objectItemTag]: mergedObject(
                item[objectItemTag],
                changesInObject
              ),
            };
          } else {
            return item;
          }
        });
      }
    }
  }
  return updatedObject;
}
