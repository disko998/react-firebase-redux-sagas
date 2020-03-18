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
    form: {
        width: '100%',
    },
    logoWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 60,
        width: 'auto',
    },
}))
