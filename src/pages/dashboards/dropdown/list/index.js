// // UserListWithRightSidebar.jsx
// // ** React Imports
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
// import InputLabel from '@mui/material/InputLabel'
// import FormControl from '@mui/material/FormControl'
// import CardContent from '@mui/material/CardContent'
// import { DataGrid } from '@mui/x-data-grid'
// import Select from '@mui/material/Select'
// import Stack from '@mui/material/Stack'
// import Chip from '@mui/material/Chip'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'

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
// import TableHeader from 'src/views/dashboards/dropdown/List/TableHead'
// import AddUserDrawer from 'src/views/dashboards/dropdown/List/AddUser'

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
//           href='/dashboards/dropdown/view/overview'
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
//             <LinkStyled href={`/apps/user/view/overview/`}>{fullName}</LinkStyled>
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

// // -------------------- Sidebar cards --------------------
// const StaffOverviewCard = ({ stats = { total: 63, active: 52, onLeave: 8, inactive: 3 } }) => {
//   const { total, active, onLeave, inactive } = stats
//   return (
//     <Card sx={{ borderRadius: 2 }}>
//       <CardHeader
//         title={
//           <Typography variant='h6' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}>
//             Staff Overview
//           </Typography>
//         }
//         action={
//           <IconButton size='small'>
//             <Icon icon='mdi:account-group' />
//           </IconButton>
//         }
//         sx={{ pb: 0 }}
//       />
//       <CardContent>
//         <Typography variant='h4' sx={{ fontWeight: 700, mb: 1, mt: 5 }}>
//           {total}
//         </Typography>
//         <Typography variant='caption' sx={{ display: 'block', mb: 2 }}>
//           Total Staff
//         </Typography>

//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//           <Box>
//             <Typography sx={{ fontWeight: 600 }}>Active</Typography>
//             <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//               Primary working staff
//             </Typography>
//           </Box>
//           <Chip label={`${active}`} size='small' color='primary' variant='outlined' />
//         </Box>

//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
//           <Box>
//             <Typography sx={{ fontWeight: 600 }}>On Leave</Typography>
//             <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//               Currently on leave
//             </Typography>
//           </Box>
//           <Chip label={`${onLeave}`} size='small' color='warning' variant='outlined' />
//         </Box>

//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box>
//             <Typography sx={{ fontWeight: 600 }}>Inactive</Typography>
//             <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//               Temporarily disabled
//             </Typography>
//           </Box>
//           <Chip label={`${inactive}`} size='small' color='default' variant='outlined' />
//         </Box>
//       </CardContent>
//     </Card>
//   )
// }

// const ListOfDepartments = ({ departments }) => {
//   return (
//     <Stack spacing={1}>
//       {departments.map((d, i) => (
//         <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Box
//               sx={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: 10,
//                 background: theme =>
//                   d.color === 'primary'
//                     ? theme.palette.primary.main
//                     : d.color === 'success'
//                     ? theme.palette.success.main
//                     : d.color === 'secondary'
//                     ? theme.palette.secondary.main
//                     : d.color === 'error'
//                     ? theme.palette.error.main
//                     : d.color === 'warning'
//                     ? theme.palette.warning.main
//                     : d.color === 'info'
//                     ? theme.palette.info.main
//                     : theme.palette.grey[500],
//                 mr: 1.5
//               }}
//             />
//             <Typography sx={{ fontWeight: 600 }}>{d.name}</Typography>
//           </Box>
//           <Chip label={d.count} size='small' variant='outlined' />
//         </Box>
//       ))}
//     </Stack>
//   )
// }

// const DepartmentsCard = ({
//   departments = [
//     // { name: 'Medical', color: 'primary', count: 12 },
//     // { name: 'Nursing', color: 'success', count: 18 },
//     // { name: 'Administration', color: 'secondary', count: 8 },
//     // { name: 'Laboratory', color: 'warning', count: 5 },
//     // { name: 'Pharmacy', color: 'error', count: 4 },
//     // { name: 'Radiology', color: 'info', count: 3 },
//     // { name: 'Therapy', color: 'default', count: 6 },
//     // { name: 'Support', color: 'primary', count: 7 }
//     { name: 'Administration', color: 'primary', count: 1 },
//     { name: 'Sales', color: 'success', count: 18 },
//     { name: 'Marketing', color: 'secondary', count: 8 },
//     { name: 'Finance', color: 'warning', count: 5 },
//     { name: 'Account', color: 'error', count: 4 },
//     { name: 'Logistics', color: 'info', count: 3 }
//   ]
// }) => {
//   return (
//     <Card sx={{ borderRadius: 2, mt: 8 }}>
//       <CardHeader
//         title={
//           <Typography variant='h6' sx={{ pb: 8, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }}>
//             Departments
//           </Typography>
//         }
//         sx={{ pb: 0 }}
//       />
//       <CardContent>
//         <ListOfDepartments departments={departments} />
//         <Box sx={{ mt: 8 }}>
//           <Button variant='outlined' startIcon={<Icon icon='mdi:store-settings-outline' />}>
//             Manage Departments
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   )
// }

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

