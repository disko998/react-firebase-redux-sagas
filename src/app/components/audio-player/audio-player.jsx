import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import VolumeUp from '@material-ui/icons/VolumeUp'
import Pause from '@material-ui/icons/Pause'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import { useStyles, PrettoSlider } from './styles'

export const AudioPlayer = ({ audio }) => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper} ml={4} px={3}>
            <IconButton className={classes.iconButton} edge='start' aria-label='search'>
                <PlayArrowIcon />
            </IconButton>
            <PrettoSlider
                value={30}
                onChange={() => {}}
                aria-labelledby='continuous-slider'
            />
            <PrettoSlider
                value={30}
                onChange={() => {}}
                className={classes.volume}
                aria-labelledby='continuous-slider'
            />
            <IconButton className={classes.iconButton} edge='start' aria-label='search'>
                <VolumeUp />
            </IconButton>
            <IconButton className={classes.iconButton} edge='start' aria-label='search'>
                <MoreVertIcon />
            </IconButton>
        </Box>
    )
}
