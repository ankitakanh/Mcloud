// // ** React Imports
// import { useState } from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import Button from '@mui/material/Button'
// import Dialog from '@mui/material/Dialog'
// import Select from '@mui/material/Select'
// import Switch from '@mui/material/Switch'
// import Divider from '@mui/material/Divider'
// import MenuItem from '@mui/material/MenuItem'
// import { styled } from '@mui/material/styles'
// import TextField from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import InputLabel from '@mui/material/InputLabel'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import DialogTitle from '@mui/material/DialogTitle'
// import FormControl from '@mui/material/FormControl'
// import DialogContent from '@mui/material/DialogContent'
// import DialogActions from '@mui/material/DialogActions'
// import InputAdornment from '@mui/material/InputAdornment'
// import LinearProgress from '@mui/material/LinearProgress'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import DialogContentText from '@mui/material/DialogContentText'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Custom Components
// import CustomChip from 'src/@core/components/mui/chip'
// import CustomAvatar from 'src/@core/components/mui/avatar'
// // import UserSuspendDialog from 'src/views/dashboards/loginAuditTrails/View/LoginATSuspendDialog'
// // import UserSubscriptionDialog from 'src/views/dashboards/loginAuditTrails/View/LoginATSubscriptionDialog'

// // ** Utils Import
// import { getInitials } from 'src/@core/utils/get-initials'

// /*
//   NOTE:
//   The `data` object below is still example/placeholder data.
//   In your real use replace it with the actual user object (props or fetched data).
// */
// const data = {
//   id: 1,
//   role: 'Account Executive',
//   status: 'active',
//   username: 'justinhoward',
//   avatarColor: 'primary',
//   country: 'US',
//   company: 'Printform',
//   contact: '(479) 232-9151',
//   currentPlan: 'enterprise',
//   fullName: 'Justin Howard',
//   email: 'justin.howard@example.com',
//   avatar: '/images/avatars/3.png',

//   // Optional / additional fields (may be undefined — we provide fallbacks)
//   birthDate: '1990-05-20',
//   language: 'English',
//   // skill: 'React, Node.js, CSS',
//   taxId: 'Tax-8894',
//   city: 'San Salvador',
//   state: 'San Salvador Department',
//   zip: '1101',
//   jobTitle: 'Frontend Developer',
//   department: 'Engineering',
//   companyName: 'Yotz PVT LTD',
//   joiningDate: '2021-03-01',
//   bio: 'Passionate frontend developer with a love for accessible UI and pixel-perfect designs.'
// }

// const roleColors = {
//   admin: 'error',
//   editor: 'info',
//   author: 'warning',
//   maintainer: 'success',
//   subscriber: 'primary'
// }

// // show inactive as red/error
// const statusColors = {
//   active: 'success',
//   pending: 'warning',
//   inactive: 'error'
// }

// // ** Styled <sup> component
// const Sup = styled('sup')(({ theme }) => ({
//   top: '0.2rem',
//   left: '-0.6rem',
//   position: 'absolute',
//   color: theme.palette.primary.main
// }))

// // ** Styled <sub> component
// const Sub = styled('sub')({
//   fontWeight: 300,
//   fontSize: '1rem',
//   alignSelf: 'flex-end'
// })

// const InfoRow = ({ label, value, isMultiLine = false }) => (
//   <Box sx={{ display: 'flex', mb: 2.2 }}>
//     <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary', minWidth: 120 }}>
//       {label}
//     </Typography>
//     {isMultiLine ? (
//       <Typography variant='body2' sx={{ whiteSpace: 'pre-wrap' }}>
//         {value ?? '—'}
//       </Typography>
//     ) : (
//       <Typography variant='body2'>{value ?? '—'}</Typography>
//     )}
//   </Box>
// )

// const UserViewLeft = () => {
//   // ** States
//   const [openEdit, setOpenEdit] = useState(false)
//   const [openPlans, setOpenPlans] = useState(false)
//   const [suspendDialogOpen, setSuspendDialogOpen] = useState(false)
//   const [subscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false)

//   // Handle Edit dialog
//   const handleEditClickOpen = () => setOpenEdit(true)
//   const handleEditClose = () => setOpenEdit(false)

//   // Handle Upgrade Plan dialog
//   const handlePlansClickOpen = () => setOpenPlans(true)
//   const handlePlansClose = () => setOpenPlans(false)

