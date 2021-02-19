/**
 * 权限校验：
 *  Vue Router中的 前置钩子函数 beforeEach(to,from,next)
 *  当进行路由跳转之前，进行判断 是否已经登录过， 登陆过则允许访问非登录页面，否则回到登录页
 *
 *  to: 即将要进入的目标路由对象
 *  from：即将要离开的路由对象
 *  next: 是一个方法，可以指定路由地址，进行路由跳转
 */

import router from './index';
import {
  Toast
} from 'vant';

router.beforeEach((to, from, next) => {
  console.info(to);
  console.log(from);
  next();
});

router.afterEach(() => {
  Toast.clear();
});