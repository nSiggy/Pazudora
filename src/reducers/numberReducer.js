// @flow

type NumberState = {
  counter: number,
};

type NumberAction = {
  type: string,
  payload?: any,
};
const initialState: NumberState = {
  counter: 100,
};

export default function numberReducer(
  state: NumberState = initialState,
  action: NumberAction,
) {
  switch (action.type) {
    case 'INCREASE_NUMBER': {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case 'DECREASE_NUMBER': {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    case 'SUBMIT_NUMBER': {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }
    default:
      return state;
  }
}