//   if (!data) return null

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <Card>
//           <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
//             {data.avatar ? (
//               <CustomAvatar
//                 src={data.avatar}
//                 variant='rounded'
//                 alt={data.fullName}
//                 sx={{ width: 120, height: 120, fontWeight: 600, mb: 4 }}
//               />
//             ) : (
//               <CustomAvatar
//                 skin='light'
//                 variant='rounded'
//                 color={data.avatarColor}
//                 sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
//               >
//                 {getInitials(data.fullName)}
//               </CustomAvatar>
//             )}
//             <Typography variant='h6' sx={{ mb: 2 }}>
//               {data.fullName ?? '—'}
//             </Typography>
//             <CustomChip
//               skin='light'
//               size='small'
//               label={data.role}
//               color={roleColors[data.role] ?? 'primary'}
//               sx={{
//                 height: 20,
//                 fontWeight: 600,
//                 borderRadius: '5px',
//                 fontSize: '0.875rem',
//                 textTransform: 'capitalize',
//                 '& .MuiChip-label': { mt: -0.25 }
//               }}
//             />
//           </CardContent>

//           <CardContent sx={{ my: 1 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//               <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
//                 <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
//                   <Icon icon='mdi:check' />
//                 </CustomAvatar>
//                 <div>
//                   <Typography variant='h6' sx={{ lineHeight: 1.3 }}>
//                     1.23k
//                   </Typography>
//                   <Typography variant='body2'>Quotes</Typography>
//                 </div>
//               </Box>
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <CustomAvatar skin='light' variant='rounded' sx={{ mr: 3 }}>
//                   <Icon icon='mdi:briefcase-variant-outline' />
//                 </CustomAvatar>
//                 <div>
//                   <Typography variant='h6' sx={{ lineHeight: 1.3 }}>
//                     568
//                   </Typography>
//                   <Typography variant='body2'>Orders</Typography>
//                 </div>
//               </Box>
//             </Box>
//           </CardContent>

//           <CardContent>
//             <Typography variant='h6'>Details</Typography>
//             <Divider sx={{ mt: theme => `${theme.spacing(4)} !important` }} />
//             <Box sx={{ pt: 2, pb: 1 }}>
//               {/* Basic info */}
//               <InfoRow label='Full Name:' value={data.fullName} />
//               <InfoRow label='UserName:' value={`@${data.username ?? ''}`} />
//               <InfoRow label='Email:' value={data.email} />
//               <InfoRow label='Contact:' value={data.contact ?? data.phone ?? '—'} />
//               <InfoRow label='Birth Date:' value={data.birthDate ?? data.dob ?? '—'} />
//               <InfoRow label='Language:' value={data.language ?? '—'} />
//               {/* <InfoRow label='Skill:' value={data.skill ?? '—'} /> */}
//               <InfoRow label='Tax ID:' value={data.taxId ?? data.taxID ?? '—'} />
//               <InfoRow label='City:' value={data.city ?? '—'} />
//               <InfoRow label='State:' value={data.state ?? '—'} />
//               <InfoRow label='Country:' value={data.country ?? '—'} />
//               <InfoRow label='ZIP:' value={data.zip ?? data.zipCode ?? data.postalCode ?? '—'} />

//               {/* Job info */}
//               <Divider sx={{ my: 2 }} />
//               <InfoRow label='Job Title:' value={data.jobTitle ?? '—'} />
//               <InfoRow label='Department:' value={data.department ?? '—'} />
//               <InfoRow label='Company:' value={data.companyName ?? data.company ?? '—'} />
//               <InfoRow label='Joining Date:' value={data.joiningDate ?? data.joinedAt ?? '—'} />

//               {/* Status & Role */}
//               <Box sx={{ display: 'flex', mb: 2.7, alignItems: 'center' }}>
//                 <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
//                   Status:
//                 </Typography>
//                 <CustomChip
//                   skin='light'
//                   size='small'
//                   label={data.status ?? '—'}
//                   color={statusColors[data.status] ?? 'default'}
//                   sx={{
//                     height: 20,
//                     fontWeight: 500,
//                     fontSize: '0.75rem',
//                     borderRadius: '5px',
//                     textTransform: 'capitalize'
//                   }}
//                 />
//               </Box>

//               {/* Bio multiline */}
//               <Box sx={{ mt: 1 }}>
//                 <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary', mb: 1 }}>
//                   Bio:
//                 </Typography>
//                 <Typography variant='body2' sx={{ whiteSpace: 'pre-wrap' }}>
//                   {data.bio ?? '—'}
//                 </Typography>
//               </Box>
//             </Box>
//           </CardContent>

//           <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
//             <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClickOpen}>
//               Edit
//             </Button>
//             {/* <Button color='error' variant='outlined' onClick={() => setSuspendDialogOpen(true)}>
//               Suspend
//             </Button> */}
//           </CardActions>

