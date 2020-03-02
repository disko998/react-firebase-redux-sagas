import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        background: theme.color.white,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
}))

export const Title = withStyles({
    root: {
        textAlign: 'center',
        marginBottom: 20,
    },
})(Typography)
