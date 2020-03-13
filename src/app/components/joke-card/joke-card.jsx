import React from 'react'
import { Box, IconButton, Typography } from '@material-ui/core'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'

import { AudioPlayer } from '../audio-player'
import { useStyles } from './styles'

export const JokeCard = ({ joke }) => {
    const classes = useStyles()

    return (
        <Box
            boxShadow={1}
            display='flex'
            justifyContent='flex-start'
            alignItems='center'
            className={classes.card}
        >
            <IconButton
                className={classes.iconButton}
                color={'secondary'}
                edge='start'
                aria-label='like'
            >
                <span className={classes.likes}>{joke.likes}</span>
                <EmojiEmotionsOutlinedIcon />
            </IconButton>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='flex-start'
            >
                <Typography className={classes.title}>{joke.name}</Typography>
                <Typography className={classes.category}>{joke.author.name}</Typography>
            </Box>
            <AudioPlayer src={joke.audio} />
        </Box>
    )
}
