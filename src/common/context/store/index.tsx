import {createContext, useReducer} from 'react';
import {Loader} from '../reducers';

export const Store = createContext({});

const dispatch = {};

export function StoreProvider(props) {
  // All reducres

  //@ts-ignore
  const [mapLoaderState, dispatchLoaderAction] = useReducer(Loader, dispatch);

  // Value of all reducers

  const loaderValue = {mapLoaderState, dispatchLoaderAction};

  //   combine all values

  const value = {
    ...loaderValue,
  };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
