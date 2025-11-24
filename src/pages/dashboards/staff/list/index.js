// // ** React Imports
// import { useState, useEffect, useCallback } from 'react'

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
// import InputLabel from '@mui/material/InputLabel'
// import FormControl from '@mui/material/FormControl'
// import CardContent from '@mui/material/CardContent'
// import { DataGrid } from '@mui/x-data-grid'
// import Select from '@mui/material/Select'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// // ** Custom Components Imports
// import CustomChip from 'src/@core/components/mui/chip'
// import CustomAvatar from 'src/@core/components/mui/avatar'
// import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

// // ** Utils Import
// import { getInitials } from 'src/@core/utils/get-initials'

// // ** Actions Imports
// import { fetchData, deleteUser } from 'src/store/apps/user'

// // ** Third Party Components
// import axios from 'axios'

// // ** Custom Table Components Imports
// import TableHeader from 'src/views/dashboards/staff/List/TableHead'
// import AddUserDrawer from 'src/views/dashboards/staff/List/AddUser'

// // ** Vars
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

// // ** renders client column
// const renderClient = row => {
//   if (row.avatar.length) {
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
//     <>
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
//           // href='/apps/user/view/overview/'
//           href='/dashboards/staff/view/overview'
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
//     </>
//   )
// }

// // const columns = [
// //   {
// //     flex: 0.2,
// //     minWidth: 230,
// //     field: 'fullName',
// //     headerName: 'User',
// //     renderCell: ({ row }) => {
// //       const { fullName, username } = row

// //       return (
// //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //           {renderClient(row)}
// //           <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
// //             <LinkStyled href='/apps/user/view/overview/'>{fullName}</LinkStyled>
// //             <Typography noWrap variant='caption'>
// //               {`@${username}`}
// //             </Typography>
// //           </Box>
// //         </Box>
// //       )
// //     }
// //   },
// //   {
// //     flex: 0.2,
// //     minWidth: 250,
// //     field: 'email',
// //     headerName: 'Email',
// //     renderCell: ({ row }) => {
// //       return (
// //         <Typography noWrap variant='body2'>
// //           {row.email}
// //         </Typography>
// //       )
// //     }
// //   },
// //   {
// //     flex: 0.15,
// //     field: 'role',
// //     minWidth: 150,
// //     headerName: 'Role',
// //     renderCell: ({ row }) => {
// //       return (
// //         // <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: userRoleObj[row.role].color } }}>
// //         //   <Icon icon={userRoleObj[row.role].icon} fontSize={20} />
// //         //   <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
// //         //     {row.role}
// //         //   </Typography>
// //         // </Box>

