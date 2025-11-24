// import { useState, useEffect, useCallback, Fragment } from 'react'

// // ** Next Imports
// import Link from 'next/link'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Menu from '@mui/material/Menu'
// import Grid from '@mui/material/Grid'
// import Divider from '@mui/material/Divider'
// import { styled } from '@mui/material/styles'
// import MenuItem from '@mui/material/MenuItem'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import { DataGrid } from '@mui/x-data-grid'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// // ** Custom Components Imports
// import CustomChip from 'src/@core/components/mui/chip'
// import CustomAvatar from 'src/@core/components/mui/avatar'

// // ** Utils Import
// import { getInitials } from 'src/@core/utils/get-initials'

// // ** Actions Imports
// import { fetchData, deleteUser } from 'src/store/apps/user'

// // ** Third Party Components
// import axios from 'axios'

// // ** Custom Table Components Imports
// import TableHeader from 'src/views/dashboards/loginAuditTrails/List/TableHead'
// import AddUserDrawer from 'src/views/dashboards/loginAuditTrails/List/AddUser'

// // -------------------- existing consts --------------------
// const userRoleObj = {
//   admin: { icon: 'mdi:laptop', color: 'error.main' },
//   author: { icon: 'mdi:cog-outline', color: 'warning.main' },
//   editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
//   maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
//   subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
// }

// const userStatusObj = {
//   active: 'success',
//   pending: 'warning',
//   inactive: 'error'
// }

// const LinkStyled = styled(Link)(({ theme }) => ({
//   fontWeight: 600,
//   fontSize: '1rem',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   color: theme.palette.text.secondary,
//   '&:hover': {
//     color: theme.palette.primary.main
//   }
// }))

// // -------------------- small helpers --------------------
// const renderClient = row => {
//   if (row.avatar && row.avatar.length) {
//     return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
//   } else {
//     return (
//       <CustomAvatar
//         skin='light'
//         color={row.avatarColor || 'primary'}
//         sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
//       >
//         {getInitials(row.fullName ? row.fullName : 'John Doe')}
//       </CustomAvatar>
//     )
//   }
// }

// const RowOptions = ({ id }) => {
//   // ** Hooks
//   const dispatch = useDispatch()

//   // ** State
//   const [anchorEl, setAnchorEl] = useState(null)
//   const rowOptionsOpen = Boolean(anchorEl)

//   const handleRowOptionsClick = event => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleRowOptionsClose = () => {
//     setAnchorEl(null)
//   }

//   const handleDelete = () => {
//     dispatch(deleteUser(id))
//     handleRowOptionsClose()
//   }

//   return (
//     <Fragment>
//       <IconButton size='small' onClick={handleRowOptionsClick}>
//         <Icon icon='mdi:dots-vertical' />
//       </IconButton>
//       <Menu
//         keepMounted
//         anchorEl={anchorEl}
//         open={rowOptionsOpen}
//         onClose={handleRowOptionsClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right'
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right'
//         }}
//         PaperProps={{ style: { minWidth: '8rem' } }}
//       >
//         <MenuItem
//           component={Link}
//           sx={{ '& svg': { mr: 2 } }}
//           onClick={handleRowOptionsClose}
//           href='/dashboards/loginAuditTrails/view/overview'
//         >
//           <Icon icon='mdi:eye-outline' fontSize={20} />
//           View
//         </MenuItem>
//         <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
//           <Icon icon='mdi:pencil-outline' fontSize={20} />
//           Edit
//         </MenuItem>
//         <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
//           <Icon icon='mdi:delete-outline' fontSize={20} />
//           Delete
//         </MenuItem>
//       </Menu>
//     </Fragment>
//   )
// }

// // -------------------- columns --------------------
// const columns = [
//   {
//     flex: 0.2,
//     minWidth: 230,
//     field: 'fullName',
//     headerName: 'User',
//     renderCell: ({ row }) => {
//       const { fullName, username } = row

