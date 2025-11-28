// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Demo Component Imports
import UsersInvoiceListTable from 'src/views/dashboards/staff/View/StaffInvoiceListTable'
import UsersProjectListTable from 'src/views/dashboards/staff/View/StaffProjectListTable'

// Styled Timeline component
const Timeline = styled(MuiTimeline)(({ theme }) => ({
  margin: 0,
  padding: 0,
  marginLeft: theme.spacing(0.75),
  '& .MuiTimelineItem-root': {
    '&:before': {
      display: 'none'
    },
    '&:last-child': {
      minHeight: 60
    }
  }
}))

const UserViewOverview = ({ invoiceData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <UsersProjectListTable />
      </Grid>

      <Grid item xs={12}>
        <UsersInvoiceListTable invoiceData={invoiceData} />
      </Grid>
    </Grid>
  )
}

export default UserViewOverview
