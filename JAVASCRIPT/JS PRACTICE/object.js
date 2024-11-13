// let's start understanding about Object

let product = {
  name: "BoatRockerz",
  company: "Boat",
  price: "2000",
  warranty: "2 years",
  color: "Light Blue",
};
console.log(product);

// object method
/*
1. Object.keys(product) -- when we need fetch all the keys we use it.
 
It returns an array of strings, where each string represents a unique key.
Output: ['name', 'company', 'price', 'warranty', 'color']


2. Object.values(product) -- if we want to fetch all available values we can use.

It returns an array of strings, where each strings represents a values corresponding to some key in the object.
Output: ['BoatRockerz', 'Boat', '2000', '2 years', 'Light Blue']

3. Object.entries(product) -- instead of fetching keys and values seprately, we can use it to fetch complete pair.

It returns an array where each index contains a 2 length array whose 0th index is the key and 1st index is the value.
Output:
 [
     ['name', 'BoatRockerz'],
     ['company', 'Boat'],
     ['price', '2000'],
     ['warranty', '2 years'],
     ['color', 'Light Blue']
]   
4. Object.keys(product).length -- no of keys value pair.
It will return us an array with all the unique keys and the length of that array can be the our answer.
Output: 5

There are two important method very important to make fully immutable of an object.

1. Object.seal(product)
This method will help us to make sure that we are not able to add a new key value pairs or delete existing key value pairs.
but it will allow update existing key value pairs.   

2. Object.freeze(product) 
This provide highest level of immutibility. It create a frozen object which means:
 we cannot add new key value pair.
 we cannot remove existing key value pair.
 we cannot update existing key value pair.

Object.isSealed() and Object.isFrozen()

This method will help us to check, if the objects are manually sealed and frozen or not?
If an Object frozen it will return true for both isFrozen and isSealed.
If an Object is sealed manually then it will only return true for isSealed and false for isFrozen.

Object.prevenExtension()

This method helps us to achieve 50% of what seal gives us.
    We cannot add new key value pairs
    We can remove existing key value pairs
    Update is allowed

Object.defineProperty()
    This function is very powerful as it gives us granular control on make any particular set of key value pairs(from all the available pairs) as writable or configurable.
    writable means can we upadate key value pair or not?
    configurable means, can we update key value pair or not?

*/


