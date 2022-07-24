## fs

文件操作系统:读取，写入。
使用 fs.open(path)获取 FileHandle 得操作方式。这种方式得好处就是，提前根据文件路径获取了此文件，后续直接操作<br>
使用 fs 对应得 api，第一个参数就是 path 路径

**读整个文件**

```js
const fs = require("fs/promises");
// 注意:如果没有指定encoding，那么将会返回buffer
fs.readFile("./test.txt", "utf-8").then((res) => {
  console.log(res);
});
```

**写入到指定文件中，配合mkdir使用**

```js
const dir = "./file"
fs.mkdir(path, { recursive: true }).then(res => {
  fs.writeFile(dir + '/data.txt', "数据 ").then(res=>{
      //写入数据时，先提前创建好目录层级
  })
})
```

**创建目录/多层目录**

```js
fs.mkdir("./file10/file11/file12",{recursive:true}).then(res=>{
  //多级目录，需要加上 recursive 递归
})
```

**读取文件夹下的文件名称列表**

```js
const fs = require("fs/promises")

fs.readdir("./coordinate", 'utf-8').then(res => {
  console.log(res);//[ 'index.js', 'marker.json', 'README.md' ]  //如果目录未找到，会报错。 如果没有文件名，则为空数据
})
```

**修改文件名/目录名称**

```js
const fs = require("fs/promises")
fs.rename("./ok.txt","./ok2.txt").then(res=>{
  console.log('res',res); //只能修改名称，不能移动文件，找不到文件会也会报错
})
```

**删除**

```js
fs.rm('./node_modules',{recursive:true,force:true}).then(res=>{
    //recursive可以直接对目录下文件递归。,增加force后，即使找不到目录，也不会报错
})
```

## path
