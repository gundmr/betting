import axios from 'axios';
import { FETCH_USER } from './types';



export const fetchUser = () => async dispatch => {
    // relative path to backend users list
    //when action creater gets called will instantly return
    const res = await axios.get('/api/current_user')

    //res is the output from axios
    dispatch({ type: FETCH_USER, payload: res.data });
};