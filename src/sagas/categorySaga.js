import {call, put, take, fork} from 'redux-saga/effects';
import {takeEvery, takeLatest} from 'redux-saga';
import {fetchCategory} from '../api/course';

export function* loadCategory() {
  try {
    const category = yield call(fetchCategory);
    yield put({type: 'CATEGORY_RECEIVED', category});
  } catch (error) {
    yield put({type: 'LOAD_CATEGOrY_FAILURE', error})
  }
}

export function* initCategory(){
  yield takeEvery('LOAD_CATEGORY', loadCategory);
}
