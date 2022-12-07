import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function SnackbarService(props) {
    const { msg, status } = props;
    const classes = useStyles();
    const [dangerSnackbar, setDangerSnackbar] = React.useState(false);
    const [successSnackbar, setSuccessSnackbar] = React.useState(false);
    const [warningSnackbar, setWarningSnackbar] = React.useState(false);
    const [infoSnackbar, setInfoSnackbar] = React.useState(false);

    useEffect(() => {
        if(status == "danger"){
            setDangerSnackbar(true);
        }else if(status == "success"){
            setSuccessSnackbar(true);
        }else if(status == "warning"){
            setWarningSnackbar(true);
        }else if(status == "info"){
            setInfoSnackbar(true);
        }
    }, [])

    const handleCloseDangerSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setDangerSnackbar(false);
    };

    const handleCloseSuccessSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSuccessSnackbar(false);
    };

    const handleCloseWarningSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setWarningSnackbar(false);
    };

    const handleCloseInfoSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setInfoSnackbar(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} open={dangerSnackbar} autoHideDuration={2000} onClose={handleCloseDangerSnackbar}>
                <Alert onClose={handleCloseDangerSnackbar} severity="error">
                    { msg }
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} open={successSnackbar} autoHideDuration={2000} onClose={handleCloseSuccessSnackbar}>
                <Alert onClose={handleCloseSuccessSnackbar} severity="success">
                    { msg }
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} open={warningSnackbar} autoHideDuration={2000} onClose={handleCloseWarningSnackbar}>
                <Alert onClose={handleCloseWarningSnackbar} severity="warning">
                    { msg }
                </Alert>
            </Snackbar>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }} open={infoSnackbar} autoHideDuration={2000} onClose={handleCloseInfoSnackbar}>
                <Alert onClose={handleCloseInfoSnackbar} severity="info">
                    { msg }
                </Alert>
            </Snackbar>
        </div>
    );
}
