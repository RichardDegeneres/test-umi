import { Effect, Reducer } from 'umi';
// FIXME:
import request from '../../utils/request';
import { delay } from '../../utils/tool';

export interface CardItem {
  id: number;
  setup: string;
  punchline: string;
}

export interface PuzzlecardsModelState {
  data: CardItem[];
  counter: number;
}

export interface PuzzlecardsModelType {
  namespace: string;
  state: PuzzlecardsModelState;
  effects: {
    queryInitCards: Effect;
  };
  reducers: {
    addNewCard: Reducer<PuzzlecardsModelState>;
  };
}

const PuzzlecardsModel: PuzzlecardsModelType = {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 999,
  },

  // 异步
  effects: {
    *queryInitCards(_, { call, put }) {
      const data = yield call(request, '/api/cards');
      yield put({ type: 'addNewCard', payload: data });

      yield call(delay, 3000);

      const data2 = yield call(request, '/api/cards');
      yield put({ type: 'addNewCard', payload: data2 });
    },
  },

  // 同步/纯函数
  reducers: {
    addNewCard(state, { payload }) {
      const nextCounter = state!.counter + 1;
      const newCard = { ...payload, id: nextCounter };
      const nextData = state!.data.concat(newCard);

      return { data: nextData, counter: nextCounter };
    },
  },
};

export default PuzzlecardsModel;
