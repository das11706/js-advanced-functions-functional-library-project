// Another (better) option is to determine whether 
// the collection is an object or an array and, 
// if it's an object, use a JavaScript Object 
// method to create an array that contains 
// the object's values. You then only need to 
// write code that processes an array, 
// regardless of what data structure is 
// passed in to your function. Use your Googling 
// skills to figure out how to do this.

const selectArrOrObj = function (collection) {
  return collection instanceof Array
    ? collection.slice()
    : Object.values(collection);
};


function myEach(collection, callback) {
  const newCollection = selectArrOrObj(collection);

  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }
  return collection;
}


function myMap(collection, callback) {
  const newCollection = selectArrOrObj(collection);

  const newArray = [];

  for (let i = 0; i < newCollection.length; i++) {
    newArray.push(callback(newCollection[i]));
  }

  return newArray;
}



function myReduce(collection, callback, acc) {
  let newCollection = selectArrOrObj(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  const len = newCollection.length;

  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}


function myFind(collection, predicate) {
  const newCollection = selectArrOrObj(collection);
  
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }

  return undefined;

}


function myFilter(collection, predicate) {
  const newCollection = selectArrOrObj(collection);

  const newArray = [];

  for(let i = 0; i < newCollection.length; i++) {
    if(predicate(newCollection[i])) newArray.push(newCollection[i]);
  }

  return newArray;
}


function mySize(collection) {
  const newCollection = selectArrOrObj(collection);
  return newCollection.length;
}


function myFirst(arr, stop = false) {
  return stop ? arr.slice(0, stop) : arr[0];
}


function myLast(arr, start = false) {
  return start ? arr.slice(arr.length - start, arr.length)
  : arr[arr.length -1];
}


function myKeys(object) {
  const keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}


function myValues(object) {
  const values = [];
  for (let key in object) {
    values.push(object[key]);
  }
  return values;
}

