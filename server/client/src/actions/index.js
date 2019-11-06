import axios from 'axios';
import { FETCH_USER } from './types';



export const fetchUser = () => async dispatch => {
    // relative path to backend users list
    //when action creater gets called will instantly return
    const res = await axios.get('/api/current_user')

    //res is the output from axios
    dispatch({ type: FETCH_USER, payload: res.data });
};

//not sure what to put for 'value' - need to id onclickSubmit from model
// export const saveBet = (value) => async (dispatch) => {
// 	const res = await axios.post('/api/bet', value);

// 	//update user model inside action reduceer
// 	dispatch({ type: FETCH_USER, payload: res.data });
// };