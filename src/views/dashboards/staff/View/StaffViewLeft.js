// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import DialogTitle from '@mui/material/DialogTitle'
import FormControl from '@mui/material/FormControl'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import InputAdornment from '@mui/material/InputAdornment'
import LinearProgress from '@mui/material/LinearProgress'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogContentText from '@mui/material/DialogContentText'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import UserSuspendDialog from 'src/views/dashboards/staff/View/StaffSuspendDialog'
import UserSubscriptionDialog from 'src/views/dashboards/staff/View/StaffSubscriptionDialog'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

/*
  NOTE:
  The `data` object below is still example/placeholder data.
  In your real use replace it with the actual user object (props or fetched data).
*/
const data = {
  id: 1,
  role: 'Account Executive',
  status: 'active',
  username: 'justinhoward',
  avatarColor: 'primary',
  country: 'US',
  company: 'Printform',
  contact: '(479) 232-9151',
  currentPlan: 'enterprise',
  fullName: 'Justin Howard',
  email: 'justin.howard@example.com',
  avatar: '/images/avatars/3.png',

  // Optional / additional fields (may be undefined — we provide fallbacks)
  birthDate: '1990-05-20',
  language: 'English',
  // skill: 'React, Node.js, CSS',
  taxId: 'Tax-8894',
  city: 'San Salvador',
  state: 'San Salvador Department',
  zip: '1101',
  jobTitle: 'Frontend Developer',
  department: 'Engineering',
  companyName: 'Yotz PVT LTD',
  joiningDate: '2021-03-01',
  bio: 'Passionate frontend developer with a love for accessible UI and pixel-perfect designs.'
}

const roleColors = {
  admin: 'error',
  editor: 'info',
  author: 'warning',
  maintainer: 'success',
  subscriber: 'primary'
}

// show inactive as red/error
const statusColors = {
  active: 'success',
  pending: 'warning',
  inactive: 'error'
}

// ** Styled <sup> component
const Sup = styled('sup')(({ theme }) => ({
  top: '0.2rem',
  left: '-0.6rem',
  position: 'absolute',
  color: theme.palette.primary.main
}))

// ** Styled <sub> component
const Sub = styled('sub')({
  fontWeight: 300,
  fontSize: '1rem',
  alignSelf: 'flex-end'
})

const InfoRow = ({ label, value, isMultiLine = false }) => (
  <Box sx={{ display: 'flex', mb: 2.2 }}>
    <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary', minWidth: 120 }}>
      {label}
    </Typography>
    {isMultiLine ? (
      <Typography variant='body2' sx={{ whiteSpace: 'pre-wrap' }}>
        {value ?? '—'}
      </Typography>
    ) : (
      <Typography variant='body2'>{value ?? '—'}</Typography>
    )}
  </Box>
)

