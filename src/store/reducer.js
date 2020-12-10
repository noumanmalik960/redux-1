// Reminder: reducer must be a pure function

import { DECREMENT, INCREMENT, INC_BY_VAL, RESET } from "./action"


const initialState = {
  counter: 0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 }
    }

    case DECREMENT: {
      return { ...state, counter: state.counter - 1 }
    }

    case INC_BY_VAL: {
      return { ...state, counter: state.counter + action.payload }
    }

    case RESET: {
      return { ...state, counter: 0 }
    }

    default: {
      return state
    }
  }
}