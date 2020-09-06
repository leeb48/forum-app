// Auth State
export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  user: null,
};

// Reducer
export function auth(state: AuthState = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