//       return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {renderClient(row)}
//           <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
//             <LinkStyled href={`/dashboards/loginAuditTrails/view/overview`}>{fullName}</LinkStyled>
//             <Typography noWrap variant='caption'>
//               {`@${username}`}
//             </Typography>
//           </Box>
//         </Box>
//       )
//     }
//   },
//   {
//     flex: 0.2,
//     minWidth: 250,
//     field: 'email',
//     headerName: 'Email',
//     renderCell: ({ row }) => {
//       return (
//         <Typography noWrap variant='body2'>
//           {row.email ?? '—'}
//         </Typography>
//       )
//     }
//   },
//   {
//     flex: 0.15,
//     minWidth: 150,
//     field: 'phone',
//     headerName: 'Phone',
//     renderCell: ({ row }) => {
//       const phone = row.phone || row.contact || '—'
//       return (
//         <Typography noWrap variant='body2'>
//           {phone}
//         </Typography>
//       )
//     }
//   },
//   {
//     flex: 0.15,
//     minWidth: 150,
//     field: 'created',
//     headerName: 'Created',
//     renderCell: ({ row }) => {
//       const created = row.created || row.createdAt || '—'
//       return (
//         <Typography noWrap variant='body2'>
//           {created}
//         </Typography>
//       )
//     }
//   },
//   {
//     flex: 0.15,
//     minWidth: 150,
//     field: 'updated',
//     headerName: 'Updated',
//     renderCell: ({ row }) => {
//       const updated = row.updated || row.updatedAt || '—'
//       return (
//         <Typography noWrap variant='body2'>
//           {updated}
//         </Typography>
//       )
//     }
//   },
//   {
//     flex: 0.12,
//     field: 'role',
//     minWidth: 130,
//     headerName: 'Role',
//     renderCell: ({ row }) => {
//       const roleObj = userRoleObj?.[row?.role] ?? { icon: 'mdi-account', color: 'text.secondary' }

//       return (
//         <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: roleObj.color } }}>
//           <Icon icon={roleObj.icon} fontSize={20} />
//           <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
//             {row?.role ?? 'unknown'}
//           </Typography>
//         </Box>
//       )
//     }
//   },
//   {
//     flex: 0.1,
//     minWidth: 110,
//     field: 'status',
//     headerName: 'Status',
//     renderCell: ({ row }) => {
//       const chipColor = userStatusObj?.[row?.status] ?? 'default'
//       return (
//         <CustomChip
//           skin='light'
//           size='small'
//           label={row?.status ?? 'unknown'}
//           color={chipColor}
//           sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
//         />
//       )
//     }
//   },
//   {
//     flex: 0.1,
//     minWidth: 90,
//     sortable: false,
//     field: 'actions',
//     headerName: 'Actions',
//     renderCell: ({ row }) => <RowOptions id={row.id} />
//   }
// ]

// // -------------------- main component --------------------
// const UserList = ({ apiData }) => {
//   // ** State
//   const [role, setRole] = useState('')
//   const [plan, setPlan] = useState('')
//   const [value, setValue] = useState('')
//   const [status, setStatus] = useState('')
//   const [addUserOpen, setAddUserOpen] = useState(false)
//   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

//   // ** Hooks
//   const dispatch = useDispatch()
//   const store = useSelector(state => state.user)
//   useEffect(() => {
//     dispatch(
//       fetchData({
//         role,
//         status,
//         q: value,
//         currentPlan: plan
//       })
//     )
//   }, [dispatch, plan, role, status, value])

//   const handleFilter = useCallback(val => {
//     setValue(val)
//   }, [])

//   const handleRoleChange = useCallback(e => {
//     setRole(e.target.value)
//   }, [])

//   const handlePlanChange = useCallback(e => {
//     setPlan(e.target.value)
//   }, [])

//   const handleStatusChange = useCallback(e => {
//     setStatus(e.target.value)
//   }, [])
//   const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

//   return (
//     <Grid container spacing={6}>
//       {/* Make main content full width by using md=12 */}
//       <Grid item xs={12} md={12}>
//         <Card>
//           <CardHeader title='Login Audit Trails' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
//           <Divider />
//           <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
//           <Box sx={{ height: 700, width: '100%', background: 'transparent' }}>
//             <DataGrid
//               autoHeight
//               rows={store.data}
//               columns={columns}
//               checkboxSelection
//               disableRowSelectionOnClick
//               pageSizeOptions={[10, 25, 50]}
//               paginationModel={paginationModel}
//               onPaginationModelChange={setPaginationModel}
//               sx={{
//                 '& .MuiDataGrid-columnHeaders': { borderRadius: 0 },
//                 '& .MuiDataGrid-cell': { alignItems: 'center' }
//               }}
//             />
//           </Box>
//         </Card>
//       </Grid>

//       <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
//     </Grid>
//   )
// }

// export const getStaticProps = async () => {
//   const res = await axios.get('/cards/statistics')
//   const apiData = res.data

//   return {
//     props: {
//       apiData
//     }
//   }
// }

// export default UserList

// src/pages/dashboards/loginAuditTrails/list/index.js
import React, { useState } from 'react'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'

// Your theme Icon component
import Icon from 'src/@core/components/icon'

// Styled link
const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  fontSize: '0.8rem',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

// Action chip color map
const actionStyles = {
  changing: { bg: '#D4F7DF', color: '#0F8A44' },
  comment: { bg: '#E4E7EB', color: '#475569' },
  deleting: { bg: '#FDE2E1', color: '#E53E3E' },
  updates: { bg: '#FFEAD0', color: '#C05621' },
  uploading: { bg: '#DBEAFE', color: '#1D4ED8' },
  feedback: { bg: '#EDE9FE', color: '#6D28D9' }
}

