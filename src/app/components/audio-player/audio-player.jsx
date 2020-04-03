import React from 'react'

import { useStyles } from './styles'

export const AudioPlayerComponent = ({ src }) => {
  const classes = useStyles()

  return <audio controls className={classes.audio} preload='auto' src={src} />
}

export const AudioPlayer = React.memo(AudioPlayerComponent)
