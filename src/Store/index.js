import { createStore } from 'redux';
import reducer from '../Reducers';
import initialState from './data';

const recoverState = () => (initialState);

export default createStore(reducer, recoverState());
