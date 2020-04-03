import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  textField: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  label: error => ({
    color: error ? '#f44336' : '',
    textTransform: 'capitalize',
  }),
}))
