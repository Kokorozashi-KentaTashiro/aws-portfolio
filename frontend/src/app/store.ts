import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from 'ducks/auth/slice';
import tournamentsReducer from 'ducks/tournaments/slice';
import tournamentRegistReducer from 'ducks/tournamentRegist/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tournaments: tournamentsReducer,
    tournamentRegist: tournamentRegistReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
