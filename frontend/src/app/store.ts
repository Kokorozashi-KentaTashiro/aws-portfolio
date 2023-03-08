import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "ducks/auth/slice";
import effectReducer from "ducks/effect/slice";
import tournamentsReducer from "ducks/tournaments/slice";
import tournamentRegistReducer from "ducks/tournamentRegist/slice";
import tournamentDetailReducer from "ducks/tournamentDetail/slice";
import tournamentApplicationReducer from "ducks/tournamentApplication/slice";
import applicationsReducer from "ducks/applications/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    effect: effectReducer,
    tournaments: tournamentsReducer,
    tournamentRegist: tournamentRegistReducer,
    tournamentDetail: tournamentDetailReducer,
    tournamentApplication: tournamentApplicationReducer,
    applications: applicationsReducer,
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
