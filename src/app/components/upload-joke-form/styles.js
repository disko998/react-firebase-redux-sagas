import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  jokeTitle: {
    marginBottom: 15,
  },
  uploadButton: {
    marginTop: 20,
    width: '100%',
  },
  card: {
    padding: 20,
    width: '60%',
  },
}))
