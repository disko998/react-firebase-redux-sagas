import React from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import CircularProgress from '@material-ui/core/CircularProgress'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { useStyles } from './styles'

import { selectCurrentUser } from 'lib/user'

export const UserAvatarComponent = ({
    size = 'normal',
    user: { avatar, updatingAvatar },
}) => {
    const classes = useStyles()

    if (updatingAvatar) {
        return (
            <CircularProgress
                color='secondary'
                variant='indeterminate'
                size={24}
                thickness={4}
            />
        )
    }

    return avatar ? (
        <Avatar alt='Avatar' src={avatar} className={classes[size]} />
    ) : (
        <AccountCircleIcon />
    )
}

const mapStateToProps = state => ({
    user: selectCurrentUser(state),
})

export const UserAvatar = connect(mapStateToProps)(UserAvatarComponent)
