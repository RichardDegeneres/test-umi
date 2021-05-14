import { Effect, Reducer, Subscription, request, Item } from 'umi';

export interface item3ModelState {
  name: string;
  info: Item[];
  curRadio: number;
}

export interface item3ModelType {
  namespace: string;
  state: item3ModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<item3ModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const item3Model: item3ModelType = {
  namespace: 'item3',

  state: {
    name: 'item3',
    info: [],
    curRadio: 0,
  },

  effects: {
    *query({ payload }, { call, put }) {},
    *fetch({ type, payload }, { call, put, select }) {
      const data = yield request('/api/herodetail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          hero_type: 5,
        }),
      });

      yield put({
        type: 'save',
        payload: {
          info: data,
        },
      });
    },
  },

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
        if (pathname === '/item3') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

export default item3Model;
