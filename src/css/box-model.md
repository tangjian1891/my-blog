Box Model 盒模型:对于css来说，所有得element元素都是一个box盒子(框)
## 排列方式
不讨论盒子类型，总体来说，盒子自左向右，自上而下排列。

## 盒子类型dispaly外部类型(影响排列)
* Block box 块级盒子。 
** 排列方式:盒子会在内联方向扩展并占据父容易在该容器上所有的可用空间，在大多情况下意味着盒子会和父容器一样宽。
** width,height可以发挥作用。padding,margin,border 会将起他元素从当前盒子周围推开。
常见的块盒子。 div,h1-6,p。
** Inline box 行内盒子
** width和height属性都将不起作用(所以滚动条，超出省略号，都是不生效的)。水平方向的内边距，外边距以及边框会把其他处于inline状态的盒子推开。
注意:推开的是内联方向，垂直方向可能是block，所以推不开
注意:非常不建议给行内元素设置 上下padding和margin值，页面上不会生效，但会严重影响调试。

## 盒子大小(宽高)计算方式

box-sizing:content-box;(默认,标准盒模型)width+height被content独享
使用getComputedStyle(dom)获取的width，height。与设置时一致。
调试元素时，看到的 宽高 = content+border+padding < width height

box-sizing:border-box;（ie的变异盒模型,可以保持调试，取值一致） width+height会被border+padding+content三分。
使用getComputedStyle(dom)获取的width,height。也是与设置时一致
调式元素时，看到的 宽高 = content + border + padding = width height

## flex 
display:flex在一个元素上，外部显示类型是类似**block**，但是内部显示类型flex-item。 会根据flexbox弹性盒子规则进行布局
display:inline-flex。外部形为inline-block。可以设置宽高。