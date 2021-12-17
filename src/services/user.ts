import request from '@/utils/request';

export async function query(): Promise<any> {
  return request('/api/users');
}

//获取当前用户信息
export async function queryCurrent(): Promise<any> {
  //return request('/api/currentUser');
  return request('/admin/user');
}
