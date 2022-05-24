import { createContext, useContext, useState } from "react";
import Alert from "../../components/Alert";
const AlertContext = createContext();
const { Consumer: AlertConsumer, Provider } = AlertContext;

function AlertProvider(props) {
  const [alertContext, setAlertContext] = useState({
    message: null,
    severity: null,
    show: false,
  });

  return (
    <Provider value={{ alertContext, setAlertContext }}>
      <Alert />
      {props.children}
    </Provider>
  );
}

const useAlert = () => { 
  const { alertContext, setAlertContext } = useContext(AlertContext);
  return {setAlert:setAlertContext};
}

export default AlertContext;
export { AlertConsumer, AlertProvider,useAlert };