//   // sample sidebar data (you can replace with API-driven data)
//   const staffStats = { total: 63, active: 52, onLeave: 8, inactive: 3 }
//   const departments = [
//     { name: 'Administration', color: 'primary', count: 1 },
//     { name: 'Sales', color: 'success', count: 18 },
//     { name: 'Marketing', color: 'secondary', count: 8 },
//     { name: 'Finance', color: 'warning', count: 5 },
//     { name: 'Account', color: 'error', count: 4 },
//     { name: 'Logistics', color: 'info', count: 3 }
//     // { name: 'Therapy', color: 'default', count: 6 },
//     // { name: 'Support', color: 'primary', count: 7 }
//   ]

//   return (
//     <Grid container spacing={6}>
//       {/* Main Content (left) */}
//       <Grid item xs={12} md={9}>
//         <Card>
//           <CardHeader title='Staff Management' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
//           <Divider />
//           <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddUserDrawer} />
//           <Box sx={{ height: 600, width: '100%', background: 'transparent' }}>
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

//       {/* Right Sidebar */}
//       <Grid item xs={12} md={3}>
//         <Grid container spacing={4} direction='column'>
//           <Grid item>
//             <StaffOverviewCard stats={staffStats} />
//           </Grid>
//           <Grid item>
//             <DepartmentsCard departments={departments} />
//           </Grid>
//         </Grid>
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

// UserLookupsCRUDPretty.jsx
import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import { DataGrid } from '@mui/x-data-grid'
import Link from 'next/link'

// Your project's Icon wrapper (replace path if different)
import Icon from 'src/@core/components/icon'

/* ---------------------------------------------------------------------------
  Styled Link to match your theme
  --------------------------------------------------------------------------- */
const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.primary,
  '&:hover': { color: theme.palette.primary.main }
}))

/* ---------------------------------------------------------------------------
  DATA_TEXT - paste the full dataset you gave. I included the entire block
  you gave in your message; if you want to update it later, replace this string.
  --------------------------------------------------------------------------- */
