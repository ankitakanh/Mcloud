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
                {errors.jobTitle && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.jobTitle.message}</FormHelperText>
                )}
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
