// @ts-nocheck
import React from 'react'
import { Box, IconButton, Typography, Grid } from '@material-ui/core'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'

import { AudioPlayer } from '../audio-player'
import { useStyles } from './styles'
import { connect } from 'react-redux'
import { toggleLike } from 'lib/jokes'
import { selectCurrentUser } from 'lib/user/selector'

export const JokeCardComponent = ({ joke, toggleLike, user }) => {
    const isLiked = joke.likes.includes(user.id)
    const classes = useStyles(isLiked)

    const onLike = () => {
        toggleLike(joke.id)
    }

    return (
        <Box boxShadow={1} className={classes.card}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Box className={classes.infoWrapper}>
                        <IconButton
                            onClick={onLike}
                            className={classes.iconButton}
                            isliked={isLiked}
                            edge='start'
                            aria-label='like'
                        >
                            <span className={classes.likes}>{joke.likes.length}</span>
                            {isLiked ? (
                                <EmojiEmotionsIcon />
                            ) : (
                                <EmojiEmotionsOutlinedIcon />
                            )}
                        </IconButton>
                        <Typography className={classes.title}>{joke.name}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <AudioPlayer src={joke.audio} />
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = state => ({
    user: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
    toggleLike: jokeId => dispatch(toggleLike(jokeId)),
})

export const JokeCard = connect(mapStateToProps, mapDispatchToProps)(JokeCardComponent)
