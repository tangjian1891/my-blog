import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Blog",
  description: "个人得前端总结，html,css,js,vue,node",
  srcDir: "src", //使用src作为默认目录
  themeConfig: {
    // siteTitle:"个人博客",
    logo: "/assets/images/logo.jpg",
    nav: [
      { text: "home", link: "/" },
      { text: "css", link: "/css/" },
      { text: "算法", link: "/算法/" },
      { text: "设计模式", link: "/设计模式" },
      { text: "手写实现", link: "/手写实现" },
      {
        text: "下拉",
        items: [
          { text: "链接1", link: ".." },
          { text: "链接1", link: ".." },
        ],
      },
    ],

    sidebar: {
      "/css/":[
        {
          text:"css概述",
          items:[
            {text:"盒模型",link:"/css/box-model"}
          ]
        }
      ],
      "/算法/": [
        {
          text: "算法概述",
          items: [
            { text: "排序", link: "/算法/排序" },
            { text: "两数之和", link: "/算法/两数之和" },
            { text: "斐波那契", link: "/算法/斐波那契" },
          ],
        },
      ],
      // "/手写实现/": [
      //   { text: "Promise", link: "/手写实现/promise" },
      //   { text: "call-apply-bind", link: "/手写实现/call-apply-bind" },
      // ],
      // "/设计模式/": [
      //   { text: "发布-订阅", link: "/设计模式/发布-订阅" },
      // ],
    },
  },
});