const DATA_TEXT = `id	name	type	description	sequence_no
1	Justin Howard	Sales Manager	NULL	NULL
2	Rob Schmidt	__Sales Manager__	NULL	NULL
3	Ryan Costello	Sales Manager	NULL	NULL
4	Lorena Acosta	Sales Manager	NULL	NULL
5	Garry Adams	_Sales Manager	NULL	NULL
7	Stewart Aldrich	__Sales Manager__	NULL	NULL
14	Julie Thomas	Project Manager	NULL	NULL
15	Matt Wendel	_Project Manager_	NULL	NULL
16	Lindsey Tundidor	Project Manager	NULL	NULL
18	Ummadi Sravani	Marketing	NULL	NULL
19	Harshita KM	Marketing	NULL	NULL
20	Saloni Verma	Marketing	NULL	NULL
21	Shalmoli Chavan	Marketing	NULL	NULL
22	Aerospace and Defense	industry	NULL	NULL
23	Automotive	industry	NULL	NULL
24	Consumer Products	industry	NULL	NULL
25	Energy	industry	NULL	NULL
26	Medical	industry	NULL	NULL
27	Oil and Gas	industry	NULL	NULL
28	Other	industry	NULL	NULL
29	Google/Search Engines	lead_source	NULL	NULL
30	Facebook	lead_source	NULL	NULL
31	Twitter	lead_source	NULL	NULL
32	Instagram	lead_source	NULL	NULL
33	Email	lead_source	NULL	NULL
34	LinkedIn	lead_source	NULL	NULL
35	Referral	lead_source	NULL	NULL
36	Trade Show	lead_source	NULL	NULL
37	Other	lead_source	NULL	NULL
38	Net 7	payment_term	NULL	1
39	Net 10	payment_term	NULL	2
40	Net 15	payment_term	NULL	3
41	Net 30	payment_term	NULL	4
42	Net 45	payment_term	NULL	5
43	Net 60	payment_term	NULL	6
44	Net 75	payment_term	NULL	7
45	Net 90	payment_term	NULL	8
46	Other(Specify in notes)	payment_term	NULL	13
47	Budgetary	_reason_	NULL	NULL
48	Capability	_reason_	NULL	NULL
49	Direct to Production	_reason_	NULL	NULL
50	Duplicate	_reason_	NULL	NULL
51	Lead Time	_reason_	NULL	NULL
52	Made Internally	_reason_	NULL	NULL
53	No CAD	_reason_	NULL	NULL
54	Non Responsive	_reason_	NULL	NULL
55	Order	_reason_	NULL	NULL
56	Price	_reason_	NULL	NULL
57	Relationship	_reason_	NULL	NULL
58	Student	_reason_	NULL	NULL
59	Transferred to Another Account	_reason_	NULL	NULL
60	Sharang Kapsikar	supplier	NULL	NULL
61	idea supplier	supplier	NULL	NULL
62	Leshine Technology Co Ltd	supplier	NULL	NULL
63	Zhongshan Hord Rapidtools Ltd	supplier	NULL	NULL
64	DONGGUAN BOLE RP M COLTD	supplier	NULL	NULL
65	ENL	supplier	NULL	NULL
66	Hkwcd	supplier	NULL	NULL
67	Jason Mould	supplier	NULL	NULL
68	Merit	supplier	NULL	NULL
69	Enable Fab	supplier	NULL	NULL
70	SHENZHEN FASTPROTO CO.,LTD	supplier	NULL	NULL
71	ARRK	supplier	NULL	NULL
72	Fusion	supplier	NULL	NULL
73	PrintForm Supplier	supplier	NULL	NULL
74	Agile Manufacturing ltd.	supplier	NULL	NULL
75	Prototek	supplier	NULL	NULL
76	Jabil Additive	supplier	NULL	NULL
77	Wuxi odiem Technology Co.,Ltd	supplier	NULL	NULL
78	WG Sourcing	supplier	NULL	NULL
79	HyMetals	supplier	NULL	NULL
80	Pavilion Manufacturing	supplier	NULL	NULL
81	Prototype	production_type	NULL	NULL
82	Production	production_type	NULL	NULL
83	Yes	ITAR	NULL	NULL
84	No	ITAR	NULL	NULL
85	Approved	status	NULL	NULL
86	Unapproved	status	NULL	NULL
87	New	lead_type	NULL	NULL
88	Existing	lead_type	NULL	NULL
89	Manual	quote_stage	NULL	NULL
90	Request For Quote	quote_stage	NULL	NULL
91	Quote	quote_stage	NULL	NULL
92	Follow Up/Review	quote_stage	NULL	NULL
93	Positive Buying Sign	quote_stage	NULL	NULL
94	PO Expected	quote_stage	NULL	NULL
95	Purchase Order	quote_stage	NULL	NULL
96	Closed Lost	quote_stage	NULL	NULL
98	Purchase Order	order_stage	NULL	1
99	Project Manager	order_stage	NULL	NULL
100	Assign Supplier	order_stage	NULL	NULL
101	PO Review	order_stage	NULL	2
102	PO On-Hold	order_stage	NULL	3
103	Work Order	order_stage	NULL	4
104	WO Adopted	order_stage	NULL	5
105	WO On-Hold	order_stage	NULL	6
106	Under Production	order_stage	NULL	7
107	Inspection	order_stage	NULL	8
108	Shipped	order_stage	NULL	10
109	Delivered	order_stage	NULL	11
110	Waiting for Shipping Bill	order_stage	NULL	12
111	Rejected	order_stage	NULL	13
112	Resolved	order_stage	NULL	14
113	Awaiting Supplier Confirmation	orders_status	NULL	NULL
114	In Production	orders_status	NULL	NULL
115	Shipped	orders_status	NULL	NULL
116	Delivered	orders_status	NULL	NULL
117	Project Closed	orders_status	NULL	NULL
118	Late	orders_status	NULL	NULL
119	Issue Resolution	orders_status	NULL	NULL
120	Waiting on Final Files from Customer	orders_status	NULL	NULL
121	Shipped from Supplier to PF	orders_status	NULL	NULL
122	Credit Card	order_payment_type	NULL	NULL
123	Purchase Order	order_payment_type	NULL	NULL
124	PO copy not available	po_audit	NULL	NULL
125	The PO amount does not match with MCloud	po_audit	NULL	NULL
126	Audit completed	po_audit	NULL	NULL
127	WO copy not available	wo_audit	NULL	NULL
128	The WO amount does not match with MCloud 	wo_audit	NULL	NULL
129	Audit completed	wo_audit	NULL	NULL
130	Not invoiced	invoicing_stage	NULL	NULL
131	Part invoiced	invoicing_stage	NULL	NULL
132	Waiting for the shipping bill	invoicing_stage	NULL	NULL
133	Complete invoiced	invoicing_stage	NULL	NULL
134	CNC Machining	process	NULL	NULL
135	Injection Molding	process	NULL	NULL
136	Cast Urethane	process	NULL	NULL
137	3D Printing	process	NULL	NULL
138	Sheet Metal	process	NULL	NULL
139	Other	process	NULL	NULL
140	Cold	rating	NULL	NULL
141	Warm	rating	NULL	NULL
142	Hot	rating	NULL	NULL
143	Call	subject	NULL	NULL
144	Send Quote	subject	NULL	NULL
145	Send Invoice	subject	NULL	NULL
146	Quote Follow up	subject	NULL	NULL
147	Old Project Follow up	subject	NULL	NULL
148	Prospect (warm)	subject	NULL	NULL
149	Prospect (cold)	subject	NULL	NULL
150	Lost Quote Check in	subject	NULL	NULL
151	Email	subject	NULL	NULL
152	Voicemail	subject	NULL	NULL
153	Other	subject	NULL	NULL
154	8:00 AM	reminder	NULL	NULL
155	8.30 AM	reminder	NULL	NULL
156	9:00 AM	reminder	NULL	NULL
157	9.30 AM 	reminder	NULL	NULL
158	10:00 AM	reminder	NULL	NULL
159	10.30 AM	reminder	NULL	NULL
160	11:00 AM	reminder	NULL	NULL
161	11.30 AM	reminder	NULL	NULL
162	12:00 AM	reminder	NULL	NULL
163	12.30 AM	reminder	NULL	NULL
164	8:00 PM	reminder	NULL	NULL
165	8.30 PM	reminder	NULL	NULL
166	9:00 PM	reminder	NULL	NULL
167	9.30 PM	reminder	NULL	NULL
168	10:00 PM	reminder	NULL	NULL
169	10.30 PM	reminder	NULL	NULL
170	11:00 PM	reminder	NULL	NULL
171	11.30 PM	reminder	NULL	NULL
172	12:00 PM	reminder	NULL	NULL
173	12.30 PM	reminder	NULL	NULL
174	Not Registered	customer_status	NULL	NULL
175	Registered	customer_status	NULL	NULL
176	Quoted	customer_status	NULL	NULL
177	Purchased	customer_status	NULL	NULL
178	Registration Link Sent	customer_status	NULL	NULL
179	My FEDEX	shipping_vendor	NULL	NULL
180	My UPS	shipping_vendor	NULL	NULL
181	Prepay using PrintForm Account	shipping_vendor	NULL	NULL
182	Direct	shipment_type	NULL	NULL
183	Indirect	shipment_type	NULL	NULL
184	First Overnight	shipping_method	NULL	NULL
185	Standard Overnight	shipping_method	NULL	NULL
186	Overnight Saver	shipping_method	NULL	NULL
187	2 Day	shipping_method	NULL	NULL
188	3 Day	shipping_method	NULL	NULL
189	Ground	shipping_method	NULL	NULL
190	Int'l Priority	shipping_method	NULL	NULL
191	Int'l Economy	shipping_method	NULL	NULL
192	Worldwide Express	shipping_method	NULL	NULL
193	Worldwide Expedited	shipping_method	NULL	NULL
194	Next Day Air Early AM	shipping_method	NULL	NULL
195	FedEx First Overnight	shipping_method_fedex	NULL	NULL
196	FedEx Priority Overnight	shipping_method_fedex	NULL	NULL
197	FedEx Standard Overnight	shipping_method_fedex	NULL	NULL
198	FedEx 2 Day AM	shipping_method_fedex	NULL	NULL
199	FedEx 2 Day	shipping_method_fedex	NULL	NULL
200	FedEx Express Saver	shipping_method_fedex	NULL	NULL
201	FedEx Ground	shipping_method_fedex	NULL	NULL
202	FedEx Worldwide Express	shipping_method_fedex	NULL	NULL
203	FedEx Worldwide Saver	shipping_method_fedex	NULL	NULL
204	UPS First Overnight	shipping_method_ups	NULL	NULL
205	UPS Priority Overnight	shipping_method_ups	NULL	NULL
206	UPS Standard Overnight	shipping_method_ups	NULL	NULL
207	UPS 2 Day AM	shipping_method_ups	NULL	NULL
208	UPS 2 Day	shipping_method_ups	NULL	NULL
209	UPS Express Saver	shipping_method_ups	NULL	NULL
210	UPS Ground	shipping_method_ups	NULL	NULL
211	UPS Worldwide Express	shipping_method_ups	NULL	NULL
212	UPS Worldwide Saver	shipping_method_ups	NULL	NULL
213	High	priority	NULL	NULL
214	Normal	priority	NULL	NULL
215	Low	priority	NULL	NULL
216	Meeting Scheduled	tasks_status	NULL	NULL
217	Not Started	tasks_status	NULL	NULL
218	In Progress	tasks_status	NULL	NULL
219	Completed	tasks_status	NULL	NULL
220	Waiting On Someone Else	tasks_status	NULL	NULL
221	Deferred	tasks_status	NULL	NULL
222	Scheduled	tasks_status	NULL	NULL
223	Account	related_to	NULL	NULL
224	Contact	related_to	NULL	NULL
225	Quote	related_to	NULL	NULL
226	Lead	related_to	NULL	NULL
227	Order	related_to	NULL	NULL
228	New	lead_status	A lead has just been added and has not yet been assigned	1
229	Assigned	lead_status	The lead has just been assigned to a team member	2
230	Adopted	lead_status	A team member has accepted and owned the new lead	3
231	Contacted	lead_status	Initial contact has been made with the lead	4
232	Contacted - Phone Unreachable	lead_status	Initial phone contact was attempted, but the phone number was unreachable	5
233	Contacted - Email Unreachable	lead_status	Initial email contact was attempted, but the email address was unreachable	6
234	Qualified	lead_status	The lead has been evaluated and meets the criteria to move forward	8
235	Information Sent	lead_status	Additional information requested by the lead has been sent	9
236	Follow-up	lead_status	Further actions or communications are needed to advance the lead	10
237	Demo Scheduled	lead_status	The lead has scheduled a product demonstration	11
238	Unqualified	lead_status	The lead does not meet the criteria to move forward	12
239	Inactive	lead_status	The lead is inactive but may be revisited	13
240	Reassigned	lead_status	The lead has been reassigned to another team member	14
241	Closed - Won	lead_status	The lead has converted into a registration	15
242	Closed - Lost	lead_status	The lead did not convert into a registration	16
243	Matt Wendel	supplier_approval	NULL	NULL
244	1	rate_quality_perception	NULL	NULL
245	2	rate_quality_perception	NULL	NULL
246	3	rate_quality_perception	NULL	NULL
247	4	rate_quality_perception	NULL	NULL
248	5	rate_quality_perception	NULL	NULL
249	6	rate_quality_perception	NULL	NULL
250	7	rate_quality_perception	NULL	NULL
251	8	rate_quality_perception	NULL	NULL
252	9	rate_quality_perception	NULL	NULL
253	10	rate_quality_perception	NULL	NULL
254	Yes	notify_pm	NULL	NULL
255	No	notify_pm	NULL	NULL
256	Yes	ready_to_ship	NULL	NULL
257	No	ready_to_ship	NULL	NULL
258	Yes	confirm_ship	NULL	NULL
259	No	confirm_ship	NULL	NULL
260	Yes	project_issue_addressed	NULL	NULL
261	No	project_issue_addressed	NULL	NULL
262	Yes	pm_questions_answered	NULL	NULL
263	No	pm_questions_answered	NULL	NULL
264	1	pm_experience	NULL	NULL
265	2	pm_experience	NULL	NULL
266	3	pm_experience	NULL	NULL
267	4	pm_experience	NULL	NULL
268	5	pm_experience	NULL	NULL
269	6	pm_experience	NULL	NULL
270	7	pm_experience	NULL	NULL
271	8	pm_experience	NULL	NULL
272	9	pm_experience	NULL	NULL
273	10	pm_experience	NULL	NULL
274	Yes	is_followed_wo_instructions	NULL	NULL
275	No	is_followed_wo_instructions	NULL	NULL
276	$0-$100	invoice_amount	NULL	NULL
277	$100-$500	invoice_amount	NULL	NULL
278	$500-$1000	invoice_amount	NULL	NULL
279	$1000-$5000	invoice_amount	NULL	NULL
280	$5000-$10000	invoice_amount	NULL	NULL
281	$10000-$50000	invoice_amount	NULL	NULL
282	$50000+	invoice_amount	NULL	NULL
283	5%-10%	gp	NULL	NULL
284	11%-15%	gp	NULL	NULL
285	15%-20%	gp	NULL	NULL
286	21%-25%	gp	NULL	NULL
287	25%-30%	gp	NULL	NULL
288	31%-35%	gp	NULL	NULL
289	35%-40%	gp	NULL	NULL
290	41%-45%	gp	NULL	NULL
291	45%-50%	gp	NULL	NULL
292	51%-55%	gp	NULL	NULL
293	55%-60%	gp	NULL	NULL
294	61%-65%	gp	NULL	NULL
295	65%-70%	gp	NULL	NULL
296	71%-75%	gp	NULL	NULL
297	75%-80%	gp	NULL	NULL
298	81%-85%	gp	NULL	NULL
299	85%-90%	gp	NULL	NULL
300	91%-95%	gp	NULL	NULL
301	95%-100%	gp	NULL	NULL
302	Active	contact_status	NULL	NULL
303	Inactive	contact_status	NULL	NULL
304	Domestic	supplier_type	NULL	NULL
305	International	supplier_type	NULL	NULL
306	Accepted	order_stage	NULL	15
307	Feedback	order_stage	NULL	16
308	Project Completed	order_stage	NULL	17
309	Injection Molding	advanced_process	NULL	NULL
310	CNC Machining	advanced_process	NULL	NULL
311	MJF	advanced_process	NULL	NULL
312	SLA	advanced_process	NULL	NULL
313	SLS	advanced_process	NULL	NULL
314	DLMS	advanced_process	NULL	NULL
315	FDM	advanced_process	NULL	NULL
316	Polyjet	advanced_process	NULL	NULL
317	Mike Fitts	Sales Manager	NULL	NULL
318	Joey Florez	Sales Manager	NULL	NULL
319	Niya Jain	Marketing	NULL	NULL
320	Research	lead_source	NULL	NULL
321	Review	status	NULL	NULL
324	Shipping Error	case_reason	NULL	NULL
325	Late Shipment	case_reason	NULL	NULL
326	Matt Wendel	_Sales Manager_	NULL	NULL
640	Communication Delay	case_reason	NULL	NULL
641	QC Delay	case_reason	NULL	NULL
642	Late Activation	case_reason	NULL	NULL
643	Shipping Error	case_reason	NULL	NULL
644	Notification Error	case_reason	NULL	NULL
645	Incorrect Parts Delivered	case_reason	NULL	NULL
646	Lost Shipment	case_reason	NULL	NULL
647	Other	case_reason	NULL	NULL
648	Parts out of Specification	case_reason	NULL	NULL
652	New	case_status	NULL	NULL
653	Under Review	case_status	NULL	NULL
654	Escalated	case_status	NULL	NULL
655	Resolved	case_status	NULL	NULL
656	Internal	case_origin	NULL	NULL
657	Customer	case_origin	NULL	NULL
658	Medium	case_priority	NULL	NULL
659	High	case_priority	NULL	NULL
660	Urgent	case_priority	NULL	NULL
661	Scott Doe	Sales Manager	NULL	NULL
662	Partial Shipment	order_stage	NULL	9
663	Low	case_priority	NULL	NULL
664	50% Down, Balance Net 30	payment_term	NULL	9
665	25% Down, Balance Net 30	payment_term	NULL	10
666	Paid In Advance	payment_term	NULL	11
667	Credit Card	payment_term	NULL	12
668	David Wysong	_Sales Manager	NULL	NULL
669	Compression Mold	advanced_process	NULL	NULL
670	Compression Molded Parts	advanced_process	NULL	NULL
671	Extrusion Tooling	advanced_process	NULL	NULL
672	Extruded Parts	advanced_process	NULL	NULL
673	Cast Urethane	advanced_process	NULL	NULL
674	Sheet Metal	advanced_process	NULL	NULL
675	Injection Molding Parts	advanced_process	NULL	NULL
676	Die-Casting	advanced_process	NULL	NULL
677	Cast Urethane Parts	advanced_process	NULL	NULL
678	Duplicate	quote_stage	NULL	NULL
679	Price - Budget constraints	reason	NULL	NULL
680	Price - Lost to competitor	reason	NULL	NULL
681	Price - Lost to direct offshore quote	reason	NULL	NULL
682	Budgetary - Customer quote	reason	NULL	NULL
683	Cancelled - By customer	reason	NULL	NULL
684	Cancelled - Made in house	reason	NULL	NULL
685	Non-responsive - After quote delivery	reason	NULL	NULL
686	Non-responsive - Unreachable	reason	NULL	NULL
687	Non-responsive - Bad customer info	reason	NULL	NULL
688	Insufficient data - No CAD	reason	NULL	NULL
689	Insufficient data - Wrong file format	reason	NULL	NULL
690	Insufficient data - Other	reason	NULL	NULL
691	Lead time - Lost to competitor	reason	NULL	NULL
692	Lead time - Not achievable	reason	NULL	NULL
693	No quote - Capability	reason	NULL	NULL
694	No quote - PF Business decision	reason	NULL	NULL
695	Unqualified - No funding	reason	NULL	NULL
696	Unqualified - Student	reason	NULL	NULL
697	Unqualified - System Test	reason	NULL	NULL
698	Duplicate	reason	NULL	NULL
699	Other	reason	NULL	NULL
700	Sean Farrell	Sales Manager	NULL	NULL
701	Jason Speck	Sales Manager	NULL	NULL
702	Amit J	Project Manager	NULL	NULL
703	Matt Wendel	bdm	Business Development Manager	1
704	Rob Schmidt	bdm	Business Development Manager	2
705	Monira Begum	Logistics Manager	Logistics Manager	1
706	Priyanka Chamnar	Logistics Manager	Logistics Manager	2
707	Phone - Email Unreachable	lead_status	Initial contact attempts via both phone and email were unsuccessful	7
708	Sojwal Ingle	Sales Manager	NULL	NULL
709	Doug Weaver	Sales Manager	NULL	NULL
710	Nicole Zhang	china_ae	NULL	NULL
711	Doug Weaver	Sales Manager	NULL	NULL
712	Michael Kern	Project Manager	NULL	NULL
713	Mayuri Agrawal	china_pm	NULL	NULL
714	Mayuri Agrawal	Sales Manager	NULL	NULL
715	Mayuri Agrawal	Project Manager	NULL	NULL
716	Desirae Morse	NULL	NULL	NULL
717	David Gutlay	Sales Manager	NULL	NULL
` // end DATA_TEXT