// //         <Box
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             '& svg': {
// //               mr: 3,
// //               color: userRoleObj?.[row?.role]?.color ?? 'text.secondary'
// //             }
// //           }}
// //         >
// //           <Icon icon={userRoleObj?.[row?.role]?.icon ?? 'mdi-account'} fontSize={20} />
// //           <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
// //             {row?.role ?? 'unknown'}
// //           </Typography>
// //         </Box>
// //       )
// //     }
// //   },
// //   {
// //     flex: 0.15,
// //     minWidth: 120,
// //     headerName: 'Plan',
// //     field: 'currentPlan',
// //     renderCell: ({ row }) => {
// //       return (
// //         <Typography variant='subtitle1' noWrap sx={{ textTransform: 'capitalize' }}>
// //           {row.currentPlan}
// //         </Typography>
// //       )
// //     }
// //   },
// //   {
// //     flex: 0.1,
// //     minWidth: 110,
// //     field: 'status',
// //     headerName: 'Status',
// //     renderCell: ({ row }) => {
// //       return (
// //         <CustomChip
// //           skin='light'
// //           size='small'
// //           label={row.status}
// //           color={userStatusObj[row.status]}
// //           sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
// //         />
// //       )
// //     }
// //   },
// //   {
// //     flex: 0.1,
// //     minWidth: 90,
// //     sortable: false,
// //     field: 'actions',
// //     headerName: 'Actions',
// //     renderCell: ({ row }) => <RowOptions id={row.id} />
// //   }
// // ]

// const columns = [
//   // User (unchanged)
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
//             <LinkStyled href={`/apps/user/view/overview/`}>{fullName}</LinkStyled>
//             <Typography noWrap variant='caption'>
//               {`@${username}`}
//             </Typography>
//           </Box>
//         </Box>
//       )
//     }
//   },

//   // Email
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

//   // Phone (supports phone OR legacy contact)
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

//   // Created (supports created or createdAt)
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

//   // Updated (supports updated or updatedAt)
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

//   // Role (uses safe lookup on userRoleObj)
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

//   // Status (uses CustomChip)
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

//   // Actions (unchanged)
//   {
//     flex: 0.1,
//     minWidth: 90,
//     sortable: false,
//     field: 'actions',
//     headerName: 'Actions',
//     renderCell: ({ row }) => <RowOptions id={row.id} />
//   }
// ]

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
//       {/* <Grid item xs={12}>
//         {apiData && (
//           <Grid container spacing={6}>
//             {apiData.statsHorizontal.map((item, index) => {
//               return (
//                 <Grid item xs={12} md={3} sm={6} key={index}>
//                   <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon} />} />
//                 </Grid>
//               )
//             })}
//           </Grid>
//         )}
//       </Grid> */}
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Staff Management' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
//           {/* <CardContent>
//             <Grid container spacing={6}>
//               <Grid item sm={4} xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel id='role-select'>Select Role</InputLabel>
//                   <Select
//                     fullWidth
//                     value={role}
//                     id='select-role'
//                     label='Select Role'
//                     labelId='role-select'
//                     onChange={handleRoleChange}
//                     inputProps={{ placeholder: 'Select Role' }}
//                   >
//                     <MenuItem value=''>Select Role</MenuItem>
//                     <MenuItem value='admin'>Admin</MenuItem>
//                     <MenuItem value='author'>Author</MenuItem>
//                     <MenuItem value='editor'>Editor</MenuItem>
//                     <MenuItem value='maintainer'>Maintainer</MenuItem>
//                     <MenuItem value='subscriber'>Subscriber</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item sm={4} xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel id='plan-select'>Select Plan</InputLabel>
//                   <Select
//                     fullWidth
//                     value={plan}
//                     id='select-plan'
//                     label='Select Plan'
//                     labelId='plan-select'
//                     onChange={handlePlanChange}
//                     inputProps={{ placeholder: 'Select Plan' }}
//                   >
//                     <MenuItem value=''>Select Plan</MenuItem>
//                     <MenuItem value='basic'>Basic</MenuItem>
//                     <MenuItem value='company'>Company</MenuItem>
//                     <MenuItem value='enterprise'>Enterprise</MenuItem>
//                     <MenuItem value='team'>Team</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item sm={4} xs={12}>
//                 <FormControl fullWidth>
//                   <InputLabel id='status-select'>Select Status</InputLabel>
//                   <Select
//                     fullWidth
//                     value={status}
//                     id='select-status'
//                     label='Select Status'
//                     labelId='status-select'
//                     onChange={handleStatusChange}
//                     inputProps={{ placeholder: 'Select Role' }}
//                   >
//                     <MenuItem value=''>Select Role</MenuItem>
//                     <MenuItem value='pending'>Pending</MenuItem>
//                     <MenuItem value='active'>Active</MenuItem>
//                     <MenuItem value='inactive'>Inactive</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//             </Grid>
//           </CardContent> */}
//           <Divider />
//           <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
//           <DataGrid
//             autoHeight
//             rows={store.data}
//             columns={columns}
//             checkboxSelection
//             disableRowSelectionOnClick
//             pageSizeOptions={[10, 25, 50]}
//             paginationModel={paginationModel}
//             onPaginationModelChange={setPaginationModel}
//             sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
//           />
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

// UserListWithRightSidebar.jsx
// ** React Imports
import { useState, useEffect, useCallback, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import { DataGrid } from '@mui/x-data-grid'
import Select from '@mui/material/Select'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import CardStatisticsHorizontal from 'src/@core/components/card-statistics/card-stats-horizontal'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData, deleteUser } from 'src/store/apps/user'

// ** Third Party Components
import axios from 'axios'

// ** Custom Table Components Imports
import TableHeader from 'src/views/dashboards/staff/List/TableHead'
import AddUserDrawer from 'src/views/dashboards/staff/List/AddUser'

// -------------------- existing consts --------------------
const userRoleObj = {
  admin: { icon: 'mdi:laptop', color: 'error.main' },
  author: { icon: 'mdi:cog-outline', color: 'warning.main' },
  editor: { icon: 'mdi:pencil-outline', color: 'info.main' },
  maintainer: { icon: 'mdi:chart-donut', color: 'success.main' },
  subscriber: { icon: 'mdi:account-outline', color: 'primary.main' }
}

const userStatusObj = {
  active: 'success',
  pending: 'warning',
  inactive: 'error'
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

// -------------------- small helpers --------------------
const renderClient = row => {
  if (row.avatar && row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 34, height: 34 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor || 'primary'}
        sx={{ mr: 3, width: 34, height: 34, fontSize: '1rem' }}
      >
        {getInitials(row.fullName ? row.fullName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const RowOptions = ({ id }) => {
  // ** Hooks
  const dispatch = useDispatch()

  // ** State
  const [anchorEl, setAnchorEl] = useState(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <Fragment>
      <IconButton size='small' onClick={handleRowOptionsClick}>
        <Icon icon='mdi:dots-vertical' />
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={rowOptionsOpen}
        onClose={handleRowOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        PaperProps={{ style: { minWidth: '8rem' } }}
      >
        <MenuItem
          component={Link}
          sx={{ '& svg': { mr: 2 } }}
          onClick={handleRowOptionsClose}
          href='/dashboards/staff/view/overview'
        >
          <Icon icon='mdi:eye-outline' fontSize={20} />
          View
        </MenuItem>
        <MenuItem onClick={handleRowOptionsClose} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:pencil-outline' fontSize={20} />
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} sx={{ '& svg': { mr: 2 } }}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
          Delete
        </MenuItem>
      </Menu>
    </Fragment>
  )
}

// -------------------- columns --------------------
const columns = [
  {
    flex: 0.2,
    minWidth: 230,
    field: 'fullName',
    headerName: 'User',
    renderCell: ({ row }) => {
      const { fullName, username } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <LinkStyled href={`/dashboards/staff/view/overview/`}>{fullName}</LinkStyled>
            <Typography noWrap variant='caption'>
              {`@${username}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 250,
    field: 'email',
    headerName: 'Email',
    renderCell: ({ row }) => {
      return (
        <Typography noWrap variant='body2'>
          {row.email ?? '—'}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 150,
    field: 'phone',
    headerName: 'Phone',
    renderCell: ({ row }) => {
      const phone = row.phone || row.contact || '—'
      return (
        <Typography noWrap variant='body2'>
          {phone}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 150,
    field: 'created',
    headerName: 'Created',
    renderCell: ({ row }) => {
      const created = row.created || row.createdAt || '—'
      return (
        <Typography noWrap variant='body2'>
          {created}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 150,
    field: 'updated',
    headerName: 'Updated',
    renderCell: ({ row }) => {
      const updated = row.updated || row.updatedAt || '—'
      return (
        <Typography noWrap variant='body2'>
          {updated}
        </Typography>
      )
    }
  },
  {
    flex: 0.12,
    field: 'role',
    minWidth: 130,
    headerName: 'Role',
    renderCell: ({ row }) => {
      const roleObj = userRoleObj?.[row?.role] ?? { icon: 'mdi-account', color: 'text.secondary' }

      return (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 3, color: roleObj.color } }}>
          <Icon icon={roleObj.icon} fontSize={20} />
          <Typography noWrap sx={{ color: 'text.secondary', textTransform: 'capitalize' }}>
            {row?.role ?? 'unknown'}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }) => {
      const chipColor = userStatusObj?.[row?.status] ?? 'default'
      return (
        <CustomChip
          skin='light'
          size='small'
          label={row?.status ?? 'unknown'}
          color={chipColor}
          sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
        />
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: ({ row }) => <RowOptions id={row.id} />
  }
]

// -------------------- Sidebar cards --------------------
const StaffOverviewCard = ({ stats = { total: 63, active: 52, onLeave: 8, inactive: 3 } }) => {
  const { total, active, onLeave, inactive } = stats
  return (
    <Card sx={{ borderRadius: 1 }}>
      <CardHeader
        title={
          <Typography variant='h6' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}>
            Staff Overview
          </Typography>
        }
        action={
          <IconButton size='small'>
            <Icon icon='mdi:account-group' />
          </IconButton>
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: 1, mt: 5 }}>
          {total}
        </Typography>
        <Typography variant='caption' sx={{ display: 'block', mb: 2 }}>
          Total Staff
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Active</Typography>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Primary working staff
            </Typography>
          </Box>
          <Chip label={`${active}`} size='small' color='primary' variant='outlined' />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>On Leave</Typography>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Currently on leave
            </Typography>
          </Box>
          <Chip label={`${onLeave}`} size='small' color='warning' variant='outlined' />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography sx={{ fontWeight: 600 }}>Inactive</Typography>
            <Typography variant='caption' sx={{ color: 'text.secondary' }}>
              Temporarily disabled
            </Typography>
          </Box>
          <Chip label={`${inactive}`} size='small' color='default' variant='outlined' />
        </Box>
      </CardContent>
    </Card>
  )
}

const ListOfDepartments = ({ departments }) => {
  return (
    <Stack spacing={1}>
      {departments.map((d, i) => (
        <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: 10,
                background: theme =>
                  d.color === 'primary'
                    ? theme.palette.primary.main
                    : d.color === 'success'
                    ? theme.palette.success.main
                    : d.color === 'secondary'
                    ? theme.palette.secondary.main
                    : d.color === 'error'
                    ? theme.palette.error.main
                    : d.color === 'warning'
                    ? theme.palette.warning.main
                    : d.color === 'info'
                    ? theme.palette.info.main
                    : theme.palette.grey[500],
                mr: 1.5
              }}
            />
            <Typography sx={{ fontWeight: 600 }}>{d.name}</Typography>
          </Box>
          <Chip label={d.count} size='small' variant='outlined' />
        </Box>
      ))}
    </Stack>
  )
}

const DepartmentsCard = ({
  departments = [
    // { name: 'Medical', color: 'primary', count: 12 },
    // { name: 'Nursing', color: 'success', count: 18 },
    // { name: 'Administration', color: 'secondary', count: 8 },
    // { name: 'Laboratory', color: 'warning', count: 5 },
    // { name: 'Pharmacy', color: 'error', count: 4 },
    // { name: 'Radiology', color: 'info', count: 3 },
    // { name: 'Therapy', color: 'default', count: 6 },
    // { name: 'Support', color: 'primary', count: 7 }
    { name: 'Administration', color: 'primary', count: 1 },
    { name: 'Sales', color: 'success', count: 18 },
    { name: 'Marketing', color: 'secondary', count: 8 },
    { name: 'Finance', color: 'warning', count: 5 },
    { name: 'Account', color: 'error', count: 4 },
    { name: 'Logistics', color: 'info', count: 3 }
  ]
}) => {
  return (
    <Card sx={{ borderRadius: 1, mt: 8 }}>
      <CardHeader
        title={
          <Typography variant='h6' sx={{ pb: 8, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}>
            Departments
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <CardContent>
        <ListOfDepartments departments={departments} />
        <Box sx={{ mt: 8 }}>
          <Button variant='outlined' startIcon={<Icon icon='mdi:store-settings-outline' />}>
            Manage Departments
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

// -------------------- main component --------------------
const UserList = ({ apiData }) => {
  // ** State
  const [role, setRole] = useState('')
  const [plan, setPlan] = useState('')
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)
  useEffect(() => {
    dispatch(
      fetchData({
        role,
        status,
        q: value,
        currentPlan: plan
      })
    )
  }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback(val => {
    setValue(val)
  }, [])

  const handleRoleChange = useCallback(e => {
    setRole(e.target.value)
  }, [])

  const handlePlanChange = useCallback(e => {
    setPlan(e.target.value)
  }, [])

  const handleStatusChange = useCallback(e => {
    setStatus(e.target.value)
  }, [])
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  // sample sidebar data (you can replace with API-driven data)
  const staffStats = { total: 63, active: 52, onLeave: 8, inactive: 3 }
  const departments = [
    { name: 'Administration', color: 'primary', count: 1 },
    { name: 'Sales', color: 'success', count: 18 },
    { name: 'Marketing', color: 'secondary', count: 8 },
    { name: 'Finance', color: 'warning', count: 5 },
    { name: 'Account', color: 'error', count: 4 },
    { name: 'Logistics', color: 'info', count: 3 }
    // { name: 'Therapy', color: 'default', count: 6 },
    // { name: 'Support', color: 'primary', count: 7 }
  ]

  return (
    <Grid container spacing={6}>
      {/* Main Content (left) */}
      <Grid item xs={12} md={9}>
        <Card>
          <CardHeader title='Staff Management' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
          <Divider />
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
          <Box sx={{ height: 600, width: '100%', background: 'transparent' }}>
            <DataGrid
              autoHeight
              rows={store.data}
              columns={columns}
              checkboxSelection
              disableRowSelectionOnClick
              pageSizeOptions={[10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              sx={{
                '& .MuiDataGrid-columnHeaders': { borderRadius: 0 },
                '& .MuiDataGrid-cell': { alignItems: 'center' }
              }}
            />
          </Box>
        </Card>
      </Grid>

      {/* Right Sidebar */}
      <Grid item xs={12} md={3}>
        <Grid container spacing={4} direction='column'>
          <Grid item>
            <StaffOverviewCard stats={staffStats} />
          </Grid>
          <Grid item>
            <DepartmentsCard departments={departments} />
          </Grid>
        </Grid>
      </Grid>

      <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
    </Grid>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}

export default UserList
