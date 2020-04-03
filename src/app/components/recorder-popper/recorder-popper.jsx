import React from 'react'
import { Popper, Fade, Paper, Typography } from '@material-ui/core'
import { connect } from 'react-redux'

import {
  selectRecordingTime,
  MAX_RECORDING_TIME_SEC,
  stopRecordingAudio,
} from 'lib/recorder'
import { useStyles } from './styles'

export const RecorderPopperComponent = ({
  open,
  anchorEl,
  recordingTime,
  stopRecording,
}) => {
  const classes = useStyles()
  const userTime = recordingTime < 10 ? `0${recordingTime}` : recordingTime

  if (recordingTime >= MAX_RECORDING_TIME_SEC) {
    stopRecording()
  }

  const time = `${userTime}s/${MAX_RECORDING_TIME_SEC}s`

  return (
    <Popper open={open} anchorEl={anchorEl} placement='top-end' transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper className={classes.wrapper}>
            <div className={`${classes.indicator} rec`} />
            <Typography className={classes.typography}>Recording joke</Typography>
            <Typography className={classes.timer}>{time}</Typography>
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

export const RecorderPopper = connect(
  mapStateToProps,
  dispatchToProps
)(RecorderPopperComponent)
