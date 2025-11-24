// import React from 'react'
// import Link from 'next/link'

// // MUI
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import Typography from '@mui/material/Typography'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox'
// import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'

// // Icon
// import Icon from 'src/@core/components/icon'

// // Dummy data for notifications per section
// const sections = [
//   {
//     key: 'quotes',
//     title: 'QUOTES',
//     icon: 'mdi:file-document-outline',
//     items: [
//       { id: 1, title: 'Quote #Q-1001', desc: 'New quote requested by Acme Corp', time: '2m ago', checked: false },
//       { id: 2, title: 'Quote #Q-0999', desc: 'Quote approved by John', time: '1d ago', checked: true }
//     ]
//   },
//   {
//     key: 'orders',
//     title: 'ORDERS',
//     icon: 'mdi:cart-outline',
//     items: [
//       { id: 3, title: 'Order #O-204', desc: 'Shipped - Courier AWB 12345', time: '3h ago', checked: false },
//       { id: 4, title: 'Order #O-200', desc: 'Payment failed - retry', time: '2d ago', checked: false }
//     ]
//   },
//   {
//     key: 'supplier',
//     title: 'SUPPLIER',
//     icon: 'mdi:truck-outline',
//     items: [
//       { id: 5, title: 'Supplier: RawMaterials Ltd', desc: 'New price list uploaded', time: '4h ago', checked: true },
//       { id: 6, title: 'Supplier: WoodWorks', desc: 'Delivery delayed', time: '6d ago', checked: false }
//     ]
//   },
//   {
//     key: 'task',
//     title: 'TASK',
//     icon: 'mdi:check-circle-outline',
//     items: [
//       { id: 7, title: 'Task: QC Inspection', desc: 'Assigned to Priya', time: '30m ago', checked: false },
//       { id: 8, title: 'Task: Update Price List', desc: 'Due tomorrow', time: '1d ago', checked: true }
//     ]
//   }
// ]

// const activities = [
//   { id: 1, title: 'Priya commented on Quote #Q-1001', time: 'Just now', avatar: '/images/avatars/1.png' },
//   { id: 2, title: 'John moved Order #O-204 to Shipped', time: '3h ago', avatar: '/images/avatars/2.png' },
//   { id: 3, title: 'New supplier registered: GreenSupply', time: 'Yesterday', avatar: '/images/avatars/3.png' }
// ]

// const NotificationsAndActivity = () => {
//   return (
//     <Grid container spacing={6}>
//       {/* Header Card */}
//       {/* <Grid item xs={12}>
//         <Card>
//           <CardHeader
//             title='Notifications and activity'
//             subheader='Manage how notifications appear and review recent items'
//           />
//           <CardContent>
//             <Typography sx={{ color: 'text.secondary' }}>
//               Toggle notifications per type and review recent activity on the right.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid> */}

//       {/* Left: Notification Sections */}
//       <Grid item xs={12}>
//         <Grid container spacing={4}>
//           {sections.map(section => (
//             <Grid item xs={12} key={section.key}>
//               <Card>
//                 <CardHeader
//                   avatar={<Icon icon={section.icon} />}
//                   title={section.title}
//                   action={
//                     <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                       Mark all read
//                     </Button>
//                   }
//                 />
//                 <Divider />
//                 <CardContent>
//                   <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
//                     <Table aria-label={`${section.title} table`}>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell sx={{ width: 60 }} />
//                           <TableCell>Title</TableCell>
//                           <TableCell>Description</TableCell>
//                           <TableCell sx={{ width: 120 }}>Time</TableCell>
//                           <TableCell sx={{ width: 140 }} align='right'>
//                             Action
//                           </TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {section.items.map(item => (
//                           <TableRow key={item.id} hover>
//                             <TableCell>
//                               <Checkbox defaultChecked={item.checked} />
//                             </TableCell>
//                             <TableCell>
//                               <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.desc}
//                               </Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.time}
//                               </Typography>
//                             </TableCell>
//                             <TableCell align='right'>
//                               <Button size='small' variant='outlined' sx={{ mr: 1, textTransform: 'none' }}>
//                                 Open
//                               </Button>
//                               <Button size='small' variant='contained' sx={{ textTransform: 'none' }}>
//                                 Dismiss
//                               </Button>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>

