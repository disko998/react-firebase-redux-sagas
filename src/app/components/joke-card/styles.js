import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    card: {
        padding: 30,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconButton: {
        color: theme.palette.secondary.main,
        textAlign: 'center',
        color: isliked =>
            isliked ? theme.palette.error.dark : theme.palette.error.light,
    },
    likes: {
        marginTop: 4,
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
