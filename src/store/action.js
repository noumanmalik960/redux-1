


export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const INC_BY_VAL = "INC_BY_VAL"
export const RESET = "RESET"


export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}
export const reset = () => {
  return {
    type: RESET
  }
}

export const incrementByValue = (value) => {
  return {
    type: INC_BY_VAL,
    payload: value
  }
}