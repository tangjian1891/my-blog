let obj = {
  age: "20",
};
function foo(...arg1) {
  console.log(this.age);
  console.log(...arg1);
  return "可以返回";
}

Function.prototype.fakeBind = function (obj, ...args) {
  const fn = this;
  return function (...args2) {
    return fn.call(obj, ...args, ...args2);
  };
};

let newFoo = foo.fakeBind(obj, "1", "2");
let result = newFoo("3", "4");
console.log(result);
