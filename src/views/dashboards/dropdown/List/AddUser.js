// // ** React Imports
// import { useState } from 'react'

// // ** MUI Imports
// import Drawer from '@mui/material/Drawer'
// import Select from '@mui/material/Select'
// import Button from '@mui/material/Button'
// import MenuItem from '@mui/material/MenuItem'
// import { styled } from '@mui/material/styles'
// import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
// import InputLabel from '@mui/material/InputLabel'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import FormControl from '@mui/material/FormControl'
// import FormHelperText from '@mui/material/FormHelperText'

// // ** Third Party Imports
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm, Controller } from 'react-hook-form'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// // ** Actions Imports
// import { addUser } from 'src/store/apps/user'

// const showErrors = (field, valueLen, min) => {
//   if (valueLen === 0) {
//     return `${field} field is required`
//   } else if (valueLen > 0 && valueLen < min) {
//     return `${field} must be at least ${min} characters`
//   } else {
//     return ''
//   }
// }

// const Header = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(3, 4),
//   justifyContent: 'space-between',
//   backgroundColor: theme.palette.background.default
// }))

// const schema = yup.object().shape({
//   company: yup.string().required(),
//   country: yup.string().required(),
//   email: yup.string().email().required(),
//   contact: yup
//     .number()
//     .typeError('Contact Number field is required')
//     .min(10, obj => showErrors('Contact Number', obj.value.length, obj.min))
//     .required(),
//   fullName: yup
//     .string()
//     .min(3, obj => showErrors('First Name', obj.value.length, obj.min))
//     .required(),
//   username: yup
//     .string()
//     .min(3, obj => showErrors('Username', obj.value.length, obj.min))
//     .required()
// })

// const defaultValues = {
//   email: '',
//   company: '',
//   country: '',
//   fullName: '',
//   username: '',
//   contact: Number('')
// }

// const SidebarAddUser = props => {
//   // ** Props
//   const { open, toggle } = props

//   // ** State
//   const [plan, setPlan] = useState('basic')
//   const [role, setRole] = useState('subscriber')

//   // ** Hooks
//   const dispatch = useDispatch()
//   const store = useSelector(state => state.user)

