import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    login: {
        marginRight: 5,
    },
    userButton: {
        margin: 0,
        color: theme.color.white,
    },
    toolbar: {
        padding: 0,
    },
}))
