import React from 'react'
import { connect } from 'react-redux'
import { Fab, Typography } from '@material-ui/core'
import MicOutlinedIcon from '@material-ui/icons/MicOutlined'
import MicOffIcon from '@material-ui/icons/MicOff'

import {
  startRecordingAudio,
  stopRecordingAudio,
  selectRecorderFeature,
  MAX_RECORDING_TIME_SEC,
} from 'lib/recorder'
import { useStyles } from './styles'

export const RecorderComponent = ({ startRecordingAudio, stopRecordingAudio, audio }) => {
  const { recordingTime, isRecording } = audio
  const classes = useStyles()
  const userTime = recordingTime < 10 ? `0${recordingTime}` : recordingTime

  const handleRecordAudio = () => {
    isRecording ? stopRecordingAudio() : startRecordingAudio()
  }

  if (recordingTime >= MAX_RECORDING_TIME_SEC) {
    stopRecordingAudio()
  }

  return (
    <Fab
      variant={isRecording ? 'extended' : 'round'}
      type='button'
      onClick={handleRecordAudio}
      aria-label='Add'
      className={classes.fab}
      color={isRecording ? 'secondary' : 'primary'}
    >
      {isRecording ? <MicOffIcon /> : <MicOutlinedIcon />}
      {isRecording && (
        <Typography className={classes.timer}>
          {`${userTime}s/${MAX_RECORDING_TIME_SEC}s`}
        </Typography>
      )}
    </Fab>
  )
}

const mapStateToProps = state => ({
  audio: selectRecorderFeature(state),
})

const dispatchToProps = dispatch => ({
  startRecordingAudio: () => dispatch(startRecordingAudio()),
  stopRecordingAudio: () => dispatch(stopRecordingAudio()),
})

export const Recorder = connect(mapStateToProps, dispatchToProps)(RecorderComponent)
