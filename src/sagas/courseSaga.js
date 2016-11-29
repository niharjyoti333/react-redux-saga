import {call, put, take, fork} from 'redux-saga/effects';
import {takeEvery, takeLatest} from 'redux-saga';
import {fetchCourse} from '../api/course';

export function* loadCourse() {
  try {
    const course = yield call(fetchCourse);
    yield put({type: 'COURSE_RECEIVED', course});
  } catch (error) {
    yield put({type: 'LOAD_COURSE_FAILURE', error})
  }
}

export function* initCourse(){
  yield takeEvery('LOAD_COURSE', loadCourse);
}
