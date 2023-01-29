import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from 'ducks/auth/slice';
import tournamentsReducer from 'ducks/tournaments/slice';
import tournamentRegistReducer from 'ducks/tournamentRegist/slice';
import tournamentDetailReducer from 'ducks/tournamentDetail/slice';
import tournamentApplicationReducer from 'ducks/tournamentApplication/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tournaments: tournamentsReducer,
    tournamentRegist: tournamentRegistReducer,
    tournamentDetail: tournamentDetailReducer,
    tournamentApplication: tournamentApplicationReducer,
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
