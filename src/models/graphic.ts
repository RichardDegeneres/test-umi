import { Effect, Reducer } from 'umi';

// FIXME:
import request from '../../utils/request';
import { delay } from '../../utils/tool';

export interface GraphItem {
  time: number;
  name: string;
  color: number[][];
  url: string;
  yValue: number;
}

export interface PosterItem {
  name: string;
  count: number;
}

export interface GraphModelState {
  info: GraphItem[];
  infoPoster: PosterItem[];
}

export interface GraphModelType {
  namespace: string;
  state: GraphModelState;
  effects: {
    getData: Effect;
  };
  reducers: {
    setData: Reducer<GraphModelState>;
    setDataPoster: Reducer<GraphModelState>;
  };
}

const GraphModel: GraphModelType = {
  namespace: 'graph',

  state: {
    info: [],
    infoPoster: [],
  },

  // 异步
  effects: {
    *getData(_, { call, put }) {
      const data = yield call(request, '/api/graph');
      yield put({ type: 'setData', payload: data.list });

      yield call(delay, 3000);

      const dataPoster = yield call(request, '/api/poster');
      yield put({ type: 'setDataPoster', payload: dataPoster.list });
    },
  },

  // 同步/纯函数
  reducers: {
    setData(state, { payload }) {
      //FIXME: undefined 类型
      const originState = state!;
      return { ...originState, info: payload };
    },

    setDataPoster(state, { payload }) {
      const originState = state!;
      return { ...originState, infoPoster: payload };
    },
  },
};

export default GraphModel;
