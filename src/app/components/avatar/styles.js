import { withStyles, makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

export const useStyles = makeStyles(theme => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    normal: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}))

export const UserAvatar = withStyles(theme => ({
    root: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}))(Avatar)
