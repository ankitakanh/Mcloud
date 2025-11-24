// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import UserViewLeft from 'src/views/dashboards/loginAuditTrails/View/LoginATViewLeft'
// src/views/apps/user/view/UserViewLeft

const UserView = ({ tab, invoiceData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12} lg={12}>
        <UserViewLeft />
      </Grid>
    </Grid>
  )
}

export default UserView