const parseTextToRows = text => {
  if (!text) return []
  const lines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0)
  if (lines.length < 2) return []
  const header = lines[0].split(/\t|,/).map(h => h.trim())
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(/\t|,/).map(c => c.trim())
    const obj = {}
    for (let j = 0; j < header.length; j++) {
      const key = header[j] || `col${j}`
      let val = cols[j] === undefined || cols[j] === '' ? null : cols[j]
      if (key === 'id' && val !== null) val = Number(val)
      if (key === 'sequence_no' && val !== null) {
        const n = Number(val)
        val = isNaN(n) ? null : n
      }
      // convert string "NULL" to null
      if (val === 'NULL') val = null
      obj[key] = val
    }
    if (!obj.id) obj.id = 100000 + i
    rows.push(obj)
  }
  return rows
}

const initialRowsFromText = parseTextToRows(DATA_TEXT)

const IconBtn = ({ title, color = 'primary', children, onClick }) => (
  <Tooltip title={title}>
    <IconButton
      onClick={onClick}
      size='small'
      sx={{
        bgcolor: theme => `${theme.palette[color].main}22`,
        color: theme => theme.palette[color].main,
        '&:hover': { bgcolor: theme => `${theme.palette[color].main}33` },
        borderRadius: 1,
        width: 36,
        height: 36
      }}
      aria-label={title}
    >
      {children}
    </IconButton>
  </Tooltip>
)

