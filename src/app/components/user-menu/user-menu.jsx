import React from 'react'
import { connect } from 'react-redux'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ListIcon from '@material-ui/icons/List'

import { UserAvatar } from 'app/components'
import { logoutUser, uploadUserAvatar } from 'lib/user/action'
import { StyledMenu, StyledMenuItem, UserButton } from './styles'

export function UserMenuComponent({ logoutUser, uploadAvatar }) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const onMenuClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const onMenuClose = () => {
        setAnchorEl(null)
    }

    const onImageUpload = e => {
        const file = e.target.files[0]
        uploadAvatar(file)
    }

    return (
        <div>
            <UserButton onClick={onMenuClick}>
                <UserAvatar />
            </UserButton>
            <StyledMenu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onMenuClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <ListIcon fontSize='small' />
                    </ListItemIcon>
                    <ListItemText primary='Jokes List' />
                </StyledMenuItem>
                <label htmlFor='avatar'>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <UserAvatar size={'small'} />
                        </ListItemIcon>
                        <ListItemText primary='Change Avatar' />
                        <input
                            id='avatar'
                            type='file'
                            onChange={onImageUpload}
                            multiple
                            style={{ display: 'none' }}
                        />
                    </StyledMenuItem>
                </label>
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
    uploadAvatar: file => dispatch(uploadUserAvatar(file)),
})

export const UserMenu = connect(null, dispatchToProps)(UserMenuComponent)
