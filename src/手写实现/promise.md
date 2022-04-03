开始实现一个promise

> 实现promise.all
> 思路：Promise.all接受一下数组，返回一个新的promise包裹。循环数组中的promise，当全部resolve后，才进行外层resolve

``` js
Promise.myAll = function (arr) {
  return new Promise((resolve) => {
    let count = arr.length;
    arr.forEach((promise) => {
      promise.then((res) => {
        count--;
        if (count == 0) {
          resolve("全部返回了");
        }
      });
    });
  });
};

let p1=new Promise((resolve)=>{
  setTimeout(() => {
    resolve(1)
  }, 2000);
})
let p2=new Promise((resolve)=>{
  setTimeout(() => {
    resolve(1)
  }, 5000);
})

Promise.myAll([p1,p2]).then(res=>{
  console.log(res);
})
```
