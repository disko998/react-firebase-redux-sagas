import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    card: {
        padding: 30,
    },
    iconButton: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
    },
    likes: {
        marginTop: 4,
        marginRight: 3,
        fontSize: 25,
        fontWeight: 500,
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 17,
        fontWeight: 500,
    },
    category: {
        fontSize: 15,
        color: theme.color.dark,
        textTransform: 'capitalize',
    },
    expendButton: {
        color: theme.color.gray,
    },
}))
