import { withStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

export const SpinnerWrapper = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
})(Box)