//       {/* Right: Activity feed */}
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Activity' subheader='Recent actions and comments' />
//           <Divider />
//           <CardContent>
//             <List>
//               {activities.map(a => (
//                 <React.Fragment key={a.id}>
//                   <ListItem alignItems='flex-start' sx={{ py: 2 }}>
//                     <Avatar alt='avatar' src={a.avatar} sx={{ mr: 2 }} />
//                     <ListItemText
//                       primary={<Typography sx={{ fontWeight: 500 }}>{a.title}</Typography>}
//                       secondary={
//                         <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//                           {a.time}
//                         </Typography>
//                       }
//                     />
//                     <Box sx={{ ml: 1 }}>
//                       <Button size='small' startIcon={<Icon icon='mdi:dots-vertical' />}>
//                         &nbsp;
//                       </Button>
//                     </Box>
//                   </ListItem>
//                   <Divider />
//                 </React.Fragment>
//               ))}
//             </List>

//             <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
//               <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                 View all activity
//               </Button>
//               <Button size='small' variant='contained' sx={{ textTransform: 'none' }}>
//                 Clear activity
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>

//         {/* Small quick settings card (optional) */}
//         <Card sx={{ mt: 4 }}>
//           <CardHeader title='Quick settings' />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//               <Box>
//                 <Typography sx={{ fontWeight: 500 }}>Mute all notifications</Typography>
//                 <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                   Except for calls and meetings
//                 </Typography>
//               </Box>
//               <Button size='small' variant='outlined'>
//                 Off
//               </Button>
//             </Box>
//             <Divider sx={{ my: 2 }} />
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <Button variant='outlined' size='small' sx={{ textTransform: 'none' }}>
//                 Notification settings
//               </Button>
//               <Button variant='contained' size='small' sx={{ textTransform: 'none' }}>
//                 Manage templates
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default NotificationsAndActivity

// --------------------------------------------------------------------------------------------------------

// import React, { useState, useMemo } from 'react'
// import Link from 'next/link'

// // MUI
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Typography from '@mui/material/Typography'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox'
// import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip'

// // Icon
// import Icon from 'src/@core/components/icon'

// // Dummy data for notifications per section
// const initialSections = [
//   {
//     key: 'quotes',
//     title: 'QUOTES',
//     icon: 'mdi:file-document-outline',
//     items: [
//       { id: 1, title: 'Quote Q-1001', desc: 'New quote requested by Acme Corp', time: '2m', checked: false },
//       { id: 2, title: 'Quote Q-0999', desc: 'Quote approved by John', time: '1d', checked: true }
//     ]
//   },
//   {
//     key: 'orders',
//     title: 'ORDERS',
//     icon: 'mdi:cart-outline',
//     items: [
//       { id: 3, title: 'Order O-204', desc: 'Shipped - AWB 12345', time: '3h', checked: false },
//       { id: 4, title: 'Order O-200', desc: 'Payment failed - retry', time: '2d', checked: false }
//     ]
//   },
//   {
//     key: 'supplier',
//     title: 'SUPPLIER',
//     icon: 'mdi:truck-outline',
//     items: [
//       { id: 5, title: 'RawMaterials Ltd', desc: 'New price list uploaded', time: '4h', checked: true },
//       { id: 6, title: 'WoodWorks', desc: 'Delivery delayed', time: '6d', checked: false }
//     ]
//   },
//   {
//     key: 'task',
//     title: 'TASKS',
//     icon: 'mdi:check-circle-outline',
//     items: [
//       { id: 7, title: 'QC Inspection', desc: 'Assigned to Priya', time: '30m', checked: false },
//       { id: 8, title: 'Update Price List', desc: 'Due tomorrow', time: '1d', checked: true }
//     ]
//   }
// ]

// const initialActivities = [
//   { id: 1, title: 'Priya commented on Quote Q-1001', time: 'Just now', avatar: '/images/avatars/1.png' },
//   { id: 2, title: 'John moved Order O-204 to Shipped', time: '3h ago', avatar: '/images/avatars/2.png' },
//   { id: 3, title: 'New supplier registered: GreenSupply', time: 'Yesterday', avatar: '/images/avatars/3.png' }
// ]

// const NotificationsAndActivity = () => {
//   // state: sections with items' checked status
//   const [sections, setSections] = useState(initialSections)
//   const [activities] = useState(initialActivities)

//   const totalUnread = useMemo(() => {
//     return sections.reduce((acc, s) => acc + s.items.filter(i => !i.checked).length, 0)
//   }, [sections])

//   const toggleItem = (sectionKey, itemId) => {
//     setSections(prev =>
//       prev.map(s =>
//         s.key === sectionKey
//           ? { ...s, items: s.items.map(i => (i.id === itemId ? { ...i, checked: !i.checked } : i)) }
//           : s
//       )
//     )
//   }

//   const markAllRead = sectionKey => {
//     setSections(prev =>
//       prev.map(s => (s.key === sectionKey ? { ...s, items: s.items.map(i => ({ ...i, checked: true })) } : s))
//     )
//   }

//   const resetAll = () => setSections(initialSections)

