import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    },
    wrapper: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typography: {},
    indicator: {
        width: 20,
        height: 20,
        fontSize: 0,
        backgroundColor: 'red',
        border: 0,
        borderRadius: 35,
        outline: 'none',
        margin: '0 10px',
    },
    timer: {
        fontWeight: 'bold',
        margin: '0 5px',
    },
}))
