/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.

  */

 import {FETCHED, FETCHING, ERROR, POSTING, POSTED, DELETING, DELETED} from '../actions/index';

 const initialState = {
     smurfs: [],
    fetchingSmurfs: false,
    smurfsFetched: false,
    addingSmurf: false,
    smurfAdded: false,
    updatingSmurf: false,
    deletingSmurf: false,
    smurfDeleted: false,
    error: null
 }
 
 const smurfsReducer = (state = initialState, action) => {
     switch (action.type) {
         case FETCHING:
             return Object.assign({}, state, {fetchingSmurfs: true})
 
         case FETCHED:
             return Object.assign({}, state, {
                 smurfs: [...state.smurfs, ...action.payload],
                 fetchingSmurfs: false,
                 smurfsFetched: true
             })
 
         case POSTING:
             return Object.assign({}, state, {addingSmurf: true, smurfAdded: false})
 
         case POSTED:
             return Object.assign({}, state, {smurfAdded: true, addingSmurf: false})
 
         case ERROR:
             return Object.assign({}, state, {
                 fet: false,
                 error: "Data fetch failed"
             })

        case DELETING:
             return Object.assign({}, state, {deletingSmurf: true, smurfDeleted: false})

        case DELETED:
             return Object.assign({}, state, {deletingSmurf: true, smurfDeleted: true})
             
         default:
             return state;
     }
 }


export default smurfsReducer;


// import { combineReducers } from 'redux';
// import { smurfsReducer } from './smurfsReducer';

// export const rootReducer = combineReducers(
//     {smurfsReducer})