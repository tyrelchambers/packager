export function jsonReducer(state, action) {
  switch (action.type) {
    case "update": {
      const newState = {
        ...state,
      };

      const { name, version } = action.data.package;

      if (!newState.hasOwnProperty("dependencies")) {
        newState.dependencies = {};
      }

      newState.dependencies[name] = `^${version}`;

      return {
        ...newState,
      };
    }

    case "removeDep": {
      const newState = {
        ...state,
      };

      const item = action.data.package;

      delete newState.dependencies[item];

      return {
        ...newState,
      };
    }
    default:
      throw new Error();
  }
}
