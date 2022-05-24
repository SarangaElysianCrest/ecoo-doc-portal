import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../helper/useLocal";

const StoreContext = createContext();
const { Consumer: StoreConsumer, Provider } = StoreContext;

function StoreProvider(props) {
  const [storeContext, setStoreContext] = useState(null);

  return (
    <Provider value={{ storeContext, setStoreContext }}>
      {props.children}
    </Provider>
  );
}

const useStore = () => { 
    const [value,setValue] = useLocalStorage("STORE");
    const { storeContext, setStoreContext } = useContext(StoreContext);

    const setStore = (_store) => {
        setValue(_store); 
        setStoreContext(_store);
    }

    useEffect(() => {
        setStoreContext(value);
    }, [storeContext]);

    const getStore = () => { 
        return storeContext||value;
    }


    return { store:getStore(), setStore, };
}

export default StoreContext;
export { StoreConsumer, StoreProvider,useStore };
