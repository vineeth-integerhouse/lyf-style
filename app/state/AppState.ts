import {emptyFunction} from 'app/utils/common';
import create from 'zustand';
import {createSelectors} from './state';

interface IAppState {
  actionCount: number;
  showLoader: () => void;
  hideLoader: () => void;
}

const initialState: IAppState = {
  actionCount: 0,
  showLoader: emptyFunction,
  hideLoader: emptyFunction,
};

export const useAppState = create<IAppState>((set, get) => ({
  ...initialState,
  showLoader: () => set({actionCount: get().actionCount + 1}),
  hideLoader: () =>
    set({actionCount: get().actionCount < 0 ? 0 : get().actionCount - 1}),
}));

export const appStateSelectors = createSelectors(initialState);
