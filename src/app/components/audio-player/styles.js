import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    wrapper: {
        width: '100%',
        background: theme.color.lightGray,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButton: {
        color: theme.color.black,
        marginRight: 5,
        padding: 0,
    },
}))