export default function UserLookupsCRUDPretty() {
  const [rows, setRows] = useState(initialRowsFromText)
  const [query, setQuery] = useState('')
  const [pageModel, setPageModel] = useState({ page: 0, pageSize: 10 })

  const [viewRow, setViewRow] = useState(null)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [editRow, setEditRow] = useState(null)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [deleteRow, setDeleteRow] = useState(null)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' })

  const filtered = useMemo(() => {
    if (!query) return rows
    const q = query.toLowerCase()
    return rows.filter(r => {
      return (
        String(r.id).includes(q) ||
        (r.name && r.name.toLowerCase().includes(q)) ||
        (r.type && r.type.toLowerCase().includes(q)) ||
        (r.description && r.description.toLowerCase().includes(q))
      )
    })
  }, [rows, query])

  const columns = [
    { field: 'id', headerName: 'ID', minWidth: 90, flex: 0.12 },
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 260,
      flex: 0.45,
      renderCell: params => <LinkStyled href='#'>{params.value}</LinkStyled>
    },
    { field: 'type', headerName: 'Type', minWidth: 180, flex: 0.25 },
    {
      field: 'description',
      headerName: 'Description',
      minWidth: 240,
      flex: 0.5,
      renderCell: params => <Typography variant='body2'>{params.value ?? '—'}</Typography>
    },
    { field: 'sequence_no', headerName: 'Sequence No', minWidth: 120, flex: 0.12 },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 160,
      flex: 0.18,
      sortable: false,
      renderCell: ({ row }) => {
        return (
          <Stack direction='row' spacing={1}>
            <IconBtn title='View' color='info' onClick={() => openView(row)}>
              <Icon icon='mdi:eye-outline' fontSize={16} />
            </IconBtn>
            <IconBtn title='Edit' color='warning' onClick={() => openEdit(row)}>
              <Icon icon='mdi:pencil-outline' fontSize={16} />
            </IconBtn>
            <IconBtn title='Delete' color='error' onClick={() => openDelete(row)}>
              <Icon icon='mdi:delete-outline' fontSize={16} />
            </IconBtn>
          </Stack>
        )
      }
    }
  ]

  function openView(row) {
    setViewRow(row)
    setIsViewOpen(true)
  }

  function openEdit(row) {
    if (row) {
      setEditRow({ ...row })
    } else {
      const nextId = (rows.reduce((m, r) => (r.id > m ? r.id : m), 0) || 0) + 1
      setEditRow({ id: nextId, name: '', type: '', description: '', sequence_no: null })
    }
    setIsEditOpen(true)
  }

  function openDelete(row) {
    setDeleteRow(row)
    setIsDeleteOpen(true)
  }

  function saveEdit() {
    if (!editRow || !editRow.name || editRow.name.trim() === '') {
      setSnack({ open: true, message: 'Name is required', severity: 'error' })
      return
    }
    setRows(prev => {
      const exists = prev.some(r => r.id === editRow.id)
      if (exists) return prev.map(r => (r.id === editRow.id ? { ...editRow } : r))
      return [...prev, { ...editRow }]
    })
    setIsEditOpen(false)
    setSnack({ open: true, message: 'Saved', severity: 'success' })
  }

  function confirmDelete() {
    if (!deleteRow) return
    setRows(prev => prev.filter(r => r.id !== deleteRow.id))
    setIsDeleteOpen(false)
    setSnack({ open: true, message: 'Deleted', severity: 'info' })
  }

  function changeEditField(field, value) {
    setEditRow(prev => ({ ...prev, [field]: value }))
  }

  const closeSnack = () => setSnack(prev => ({ ...prev, open: false }))

  return (
    <Card sx={{ borderRadius: 2, p: 4 }}>
      <CardHeader
        title='Dropdown Values'
        subheader='Manage lookup values used across the system'
        variant='body2'
        sx={{ '& .MuiCardHeader-title': { fontWeight: 500 } }}
      />
      <Divider />

      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant='body2' sx={{ mr: 1, color: 'text.secondary' }}>
            Search:
          </Typography>
          <TextField
            size='small'
            placeholder='ID, Name, Type, Description...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            sx={{ minWidth: 320 }}
          />
        </Box>

        <Box>
          <Button
            variant='contained'
            startIcon={<Icon icon='mdi:plus' />}
            onClick={() => openEdit(null)}
            sx={{ textTransform: 'none' }}
          >
            Add Dropdown
          </Button>
        </Box>
      </Box>

      <Divider />

      <Box sx={{ height: 640, width: '100%', p: 2 }}>
        <DataGrid
          rows={filtered}
          columns={columns}
          getRowId={row => row.id}
          autoHeight={false}
          disableSelectionOnClick
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={pageModel}
          onPaginationModelChange={setPageModel}
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              background: theme => (theme.palette.mode === 'light' ? '#f6f6f9' : 'rgba(255,255,255,0.03)'),
              borderRadius: 1
            },
            '& .MuiDataGrid-cell': {
              alignItems: 'center'
            }
          }}
        />
      </Box>

      {/* VIEW dialog */}
      <Dialog open={isViewOpen} onClose={() => setIsViewOpen(false)} fullWidth maxWidth='sm'>
        <DialogTitle>View Value</DialogTitle>
        <DialogContent dividers>
          {viewRow && (
            <Box sx={{ display: 'grid', gap: 1 }}>
              <Typography variant='subtitle2'>ID</Typography>
              <Typography variant='body2'>{viewRow.id}</Typography>

              <Typography variant='subtitle2' sx={{ mt: 1 }}>
                Name
              </Typography>
              <Typography variant='body2'>{viewRow.name}</Typography>

              <Typography variant='subtitle2' sx={{ mt: 1 }}>
                Type
              </Typography>
              <Typography variant='body2'>{viewRow.type}</Typography>

              <Typography variant='subtitle2' sx={{ mt: 1 }}>
                Description
              </Typography>
              <Typography variant='body2'>{viewRow.description ?? '—'}</Typography>

              <Typography variant='subtitle2' sx={{ mt: 1 }}>
                Sequence No
              </Typography>
              <Typography variant='body2'>{viewRow.sequence_no ?? '—'}</Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsViewOpen(false)} startIcon={<Icon icon='mdi:close' />}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* EDIT dialog */}
      <Dialog open={isEditOpen} onClose={() => setIsEditOpen(false)} fullWidth maxWidth='sm'>
        <DialogTitle>{editRow && rows.some(r => r.id === editRow.id) ? 'Edit Value' : 'Add Value'}</DialogTitle>
        <DialogContent dividers>
          {editRow && (
            <Box sx={{ display: 'grid', gap: 2, mt: 1 }}>
              <TextField label='ID' value={editRow.id} disabled />
              <TextField
                label='Name'
                value={editRow.name ?? ''}
                onChange={e => changeEditField('name', e.target.value)}
                required
              />
              <TextField
                label='Type'
                value={editRow.type ?? ''}
                onChange={e => changeEditField('type', e.target.value)}
                helperText='e.g. supplier, payment_term, lead_source, order_stage'
              />
              <TextField
                label='Description'
                value={editRow.description ?? ''}
                onChange={e => changeEditField('description', e.target.value)}
                multiline
                minRows={2}
              />
              <TextField
                label='Sequence No'
                type='number'
                value={editRow.sequence_no ?? ''}
                onChange={e => changeEditField('sequence_no', e.target.value === '' ? null : Number(e.target.value))}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsEditOpen(false)}>Cancel</Button>
          <Button variant='contained' startIcon={<Icon icon='mdi:content-save-outline' />} onClick={saveEdit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* DELETE confirm */}
      <Dialog open={isDeleteOpen} onClose={() => setIsDeleteOpen(false)}>
        <DialogTitle>Delete Value</DialogTitle>
        <DialogContent dividers>
          <Typography>
            Are you sure you want to delete <strong>{deleteRow?.name}</strong> (ID: {deleteRow?.id})?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteOpen(false)}>Cancel</Button>
          <Button color='error' variant='contained' onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={closeSnack}>
        <Alert onClose={closeSnack} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Card>
  )
}
