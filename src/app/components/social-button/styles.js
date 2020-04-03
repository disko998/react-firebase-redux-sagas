import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  fab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none',
    margin: '.5em .3em',
    background: '#fff',
    '&:hover': {
      background: '#f0f0f0',
    },
  },
  icon: {
    width: '30px',
    height: '30px',
  },
}))