//   const {
//     reset,
//     control,
//     setValue,
//     setError,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     defaultValues,
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = data => {
//     if (store.allData.some(u => u.email === data.email || u.username === data.username)) {
//       store.allData.forEach(u => {
//         if (u.email === data.email) {
//           setError('email', {
//             message: 'Email already exists!'
//           })
//         }
//         if (u.username === data.username) {
//           setError('username', {
//             message: 'Username already exists!'
//           })
//         }
//       })
//     } else {
//       dispatch(addUser({ ...data, role, currentPlan: plan }))
//       toggle()
//       reset()
//     }
//   }

//   const handleClose = () => {
//     setPlan('basic')
//     setRole('subscriber')
//     setValue('contact', Number(''))
//     toggle()
//     reset()
//   }

//   return (
//     <Drawer
//       open={open}
//       anchor='right'
//       variant='temporary'
//       onClose={handleClose}
//       ModalProps={{ keepMounted: true }}
//       sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
//     >
//       <Header>
//         <Typography variant='h6'>Add User</Typography>
//         <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
//           <Icon icon='mdi:close' fontSize={20} />
//         </IconButton>
//       </Header>
//       <Box sx={{ p: 5 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='fullName'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   value={value}
//                   label='Full Name'
//                   onChange={onChange}
//                   placeholder='John Doe'
//                   error={Boolean(errors.fullName)}
//                 />
//               )}
//             />
//             {errors.fullName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fullName.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='username'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   value={value}
//                   label='Username'
//                   onChange={onChange}
//                   placeholder='johndoe'
//                   error={Boolean(errors.username)}
//                 />
//               )}
//             />
//             {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='email'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   type='email'
//                   value={value}
//                   label='Email'
//                   onChange={onChange}
//                   placeholder='johndoe@email.com'
//                   error={Boolean(errors.email)}
//                 />
//               )}
//             />
//             {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='company'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   value={value}
//                   label='Company'
//                   onChange={onChange}
//                   placeholder='Company PVT LTD'
//                   error={Boolean(errors.company)}
//                 />
//               )}
//             />
//             {errors.company && <FormHelperText sx={{ color: 'error.main' }}>{errors.company.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='country'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   value={value}
//                   label='Country'
//                   onChange={onChange}
//                   placeholder='Australia'
//                   error={Boolean(errors.country)}
//                 />
//               )}
//             />
//             {errors.country && <FormHelperText sx={{ color: 'error.main' }}>{errors.country.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <Controller
//               name='contact'
//               control={control}
//               rules={{ required: true }}
//               render={({ field: { value, onChange } }) => (
//                 <TextField
//                   type='number'
//                   value={value}
//                   label='Contact'
//                   onChange={onChange}
//                   placeholder='(397) 294-5153'
//                   error={Boolean(errors.contact)}
//                 />
//               )}
//             />
//             {errors.contact && <FormHelperText sx={{ color: 'error.main' }}>{errors.contact.message}</FormHelperText>}
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <InputLabel id='role-select'>Select Role</InputLabel>
//             <Select
//               fullWidth
//               value={role}
//               id='select-role'
//               label='Select Role'
//               labelId='role-select'
//               onChange={e => setRole(e.target.value)}
//               inputProps={{ placeholder: 'Select Role' }}
//             >
//               <MenuItem value='admin'>Admin</MenuItem>
//               <MenuItem value='author'>Author</MenuItem>
//               <MenuItem value='editor'>Editor</MenuItem>
//               <MenuItem value='maintainer'>Maintainer</MenuItem>
//               <MenuItem value='subscriber'>Subscriber</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl fullWidth sx={{ mb: 6 }}>
//             <InputLabel id='plan-select'>Select Plan</InputLabel>
//             <Select
//               fullWidth
//               value={plan}
//               id='select-plan'
//               label='Select Plan'
//               labelId='plan-select'
//               onChange={e => setPlan(e.target.value)}
//               inputProps={{ placeholder: 'Select Plan' }}
//             >
//               <MenuItem value='basic'>Basic</MenuItem>
//               <MenuItem value='company'>Company</MenuItem>
//               <MenuItem value='enterprise'>Enterprise</MenuItem>
//               <MenuItem value='team'>Team</MenuItem>
//             </Select>
//           </FormControl>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
//               Submit
//             </Button>
//             <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Drawer>
//   )
// }

// export default SidebarAddUser



// // src/views/dashboards/staff/List/AddUser.js
// // ** React Imports
// import { useState } from 'react'

// // ** MUI Imports
// import Drawer from '@mui/material/Drawer'
// import Select from '@mui/material/Select'
// import Button from '@mui/material/Button'
// import MenuItem from '@mui/material/MenuItem'
// import { styled } from '@mui/material/styles'
// import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
// import InputLabel from '@mui/material/InputLabel'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import FormControl from '@mui/material/FormControl'
// import FormHelperText from '@mui/material/FormHelperText'
// import Grid from '@mui/material/Grid'

// // ** Third Party Imports
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useForm, Controller } from 'react-hook-form'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Store Imports
// import { useDispatch, useSelector } from 'react-redux'

// // ** Actions Imports
// import { addUser } from 'src/store/apps/user'

// const Header = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(3, 4),
//   justifyContent: 'space-between',
//   backgroundColor: theme.palette.background.default
// }))

// // small helper for contact validation message like your previous showErrors
// const showErrors = (field, valueLen, min) => {
//   if (valueLen === 0) return `${field} field is required`
//   if (valueLen > 0 && valueLen < min) return `${field} must be at least ${min} characters`
//   return ''
// }

// // Validation schema
// const schema = yup.object().shape({
//   fullName: yup.string().min(3, obj => showErrors('Full Name', obj.value.length, obj.min)).required(),
//   username: yup.string().min(3, obj => showErrors('Username', obj.value.length, obj.min)).required(),
//   email: yup.string().email().required(),
//   status: yup.string().oneOf(['active', 'inactive', 'pending']).required(),
//   role: yup.string().required(),
//   taxId: yup.string().nullable(),
//   contact: yup
//     .string()
//     .matches(/^[0-9\-+() ]*$/, 'Invalid contact number')
//     .min(7, obj => showErrors('Contact', obj.value.length, obj.min))
//     .required(),
//   language: yup.string().nullable(),
//   city: yup.string().nullable(),
//   state: yup.string().nullable(),
//   country: yup.string().nullable(),
//   zip: yup.string().nullable(),
//   joiningDate: yup.date().nullable(),
//   company: yup.string().nullable()
// })

