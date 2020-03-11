import React from 'react'
import { connect } from 'react-redux'
import { Fab } from '@material-ui/core'
import MicOutlinedIcon from '@material-ui/icons/MicOutlined'
import MicOffIcon from '@material-ui/icons/MicOff'

import { useStyles } from './styles'
import { startRecordingAudio, stopRecordingAudio } from 'lib/jokes/action'
import { selectAudioRecord } from 'lib/jokes/selector'

export const RecordJokeButtonComponent = ({
    startRecordingAudio,
    stopRecordingAudio,
    audio,
}) => {
    const classes = useStyles()

    const handleRecordAudio = () => {
        audio.isRecording ? stopRecordingAudio() : startRecordingAudio()
    }

    return (
        <React.Fragment>
            <Fab
                onClick={handleRecordAudio}
                aria-label='Add'
                className={classes.fab}
                color={audio.isRecording ? 'secondary' : 'primary'}
            >
                {audio.isRecording ? <MicOffIcon /> : <MicOutlinedIcon />}
            </Fab>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    audio: selectAudioRecord(state),
})

const dispatchToProps = dispatch => ({
    startRecordingAudio: () => dispatch(startRecordingAudio()),
    stopRecordingAudio: () => dispatch(stopRecordingAudio()),
})

export const RecordJokeButton = connect(
    mapStateToProps,
    dispatchToProps,
)(RecordJokeButtonComponent)
