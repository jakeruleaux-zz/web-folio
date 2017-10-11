export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      const { username, password, id} = action;
      console.log(action);
      return [
        ...state,
        {
          username: username,
          password: password,
          id: id
        }
      ]
      default:
        return state;
  }
}
