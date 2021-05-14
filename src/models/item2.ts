import { Effect, Reducer, Subscription, request, Item } from 'umi';

export interface item2ModelState {
  name: string;
  info: Item[];
}

export interface item2ModelType {
  namespace: string;
  state: item2ModelState;
  effects: {
    query: Effect;
    fetch: Effect;
  };
  reducers: {
    save: Reducer<item2ModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const item2Model: item2ModelType = {
  namespace: 'item2',

  state: {
    name: 'item2',
    info: [],
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
          hero_type: 3,
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
        if (pathname === '/item2') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};

export default item2Model;
