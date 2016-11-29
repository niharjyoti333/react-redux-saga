import {initCourse} from './courseSaga';
import {initCategory} from './categorySaga';
import {fork} from 'redux-saga/effects';

export function* rootSaga() {
  yield [
    fork(initCourse),
    fork(initCategory)
  ];
}