const UserViewLeft = () => {
  // ** States
  const [openEdit, setOpenEdit] = useState(false)
  const [openPlans, setOpenPlans] = useState(false)
  const [suspendDialogOpen, setSuspendDialogOpen] = useState(false)
  const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

  // Handle Edit dialog
  const handleEditClickOpen = () => setOpenEdit(true)
  const handleEditClose = () => setOpenEdit(false)

  // Handle Upgrade Plan dialog
  const handlePlansClickOpen = () => setOpenPlans(true)
  const handlePlansClose = () => setOpenPlans(false)

  if (!data) return null

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {data.avatar ? (
              <CustomAvatar
                src={data.avatar}
                variant='rounded'
                alt={data.fullName}
                sx={{ width: 120, height: 120, fontWeight: 600, mb: 4 }}
              />
            ) : (
              <CustomAvatar
                skin='light'
                variant='rounded'
                color={data.avatarColor}
                sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
              >
                {getInitials(data.fullName)}
              </CustomAvatar>
            )}
            <Typography variant='h6' sx={{ mb: 2 }}>
              {data.fullName ?? '—'}
            </Typography>
            <CustomChip
              skin='light'
              size='small'
              label={data.role}
              color={roleColors[data.role] ?? 'primary'}
              sx={{
                height: 20,
                fontWeight: 600,
                borderRadius: '5px',
                fontSize: '0.875rem',
                textTransform: 'capitalize',
                '& .MuiChip-label': { mt: -0.25 }
              }}
            />
          </CardContent>

          <CardContent sx={{ my: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
                  <Icon icon='mdi:check' />
                </CustomAvatar>
                <div>
                  <Typography variant='h6' sx={{ lineHeight: 1.3 }}>
                    1.23k
                  </Typography>
                  <Typography variant='body2'>Quotes</Typography>
                </div>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
                  <Icon icon='mdi:briefcase-variant-outline' />
                </CustomAvatar>
                <div>
                  <Typography variant='h6' sx={{ lineHeight: 1.3 }}>
                    568
                  </Typography>
                  <Typography variant='body2'>Orders</Typography>
                </div>
              </Box>
            </Box>
          </CardContent>

          <CardContent>
            <Typography variant='h6'>Details</Typography>
            <Divider sx={{ mt: theme => `${theme.spacing(4)} !important` }} />
            <Box sx={{ pt: 2, pb: 1 }}>
              {/* Basic info */}
              <InfoRow label='Full Name:' value={data.fullName} />
              <InfoRow label='UserName:' value={`@${data.username ?? ''}`} />
              <InfoRow label='Email:' value={data.email} />
              <InfoRow label='Contact:' value={data.contact ?? data.phone ?? '—'} />
              <InfoRow label='Birth Date:' value={data.birthDate ?? data.dob ?? '—'} />
              <InfoRow label='Language:' value={data.language ?? '—'} />
              {/* <InfoRow label='Skill:' value={data.skill ?? '—'} /> */}
              <InfoRow label='Tax ID:' value={data.taxId ?? data.taxID ?? '—'} />
              <InfoRow label='City:' value={data.city ?? '—'} />
              <InfoRow label='State:' value={data.state ?? '—'} />
              <InfoRow label='Country:' value={data.country ?? '—'} />
              <InfoRow label='ZIP:' value={data.zip ?? data.zipCode ?? data.postalCode ?? '—'} />

              {/* Job info */}
              <Divider sx={{ my: 2 }} />
              <InfoRow label='Job Title:' value={data.jobTitle ?? '—'} />
              <InfoRow label='Department:' value={data.department ?? '—'} />
              <InfoRow label='Company:' value={data.companyName ?? data.company ?? '—'} />
              <InfoRow label='Joining Date:' value={data.joiningDate ?? data.joinedAt ?? '—'} />

              {/* Status & Role */}
              <Box sx={{ display: 'flex', mb: 2.7, alignItems: 'center' }}>
                <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                  Status:
                </Typography>
                <CustomChip
                  skin='light'
                  size='small'
                  label={data.status ?? '—'}
                  color={statusColors[data.status] ?? 'default'}
                  sx={{
                    height: 20,
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                  }}
                />
              </Box>

              {/* Bio multiline */}
              <Box sx={{ mt: 1 }}>
                <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary', mb: 1 }}>
                  Bio:
                </Typography>
                <Typography variant='body2' sx={{ whiteSpace: 'pre-wrap' }}>
                  {data.bio ?? '—'}
                </Typography>
              </Box>
            </Box>
          </CardContent>

          <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
              Edit
            </Button>
            {/* <Button color='error' variant='outlined' onClick={() => setSuspendDialogOpen(true)}>
              Suspend
            </Button> */}
          </CardActions>

          <Dialog
            open={openEdit}
            onClose={handleEditClose}
            aria-labelledby='user-view-edit'
            aria-describedby='user-view-edit-description'
            sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
          >
            <DialogTitle
              id='user-view-edit'
              sx={{
                textAlign: 'center',
                fontSize: '1.5rem !important',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              Edit User Information
            </DialogTitle>
            <DialogContent
              sx={{
                pb: theme => `${theme.spacing(8)} !important`,
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
              }}
            >
              <DialogContentText variant='body2' id='user-view-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
                Updating user details will receive a privacy audit.
              </DialogContentText>
              <form>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Full Name' defaultValue={data.fullName} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label='Username'
                      defaultValue={data.username}
                      InputProps={{ startAdornment: <InputAdornment position='start'>@</InputAdornment> }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth type='email' label='Billing Email' defaultValue={data.email} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id='user-view-status-label'>Status</InputLabel>
                      <Select
                        label='Status'
                        defaultValue={data.status}
                        id='user-view-status'
                        labelId='user-view-status-label'
                      >
                        <MenuItem value='pending'>Pending</MenuItem>
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='inactive'>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Birth Date' defaultValue={data.birthDate ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='TAX ID' defaultValue={data.taxId ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Contact' defaultValue={data.contact ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Language' defaultValue={data.language ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Skill' defaultValue={data.skill ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='City' defaultValue={data.city ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='State' defaultValue={data.state ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='ZIP' defaultValue={data.zip ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Job Title' defaultValue={data.jobTitle ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Department' defaultValue={data.department ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Company Name' defaultValue={data.companyName ?? data.company ?? ''} />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label='Joining Date' defaultValue={data.joiningDate ?? ''} />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField fullWidth multiline minRows={3} label='Bio' defaultValue={data.bio ?? ''} />
                  </Grid>

                  {/* <Grid item xs={12}>
                    <FormControlLabel
                      label='Use as a billing address?'
                      control={<Switch defaultChecked />}
                      sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
                    />
                  </Grid> */}
                </Grid>
              </form>
            </DialogContent>
            <DialogActions
              sx={{
                justifyContent: 'center',
                px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
                pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
              }}
            >
              <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClose}>
                Submit
              </Button>
              <Button variant='outlined' color='secondary' onClick={handleEditClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>

          <UserSuspendDialog open={suspendDialogOpen} setOpen={setSuspendDialogOpen} />
          <UserSubscriptionDialog open={subscriptionDialogOpen} setOpen={setSubscriptionDialogOpen} />
        </Card>
      </Grid>

      {/* (Optional) Additional card(s) can be placed here */}
    </Grid>
  )
}

export default UserViewLeft
