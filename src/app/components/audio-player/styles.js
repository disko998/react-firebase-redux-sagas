import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Slider } from '@material-ui/core'

const SPACE_BETWEEN = { marginLeft: 5, marginRight: 5 }

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
        ...SPACE_BETWEEN,
        padding: 0,
    },
    volume: {
        width: 100,
    },
}))

export const PrettoSlider = withStyles(theme => ({
    root: {
        color: theme.color.black,
        ...SPACE_BETWEEN,
    },
    thumb: {
        backgroundColor: theme.color.black,
    },
    active: {},
    valueLabel: {},
    track: {},
    rail: {},
}))(Slider)
