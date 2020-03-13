import React from 'react'
import { Modal } from '@material-ui/core'
import { connect } from 'react-redux'

import { useStyles } from './styles'
import { UploadJokeForm } from 'app/components'
import { clearAudioRecord, selectAudioFile } from 'lib/jokes'

export const UploadJokeModalComponent = ({ audioFile, clearAudioRecord }) => {
    const classes = useStyles()

    return (
        <Modal
            open={Boolean(audioFile)}
            onClose={clearAudioRecord}
            className={classes.wrapper}
        >
            <UploadJokeForm />
        </Modal>
    )
}

const mapStateToProps = state => ({
    audioFile: selectAudioFile(state),
})

const dispatchToProps = dispatch => ({
    clearAudioRecord: () => dispatch(clearAudioRecord()),
})

export const UploadJokeModal = connect(
    mapStateToProps,
    dispatchToProps,
)(UploadJokeModalComponent)
