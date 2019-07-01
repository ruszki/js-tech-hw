import { RootState } from './root';

const LocalStorageKey = 'state';

export const loadState = (): RootState | undefined => {
  const jsonState = localStorage.getItem(LocalStorageKey);

  if (jsonState !== null) {
    return JSON.parse(jsonState);
  }
};

export const saveState = (state: RootState) => {
  try {
    const jsonState = JSON.stringify(state);
    localStorage.setItem(LocalStorageKey, jsonState);
  } catch {
    console.debug('Local storage is inaccessible, storage state is not saved');
  }
};
