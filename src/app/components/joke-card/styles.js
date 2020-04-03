import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  card: {
    padding: 20,
  },
  iconButton: {
    textAlign: 'center',
    color: (isliked) => (isliked ? theme.palette.error.dark : theme.palette.error.light),
  },
  likes: {
    marginTop: 4,
    fontSize: 25,
    fontWeight: 500,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 17,
    fontWeight: 500,
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  author: {
    fontSize: 15,
    color: theme.color.dark,
    textTransform: 'capitalize',
  },
  infoWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}))
