import {SET_COMPLETED} from '../constants';

const complete_goals = (state =[],action)=>{
  switch(action.type){
    case SET_COMPLETED:
      const {completeGoals}= action;
      return completeGoals;
    default:
      return state;  
  }
}

export default complete_goals;