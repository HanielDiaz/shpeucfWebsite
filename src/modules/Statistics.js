import firebase from 'firebase';
import { createActiontypes } from '../utils/actions';
import { dispatch } from 'rxjs/internal/observable/range';
// handle all things related to Elections
const ACTIONS = createActiontypes([
    'FETCH_STATISTICS',
]);


const INITIAL_STATE = {
    statistics: {}
};

export default (state = INITIAL_STATE, action) => {
    console.log("ello",action)
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.FETCH_STATISTICS:
      return { ...state,
        statistics: payload
      };
    default:
      return state;
  }
};

export const fetchStatistics = () => {
    console.log("hello")
    firebase.database().ref(`statistics/`).once('value', snapshot => {
        console.log(ACTIONS.FETCH_STATISTICS, snapshot.val(), dispatch())
        return (dispatch) => {
            dispatch({
                type: ACTIONS.FETCH_STATISTICS,
                payload: snapshot.val()
            })
        }
    }).catch((error) => {
        console.log(error, ACTIONS.FETCH_STATISTICS)

        dispatch({
            type: ACTIONS.FETCH_STATISTICS,
            payload: {}
        })
    })
}