//   return (
//     <Grid container spacing={6}>
//       {/* Header */}
//       <Grid item xs={12}>
//         <Card sx={{ bgcolor: 'background.paper' }}>
//           <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Box>
//               <Typography variant='h6' sx={{ fontWeight: 600 }}>
//                 Notifications & Activity
//               </Typography>
//               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                 Manage notification types, mark items, and review recent activity
//               </Typography>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Chip label={`${totalUnread} Unread`} size='small' />
//               <Button size='small' variant='outlined' onClick={resetAll} sx={{ textTransform: 'none' }}>
//                 Reset
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Left: Notifications */}
//       <Grid item xs={12}>
//         <Grid container spacing={4}>
//           {sections.map(section => (
//             <Grid item xs={12} key={section.key}>
//               <Card sx={{ height: '100%' }}>
//                 <CardHeader
//                   avatar={<Icon icon={section.icon} />}
//                   title={<Typography sx={{ fontWeight: 600 }}>{section.title}</Typography>}
//                   action={
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                         Mark all read
//                       </Button>
//                     </Box>
//                   }
//                 />
//                 <Divider />
//                 <CardContent>
//                   <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
//                     <Table size='small' aria-label={`${section.title} table`}>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell sx={{ width: 60 }} />
//                           <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
//                           <TableCell sx={{ width: 90, fontWeight: 600 }}>Time</TableCell>
//                           <TableCell sx={{ width: 140 }} align='right' />
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {section.items.map(item => (
//                           <TableRow key={item.id} hover>
//                             <TableCell>
//                               <Checkbox checked={!!item.checked} onChange={() => toggleItem(section.key, item.id)} />
//                             </TableCell>
//                             <TableCell>
//                               <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.desc}
//                               </Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Chip label={item.time} size='small' variant='outlined' />
//                             </TableCell>
//                             <TableCell align='right'>
//                               <Box
//                                 sx={{
//                                   display: 'grid',
//                                   gridTemplateColumns: '1fr 1fr',
//                                   gap: 1,
//                                   justifyContent: 'flex-end'
//                                 }}
//                               >
//                                 <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                                   Open
//                                 </Button>
//                                 <Button size='small' variant='outlined' color='error' sx={{ textTransform: 'none' }}>
//                                   {/* size='small' variant='contained' sx={{ textTransform: 'none' }} */}
//                                   Dismiss
//                                 </Button>
//                               </Box>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
//                   <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//                     Showing {section.items.length} items
//                   </Typography>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>

//       {/* Right: Activity feed + quick settings */}
//       <Grid item xs={12}>
//         <Card sx={{ mb: 4 }}>
//           <CardHeader
//             title={<Typography sx={{ fontWeight: 600 }}>Activity</Typography>}
//             subheader='Recent actions & comments'
//           />
//           <Divider />
//           <CardContent>
//             <List>
//               {activities.map(a => (
//                 <React.Fragment key={a.id}>
//                   <ListItem alignItems='flex-start' sx={{ py: 1.5 }}>
//                     <Avatar alt='avatar' src={a.avatar} sx={{ mr: 2 }} />
//                     <ListItemText
//                       primary={<Typography sx={{ fontWeight: 600 }}>{a.title}</Typography>}
//                       secondary={
//                         <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//                           {a.time}
//                         </Typography>
//                       }
//                     />
//                     <Button
//                       size='small'
//                       variant='text'
//                       sx={{ textTransform: 'none' }}
//                       startIcon={<Icon icon='mdi:dots-vertical' />}
//                     />
//                   </ListItem>
//                   <Divider />
//                 </React.Fragment>
//               ))}
//             </List>

//             <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
//               <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                 View all
//               </Button>
//               <Button size='small' variant='outlined' color='error' sx={{ textTransform: 'none' }}>
//                 Clear
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader title={<Typography sx={{ fontWeight: 600 }}>Quick settings</Typography>} />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//               <Box>
//                 <Typography sx={{ fontWeight: 600 }}>Mute notifications</Typography>
//                 <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                   Except calls and meetings
//                 </Typography>
//               </Box>
//               <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                 Off
//               </Button>
//             </Box>

//             <Divider sx={{ my: 2 }} />

//             <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//               <Button variant='outlined' size='small' sx={{ textTransform: 'none' }}>
//                 Notification settings
//               </Button>
//               <Button variant='contained' size='small' sx={{ textTransform: 'none' }}>
//                 Manage templates
//               </Button>
//               <Button variant='text' size='small' sx={{ textTransform: 'none' }} component={Link} href='#'>
//                 Help
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default NotificationsAndActivity

// import React, { useState, useMemo } from 'react'
// import Link from 'next/link'

// // MUI
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Typography from '@mui/material/Typography'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox'
// import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip'

// // Icon
// import Icon from 'src/@core/components/icon'

// // Dummy data for notifications per section
// const initialSections = [
//   {
//     key: 'quotes',
//     title: 'QUOTES',
//     icon: 'mdi:file-document-outline',
//     items: [
//       { id: 1, title: 'Quote Q-1001', desc: 'New quote requested by Acme Corp', time: '2m', checked: false },
//       { id: 2, title: 'Quote Q-0999', desc: 'Quote approved by John', time: '1d', checked: true }
//     ]
//   },
//   {
//     key: 'orders',
//     title: 'ORDERS',
//     icon: 'mdi:cart-outline',
//     items: [
//       { id: 3, title: 'Order O-204', desc: 'Shipped - AWB 12345', time: '3h', checked: false },
//       { id: 4, title: 'Order O-200', desc: 'Payment failed - retry', time: '2d', checked: false }
//     ]
//   },
//   {
//     key: 'supplier',
//     title: 'SUPPLIER',
//     icon: 'mdi:truck-outline',
//     items: [
//       { id: 5, title: 'RawMaterials Ltd', desc: 'New price list uploaded', time: '4h', checked: true },
//       { id: 6, title: 'WoodWorks', desc: 'Delivery delayed', time: '6d', checked: false }
//     ]
//   },
//   {
//     key: 'task',
//     title: 'TASKS',
//     icon: 'mdi:check-circle-outline',
//     items: [
//       { id: 7, title: 'QC Inspection', desc: 'Assigned to Priya', time: '30m', checked: false },
//       { id: 8, title: 'Update Price List', desc: 'Due tomorrow', time: '1d', checked: true }
//     ]
//   }
// ]

// const initialActivities = [
//   { id: 1, title: 'Priya commented on Quote Q-1001', time: 'Just now', avatar: '/images/avatars/1.png' },
//   { id: 2, title: 'John moved Order O-204 to Shipped', time: '3h ago', avatar: '/images/avatars/2.png' },
//   { id: 3, title: 'New supplier registered: GreenSupply', time: 'Yesterday', avatar: '/images/avatars/3.png' }
// ]

// const NotificationsAndActivity = () => {
//   // state: sections with items' checked status
//   const [sections, setSections] = useState(initialSections)
//   const [activities] = useState(initialActivities)

//   const totalUnread = useMemo(() => {
//     return sections.reduce((acc, s) => acc + s.items.filter(i => !i.checked).length, 0)
//   }, [sections])

//   const toggleItem = (sectionKey, itemId) => {
//     setSections(prev =>
//       prev.map(s =>
//         s.key === sectionKey
//           ? { ...s, items: s.items.map(i => (i.id === itemId ? { ...i, checked: !i.checked } : i)) }
//           : s
//       )
//     )
//   }

//   const markAllRead = sectionKey => {
//     setSections(prev =>
//       prev.map(s => (s.key === sectionKey ? { ...s, items: s.items.map(i => ({ ...i, checked: true })) } : s))
//     )
//   }

//   const resetAll = () => setSections(initialSections)

//   return (
//     <Grid container spacing={6}>
//       {/* Header */}
//       <Grid item xs={12}>
//         <Card sx={{ bgcolor: 'background.paper' }}>
//           <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Box>
//               <Typography variant='h6' sx={{ fontWeight: 600 }}>
//                 Notifications & Activity
//               </Typography>
//               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                 Manage notification types, mark items, and review recent activity
//               </Typography>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Chip label={`${totalUnread} Unread`} size='small' />
//               <Button size='small' variant='outlined' onClick={resetAll} sx={{ textTransform: 'none' }}>
//                 Reset
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Left: Notifications */}
//       <Grid item xs={12} md={7}>
//         <Grid container spacing={4}>
//           {sections.map(section => (
//             <Grid item xs={12} key={section.key}>
//               <Card sx={{ height: '100%' }}>
//                 <CardHeader
//                   avatar={<Icon icon={section.icon} />}
//                   title={<Typography sx={{ fontWeight: 600 }}>{section.title}</Typography>}
//                   action={
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <Button
//                         size='small'
//                         variant='text'
//                         onClick={() => markAllRead(section.key)}
//                         sx={{ textTransform: 'none' }}
//                       >
//                         Mark all read
//                       </Button>
//                     </Box>
//                   }
//                 />
//                 <Divider />
//                 <CardContent>
//                   <TableContainer component={Paper} elevation={0} sx={{ bgcolor: 'transparent' }}>
//                     <Table size='small' aria-label={`${section.title} table`}>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell sx={{ width: 60 }} />
//                           <TableCell sx={{ fontWeight: 600 }}>Title</TableCell>
//                           <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
//                           <TableCell sx={{ width: 110, fontWeight: 600 }}>Date</TableCell>
//                           <TableCell sx={{ width: 90, fontWeight: 600 }}>Time</TableCell>
//                           <TableCell sx={{ width: 140 }} align='right' />
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {section.items.map(item => (
//                           <TableRow key={item.id} hover>
//                             <TableCell>
//                               <Checkbox checked={!!item.checked} onChange={() => toggleItem(section.key, item.id)} />
//                             </TableCell>
//                             <TableCell>
//                               <Typography sx={{ fontWeight: 500 }}>{item.title}</Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.desc}
//                               </Typography>
//                             </TableCell>
//                             <TableCell>
//                               <Chip label={item.time} size='small' variant='outlined' />
//                             </TableCell>
//                             <TableCell align='right'>
//                               <Box
//                                 sx={{
//                                   display: 'grid',
//                                   gridTemplateColumns: '1fr 1fr',
//                                   gap: 1,
//                                   justifyContent: 'flex-end'
//                                 }}
//                               >
//                                 <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                                   Open
//                                 </Button>
//                                 <Button size='small' variant='contained' color='error' sx={{ textTransform: 'none' }}>
//                                   Dismiss
//                                 </Button>
//                               </Box>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </CardContent>
//                 <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
//                   <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//                     Showing {section.items.length} items
//                   </Typography>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>

//       {/* Right: Activity feed + quick settings */}
//       <Grid item xs={12} md={5}>
//         <Card sx={{ mb: 4 }}>
//           <CardHeader
//             title={<Typography sx={{ fontWeight: 600 }}>Activity</Typography>}
//             subheader='Recent actions & comments'
//           />
//           <Divider />
//           <CardContent>
//             <List>
//               {activities.map(a => (
//                 <React.Fragment key={a.id}>
//                   <ListItem alignItems='flex-start' sx={{ py: 1.5 }}>
//                     <Avatar alt='avatar' src={a.avatar} sx={{ mr: 2 }} />
//                     <ListItemText
//                       primary={<Typography sx={{ fontWeight: 600 }}>{a.title}</Typography>}
//                       secondary={
//                         <Typography variant='caption' sx={{ color: 'text.secondary' }}>
//                           {a.time}
//                         </Typography>
//                       }
//                     />
//                     <Button
//                       size='small'
//                       variant='text'
//                       sx={{ textTransform: 'none' }}
//                       startIcon={<Icon icon='mdi:dots-vertical' />}
//                     />
//                   </ListItem>
//                   <Divider />
//                 </React.Fragment>
//               ))}
//             </List>

//             <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
//               <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                 View all
//               </Button>
//               <Button size='small' variant='contained' color='error' sx={{ textTransform: 'none' }}>
//                 Clear
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader title={<Typography sx={{ fontWeight: 600 }}>Quick settings</Typography>} />
//           <Divider />
//           <CardContent>
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
//               <Box>
//                 <Typography sx={{ fontWeight: 600 }}>Mute notifications</Typography>
//                 <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                   Except calls and meetings
//                 </Typography>
//               </Box>
//               <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                 Off
//               </Button>
//             </Box>

//             <Divider sx={{ my: 2 }} />

//             <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//               <Button variant='outlined' size='small' sx={{ textTransform: 'none' }}>
//                 Notification settings
//               </Button>
//               <Button variant='contained' size='small' sx={{ textTransform: 'none' }}>
//                 Manage templates
//               </Button>
//               <Button variant='text' size='small' sx={{ textTransform: 'none' }} component={Link} href='#'>
//                 Help
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default NotificationsAndActivity

// -------------------------------------------------------------------------------------------------

// import React, { useState, useMemo } from 'react'
// import Link from 'next/link'

// // MUI
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Typography from '@mui/material/Typography'
// import Table from '@mui/material/Table'
// import TableBody from '@mui/material/TableBody'
// import TableCell from '@mui/material/TableCell'
// import TableContainer from '@mui/material/TableContainer'
// import TableHead from '@mui/material/TableHead'
// import TableRow from '@mui/material/TableRow'
// import Paper from '@mui/material/Paper'
// import Checkbox from '@mui/material/Checkbox'
// import Divider from '@mui/material/Divider'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import Chip from '@mui/material/Chip'

// // Icon
// import Icon from 'src/@core/components/icon'

// // 🔹 Values you provided (make sure THIS is the one in your file)
// const initialSections = [
//   {
//     key: 'quotes',
//     title: 'QUOTES',
//     icon: 'mdi:file-document-outline',
//     items: [
//       {
//         id: 1,
//         title: 'Quote Q-1001',
//         desc: 'New quote requested by Acme Corp',
//         date: '17 Nov, 2025',
//         time: '09:27 PM',
//         checked: false
//       },
//       {
//         id: 2,
//         title: 'Quote Q-0999',
//         desc: 'Quote approved by John',
//         date: '16 Nov, 2025',
//         time: '10:15 AM',
//         checked: true
//       }
//     ]
//   },
//   {
//     key: 'orders',
//     title: 'ORDERS',
//     icon: 'mdi:cart-outline',
//     items: [
//       {
//         id: 3,
//         title: 'Order O-204',
//         desc: 'Shipped - AWB 12345',
//         date: '15 Nov, 2025',
//         time: '03:40 PM',
//         checked: false
//       },
//       {
//         id: 4,
//         title: 'Order O-200',
//         desc: 'Payment failed - retry',
//         date: '15 Nov, 2025',
//         time: '11:05 AM',
//         checked: false
//       }
//     ]
//   },
//   {
//     key: 'supplier',
//     title: 'SUPPLIER',
//     icon: 'mdi:truck-outline',
//     items: [
//       {
//         id: 5,
//         title: 'RawMaterials Ltd',
//         desc: 'New price list uploaded',
//         date: '14 Nov, 2025',
//         time: '04:00 PM',
//         checked: true
//       },
//       {
//         id: 6,
//         title: 'WoodWorks',
//         desc: 'Delivery delayed',
//         date: '13 Nov, 2025',
//         time: '09:20 AM',
//         checked: false
//       }
//     ]
//   },
//   {
//     key: 'task',
//     title: 'TASKS',
//     icon: 'mdi:check-circle-outline',
//     items: [
//       {
//         id: 7,
//         title: 'QC Inspection',
//         desc: 'Assigned to Priya',
//         date: '17 Nov, 2025',
//         time: '10:00 AM',
//         checked: false
//       },
//       {
//         id: 8,
//         title: 'Update Price List',
//         desc: 'Due tomorrow',
//         date: '18 Nov, 2025',
//         time: '05:30 PM',
//         checked: true
//       }
//     ]
//   }
// ]

// // you’re not using activities in this version, so I removed them

// const NotificationsAndActivity = () => {
//   const [sections, setSections] = useState(initialSections)

//   const totalUnread = useMemo(
//     () => sections.reduce((acc, s) => acc + s.items.filter(i => !i.checked).length, 0),
//     [sections]
//   )

//   const toggleItem = (sectionKey, itemId) => {
//     setSections(prev =>
//       prev.map(s =>
//         s.key === sectionKey
//           ? { ...s, items: s.items.map(i => (i.id === itemId ? { ...i, checked: !i.checked } : i)) }
//           : s
//       )
//     )
//   }

//   const markAllRead = sectionKey => {
//     setSections(prev =>
//       prev.map(s => (s.key === sectionKey ? { ...s, items: s.items.map(i => ({ ...i, checked: true })) } : s))
//     )
//   }

//   const resetAll = () => setSections(initialSections)

//   return (
//     <Grid container spacing={6}>
//       {/* Header */}
//       <Grid item xs={12}>
//         <Card sx={{ bgcolor: 'background.paper' }}>
//           <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <Box>
//               <Typography variant='h6' sx={{ fontWeight: 600 }}>
//                 Notifications & Activity
//               </Typography>
//               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                 Manage notification types, mark items, and review recent activity
//               </Typography>
//             </Box>

//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Chip label={`${totalUnread} Unread`} size='small' />
//               <Button size='small' variant='outlined' onClick={resetAll} sx={{ textTransform: 'none' }}>
//                 Reset
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Notifications */}
//       <Grid item xs={12}>
//         <Grid container spacing={4}>
//           {sections.map(section => (
//             <Grid item xs={12} key={section.key}>
//               <Card>
//                 <CardHeader
//                   avatar={<Icon icon={section.icon} />}
//                   title={<Typography sx={{ fontWeight: 600 }}>{section.title}</Typography>}
//                   action={
//                     <Button
//                       size='small'
//                       variant='outlined'
//                       onClick={() => markAllRead(section.key)}
//                       sx={{ textTransform: 'none' }}
//                     >
//                       Mark all read
//                     </Button>
//                   }
//                 />
//                 <Divider />
//                 <CardContent>
//                   <TableContainer component={Paper} elevation={0}>
//                     <Table size='small'>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell align='left' />
//                           <TableCell align='left' sx={{ fontWeight: 600 }}>
//                             Title
//                           </TableCell>
//                           <TableCell align='left' sx={{ fontWeight: 600 }}>
//                             Description
//                           </TableCell>
//                           <TableCell align='left' sx={{ fontWeight: 600 }}>
//                             Date
//                           </TableCell>
//                           <TableCell align='left' sx={{ fontWeight: 600 }}>
//                             Time
//                           </TableCell>
//                           <TableCell align='left' sx={{ fontWeight: 600 }}>
//                             Action
//                           </TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {section.items.map(item => (
//                           <TableRow key={item.id} hover>
//                             <TableCell>
//                               <Checkbox checked={item.checked} onChange={() => toggleItem(section.key, item.id)} />
//                             </TableCell>
//                             <TableCell sx={{ fontWeight: 500 }}>{item.title}</TableCell>
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.desc}
//                               </Typography>
//                             </TableCell>
//                             {/* DATE */}
//                             <TableCell>
//                               <Typography variant='body2' sx={{ color: 'text.secondary' }}>
//                                 {item.date || '-'}
//                               </Typography>
//                             </TableCell>
//                             {/* TIME */}
//                             <TableCell>
//                               <Chip label={item.time || '-'} size='small' variant='outlined' />
//                             </TableCell>
//                             {/* ACTION */}
//                             <TableCell align='center'>
//                               <Box
//                                 sx={{
//                                   display: 'inline-grid',
//                                   gridTemplateColumns: 'auto auto',
//                                   gap: 1
//                                 }}
//                               >
//                                 <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
//                                   Open
//                                 </Button>
//                                 <Button size='small' variant='outlined' color='error' sx={{ textTransform: 'none' }}>
//                                   Dismiss
//                                 </Button>
//                               </Box>
//                             </TableCell>
//                           </TableRow>
//                         ))}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default NotificationsAndActivity

// ---------------------------------------------------------------------------------------

import React, { useState, useMemo } from 'react'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'

// Icon
import Icon from 'src/@core/components/icon'

// 🔹 Notifications data
const initialSections = [
  {
    key: 'quotes',
    title: 'QUOTES',
    icon: 'mdi:file-document-outline',
    items: [
      {
        id: 1,
        title: 'Quote Q-1001',
        desc: 'New quote requested by Acme Corp',
        date: '17 Nov, 2025',
        time: '09:27 PM',
        checked: false
      },
      {
        id: 2,
        title: 'Quote Q-0999',
        desc: 'Quote approved by John',
        date: '16 Nov, 2025',
        time: '10:15 AM',
        checked: true
      }
    ]
  },
  {
    key: 'orders',
    title: 'ORDERS',
    icon: 'mdi:cart-outline',
    items: [
      {
        id: 3,
        title: 'Order O-204',
        desc: 'Shipped - AWB 12345',
        date: '15 Nov, 2025',
        time: '03:40 PM',
        checked: false
      },
      {
        id: 4,
        title: 'Order O-200',
        desc: 'Payment failed - retry',
        date: '15 Nov, 2025',
        time: '11:05 AM',
        checked: false
      }
    ]
  },
  {
    key: 'supplier',
    title: 'SUPPLIER',
    icon: 'mdi:truck-outline',
    items: [
      {
        id: 5,
        title: 'RawMaterials Ltd',
        desc: 'New price list uploaded',
        date: '14 Nov, 2025',
        time: '04:00 PM',
        checked: true
      },
      {
        id: 6,
        title: 'WoodWorks',
        desc: 'Delivery delayed',
        date: '13 Nov, 2025',
        time: '09:20 AM',
        checked: false
      }
    ]
  },
  {
    key: 'task',
    title: 'TASKS',
    icon: 'mdi:check-circle-outline',
    items: [
      {
        id: 7,
        title: 'QC Inspection',
        desc: 'Assigned to Priya',
        date: '17 Nov, 2025',
        time: '10:00 AM',
        checked: false
      },
      {
        id: 8,
        title: 'Update Price List',
        desc: 'Due tomorrow',
        date: '18 Nov, 2025',
        time: '05:30 PM',
        checked: true
      }
    ]
  }
]

// 🔹 Activity list data
const activities = [
  { id: 1, title: 'Priya commented on Quote Q-1001', time: 'Just now', avatar: '/images/avatars/1.png' },
  { id: 2, title: 'John moved Order O-204 to Shipped', time: '3h ago', avatar: '/images/avatars/2.png' },
  { id: 3, title: 'New supplier registered: GreenSupply', time: 'Yesterday', avatar: '/images/avatars/3.png' }
]

const NotificationsAndActivity = () => {
  const [sections, setSections] = useState(initialSections)

  const totalUnread = useMemo(
    () => sections.reduce((acc, s) => acc + s.items.filter(i => !i.checked).length, 0),
    [sections]
  )

  const toggleItem = (sectionKey, itemId) => {
    setSections(prev =>
      prev.map(s =>
        s.key === sectionKey
          ? { ...s, items: s.items.map(i => (i.id === itemId ? { ...i, checked: !i.checked } : i)) }
          : s
      )
    )
  }

  const markAllRead = sectionKey => {
    setSections(prev =>
      prev.map(s => (s.key === sectionKey ? { ...s, items: s.items.map(i => ({ ...i, checked: true })) } : s))
    )
  }

  const resetAll = () => setSections(initialSections)

  return (
    <Grid container spacing={6}>
      {/* Header */}
      <Grid item xs={12}>
        <Card sx={{ bgcolor: 'background.paper' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: 600 }}>
                Notifications & Activity
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                Manage notification types, mark items, and review recent activity
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Chip label={`${totalUnread} Unread`} size='small' />
              <Button size='small' variant='outlined' onClick={resetAll} sx={{ textTransform: 'none' }}>
                Reset
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Notifications */}
      <Grid item xs={12}>
        <Grid container spacing={4}>
          {sections.map(section => (
            <Grid item xs={12} key={section.key}>
              <Card>
                <CardHeader
                  avatar={<Icon icon={section.icon} />}
                  title={<Typography sx={{ fontWeight: 600 }}>{section.title}</Typography>}
                  action={
                    <Button
                      size='small'
                      variant='outlined'
                      color='warning'
                      onClick={() => markAllRead(section.key)}
                      sx={{ textTransform: 'none' }}
                    >
                      Mark all read
                    </Button>
                  }
                />
                <Divider />
                <CardContent>
                  <TableContainer component={Paper} elevation={0}>
                    <Table size='small'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left' />
                          <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Title
                          </TableCell>
                          <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Description
                          </TableCell>
                          <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Date
                          </TableCell>
                          <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Time
                          </TableCell>
                          <TableCell align='left' sx={{ fontWeight: 600 }}>
                            Action
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {section.items.map(item => (
                          <TableRow key={item.id} hover>
                            <TableCell>
                              <Checkbox checked={item.checked} onChange={() => toggleItem(section.key, item.id)} />
                            </TableCell>
                            <TableCell sx={{ fontWeight: 500 }}>{item.title}</TableCell>
                            <TableCell>
                              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                {item.desc}
                              </Typography>
                            </TableCell>
                            {/* DATE */}
                            <TableCell>
                              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                                {item.date || '-'}
                              </Typography>
                            </TableCell>
                            {/* TIME */}
                            <TableCell>
                              <Chip label={item.time || '-'} size='small' variant='outlined' />
                            </TableCell>
                            {/* ACTION */}
                            <TableCell align='center'>
                              <Box
                                sx={{
                                  display: 'inline-grid',
                                  gridTemplateColumns: 'auto auto',
                                  gap: 1
                                }}
                              >
                                <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
                                  Open
                                </Button>
                                <Button size='small' variant='outlined' color='error' sx={{ textTransform: 'none' }}>
                                  Dismiss
                                </Button>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Activity + Quick settings cards */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Activity' subheader='Recent actions and comments' />
          <Divider />
          <CardContent>
            <List>
              {activities.map(a => (
                <React.Fragment key={a.id}>
                  <ListItem alignItems='flex-start' sx={{ py: 2 }}>
                    <Avatar alt='avatar' src={a.avatar} sx={{ mr: 2 }} />
                    <ListItemText
                      primary={<Typography sx={{ fontWeight: 500 }}>{a.title}</Typography>}
                      secondary={
                        <Typography variant='caption' sx={{ color: 'text.secondary' }}>
                          {a.time}
                        </Typography>
                      }
                    />
                    <Box sx={{ ml: 1 }}>
                      <Button size='small' startIcon={<Icon icon='mdi:dots-vertical' />}>
                        &nbsp;
                      </Button>
                    </Box>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>

            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button size='small' variant='outlined' sx={{ textTransform: 'none' }}>
                View all activity
              </Button>
              <Button size='small' variant='outlined' color='error' sx={{ textTransform: 'none' }}>
                Clear activity
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Small quick settings card */}
        <Card sx={{ mt: 4 }}>
          <CardHeader title='Quick settings' />
          <Divider />
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
              <Box>
                <Typography sx={{ fontWeight: 500 }}>Mute all notifications</Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Except for calls and meetings
                </Typography>
              </Box>
              <Button size='small' variant='outlined'>
                Off
              </Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant='outlined' size='small' sx={{ textTransform: 'none' }}>
                Notification settings
              </Button>
              <Button variant='contained' size='small' sx={{ textTransform: 'none' }}>
                Manage templates
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default NotificationsAndActivity
