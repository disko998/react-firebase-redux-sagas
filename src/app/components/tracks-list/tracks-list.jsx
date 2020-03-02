import React from 'react'
import { Box } from '@material-ui/core'

import { randomId } from '../../../lib/utils'
import { TrackCard } from '../track-card'

const DATA = [
    { id: 'randomId()', category: 'Blues', artist: 'John Doe', name: 'Clair de Lune', likes: 2, audio: 'audio.mp3' },
    {
        id: randomId(),
        category: 'Rock n roll',
        artist: "Guns N' Roses",
        name: 'Paradise City',
        likes: 6,
        audio: 'audio.mp3',
    },
    { id: randomId(), category: 'Pop', artist: 'LP', name: 'Lost On You', likes: 5, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
    { id: randomId(), category: 'Rap', artist: 'Altın Gün', name: 'Goca Dünya', likes: 8, audio: 'audio.mp3' },
]

export const TracksList = () => (
    <Box boxShadow={3}>
        {DATA.map(track => (
            <TrackCard track={track} key={track.id} />
        ))}
    </Box>
)
