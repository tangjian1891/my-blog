> 实现call
> 注意this就是调用的函数，将函数挂载到对象上，调用完成后，删除

```js
  Function.prototype.fakeCall = function (obj, ...args) {
    // this 就是调用的函数对象，我们需要放到obj上，并且还不能影响别的key，所以我们用Symbol做
    const key = Symbol("key");
    obj[key] = this;
    let result = obj[key](...args);
    console.log(obj);
    delete obj[key];
    return result;
  };

  let obj = {
    age: "20",
  };
  function foo(arg1) {
    console.log(this.age);
    return arg1;
  }

  let result = foo.fakeCall(obj, "arg1", "arg2");

  console.log("最后值啊", result); //可以收到参数了
```

> 实现apply
> 内部this用这个函数，调用一下call即可

```js
Function.prototype.fakeApply = function (obj, arrArg) {
  return this.call(obj, ...arrArg);
};
```

> 实现bind
> 注意获取原函数。 返回一个全新的函数，函数内部调用原函数call一下。注意两次参数合并

```js
Function.prototype.fakeBind = function (obj, ...args) {
  const fn = this;
  return function (...args2) {
    return fn.call(obj, ...args, ...args2);
  };
};

```
