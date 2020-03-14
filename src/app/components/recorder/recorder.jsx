import React from 'react'
import { Popper, Fade, Paper, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import './pulsAnimation.css'
import { useStyles } from './styles'
import {
    selectRecordingTime,
    MAX_RECORDING_TIME_SEC,
    stopRecordingAudio,
} from 'lib/recorder'

export const RecorderComponent = ({ open, anchorEl, recordingTime, stopRecording }) => {
    const classes = useStyles()
    const userTime = recordingTime < 10 ? `0${recordingTime}` : recordingTime

    if (recordingTime >= MAX_RECORDING_TIME_SEC) {
        stopRecording()
    }

    return (
        <Popper open={open} anchorEl={anchorEl} placement={'top-end'} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper className={classes.wrapper}>
                        <div className={`${classes.indicator} rec`}></div>
                        <Typography className={classes.typography}>
                            Recording joke
                        </Typography>
                        <Typography className={classes.timer}>
                            ({userTime}s/{MAX_RECORDING_TIME_SEC}s)
                        </Typography>
                    </Paper>
                </Fade>
            )}
        </Popper>
    )
}

const mapStateToProps = state => ({
    recordingTime: selectRecordingTime(state),
})

const dispatchToProps = dispatch => ({
    stopRecording: () => dispatch(stopRecordingAudio()),
})

export const Recorder = connect(mapStateToProps, dispatchToProps)(RecorderComponent)
