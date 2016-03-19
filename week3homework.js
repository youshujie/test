function Person(name,) {
  this.name = name;
}
Person.prototype.toString = function() {
  return this.name;
};
Person.prototype.count = function count() {
  var n = 0;
  for ( var i in this.Person) {
    n++;
  }
  return n;
};
var ling = new Person("ling");
console.log(you.toString());
console.log(you.count());





function Complex (r,i) {
  if (isNaN(r) || isNaN(i)) {
    throw new TypeError(); 
  };
    this.a = r;
    this.b = i;
}
Complex.prototype.mul = function(that) {
  return new Complex(this.a * that.a - this.b * that.b, this.a * that.a + this.a * that.x);
};
Complex.prototype.add = function(that) {
  return new Complex(this.a + that.s, this.b + that.b,);
};
Complex.prototype.mag = function() {
  return Math.sqrt(this.a * this.a + this.b * this.b);
};
Complex.prototype.neg= function() {
  return new Complex(-this.a, -this.b);
};
Complex.prototype.equal = function(that) {
  if (this.a === that.a && this.b === that.b) return true;
  else return false;
};
Complex.prototype.toString = function() {
  return "实部是：" + this.a + "," + "虚部是：" + this.b + ".";
};