const ACTIONS = {
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHECKED:
      return state.map((label) => {
        if (label.id === action.id) {
          return { ...label, checked: true };
        } else {
          return label;
        }
      });
    case ACTIONS.UNCHECKED:
      return state.map((label) => {
        if (label.id === action.id) {
          return { ...label, checked: false };
        } else {
          return label;
        }
      });
    default:
      return state;
  }
};
