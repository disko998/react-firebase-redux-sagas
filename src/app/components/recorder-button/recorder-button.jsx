import React from 'react'
import { connect } from 'react-redux'
import { Fab } from '@material-ui/core'
import MicOutlinedIcon from '@material-ui/icons/MicOutlined'
import MicOffIcon from '@material-ui/icons/MicOff'

import { useStyles } from './styles'
import {
    startRecordingAudio,
    stopRecordingAudio,
    selectRecorderFeature,
} from 'lib/recorder'
import { Recorder } from 'app/components'

export const RecorderButtonComponent = ({
    startRecordingAudio,
    stopRecordingAudio,
    audio,
}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useStyles()

    const handleRecordAudio = () => {
        audio.isRecording ? stopRecordingAudio() : startRecordingAudio()
    }

    return (
        <React.Fragment>
            <Recorder open={audio.isRecording} anchorEl={anchorEl} />
            <Fab
                ref={setAnchorEl}
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
    audio: selectRecorderFeature(state),
})

const dispatchToProps = dispatch => ({
    startRecordingAudio: () => dispatch(startRecordingAudio()),
    stopRecordingAudio: () => dispatch(stopRecordingAudio()),
})

export const RecorderButton = connect(
    mapStateToProps,
    dispatchToProps,
)(RecorderButtonComponent)