//           <Dialog
//             open={openEdit}
//             onClose={handleEditClose}
//             aria-labelledby='user-view-edit'
//             aria-describedby='user-view-edit-description'
//             sx={{ '& .MuiPaper-root': { width: '100%', maxWidth: 650 } }}
//           >
//             <DialogTitle
//               id='user-view-edit'
//               sx={{
//                 textAlign: 'center',
//                 fontSize: '1.5rem !important',
//                 px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
//                 pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
//               }}
//             >
//               Edit User Information
//             </DialogTitle>
//             <DialogContent
//               sx={{
//                 pb: theme => `${theme.spacing(8)} !important`,
//                 px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
//               }}
//             >
//               <DialogContentText variant='body2' id='user-view-edit-description' sx={{ textAlign: 'center', mb: 7 }}>
//                 Updating user details will receive a privacy audit.
//               </DialogContentText>
//               <form>
//                 <Grid container spacing={6}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Full Name' defaultValue={data.fullName} />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label='Username'
//                       defaultValue={data.username}
//                       InputProps={{ startAdornment: <InputAdornment position='start'>@</InputAdornment> }}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth type='email' label='Billing Email' defaultValue={data.email} />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel id='user-view-status-label'>Status</InputLabel>
//                       <Select
//                         label='Status'
//                         defaultValue={data.status}
//                         id='user-view-status'
//                         labelId='user-view-status-label'
//                       >
//                         <MenuItem value='pending'>Pending</MenuItem>
//                         <MenuItem value='active'>Active</MenuItem>
//                         <MenuItem value='inactive'>Inactive</MenuItem>
//                       </Select>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Birth Date' defaultValue={data.birthDate ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='TAX ID' defaultValue={data.taxId ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Contact' defaultValue={data.contact ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Language' defaultValue={data.language ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Skill' defaultValue={data.skill ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='City' defaultValue={data.city ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='State' defaultValue={data.state ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='ZIP' defaultValue={data.zip ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Job Title' defaultValue={data.jobTitle ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Department' defaultValue={data.department ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Company Name' defaultValue={data.companyName ?? data.company ?? ''} />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <TextField fullWidth label='Joining Date' defaultValue={data.joiningDate ?? ''} />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField fullWidth multiline minRows={3} label='Bio' defaultValue={data.bio ?? ''} />
//                   </Grid>

//                   {/* <Grid item xs={12}>
//                     <FormControlLabel
//                       label='Use as a billing address?'
//                       control={<Switch defaultChecked />}
//                       sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
//                     />
//                   </Grid> */}
//                 </Grid>
//               </form>
//             </DialogContent>
//             <DialogActions
//               sx={{
//                 justifyContent: 'center',
//                 px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
//                 pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
//               }}
//             >
//               <Button variant='contained' sx={{ mr: 2 }} onClick={handleEditClose}>
//                 Submit
//               </Button>
//               <Button variant='outlined' color='secondary' onClick={handleEditClose}>
//                 Cancel
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </Card>
//       </Grid>

//       {/* (Optional) Additional card(s) can be placed here */}
//     </Grid>
//   )
// }

// export default UserViewLeft

import React, { useMemo, useState } from 'react'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { DataGrid } from '@mui/x-data-grid'
import Tooltip from '@mui/material/Tooltip'

// Project icon (your wrapper)
import Icon from 'src/@core/components/icon'
import { padding } from '@mui/system'

// Styled link (keeps theme)
const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': { color: theme.palette.primary.main }
}))

// ------------------------- ACTION STYLES (as requested) -------------------------
const actionStyles = {
  login: { bg: '#d2fadf9c', color: '#0F8A44' }, // green like "Changing"
  view: { bg: '#dce6f9a8', color: '#234fa8ff' }, // light gray like "Comment"
  create: { bg: '#fff7d9a8', color: '#b79724ff' }, // blue like "Uploading"
  update: { bg: '#cbf0ffac', color: '#1f7ea4ff' }, // orange like "Updates"
  delete: { bg: '#e2e2e281', color: '#3a4041ff' }, // red like "Deleting"
  logout: { bg: '#fee2e294', color: '#DC2626' } // purple like "Feedback"
}

