import * as types from './mutation-types';

/* eslint-disable no-param-reassign */
const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer;
  },
};

export default mutations;
