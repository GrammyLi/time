/*
 * @Author: your name
 * @Date: 2021-12-24 14:36:02
 * @LastEditTime: 2021-12-24 15:02:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-vue/main.js
 */

const debug = true;
const log = debug
  ? console.log.bind("***🍉 debug 🍉***", console)
  : function () {};
 
const e = (selector) => document.querySelector(selector);

const now = () => {
  let d = new Date();
  let nm = d.getFullYear();
  let yt = d.getMonth() + 1;
  let ri = d.getDate();
  let ui = d.getHours();
  let ff = d.getMinutes();
  let mc = d.getSeconds();
  return [nm, yt, ri, ui, ff, mc].map((n) => (n < 10 ? `0${n}` : n));
};

const updateCountdown = () => {
  const [y, mon, d, h, min, s] = now();
  const date = `${y}.${mon}.${d}`;
  e("#year").innerHTML = date;
  e("#hours").innerHTML = h;
  e("#seconds").innerHTML = s;
  e("#minutes").innerHTML = min;
};

const render = () => {
  updateCountdown();

  e(".loading").classList.add("hide");
  e(".countdown").classList.remove("hide");
};

const __main = () => {
  setTimeout(() => {
    render();
  }, 1000);
  setInterval(updateCountdown, 1000);
};

__main();
