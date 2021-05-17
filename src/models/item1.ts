import { Effect, Reducer, Subscription, request } from 'umi';

export interface Item {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}

export interface Item1ModelState {
  name: string;
  info: Item[];
  curRadio: number;
}

export interface Item1ModelType {
  namespace: string;
  state: Item1ModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<Item1ModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const Item1Model: Item1ModelType = {
  namespace: 'item1',

  state: {
    name: 'item1',
    info: [],
    curRadio: 0,
  },

  // 异步
  effects: {
    *query({ payload }, { call, put }) {},

    *fetch({ type, payload }, { call, put, select }) {
      const data = yield request('/api/users');

      yield put({
        type: 'save',
        payload: {
          info: data,
        },
      });
    },
  },

  // 同步/纯函数
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  // 订阅/监听
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard/item1') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

export default Item1Model;
