import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  formWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    background: theme.color.white,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 'auto',
  },
  socialWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}))
