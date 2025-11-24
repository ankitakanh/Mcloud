// ** React Imports
// import { useState, useEffect, forwardRef, useCallback, Fragment } from 'react'

// ** MUI Imports
// import Box from '@mui/material/Box'
// import Drawer from '@mui/material/Drawer'
// import Select from '@mui/material/Select'
// import Switch from '@mui/material/Switch'
// import Button from '@mui/material/Button'
// import MenuItem from '@mui/material/MenuItem'
// import TextField from '@mui/material/TextField'
// import IconButton from '@mui/material/IconButton'
// import InputLabel from '@mui/material/InputLabel'
// import Typography from '@mui/material/Typography'
// import FormControl from '@mui/material/FormControl'
// import FormHelperText from '@mui/material/FormHelperText'
// import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
// import DatePicker from 'react-datepicker'
// import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
// import Icon from 'src/@core/components/icon'

// ** Styled Components
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// const capitalize = string => string && string[0].toUpperCase() + string.slice(1)

// const defaultState = {
//   url: '',
//   title: '',
//   guests: [],
//   allDay: true,
//   description: '',
//   endDate: new Date(),
//   calendar: 'Business',
//   startDate: new Date()
// }

// const AddEventSidebar = props => {
  // ** Props
  // const {
  //   store,
  //   dispatch,
  //   addEvent,
  //   updateEvent,
  //   drawerWidth,
  //   calendarApi,
  //   deleteEvent,
  //   handleSelectEvent,
  //   addEventSidebarOpen,
  //   handleAddEventSidebarToggle
  // } = props

  // ** States
  // const [values, setValues] = useState(defaultState)

  // const {
  //   control,
  //   setValue,
  //   clearErrors,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({ defaultValues: { title: '' } })

  // const handleSidebarClose = async () => {
  //   setValues(defaultState)
  //   clearErrors()
  //   dispatch(handleSelectEvent(null))
  //   handleAddEventSidebarToggle()
  // }

  // const onSubmit = data => {
  //   const modifiedEvent = {
  //     url: values.url,
  //     display: 'block',
  //     title: data.title,
  //     end: values.endDate,
  //     allDay: values.allDay,
  //     start: values.startDate,
  //     extendedProps: {
  //       calendar: capitalize(values.calendar),
  //       guests: values.guests && values.guests.length ? values.guests : undefined,
  //       description: values.description.length ? values.description : undefined
  //     }
  //   }
  //   if (store.selectedEvent === null || (store.selectedEvent !== null && !store.selectedEvent.title.length)) {
  //     dispatch(addEvent(modifiedEvent))
  //   } else {
  //     dispatch(updateEvent({ id: store.selectedEvent.id, ...modifiedEvent }))
  //   }
  //   calendarApi.refetchEvents()
  //   handleSidebarClose()
  // }

  // const handleDeleteEvent = () => {
  //   if (store.selectedEvent) {
  //     dispatch(deleteEvent(store.selectedEvent.id))
  //   }

    // calendarApi.getEventById(store.selectedEvent.id).remove()
  //   handleSidebarClose()
  // }

  // const handleStartDate = date => {
  //   if (date > values.endDate) {
  //     setValues({ ...values, startDate: new Date(date), endDate: new Date(date) })
  //   }
  // }

//   const resetToStoredValues = useCallback(() => {
//     if (store.selectedEvent !== null) {
//       const event = store.selectedEvent
//       setValue('title', event.title || '')
//       setValues({
//         url: event.url || '',
//         title: event.title || '',
//         allDay: event.allDay,
//         guests: event.extendedProps.guests || [],
//         description: event.extendedProps.description || '',
//         calendar: event.extendedProps.calendar || 'Business',
//         endDate: event.end !== null ? event.end : event.start,
//         startDate: event.start !== null ? event.start : new Date()
//       })
//     }
//   }, [setValue, store.selectedEvent])

//   const resetToEmptyValues = useCallback(() => {
//     setValue('title', '')
//     setValues(defaultState)
//   }, [setValue])
//   useEffect(() => {
//     if (store.selectedEvent !== null) {
//       resetToStoredValues()
//     } else {
//       resetToEmptyValues()
//     }
//   }, [addEventSidebarOpen, resetToStoredValues, resetToEmptyValues, store.selectedEvent])

