import type { Reducer, Effect } from 'umi';
import { history } from 'umi';

import { fakeAccountLogin, logout } from '@/services/login';
import { message } from 'antd';

export type StateType = {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
};

export type LoginModelType = {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
};

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      //发送请求，执行登录
      const response = yield call(fakeAccountLogin, payload);
      //console.log(response)

      if (response.state === undefined) {
        //提醒登录成功
        message.success('登录成功');
        //登录成功
        yield put({
          type: 'changeLoginStatus',
          payload: response,
        });
        //跳转到首页
        history.replace('/');
      }
    },

    //退出登录
    *logout(_, { call }) {
      //请求前loading效果
      const load = message.loading('退出中...');
      //请求api，退出登录
      const response = yield call(logout);
      //判断是否请求成功
      if (response.status === undefined) {
        //删除本地localStorage
        localStorage.removeItem('userInfo');
        localStorage.removeItem('access_token');
        message.info('退出成功');
        //重定向
        history.replace('/login');
      }
      load();
    },
  },

  reducers: {
    //将token存入localStorage
    changeLoginStatus(state, { payload }) {
      localStorage.setItem('access_token', payload.access_token);
      return {
        ...state,
      };
    },
  },
};

export default Model;
