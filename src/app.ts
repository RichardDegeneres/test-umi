import { ResponseError } from 'umi-request';

export const request = {
  // ip 域名 vs loaclhost 域名，也会出现跨域
  prefix: 'http://localhost:8000',
  errorHandler: (error: ResponseError) => {
    console.log('%c报错信息：', 'color: green; background: yellow;', error);
  },
};