// const defaultValues = {
//   fullName: '',
//   username: '',
//   email: '',
//   status: 'active',
//   role: 'subscriber',
//   taxId: '',
//   contact: '',
//   language: '',
//   city: '',
//   state: '',
//   country: '',
//   zip: '',
//   joiningDate: '',
//   company: ''
// }

// const SidebarAddUser = props => {
//   const { open, toggle } = props

//   // local state for selects
//   const [plan, setPlan] = useState('basic')
//   // role default moved to form's controlled field; keep local for Select fallback
//   // const [role, setRole] = useState('subscriber')

//   const dispatch = useDispatch()
//   const store = useSelector(state => state.user)

//   const {
//     reset,
//     control,
//     setValue,
//     setError,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     defaultValues,
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   const onSubmit = data => {
//     // duplicate checks as before (using store.allData if available)
//     if (store?.allData?.some(u => u.email === data.email || u.username === data.username)) {
//       store.allData.forEach(u => {
//         if (u.email === data.email) {
//           setError('email', { message: 'Email already exists!' })
//         }
//         if (u.username === data.username) {
//           setError('username', { message: 'Username already exists!' })
//         }
//       })
//       return
//     }

//     // normalise joiningDate to ISO or leave as string — reducer/backend expects format
//     const payload = {
//       ...data,
//       currentPlan: plan
//     }

//     dispatch(addUser(payload))
//     toggle()
//     reset()
//   }

//   const handleClose = () => {
//     setPlan('basic')
//     // reset form fields
//     Object.keys(defaultValues).forEach(k => setValue(k, defaultValues[k]))
//     toggle()
//     reset()
//   }

//   return (
//     <Drawer
//       open={open}
//       anchor='right'
//       variant='temporary'
//       onClose={handleClose}
//       ModalProps={{ keepMounted: true }}
//       sx={{ '& .MuiDrawer-paper': { width: { xs: 320, sm: 700 } } }} // wider to match form layout in image
//     >
//       <Header>
//         <Typography variant='h6'>Add New Staff Member</Typography>
//         <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
//           <Icon icon='mdi:close' fontSize={20} />
//         </IconButton>
//       </Header>

//       <Box sx={{ p: 5 }}>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           {/* 2-column grid like the screenshot */}
//           <Grid container spacing={4}>
//             {/* Left column: Basic info */}
//             <Grid item xs={12} md={6}>
//               <Typography sx={{ mb: 3, fontWeight: 600 }}>Basic Information</Typography>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='fullName'
//                   control={control}
//                   render={({ field }) => (
//                     <TextField {...field} label='Full Name *' placeholder='John Doe' error={Boolean(errors.fullName)} />
//                   )}
//                 />
//                 {errors.fullName && <FormHelperText sx={{ color: 'error.main' }}>{errors.fullName.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='username'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Username *' placeholder='johndoe' error={Boolean(errors.username)} />}
//                 />
//                 {errors.username && <FormHelperText sx={{ color: 'error.main' }}>{errors.username.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='email'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Email *' placeholder='john@company.com' error={Boolean(errors.email)} />}
//                 />
//                 {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='contact'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Contact *' placeholder='(397) 294-5153' error={Boolean(errors.contact)} />}
//                 />
//                 {errors.contact && <FormHelperText sx={{ color: 'error.main' }}>{errors.contact.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='taxId'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Tax ID' placeholder='e.g., 123-45-6789' />}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='language'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Language' placeholder='English' />}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='company'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Company' placeholder='Company PVT LTD' />}
//                 />
//               </FormControl>
//             </Grid>

//             {/* Right column: Job info */}
//             <Grid item xs={12} md={6}>
//               <Typography sx={{ mb: 3, fontWeight: 600 }}>Job Information</Typography>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <InputLabel id='role-select'>Role *</InputLabel>
//                 <Controller
//                   name='role'
//                   control={control}
//                   render={({ field }) => (
//                     <Select {...field} labelId='role-select' label='Role *'>
//                       <MenuItem value='admin'>Admin</MenuItem>
//                       <MenuItem value='author'>Author</MenuItem>
//                       <MenuItem value='editor'>Editor</MenuItem>
//                       <MenuItem value='maintainer'>Maintainer</MenuItem>
//                       <MenuItem value='subscriber'>Subscriber</MenuItem>
//                     </Select>
//                   )}
//                 />
//                 {errors.role && <FormHelperText sx={{ color: 'error.main' }}>{errors.role.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <InputLabel id='status-select'>Status *</InputLabel>
//                 <Controller
//                   name='status'
//                   control={control}
//                   render={({ field }) => (
//                     <Select {...field} labelId='status-select' label='Status *'>
//                       <MenuItem value='active'>Active</MenuItem>
//                       <MenuItem value='inactive'>Inactive</MenuItem>
//                       <MenuItem value='pending'>Pending</MenuItem>
//                     </Select>
//                   )}
//                 />
//                 {errors.status && <FormHelperText sx={{ color: 'error.main' }}>{errors.status.message}</FormHelperText>}
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='city'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='City' placeholder='City' />}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='state'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='State' placeholder='State' />}
//                 />
//               </FormControl>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <Controller
//                   name='country'
//                   control={control}
//                   render={({ field }) => <TextField {...field} label='Country' placeholder='Country' />}
//                 />
//               </FormControl>

