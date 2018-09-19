export const USER_AUTH = 'USER_AUTH';
export const LOGOUT = 'LOGOUT';
export const CHECKED_AUTH = 'CHECKED_AUTH';
export const SEEKER_LOAD = 'SEEKER_LOAD';

export const getUser = state => state.user;
export const getSeeker = state => state.seeker;
export const getCheckedAuth = state => state.checkedAuth;

export function user(state = null, { type, payload }) {
  switch(type) {
    case USER_AUTH:
      return payload;
    case LOGOUT:
      return null;
    default: 
      return state;
  }
}

export function seeker(state = null, { type, payload }) {
  switch(type) {
    case SEEKER_LOAD:
      return payload;
    default: 
      return state;
  }
}

export function checkedAuth(state = false, { type }) {
  switch(type) {
    case CHECKED_AUTH:
      return true;
    default:
      return state;
  }
}