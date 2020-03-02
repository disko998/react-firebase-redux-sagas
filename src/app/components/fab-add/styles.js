import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    fab: {
        position: 'sticky',
        bottom: theme.spacing(3),
        left: '100%',
    },
}))
