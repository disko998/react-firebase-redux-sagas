import React, { useState } from 'react'
import { Button, Paper } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { connect } from 'react-redux'

import { useStyles } from './styles'
import { AudioPlayer, TextInput } from 'app/components'
import { uploadJoke } from 'lib/jokes'
import { selectRecorderFeature } from 'lib/recorder'

const UploadJokeFormComponent = ({ audio, uploadJoke }) => {
    const [jokeName, setJokeName] = useState('')
    const classes = useStyles()

    const audioURL = audio.file ? URL.createObjectURL(audio.file) : ''

    const onTextChange = e => {
        setJokeName(e.target.value)
    }

    const onSubmit = () => {
        uploadJoke(jokeName, audio.file)
    }

    return (
        <Paper className={classes.card}>
            <form className={classes.form}>
                <TextInput
                    required={true}
                    label='Joke Name'
                    value={jokeName}
                    onChange={onTextChange}
                    className={classes.jokeTitle}
                />
                <AudioPlayer src={audioURL} />
                <Button
                    onClick={onSubmit}
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
})

const dispatchToProps = dispatch => ({
    uploadJoke: (name, audio) => dispatch(uploadJoke(name, audio)),
})

export const UploadJokeForm = connect(
    mapStateToProps,
    dispatchToProps,
)(UploadJokeFormComponent)