// ------------------------- RAW EVENT LOGS (from your CSV) -------------------------
const RAW_EVENT_LOGS = [
  {
    id: 'e1',
    time: '09:30:15',
    type: 'LOGIN',
    url: '/login',
    page: 'Login',
    targetEntity: 'User',
    targetId: 'N/A',
    details: 'Successful login from IP 203.0.113.12'
  },
  {
    id: 'e2',
    time: '09:30:45',
    type: 'VIEW',
    url: '/dashboard',
    page: 'Dashboard',
    targetEntity: 'Dashboard',
    targetId: 'N/A',
    details: 'User landed on main dashboard'
  },
  {
    id: 'e3',
    time: '09:31:02',
    type: 'CREATE',
    url: '/lead-management',
    page: 'Lead Management',
    targetEntity: 'Lead',
    targetId: 'N/A',
    details: 'Navigated to lead list view'
  },
  {
    id: 'e4',
    time: '09:31:35',
    type: 'UPDATE',
    url: '/lead-management/new',
    page: 'Lead',
    targetEntity: 'Lead',
    targetId: 'LEAD-5001',
    details: 'Started new lead creation'
  },
  {
    id: 'e5',
    time: '09:32:01',
    type: 'DELETE',
    url: '/contact',
    page: 'Contact',
    targetEntity: 'Contact',
    targetId: 'N/A',
    details: 'Checked contacts list'
  },
  {
    id: 'e6',
    time: '09:32:40',
    type: 'UPDATE',
    url: '/lead-management/edit/5001',
    page: 'Lead Edit',
    targetEntity: 'Lead',
    targetId: 'LEAD-5001',
    details: 'Saved initial details for new lead'
  },
  {
    id: 'e7',
    time: '09:33:15',
    type: 'VIEW',
    url: '/get-quote',
    page: 'Quote Generator',
    targetEntity: 'Quote',
    targetId: 'N/A',
    details: 'Navigated to the Quote Generation tool'
  },
  {
    id: 'e8',
    time: '09:34:50',
    type: 'CREATE',
    url: '/quote',
    page: 'Quote',
    targetEntity: 'Quote',
    targetId: 'QUOTE-1022',
    details: 'Generated and saved Quote #1022 for LEAD-5001'
  },
  {
    id: 'e9',
    time: '09:35:10',
    type: 'VIEW',
    url: '/quote/1022',
    page: 'Quote',
    targetEntity: 'Quote',
    targetId: 'QUOTE-1022',
    details: 'Reviewed final quote details'
  },
  {
    id: 'e10',
    time: '09:36:20',
    type: 'CREATE',
    url: '/order',
    page: 'Order Management',
    targetEntity: 'Order',
    targetId: 'N/A',
    details: 'Navigated to the Orders page'
  },
  {
    id: 'e11',
    time: '09:36:55',
    type: 'VIEW',
    url: '/supply-chain-reports',
    page: 'Report',
    targetEntity: 'S.C. INV.',
    targetId: 'N/A',
    details: 'Accessed Supply Chain Inventory Report'
  },
  {
    id: 'e12',
    time: '09:37:40',
    type: 'LOGOUT',
    url: '/dashboard',
    page: 'Dashboard',
    targetEntity: 'User',
    targetId: 'N/A',
    details: 'Session ended'
  }
]

// ------------------------- IST DATE / TIME helper -------------------------
const getISTDateString = (dateObj = new Date()) => {
  try {
    const optsDate = { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' }
    const optsTime = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Asia/Kolkata' }
    const datePart = new Intl.DateTimeFormat('en-GB', optsDate).format(dateObj) // "17 Nov 2025"
    const timePart = new Intl.DateTimeFormat('en-GB', optsTime).format(dateObj) // "13:34:45"
    const dateWithComma = datePart.replace(/(\d{2}\s\w{3})\s(\d{4})/, '$1, $2') // "17 Nov, 2025"
    return { date: dateWithComma, time: timePart }
  } catch (e) {
    return { date: dateObj.toLocaleDateString(), time: dateObj.toLocaleTimeString() }
  }
}

// ------------------------- ActionChip (renders only the requested 6 actions) -------------------------
const ActionChip = ({ label }) => {
  // normalize label like "LOGIN" / "Login" / "login" -> "login"
  const normalized = String(label || '')
    .toLowerCase()
    .trim()
  // map some possible CSV variations to our keys
  const mapKey = normalized
    .replace(/\s+/g, '') // remove spaces
    .replace('logout', 'logout')
    .replace('login', 'login')
    .replace('view', 'view')
    .replace('create', 'create')
    .replace('update', 'update')
    .replace('delete', 'delete')

  const key = ['login', 'view', 'create', 'update', 'delete', 'logout'].includes(mapKey) ? mapKey : 'view'
  const st = actionStyles[key] || { bg: '#F0F0F0', color: '#555' }
  // friendly label (capitalize first letter)
  const pretty = key.charAt(0).toUpperCase() + key.slice(1)
  return (
    <Box
      component='span'
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.6,
        px: 1.6,
        py: 0.45,
        borderRadius: '16px',
        backgroundColor: st.bg,
        color: st.color,
        fontWeight: 600,
        fontSize: '0.88rem'
      }}
    >
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: st.color }} />
      <Box component='span'>{pretty}</Box>
    </Box>
  )
}

