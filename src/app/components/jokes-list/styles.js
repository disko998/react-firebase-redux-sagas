import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  emptyWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  emptyImage: {
    height: 300,
  },
}))
