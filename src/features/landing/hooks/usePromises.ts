import { Reducer, useEffect, useReducer } from 'react';

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T[] }
  | { type: 'error'; payload: Error };

type State<T> = {
  data?: T[];
  error?: Error;
};

const getInitialState = <T>(): State<T> => ({
  data: undefined,
  error: undefined,
});

const reducer = <T>(state: State<T>, action: Action<T>): State<T> => {
  const initialState = getInitialState<T>();
  switch (action.type) {
    case 'loading':
      return { ...initialState };
    case 'fetched':
      return { ...initialState, data: action.payload };
    case 'error':
      return { ...initialState, error: action.payload };
    default:
      return initialState;
  }
};

const usePromises = <T>(promises: Promise<T>[]): State<T> => {
  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(
    reducer,
    getInitialState<T>(),
  );

  useEffect(() => {
    dispatch({ type: 'loading' });
    (async () => {
      try {
        const result = [];
        for (const p of promises) {
          result.push(await p);
        }
        dispatch({ type: 'fetched', payload: result });
      } catch (e) {
        dispatch({ type: 'error', payload: e as Error });
      }
    })();
  }, []);

  return state;
};

export default usePromises;
