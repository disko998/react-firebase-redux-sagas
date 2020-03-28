import React from 'react'
import { logoutUser } from 'lib/user/action'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonIcon from '@material-ui/icons/Person'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import QueueMusicIcon from '@material-ui/icons/QueueMusic'

import { StyledMenu, StyledMenuItem, UserButton, UserAvatar } from './styles'
import { connect } from 'react-redux'

export function UserMenuComponent({ logoutUser, avatar }) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <UserButton onClick={handleClick}>
                {avatar ? (
                    <UserAvatar alt='Avatar' src={avatar} />
                ) : (
                    <AccountCircleIcon />
                )}
            </UserButton>
            <StyledMenu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <QueueMusicIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Jokes List' />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <PersonIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='My Profile' />
                </StyledMenuItem>
                <StyledMenuItem onClick={logoutUser}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Logout' />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    )
}

const dispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
})

export const UserMenu = connect(null, dispatchToProps)(UserMenuComponent)