//   const PickersComponent = forwardRef(({ ...props }, ref) => {
//     return (
//       <TextField
//         inputRef={ref}
//         fullWidth
//         {...props}
//         label={props.label || ''}
//         sx={{ width: '100%' }}
//         error={props.error}
//       />
//     )
//   })

//   const RenderSidebarFooter = () => {
//     if (store.selectedEvent === null || (store.selectedEvent !== null && !store.selectedEvent.title.length)) {
//       return (
//         <Fragment>
//           <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
//             Add
//           </Button>
//           <Button size='large' variant='outlined' color='secondary' onClick={resetToEmptyValues}>
//             Reset
//           </Button>
//         </Fragment>
//       )
//     } else {
//       return (
//         <Fragment>
//           <Button size='large' type='submit' variant='contained' sx={{ mr: 4 }}>
//             Update
//           </Button>
//           <Button size='large' variant='outlined' color='secondary' onClick={resetToStoredValues}>
//             Reset
//           </Button>
//         </Fragment>
//       )
//     }
//   }

//   return (
//     <Drawer
//       anchor='right'
//       open={addEventSidebarOpen}
//       onClose={handleSidebarClose}
//       ModalProps={{ keepMounted: true }}
//       sx={{ '& .MuiDrawer-paper': { width: ['100%', drawerWidth] } }}
//     >
//       <Box
//         className='sidebar-header'
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           backgroundColor: 'background.default',
//           p: theme => theme.spacing(3, 3.255, 3, 5.255)
//         }}
//       >
//         <Typography variant='h6'>
//           {store.selectedEvent !== null && store.selectedEvent.title.length ? 'Update Event' : 'Supplier Evaluation Form'}
//         </Typography>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           {store.selectedEvent !== null && store.selectedEvent.title.length ? (
//             <IconButton
//               size='small'
//               onClick={handleDeleteEvent}
//               sx={{ color: 'text.primary', mr: store.selectedEvent !== null ? 1 : 0 }}
//             >
//               <Icon icon='mdi:delete-outline' fontSize={20} />
//             </IconButton>
//           ) : null}
//           <IconButton size='small' onClick={handleSidebarClose} sx={{ color: 'text.primary' }}>
//             <Icon icon='mdi:close' fontSize={20} />
//           </IconButton>
//         </Box>
//       </Box>
//       <Box className='sidebar-body' sx={{ p: theme => theme.spacing(5, 6) }}>
//         <DatePickerWrapper>
//           <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
//             <FormControl fullWidth sx={{ mb: 6 }}>
//               <Controller
//                 name='title'
//                 control={control}
//                 rules={{ required: true }}
//                 render={({ field: { value, onChange } }) => (
//                   <TextField label='Title' value={value} onChange={onChange} error={Boolean(errors.title)} />
//                 )}
//               />
//               {errors.title && (
//                 <FormHelperText sx={{ color: 'error.main' }} id='event-title-error'>
//                   This field is required
//                 </FormHelperText>
//               )}
//             </FormControl>
//             <FormControl fullWidth sx={{ mb: 6 }}>
//               <InputLabel id='event-calendar'>Calendar</InputLabel>
//               <Select
//                 label='Calendar'
//                 value={values.calendar}
//                 labelId='event-calendar'
//                 onChange={e => setValues({ ...values, calendar: e.target.value })}
//               >
//                 <MenuItem value='Personal'>Personal</MenuItem>
//                 <MenuItem value='Business'>Business</MenuItem>
//                 <MenuItem value='Family'>Family</MenuItem>
//                 <MenuItem value='Holiday'>Holiday</MenuItem>
//                 <MenuItem value='ETC'>ETC</MenuItem>
//               </Select>
//             </FormControl>
//             <Box sx={{ mb: 6 }}>
//               <DatePicker
//                 selectsStart
//                 id='event-start-date'
//                 endDate={values.endDate}
//                 selected={values.startDate}
//                 startDate={values.startDate}
//                 showTimeSelect={!values.allDay}
//                 dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
//                 customInput={<PickersComponent label='Start Date' registername='startDate' />}
//                 onChange={date => setValues({ ...values, startDate: new Date(date) })}
//                 onSelect={handleStartDate}
//               />
//             </Box>
//             <Box sx={{ mb: 6 }}>
//               <DatePicker
//                 selectsEnd
//                 id='event-end-date'
//                 endDate={values.endDate}
//                 selected={values.endDate}
//                 minDate={values.startDate}
//                 startDate={values.startDate}
//                 showTimeSelect={!values.allDay}
//                 dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
//                 customInput={<PickersComponent label='End Date' registername='endDate' />}
//                 onChange={date => setValues({ ...values, endDate: new Date(date) })}
//               />
//             </Box>
//             <FormControl sx={{ mb: 6 }}>
//               <FormControlLabel
//                 label='All Day'
//                 control={
//                   <Switch checked={values.allDay} onChange={e => setValues({ ...values, allDay: e.target.checked })} />
//                 }
//               />
//             </FormControl>
//             <TextField
//               fullWidth
//               type='url'
//               id='event-url'
//               sx={{ mb: 6 }}
//               label='Event URL'
//               value={values.url}
//               onChange={e => setValues({ ...values, url: e.target.value })}
//             />
//             <FormControl fullWidth sx={{ mb: 6 }}>
//               <InputLabel id='event-guests'>Guests</InputLabel>
//               <Select
//                 multiple
//                 label='Guests'
//                 value={values.guests}
//                 labelId='event-guests'
//                 id='event-guests-select'
//                 onChange={e => setValues({ ...values, guests: e.target.value })}
//               >
//                 <MenuItem value='bruce'>Bruce</MenuItem>
//                 <MenuItem value='clark'>Clark</MenuItem>
//                 <MenuItem value='diana'>Diana</MenuItem>
//                 <MenuItem value='john'>John</MenuItem>
//                 <MenuItem value='barry'>Barry</MenuItem>
//               </Select>
//             </FormControl>
//             <TextField
//               rows={4}
//               multiline
//               fullWidth
//               sx={{ mb: 6 }}
//               label='Description'
//               id='event-description'
//               value={values.description}
//               onChange={e => setValues({ ...values, description: e.target.value })}
//             />
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <RenderSidebarFooter />
//             </Box>
//           </form>
//         </DatePickerWrapper>
//       </Box>
//     </Drawer>
//   )
// }

