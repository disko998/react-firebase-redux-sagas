import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}))