// -------------------- ALL YOUR 20 ROWS --------------------
const SAMPLE_ROWS = [
  {
    id: '1',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: '5E7507E36A0F0A4617DAA2FCDE0B2A09',
    loginTime: '11/17/2025 13:34:45',
    action: 'Changing'
  },
  {
    id: '2',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: '106C7A0284B625608C9F068F9095E451',
    loginTime: '11/17/2025 11:49:08',
    action: 'Comment'
  },
  {
    id: '3',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '52DFCE96887A06C32E2F8BAD85F25B8C',
    loginTime: '11/17/2025 11:43:10',
    logoutTime: '11/17/2025 11:49:02',
    duration: '0 hours 5 minutes 52 seconds',
    action: 'Updates'
  },
  {
    id: '4',
    fullName: 'Mallu',
    email: 'mallu@printform.com',
    sessionId: 'E0EE452014AF5D3168326EE2FE0F1085',
    loginTime: '11/17/2025 11:12:00',
    logoutTime: '11/17/2025 11:39:25',
    duration: '0 hours 27 minutes 25 seconds',
    action: 'Deleting'
  },
  {
    id: '5',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '602964E30255722E17ADB1BF5AD8B49D',
    loginTime: '11/17/2025 11:01:14',
    logoutTime: '11/17/2025 11:11:53',
    duration: '0 hours 10 minutes 39 seconds',
    action: 'Uploading'
  },
  {
    id: '6',
    fullName: 'Nicole Zhang',
    email: 'nicole.zhang@printform.com',
    sessionId: 'E209DCE190AA7B97F8C17BCCCE50DC46',
    loginTime: '11/17/2025 10:47:29',
    logoutTime: '11/17/2025 11:01:08',
    duration: '0 hours 13 minutes 39 seconds',
    action: 'Feedback'
  },
  {
    id: '7',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: 'AC69BCE206DFEFF5521A72194848F513',
    loginTime: '11/17/2025 10:45:12',
    logoutTime: '11/17/2025 10:47:24',
    duration: '0 hours 2 minutes 12 seconds',
    action: 'Updates'
  },
  {
    id: '8',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '1DC51FAE64D02A397CD99A1EA60C3BB2',
    loginTime: '11/17/2025 10:41:57',
    logoutTime: '11/17/2025 10:45:04',
    duration: '0 hours 3 minutes 7 seconds',
    action: 'Uploading'
  },
  {
    id: '9',
    fullName: 'Nicole Zhang',
    email: 'nicole.zhang@printform.com',
    sessionId: '6992B6F6171EC25B9157B935F308B7F3',
    loginTime: '11/17/2025 10:40:05',
    logoutTime: '11/17/2025 10:41:50',
    duration: '0 hours 1 minutes 45 seconds',
    action: 'Comment'
  },
  {
    id: '10',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '0C0F4D26628F11E2A1F507E4FFEDA178',
    loginTime: '11/17/2025 10:32:03',
    logoutTime: '11/17/2025 10:39:59',
    duration: '0 hours 7 minutes 56 seconds',
    action: 'Changing'
  },
  {
    id: '11',
    fullName: 'Mallu',
    email: 'mallu@printform.com',
    sessionId: 'D8258E063F4D9E9096BD83E57D859F5B',
    loginTime: '11/17/2025 10:31:23',
    logoutTime: '11/17/2025 10:31:58',
    duration: '0 hours 0 minutes 35 seconds',
    action: 'Updates'
  },
  {
    id: '12',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: '77F22D4CBD3647F1F2B15D2B3B69294E',
    loginTime: '11/17/2025 09:25:02',
    action: 'Uploading'
  },
  {
    id: '13',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: 'A567A85957BF503E7C8B7421A0947071',
    loginTime: '11/17/2025 07:14:27',
    action: 'Comment'
  },
  {
    id: '14',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: '46780B93BAB8D7D609779802854F0970',
    loginTime: '11/17/2025 06:50:14',
    action: 'Deleting'
  },
  {
    id: '15',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '0FC49B311834BFAAA06B645999DCEF22',
    loginTime: '11/17/2025 05:03:06',
    action: 'Feedback'
  },
  {
    id: '16',
    fullName: 'CRM',
    email: 'crm@paasport.com',
    sessionId: '62147BFD0800CA24B86967A3BEF0B7E3',
    loginTime: '11/17/2025 03:28:33',
    action: 'Updates'
  },
  {
    id: '17',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '6624DBA2B52F42866FCF21352257FAE4',
    loginTime: '11/17/2025 03:09:36',
    action: 'Changing'
  },
  {
    id: '18',
    fullName: 'Jason Mould',
    email: 'Jason.Mould@printform.com',
    sessionId: '5F7C8ACA715E84017F7D1D162FC710A8',
    loginTime: '11/17/2025 02:12:34',
    logoutTime: '11/17/2025 03:09:29',
    duration: '0 hours 56 minutes 55 seconds',
    action: 'Uploading'
  },
  {
    id: '19',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: '8E7CD0F78356EBCDC690EFF539C9B821',
    loginTime: '11/17/2025 01:26:35',
    logoutTime: '11/17/2025 02:12:20',
    duration: '0 hours 45 minutes 45 seconds',
    action: 'Comment'
  },
  {
    id: '20',
    fullName: 'Justin Howard',
    email: 'justin.howard@printform.com',
    sessionId: 'DAFB23DCDE714353287AFBB1FACFBCC1',
    loginTime: '11/16/2025 23:18:37',
    logoutTime: '11/16/2025 23:27:51',
    duration: '0 hours 9 minutes 14 seconds',
    action: 'Deleting'
  }
]

