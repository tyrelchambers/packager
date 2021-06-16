export function jsonReducer(state, action) {
  switch (action.type) {
    case "update":
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
    default:
      throw new Error();
  }
}
