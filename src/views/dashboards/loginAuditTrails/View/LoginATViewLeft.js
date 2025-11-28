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
  login: { bg: '#d2fadf9c', color: '#0F8A44' },
  view: { bg: '#dce6f9a8', color: '#234fa8ff' },
  create: { bg: '#fff7d9a8', color: '#b79724ff' },
  update: { bg: '#cbf0ffac', color: '#1f7ea4ff' },
  delete: { bg: '#e2e2e281', color: '#3a4041ff' },
  logout: { bg: '#fee2e294', color: '#DC2626' }
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
