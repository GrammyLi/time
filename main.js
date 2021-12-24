/*
 * @Author: your name
 * @Date: 2021-12-24 14:36:02
 * @LastEditTime: 2021-12-24 14:48:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /g-vue/main.js
 */

const debug = true;
const log = debug
  ? console.log.bind("***🍉 debug 🍉***", console)
  : function () {};
const int = (number) => parseInt(number, 10);
const e = (selector) => document.querySelector(selector);

const now = () => {
  let d = new Date();
  let nm = d.getFullYear();
  let yt = d.getMonth() + 1;
  let ri = d.getDate();
  let ui = d.getHours();
  let ff = d.getMinutes();
  let mc = d.getSeconds();
  yt = yt < 10 ? `0${yt}` : yt;
  ri = ri < 10 ? `0${ri}` : ri;
  mc = mc < 10 ? `0${mc}` : mc;
  ff = ff < 10 ? `0${ff}` : ff;
  ui = ui < 10 ? `0${ui}` : ui;
  return [nm, yt, ri, ui, ff, mc];
};

const updateCountdown = () => {
  const [y, mon, d, h, min, s] = now();
  e("#year").innerHTML = y;
  e("#months").innerHTML = mon;
  e("#days").innerHTML = d;
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
