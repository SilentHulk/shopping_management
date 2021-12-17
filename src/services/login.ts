import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
};
//执行登录，获取token
export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/auth/login', {
    method: 'POST',
    data: params,
  });
}
//退出登录
export async function logout() {
  return request.post('/auth/logout');
}
