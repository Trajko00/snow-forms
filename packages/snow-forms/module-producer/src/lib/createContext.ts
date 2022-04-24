import * as React from 'react';
import { CreateContextOptions, CreateContextReturn } from '@snow-forms/types';

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export const createContext = <ContextType>(
  options: CreateContextOptions = {}
) => {
  const {
    strict = true,
    errorMessage = 'SnowForm Error: `context` is undefined. Seems you forgot to wrap component within the SnowForm Component/Provider',
    name,
  } = options;

  const Context = React.createContext<ContextType | undefined>(undefined);

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = 'SnowForm Error';
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [
    Context.Provider,
    useContext,
    Context,
  ] as CreateContextReturn<ContextType>;
};
