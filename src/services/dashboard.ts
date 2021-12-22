import request from '@/utils/request';
/* 
获取dashboard后台数据
*/

export default function getDashboard() {
  return request('/admin/index');
}
