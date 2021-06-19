export function jsonReducer(state, action) {
  switch (action.type) {
    case "addDep": {
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

    case "addProperty": {
      const newState = {
        ...state,
      };
      const { key, value } = action.data;

      newState[key] = value;

      return {
        ...newState,
      };
    }

    case "removeProperty": {
      const newState = {
        ...state,
      };
      const { key } = action.data;

      delete newState[key];

      return {
        ...newState,
      };
    }
    default:
      throw new Error();
  }
}