//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <FormControl fullWidth sx={{ mb: 4 }}>
//                     <Controller name='zip' control={control} render={({ field }) => <TextField {...field} label='Zip code' />} />
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <FormControl fullWidth sx={{ mb: 4 }}>
//                     {/* use native date input for simplicity */}
//                     <Controller
//                       name='joiningDate'
//                       control={control}
//                       render={({ field }) => (
//                         <TextField {...field} label='Joining Date' type='date' InputLabelProps={{ shrink: true }} />
//                       )}
//                     />
//                   </FormControl>
//                 </Grid>
//               </Grid>

//               <FormControl fullWidth sx={{ mb: 4 }}>
//                 <InputLabel id='plan-select'>Select Plan</InputLabel>
//                 <Select
//                   fullWidth
//                   value={plan}
//                   id='select-plan'
//                   label='Select Plan'
//                   labelId='plan-select'
//                   onChange={e => setPlan(e.target.value)}
//                   inputProps={{ placeholder: 'Select Plan' }}
//                 >
//                   <MenuItem value='basic'>Basic</MenuItem>
//                   <MenuItem value='company'>Company</MenuItem>
//                   <MenuItem value='enterprise'>Enterprise</MenuItem>
//                   <MenuItem value='team'>Team</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>

//           {/* Additional Info (full width) */}
//           <Box sx={{ mt: 2 }}>
//             <FormControl fullWidth sx={{ mb: 4 }}>
//               <Controller
//                 name='bio'
//                 control={control}
//                 render={({ field }) => <TextField {...field} label='Bio' placeholder='Brief description about the staff member...' multiline rows={4} />}
//               />
//             </FormControl>
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//             <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
//               Submit
//             </Button>
//             <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
//               Cancel
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Drawer>
//   )
// }

// export default SidebarAddUser



// src/views/dashboards/staff/List/AddUser.js
import { useState } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'

// ** Third-party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from 'src/store/apps/user'

// ** Icon
import Icon from 'src/@core/components/icon'

// ------------------- Styles -------------------
const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  contact: yup.string().required('Contact is required'),
  jobTitle: yup.string().required('Job Title is required')
})

const defaultValues = {
  fullName: '',
  username: '',
  email: '',
  contact: '',
  dob: '',
  language: '',
  skills: '',
  taxId: '',
  city: '',
  state: '',
  country: '',
  zip: '',
  jobTitle: '',
  department: '',
  company: '',
  joiningDate: '',
  bio: ''
}