// ------------------------- DataGrid columns -------------------------
const columns = [
  {
    field: 'dateTime',
    headerName: 'Date & Time',
    minWidth: 180,
    flex: 0.22,
    sortable: false,
    renderCell: ({ row }) => {
      const dateStr = row.date || ''
      const timeStr = row.time || ''
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ fontWeight: 700 }}>
            {timeStr}
          </Typography>
          <Typography variant='caption' sx={{ color: 'text.secondary' }}>
            {dateStr}
          </Typography>
        </Box>
      )
    }
  },
  {
    field: 'type',
    headerName: 'Action Type',
    minWidth: 140,
    flex: 0.16,
    renderCell: ({ row }) => <ActionChip label={row.type} />
  },
  {
    field: 'url',
    headerName: 'Page Visited (Page URL)',
    minWidth: 260,
    flex: 0.36,
    renderCell: ({ row }) => (
      <Tooltip title={row.url}>
        <Typography noWrap sx={{ color: 'text.primary' }}>
          {row.url}
        </Typography>
      </Tooltip>
    )
  },
  {
    field: 'details',
    headerName: 'Details',
    minWidth: 360,
    flex: 0.4,
    renderCell: ({ row }) => (
      <Tooltip title={row.details}>
        <Typography noWrap sx={{ color: 'text.secondary' }}>
          {row.details}
        </Typography>
      </Tooltip>
    )
  }
]

// ------------------------- Page component -------------------------
export default function ActivityTimelineStyled() {
  const [search, setSearch] = useState('')

  // Prepare rows: add current IST date since CSV supplied only times
  const rows = useMemo(() => {
    const now = new Date()
    const { date } = getISTDateString(now)
    return RAW_EVENT_LOGS.map(r => ({ ...r, date }))
  }, [])

  const filtered = useMemo(() => {
    const q = (search || '').toLowerCase().trim()
    if (!q) return rows
    return rows.filter(row => {
      return (
        String(row.date || '')
          .toLowerCase()
          .includes(q) ||
        String(row.time || '')
          .toLowerCase()
          .includes(q) ||
        String(row.type || '')
          .toLowerCase()
          .includes(q) ||
        String(row.url || '')
          .toLowerCase()
          .includes(q) ||
        String(row.details || '')
          .toLowerCase()
          .includes(q)
      )
    })
  }, [rows, search])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ borderRadius: 3 }}>
          <CardHeader
            title='Activity Timeline (today)'
            sx={{ pb: '5px', '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}
          />
          <Divider />

          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              size='small'
              placeholder='Search date / time / type / url / details...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ minWidth: 480 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon icon='mdi:magnify' />
                  </InputAdornment>
                )
              }}
            />
            {/* <Box sx={{ ml: 'auto' }}>
              <Button variant='outlined' size='small' onClick={() => setSearch('')}>
                Reset
              </Button>
            </Box> */}
          </CardContent>

          <Divider />

          <Box sx={{ height: 630, width: '100%' }}>
            <DataGrid
              rows={filtered}
              columns={columns}
              getRowId={row => row.id}
              disableRowSelectionOnClick
              pageSizeOptions={[6, 12, 24]}
              initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
              // sx={{
              //   border: 0,
              //   '& .MuiDataGrid-columnHeaders': {
              //     backgroundColor: '#fafafa',
              //     borderBottom: theme => `1px solid ${theme.palette.divider}`,
              //     fontWeight: 700
              //   },
              //   '& .MuiDataGrid-row:hover': { backgroundColor: theme => theme.palette.action.hover },
              //   '& .MuiDataGrid-cell': { alignItems: 'center' }
              // }}
              sx={{
                border: 0,
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#fafafa',
                  borderBottom: theme => `1px solid ${theme.palette.divider}`
                },

                '& .MuiDataGrid-columnHeaderTitle': {
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '.3px'
                },

                '& .MuiDataGrid-row:hover': {
                  backgroundColor: theme => theme.palette.action.hover
                },

                '& .MuiDataGrid-cell': {
                  alignItems: 'center',
                  fontSize: '0.95rem'
                }
              }}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}
