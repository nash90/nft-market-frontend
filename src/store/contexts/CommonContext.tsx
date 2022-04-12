import React, { createContext, useReducer } from "react";
import { CommonStore } from "../../type/store/CommonStore";
import { CommonActionType, CommonReducer } from "../reducers/CommonReducer";

const initialStore: CommonStore = {
  data: {
    path: "",
  },
};

interface CommonContextProps {
  commonStore: CommonStore;
  dispatch: React.Dispatch<CommonActionType>;
}

interface CommonContextProviderProps {
  children: React.ReactNode;
}

// Initialize context to manage Common data
export const CommonContext = createContext({} as CommonContextProps);

/**
 * Provide common context data to the child component
 * Provider is used as a component wrapper where common context is needed
 * @param children child node passed by wrapper
 * @returns
 */
const CommonContextProvider: React.FC<CommonContextProviderProps> = ({
  children,
}) => {
  const [commonStore, dispatch] = useReducer(CommonReducer, initialStore);

  const providerValue: CommonContextProps = {
    commonStore,
    dispatch,
  };

  return (
    <CommonContext.Provider value={providerValue}>
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContextProvider;