// -------------------- HELPERS --------------------
const formatDate = value => {
  if (!value) return '—'
  const [date, time] = value.split(' ')
  return (
    <Box>
      <Typography variant='body2' sx={{ fontWeight: 600 }}>
        {date}
      </Typography>
      <Typography variant='caption' sx={{ color: 'text.secondary' }}>
        {time}
      </Typography>
    </Box>
  )
}

const formatDuration = row => row.duration ?? '—'

// View button (yellow)
const RowView = ({ id }) => (
  <Tooltip title='View'>
    <IconButton
      component={Link}
      href={`/dashboards/loginAuditTrails/view/${id}`}
      size='small'
      sx={{ color: 'warning.main' }}
    >
      <Icon icon='mdi:eye-outline' />
    </IconButton>
  </Tooltip>
)

// -------------------- COLUMN DEFINITIONS --------------------
const columns = [
  {
    field: 'fullName',
    headerName: 'Name',
    flex: 0.18,
    minWidth: 180,
    renderCell: ({ row }) => <LinkStyled href='#'>{row.fullName}</LinkStyled>
  },
  { field: 'email', headerName: 'Email', flex: 0.18, minWidth: 200 },
  {
    field: 'sessionId',
    headerName: 'Session ID',
    flex: 0.28,
    minWidth: 320,
    renderCell: ({ row }) => <Typography sx={{ fontFamily: 'monospace' }}>{row.sessionId}</Typography>
  },
  {
    field: 'loginTime',
    headerName: 'Login Time',
    flex: 0.16,
    minWidth: 150,
    renderCell: ({ row }) => formatDate(row.loginTime)
  },
  {
    field: 'logoutTime',
    headerName: 'Logout Time',
    flex: 0.16,
    minWidth: 150,
    renderCell: ({ row }) => formatDate(row.logoutTime)
  },
  {
    field: 'duration',
    headerName: 'Duration',
    flex: 0.16,
    minWidth: 250,
    renderCell: ({ row }) => formatDuration(row)
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 0.16,
    minWidth: 140,
    renderCell: ({ row }) => {
      const key = row.action.toLowerCase()
      const st = actionStyles[key] || { bg: '#EEE', color: '#555' }

      return (
        <Box
          sx={{
            backgroundColor: st.bg,
            color: st.color,
            px: 2,
            py: 0.5,
            borderRadius: '18px',
            display: 'inline-flex',
            fontWeight: 600
          }}
        >
          {row.action}
        </Box>
      )
    }
  },
  { field: 'view', headerName: 'View', flex: 0.08, minWidth: 80, renderCell: ({ row }) => <RowView id={row.id} /> }
]

// -------------------- MAIN PAGE --------------------
export default function LoginAuditListPage() {
  const [search, setSearch] = useState('')

  const filteredRows = SAMPLE_ROWS.filter(r => {
    const q = search.toLowerCase()
    return (
      r.fullName.toLowerCase().includes(q) || r.email.toLowerCase().includes(q) || r.sessionId.toLowerCase().includes(q)
    )
  })

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ borderRadius: 3, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}>
          <CardHeader title='Login Audit Trails' />
          <Divider />

          <CardContent sx={{ display: 'flex', gap: 2 }}>
            <TextField
              size='small'
              placeholder='Search name / email / session...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ minWidth: 350 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon icon='mdi:magnify' />
                  </InputAdornment>
                )
              }}
            />
            {/* 
            <Button variant='outlined' size='small' onClick={() => setSearch('')}>
              Reset
            </Button> */}
          </CardContent>

          <Divider />

          <Box sx={{ height: 610 }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[10, 20, 50]}
              initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
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
