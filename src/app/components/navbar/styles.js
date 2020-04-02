import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    displayName: {
        flexGrow: 1,
        background: 'none',
        border: 'none',
        fontSize: 20,
        letterSpacing: 1.2,
        fontWeight: 500,
        color: '#fff',
        outlineColor: '#fff',
        padding: 5,
        fontFamily: 'Roboto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    login: {
        marginRight: 5,
    },
    toolbar: {
        padding: 0,
    },
    editIcon: {
        height: 20,
    },
}))