// ------------------- Component -------------------
const SidebarAddUser = ({ open, toggle }) => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.user)
  const [plan, setPlan] = useState('basic')

  const departments = ['Sales', 'Marketing', 'Engineering', 'HR', 'Finance', 'Operations', 'Support']

  const {
    control,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    if (store?.allData?.some(u => u.email === data.email || u.username === data.username)) {
      store.allData.forEach(u => {
        if (u.email === data.email) setError('email', { message: 'Email already exists!' })
        if (u.username === data.username) setError('username', { message: 'Username already exists!' })
      })
      return
    }

    dispatch(addUser({ ...data, currentPlan: plan }))
    toggle()
    reset()
  }

  const handleClose = () => {
    Object.keys(defaultValues).forEach(k => setValue(k, defaultValues[k]))
    toggle()
    reset()
  }

  const inputProps = { size: 'small', fullWidth: true }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: 340, sm: 800 },
          boxShadow: 6,
          borderRadius: '12px 0 0 12px'
        }
      }}
    >
      <Header>
        <Typography variant='h6' sx={{ fontWeight: 600 }}>
          Add New Staff Member
        </Typography>
        <IconButton size='small' onClick={handleClose}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>

      <Box sx={{ p: 5, pb: 8 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ----------- Basic Information ----------- */}
          <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 3 }}>
            Basic Information
          </Typography>

          <Grid container spacing={3}>
            {[
              ['fullName', 'Full Name *', 'John Doe'],
              ['username', 'Username *', 'johndoe'],
              ['email', 'Email *', 'john@company.com', 'email'],
              ['contact', 'Contact *', '(397) 294-5153'],
              ['dob', 'Birth Date', '', 'date'],
              ['language', 'Language', 'English'],
              ['skills', 'Skill(s)', 'e.g., Sales, CRM, Communication'],
              ['taxId', 'Tax ID', '123-45-6789'],
              ['city', 'City', ''],
              ['state', 'State', ''],
              ['country', 'Country', ''],
              ['zip', 'ZIP', '']
            ].map(([name, label, placeholder, type]) => (
              <Grid item xs={12} sm={6} key={name}>
                <FormControl fullWidth>
                  <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        {...inputProps}
                        label={label}
                        placeholder={placeholder}
                        type={type || 'text'}
                        InputLabelProps={type === 'date' ? { shrink: true } : {}}
                        error={Boolean(errors[name])}
                      />
                    )}
                  />
                  {errors[name] && <FormHelperText sx={{ color: 'error.main' }}>{errors[name].message}</FormHelperText>}
                </FormControl>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* ----------- Job Information ----------- */}
          <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 3 }}>
            Job Information
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='jobTitle'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      {...inputProps}
                      label='Job Title *'
                      placeholder='e.g., Sales Manager'
                      error={Boolean(errors.jobTitle)}
                    />
                  )}
                />
                {errors.jobTitle && <FormHelperText sx={{ color: 'error.main' }}>{errors.jobTitle.message}</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='department-select'>Department</InputLabel>
                <Controller
                  name='department'
                  control={control}
                  render={({ field }) => (
                    <Select {...field} labelId='department-select' label='Department' size='small'>
                      <MenuItem value=''>Select Department</MenuItem>
                      {departments.map(dep => (
                        <MenuItem key={dep} value={dep}>
                          {dep}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='company'
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} {...inputProps} label='Company Name' placeholder='Company PVT LTD' />
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='joiningDate'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      {...inputProps}
                      label='Joining Date'
                      type='date'
                      InputLabelProps={{ shrink: true }}
                    />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* ----------- Other Information ----------- */}
          <Typography variant='subtitle1' sx={{ fontWeight: 600, mb: 3 }}>
            Other Information
          </Typography>

          <FormControl fullWidth sx={{ mb: 4 }}>
            <Controller
              name='bio'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  {...inputProps}
                  label='Bio'
                  placeholder='Brief description about the staff member...'
                  multiline
                  rows={4}
                />
              )}
            />
          </FormControl>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button type='submit' variant='contained' size='large' sx={{ mr: 2 }}>
              Submit
            </Button>
            <Button variant='outlined' color='secondary' size='large' onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser


