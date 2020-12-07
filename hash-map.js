class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }
  // hash string function //
  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
    }
    return >>> 0;
  }
  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
        throw new Error('Key error');
    }
    return this._hashTable[index].value;
}
  // The set() function initially checks whether the load ratio is greater than the given maximum. If so it resizes the hash map using the private _resize() function, which you'll look at in a moment. Next, the function finds the appropriate slot, and adds an object to the array containing the key/value pair, increasing the length. //

  set(key, value){
    const loadRatio = (this.length = this._deleted + 1) / this._capacity;
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this._capacity * HashMap.SIZE_RATIO)
    }
    const index = this._findSlot(key);
    if(!this._hashTable[index]){
      this.length++;
    }
    this._hashTable[index] = {
      key,
      value, 
      DELETED: false
    }
  }
  // This simply finds the correct slot for the key, and sets the DELETED flag to true, decreasing the length and increasing the deleted count. //
  delete(key){
    const index = this._hashTable[index];
    if(slot === undefined){
      throw new Error('Key Error');
    }
    slot.DELETED = true;
    this.length++;
    this._deleted++;
  }

  // The internal private helper function _findSlot() is used to find the correct slot for a given key. It uses the private _hashString() function to calculate the hash of the key, and then uses the modulus to find a slot for the key within the current capacity. It then loops through the array, stopping when it finds the slot with a matching key or an empty slot. The _hashTable array will never be full due to our maximum load factor, so the function will always return a slot. //

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i=start; i<start + this._capacity; i++) {
        const index = i % this._capacity;
        const slot = this._hashTable[index];
        if (slot === undefined || (slot.key === key && !slot.DELETED)) {
            return index;
        }
    }
}
  // Resizing a hash map is really a bit of a misnomer. To make sure that each item lives in the correct location you really just recreate the hash map from scratch with larger capacity: //
  _resize(size){
    const oldSlots = this._hashTable;
    this._capacity = size;
    // reseting the length- it will get rebuilt as you add the items back
    this.length = 0;
    this._hashTable = [];
    this._deleted = 0;
    for(const slot of oldSlots){
      if(slow !== undefined && !slot.DELETED){
        this.set(slot.key, slot.value)
      }
    }
  }
}
