import React, { useState } from 'react'
import { Button, Paper } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { connect } from 'react-redux'

import { useStyles } from './styles'
import { AudioPlayer, TextInput } from 'app/components'
import { uploadJoke, selectUploadJokeError } from 'lib/jokes'
import { selectRecorderFeature } from 'lib/recorder'

const UploadJokeFormComponent = ({ audio, uploadJoke, uploadJokeError }) => {
    const [jokeName, setJokeName] = useState('')
    const classes = useStyles()

    const audioURL = audio.file ? URL.createObjectURL(audio.file) : ''

    const onTextChange = e => {
        setJokeName(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        uploadJoke(jokeName, audio.file)
    }

    return (
        <Paper className={classes.card}>
            <form className={classes.form} onSubmit={onSubmit}>
                <TextInput
                    required
                    label='Joke Name'
                    value={jokeName}
                    onChange={onTextChange}
                    className={classes.jokeTitle}
                    autoFocus={true}
                    error={Boolean(uploadJokeError)}
                />
                <AudioPlayer src={audioURL} />
                <Button
                    type={'submit'}
                    variant='contained'
                    color='primary'
                    className={classes.uploadButton}
                    startIcon={<CloudUploadIcon />}
                >
                    Publish
                </Button>
            </form>
        </Paper>
    )
}

const mapStateToProps = state => ({
    audio: selectRecorderFeature(state),
    uploadJokeError: selectUploadJokeError(state),
})

const dispatchToProps = dispatch => ({
    uploadJoke: (name, audio) => dispatch(uploadJoke(name, audio)),
})

export const UploadJokeForm = connect(
    mapStateToProps,
    dispatchToProps,
)(UploadJokeFormComponent)
