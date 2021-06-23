export const authorizationActionTypes = {
  LOG_IN: 'authorization/LOG_IN',
};

export const authorizationActions = {
  logIn: (text: string) => ({ type: authorizationActionTypes.LOG_IN, payload: text }),
};