// export default AddEventSidebar



// ** React Imports
import { useState, useEffect, forwardRef, useCallback } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// === Constants ===
const YES_NO = ['Yes', 'No']
const SCALE_1_10 = Array.from({ length: 10 }, (_, i) => `${i + 1}`)
const PROCESS_OPTIONS = [
  'Injection Molding',
  'CNC Machining',
  'MJF',
  'SLA',
  'SLS',
  'DMLS',
  'FDM',
  'Polyjet',
  'Compression Mold',
  'Compression Molded Parts',
  'Extrusion Tooling',
  'Extruded Parts',
  'Cast Urethane',
  'Sheet Metal',
  'Injection Molding Parts',
  'Die-Casting',
  'Cast Urethane Parts',
  'Other'
]

// === Default (pre-filled) values ===
const defaultState = {
  projectStatus: 'Purchase Order',
  accountExecutive: 'Justin Howard',
  orderNo: '105783',
  projectManager: 'Julie Thomas',
  supplierName: 'Sharang Kapsikar',
  process: 'Die-Casting',
  orderCreatedDate: new Date('2025-10-22T00:00:00'),
  customerQualityPerception: '',
  onTimeShipment: '',
  orderConfirmation: '',
  shippingConfirmation: '',
  issueCommunication: '',
  generalCommunication: '',
  pmPerception: '',
  followedWOInstructions: '',
  notes: ''
}

const SectionHeader = ({ children }) => (
  <Box sx={{
    bgcolor: 'primary.light',
    color: 'primary.contrastText',
    fontWeight: 600,
    px: 2.5,
    py: 1.5,
    borderRadius: 1,
    mb: 2,
    boxShadow: 1
  }}>
    {children}
  </Box>
)

