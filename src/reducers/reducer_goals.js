import {SET_GOALS} from '../constants';

const reminder_goals = (state =[],action)=>{
  switch(action.type){
    case SET_GOALS:
      const {goals}= action;
      return goals;
    default:
      return state;  
  }
}

export default reminder_goals;