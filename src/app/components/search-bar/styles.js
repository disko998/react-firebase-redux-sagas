import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    input: {
        border: 'none',
        width: '100%',
        '&:focus': {
            outline: 'none',
        },
        '&::placeholder': {
            color: theme.color.gray,
        },
    },
    iconButton: {
        marginRight: 10,
        marginLeft: 10,
        color: theme.color.gray,
    },
}))
