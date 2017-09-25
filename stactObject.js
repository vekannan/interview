function stackObject(capacity){
   this.storage = {};
   this.count = 0;
   this.capacity = capacity || Infinity;
}

stackObject.prototype.push = function(value) {
  if(this.count < this.capacity){
    this.storage[this.count++] = value;
    return this.count;
  }
  return 'you have reached the Max capacity';
};


stackObject.prototype.pop = function(){
  if(this.count === 0){
    return 'nthing to return please add some value';
  }
  var value = this.storage[--this.count];
  delete this.storage[this.count];

  if(this.count < 0){
    this.count = 0;
  }

  return value;

};

stackObject.prototype.peek = function(){

  var size = function() {
    var objsize = 0, key;
    for (key in  this.storage) {
        console.log(key); objsize++;
    }
    console.log(size);
    return objsize;
  };
  var length = size();
  if(length > 0)
  return this.storage[this.count-1];

  return 'no values to show';
};

stackObject.prototype.addCap = function(capacount){
  this.capacity += capacount;
};
var obj4 = new stackObject(2);
obj4.push('venkatesan');
obj4.peek();
