import { defineConfig } from "vitepress";
// import { defineConfigWithTheme } from "vitepress";
// import type { Config as ThemeConfig } from "@vue/theme";
// import baseConfig from "@vue/theme/config";
// export default defineConfigWithTheme<ThemeConfig>({
//   extends:baseConfig,
//   title: "你好啊",
//   themeConfig:{

//   }
// });

export default defineConfig({
  title: "你好啊",
  srcDir: "src", //使用src作为默认目录
  themeConfig: {
    //
    nav: [
      { text: "home", link: "/" },
      { text: "算法", link: "/算法/" },
      { text: "设计模式", link: "/设计模式/" },
      { text: "手写实现", link: "/手写实现/" },
    ],
    sidebar: {
      "/算法/": [
        { text: "排序", link: "/算法/排序" },
        { text: "两数之和", link: "/算法/两数之和" },
        { text: "斐波那契", link: "/算法/斐波那契" },
      ],
      "/手写实现/": [
        { text: "Promise", link: "/手写实现/promise" },
        { text: "call-apply-bind", link: "/手写实现/call-apply-bind" },
      ],
      "/设计模式/": [
        { text: "发布-订阅", link: "/设计模式/发布-订阅" },
      ],
    },
  },
});
