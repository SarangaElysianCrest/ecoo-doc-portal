import { Snackbar } from "@material-ui/core";
import _Alert from '@mui/material/Alert';
import { useContext } from "react";
import AlertContext from "../app/context/alerts";

/**
 * Default Alert Component Based on Material Snackbar
 * and MuiAlert.
 */
export default function Alert() {
  const { alertContext, setAlertContext } = useContext(AlertContext);
  const { show, message, severity } = alertContext;

  const handleAlertClose = () => {
    setAlertContext({
      ...alertContext,
      show: false,
    });
  };

  return (
    <Snackbar
      open={show}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleAlertClose}
    >
      <_Alert elevation={6} variant="filled" severity={severity || "success"}>
        {message}
      </_Alert>
    </Snackbar>
  );
}
