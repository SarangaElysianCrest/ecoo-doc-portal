import {createContext, useState} from 'react';
import Alert from '../../components/Alert';
const AlertContext = createContext();
const {Consumer: AlertConsumer, Provider} = AlertContext;

function AlertProvider(props) {
    const [alertContext,setAlertContext] = useState({
        message: null,
        severity: null,
        show: false
    })

    return <Provider value={{alertContext,setAlertContext}}>
        <Alert/>
        {props.children}
    </Provider>
};

export default AlertContext;
export {AlertConsumer, AlertProvider};