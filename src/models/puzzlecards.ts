import { Effect, Reducer } from 'umi';
// FIXME:
import request from '../../utils/request';
import { delay } from '../../utils/tool';

export interface CardItem {
  id: number;
  setup: string;
  punchline: string;
}

export interface ResultItem {
  genre: string;
  sold: number;
}

export interface DataStastic {
  result: ResultItem[];
}

export interface PuzzlecardsModelState {
  data: CardItem[];
  dataForm: CardItem[];
  dataStastic: DataStastic;
  counter: number;
}

export interface PuzzlecardsModelType {
  namespace: string;
  state: PuzzlecardsModelState;
  effects: {
    queryInitCards: Effect;
    getStatistic: Effect;
  };
  reducers: {
    addNewCard: Reducer<PuzzlecardsModelState>;
    addNewCardForm: Reducer<PuzzlecardsModelState>;
    setStastic: Reducer<PuzzlecardsModelState>;
  };
}

const PuzzlecardsModel: PuzzlecardsModelType = {
  namespace: 'puzzlecards',
  state: {
    data: [],
    dataForm: [],
    dataStastic: {
      result: [],
    },
    counter: 999,
  },

  // 异步
  effects: {
    *queryInitCards(_, { call, put }) {
      const data = yield call(request, '/api/cards');
      yield put({ type: 'addNewCard', payload: data });
      yield put({ type: 'addNewCardForm', payload: data });

      yield call(delay, 3000);

      const data2 = yield call(request, '/api/cards');
      yield put({ type: 'addNewCard', payload: data2 });
      yield put({ type: 'addNewCardForm', payload: data2 });
    },

    *getStatistic(_, { call, put }) {
      const data = yield call(request, '/api/chart');

      yield put({ type: 'setStastic', payload: data });
    },
  },

  // 同步/纯函数
  reducers: {
    addNewCard(state, { payload }) {
      const originState = state!;
      const nextCounter = originState.counter + 1;
      const newCard = { ...payload, id: nextCounter };
      const nextData = originState.data.concat(newCard);

      return { ...originState, data: nextData, counter: nextCounter };
    },

    addNewCardForm(state, { payload }) {
      const originState = state!;
      const nextCounter = originState.counter + 1;
      const newCard = { ...payload, id: nextCounter };
      const nextData = [newCard].concat(originState.dataForm);

      return { ...originState, dataForm: nextData, counter: nextCounter };
    },

    setStastic(state, { payload }) {
      const originState = state!;
      return { ...originState, dataStastic: payload };
    },
  },
};

export default PuzzlecardsModel;
