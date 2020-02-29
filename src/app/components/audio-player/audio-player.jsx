import React from 'react'
import { Box, Grid, Typography, Slider, IconButton } from '@material-ui/core'
import VolumeUp from '@material-ui/icons/VolumeUp'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

import { useStyles } from './styles'

export const AudioPlayer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.wrapper} ml={4} px={5}>
            <IconButton className={classes.iconButton} edge='start' aria-label='search'>
                <PlayArrowIcon />
            </IconButton>
            <Slider value={30} onChange={() => {}} aria-labelledby='continuous-slider' />
        </Box>
    )
}