const SupplierEvaluationSidebar = props => {
  const {
    store,
    dispatch,
    addEvent,
    updateEvent,
    calendarApi,
    deleteEvent,
    handleSelectEvent,
    addEventSidebarOpen,
    handleAddEventSidebarToggle
  } = props

  const [values, setValues] = useState(defaultState)
  const [score, setScore] = useState(0)

  const {
    control,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      orderNo: defaultState.orderNo,
      supplierName: defaultState.supplierName
    }
  })

  const handleSidebarClose = () => {
    clearErrors()
    dispatch(handleSelectEvent(null))
    handleAddEventSidebarToggle()
  }

  const calcScore = v => {
    const yesNoKeys = [
      'onTimeShipment',
      'orderConfirmation',
      'shippingConfirmation',
      'issueCommunication',
      'generalCommunication',
      'followedWOInstructions'
    ]
    const yesCount = yesNoKeys.reduce((acc, k) => acc + (v[k] === 'Yes' ? 1 : 0), 0)
    const cqp = Number(v.customerQualityPerception || 0)
    const pm = Number(v.pmPerception || 0)
    return yesCount + cqp + pm
  }

  useEffect(() => {
    setScore(calcScore(values))
  }, [values])

  const onSubmit = data => {
    const title = `${values.supplierName || data.supplierName} – ${values.orderNo || data.orderNo}`
    const payload = {
      display: 'block',
      title,
      start: values.orderCreatedDate,
      end: values.orderCreatedDate,
      allDay: true,
      extendedProps: {
        calendar: 'Business',
        supplierGrading: { ...values, orderNo: data.orderNo, supplierName: data.supplierName, score }
      }
    }

    if (store.selectedEvent === null || (store.selectedEvent !== null && !store.selectedEvent.title?.length)) {
      dispatch(addEvent(payload))
    } else {
      dispatch(updateEvent({ id: store.selectedEvent.id, ...payload }))
    }
    calendarApi?.refetchEvents?.()
    handleSidebarClose()
  }

  const handleDeleteEvent = () => {
    if (store.selectedEvent) dispatch(deleteEvent(store.selectedEvent.id))
    handleSidebarClose()
  }

  const resetToStoredValues = useCallback(() => {
    if (store.selectedEvent !== null) {
      const g = store.selectedEvent.extendedProps?.supplierGrading || {}
      setValue('supplierName', g.supplierName || '')
      setValue('orderNo', g.orderNo || '')
      setValues({ ...defaultState, ...g, orderCreatedDate: g.orderCreatedDate ? new Date(g.orderCreatedDate) : new Date() })
    }
  }, [setValue, store.selectedEvent])

  const resetToDefaults = () => setValues(defaultState)

  useEffect(() => {
    if (store.selectedEvent !== null) resetToStoredValues()
    else resetToDefaults()
  }, [addEventSidebarOpen, resetToStoredValues, store.selectedEvent])

  const textFieldHoverStyles = {
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'grey.500'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'grey.500'
    },
    '& .MuiInputLabel-root': {
      color: 'text.disabled'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'grey.600'
    },
    '& .MuiInputLabel-root:hover': {
      color: 'grey.600'
    },
    '& .MuiInputBase-input::placeholder': { color: 'text.disabled', opacity: 0.7 }
  }

  const PickersComponent = forwardRef(({ ...props }, ref) => (
    <TextField inputRef={ref} fullWidth {...props} label={props.label || ''} sx={textFieldHoverStyles} />
  ))

  return (
    <Drawer
      anchor='right'
      open={addEventSidebarOpen}
      onClose={handleSidebarClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: '57%', p: 6, borderRadius: '12px 0 0 12px', boxShadow: 6 } }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'background.default',
          p: theme => theme.spacing(4, 5),
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Typography variant='h6' sx={{ fontWeight: 600 }}>Supplier Evaluation Form</Typography>
        <Box>
          {store.selectedEvent !== null && store.selectedEvent.title?.length ? (
            <IconButton size='small' onClick={handleDeleteEvent} sx={{ color: 'text.primary', mr: 1 }}>
              <Icon icon='mdi:delete-outline' fontSize={20} />
            </IconButton>
          ) : null}
          <IconButton size='small' onClick={handleSidebarClose} sx={{ color: 'text.primary' }}>
            <Icon icon='mdi:close' fontSize={20} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ p: theme => theme.spacing(6, 8), pb: 10 }}>
        <DatePickerWrapper>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <Grid container spacing={5}>
              {[
                { label: 'Project Status', value: values.projectStatus, field: 'projectStatus' },
                { label: 'Account Executive', value: values.accountExecutive, field: 'accountExecutive' },
                { label: 'Project Manager', value: values.projectManager, field: 'projectManager' }
              ].map((item, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                      label={item.label}
                      value={item.value}
                      onChange={e => setValues({ ...values, [item.field]: e.target.value })}
                      sx={textFieldHoverStyles}
                    />
                  </FormControl>
                </Grid>
              ))}

              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <Controller name='orderNo' control={control} rules={{ required: true }} render={({ field: { value, onChange } }) => (
                    <TextField
                      label='Order No'
                      value={value}
                      onChange={e => { onChange(e); setValues({ ...values, orderNo: e.target.value }) }}
                      error={Boolean(errors.orderNo)}
                      sx={textFieldHoverStyles}
                    />
                  )} />
                  {errors.orderNo && <FormHelperText sx={{ color: 'error.main' }}>This field is required</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <Controller name='supplierName' control={control} rules={{ required: true }} render={({ field: { value, onChange } }) => (
                    <TextField
                      label='Supplier Name'
                      value={value}
                      onChange={e => { onChange(e); setValues({ ...values, supplierName: e.target.value }) }}
                      error={Boolean(errors.supplierName)}
                      sx={textFieldHoverStyles}
                    />
                  )} />
                  {errors.supplierName && <FormHelperText sx={{ color: 'error.main' }}>This field is required</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id='process-label' sx={{ '&.Mui-focused': { color: 'grey.600' }, '&:hover': { color: 'grey.600' } }}>Process</InputLabel>
                  <Select
                    label='Process'
                    labelId='process-label'
                    value={values.process}
                    onChange={e => setValues({ ...values, process: e.target.value })}
                    sx={{
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'grey.500'
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'grey.500'
                      }
                    }}
                  >
                    {PROCESS_OPTIONS.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box sx={{ width: '100%' }}>
                  <DatePicker selected={values.orderCreatedDate} customInput={<PickersComponent label='Order Created Date' />} onChange={date => setValues({ ...values, orderCreatedDate: new Date(date) })} dateFormat='yyyy-MM-dd' />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ my: 5, height: 1, bgcolor: 'divider' }} />

            <Grid container spacing={5}>
              {[{
                label: 'Customer Quality Perception',
                field: 'customerQualityPerception',
                options: SCALE_1_10,
                subLabel: 'Rate quality perception (1-10)'
              }, {
                label: 'On Time Shipment',
                field: 'onTimeShipment',
                options: YES_NO,
                subLabel: 'Was the order ready to ship on the promised date?'
              }, {
                label: 'Order Confirmation',
                field: 'orderConfirmation',
                options: YES_NO,
                subLabel: 'Did the supplier confirm ship date within 1 business day?'
              }, {
                label: 'Shipping Confirmation',
                field: 'shippingConfirmation',
                options: YES_NO,
                subLabel: 'Did the supplier notify the PM that the order shipped?'
              }, {
                label: 'Issue Communication',
                field: 'issueCommunication',
                options: YES_NO,
                subLabel: 'Were project issues addressed clearly and timely?'
              }, {
                label: 'General Communication',
                field: 'generalCommunication',
                options: YES_NO,
                subLabel: 'Were all PM\'s questions answered clearly and timely?'
              }, {
                label: 'PM Perception',
                field: 'pmPerception',
                options: SCALE_1_10,
                subLabel: 'Rate PM\'s experience with supplier (1-10)'
              }, {
                label: 'Followed Work Order Instructions',
                field: 'followedWOInstructions',
                options: YES_NO,
                subLabel: 'Did the supplier follow all WO instructions?'
              }].map(item => (
                <Grid item xs={12} md={6} key={item.field}>
                  <SectionHeader>{item.label}</SectionHeader>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel sx={{ '&.Mui-focused': { color: 'grey.600' }, '&:hover': { color: 'grey.600' } }}>{item.subLabel}</InputLabel>
                    <Select
                      label={item.subLabel}
                      value={values[item.field]}
                      onChange={e => setValues({ ...values, [item.field]: e.target.value })}
                      sx={{
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'grey.500'
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'grey.500'
                        }
                      }}
                    >
                      {item.options.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                    </Select>
                  </FormControl>
                </Grid>
              ))}

              <Grid item xs={12}>
                <SectionHeader>Notes</SectionHeader>
                <TextField rows={4} multiline fullWidth sx={{ p: 1.5 }} value={values.notes} onChange={e => setValues({ ...values, notes: e.target.value })} />
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 6 }}>
              <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>Supplier Score : {score}</Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button size='small' variant='outlined' color='error' onClick={handleSidebarClose}>Cancel</Button>
                <Button size='small' variant='outlined' onClick={resetToDefaults}>Clear</Button>
                <Button size='small' variant='contained' type='submit'>Submit</Button>
              </Box>
            </Box>
          </form>
        </DatePickerWrapper>
      </Box>
    </Drawer>
  )
}

export default SupplierEvaluationSidebar

