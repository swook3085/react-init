import * as types from './Types';

export function onAgeUp() {
  return {
    type: types.AGE_UP,
  };
}
export function onAgeDown() {
  return {
    type: types.AGE_DOWN,
  };
}