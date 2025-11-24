import React, { useState, useCallback } from 'react'
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  Grid,
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material'
import { Icon } from '@iconify/react'

// === Roles ===
const ECOM_ROLES = ['User']
const CRM_ROLES = ['AE', 'PM', 'ME', 'QE', 'BDM', 'Admin']
const SUPPLY_ROLES = ['Supplier']

// === Table Data ===
const initialRows = [
  {
    id: 1,
    field: 'Leads Form',
    roles: { User: 'N', AE: 'Y', PM: 'N', ME: 'N', QE: 'N', BDM: 'N', Admin: 'Y', Supplier: 'N' }
  },
  {
    id: 2,
    field: 'Contact Form',
    roles: { User: 'N', AE: 'Y', PM: 'Y', ME: 'N', QE: 'N', BDM: 'Y', Admin: 'Y', Supplier: 'N' }
  },
  {
    id: 3,
    field: 'Account Form',
    roles: { User: 'N', AE: 'Y', PM: 'Y', ME: 'N', QE: 'N', BDM: 'Y', Admin: 'Y', Supplier: 'N' }
  },
  {
    id: 4,
    field: 'Quote Form',
    roles: { User: 'N', AE: 'Y', PM: 'N', ME: 'Y', QE: 'N', BDM: 'N', Admin: 'Y', Supplier: 'Y' }
  },
  {
    id: 5,
    field: 'Order Form',
    roles: { User: 'N', AE: 'Y', PM: 'Y', ME: 'Y', QE: 'N', BDM: 'N', Admin: 'Y', Supplier: 'Y' }
  },
  {
    id: 6,
    field: 'Supplier Grading Form',
    roles: { User: 'N', AE: 'Y', PM: 'Y', ME: 'Y', QE: 'Y', BDM: 'Y', Admin: 'Y', Supplier: 'N' }
  },
  {
    id: 7,
    field: 'Supplier Registration Form',
    roles: { User: 'N', AE: 'Y', PM: 'Y', ME: 'N', QE: 'N', BDM: 'N', Admin: 'Y', Supplier: 'N' }
  }
]

// === Colors ===
const PRIMARY_INDIGO = '#787EFF'
const LIGHT_INDIGO = '#787fffeb'
const YELLOW_EYE = '#FFC107'
const BORDER_GREY = '#c2c2c285'

// === Green Checkbox ===
const GreenCheckbox = ({ checked, onChange, size = 'medium' }) => (
  <Checkbox
    checked={checked}
    onChange={onChange}
    size={size}
    sx={{
      '&.Mui-checked': { color: 'success.main' },
      padding: 0
    }}
    inputProps={{ 'aria-label': checked ? 'Has access' : 'No access' }}
  />
)

const FormAccessMatrixIndigoTheme = () => {
  const [rows, setRows] = useState(initialRows)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) // mobile only

  const handleToggle = useCallback((rowId, roleKey) => {
    setRows(prev =>
      prev.map(r => {
        if (r.id !== rowId) return r
        const current = r.roles?.[roleKey] === 'Y'
        return { ...r, roles: { ...r.roles, [roleKey]: current ? 'N' : 'Y' } }
      })
    )
  }, [])

  const handleView = useCallback(row => {
    alert(`View: ${row.field}`)
  }, [])

  const ALL_ROLES = ['User', ...CRM_ROLES, ...SUPPLY_ROLES]

  // ---------- MOBILE: stacked cards (sm and below) ----------
  if (isMobile) {
    return (
      <Stack spacing={2}>
        {rows.map(row => (
          <Card
            key={row.id}
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 2,
              border: `0.5px solid ${BORDER_GREY}`,
              overflow: 'hidden'
            }}
          >
            <CardHeader
              title={
                <Typography
                  variant='subtitle1'
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: PRIMARY_INDIGO
                  }}
                >
                  {row.field}
                </Typography>
              }
              sx={{ pb: 0 }}
            />
            <Divider />
            <Box sx={{ p: 1 }}>
              <Grid container spacing={1} alignItems='center'>
                {ALL_ROLES.map(roleKey => {
                  const checked = row.roles?.[roleKey] === 'Y'
                  return (
                    <Grid key={`${row.id}-${roleKey}`} item xs={6}>
                      <Paper
                        elevation={0}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          p: '6px 8px',
                          borderRadius: 1,
                          border: `0.5px solid ${BORDER_GREY}`
                        }}
                      >
                        <Typography sx={{ fontSize: '0.95rem', fontWeight: 600 }}>{roleKey}</Typography>
                        <GreenCheckbox checked={checked} onChange={() => handleToggle(row.id, roleKey)} size='small' />
                      </Paper>
                    </Grid>
                  )
                })}

                <Grid item xs={12} sx={{ mt: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <Tooltip title={`View ${row.field}`}>
                    <IconButton size='small' onClick={() => handleView(row)} aria-label={`view-${row.id}`}>
                      <Icon icon='mdi:eye' width='18' height='18' style={{ color: YELLOW_EYE }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Box>
          </Card>
        ))}
      </Stack>
    )
  }

  // ---------- DESKTOP / TABLET: exact original table (unchanged) ----------
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 2,
        boxShadow: 4
        // border: `0.5px solid ${BORDER_GREY}`
      }}
    >
      <CardHeader
        title={
          <Typography
            variant='h5'
            sx={{
              pb: 5,
              fontSize: '2rem',
              letterSpacing: '.3px',
              '& .MuiCardHeader-title': { letterSpacing: '.15px' }
            }}
          >
            Form Customization
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <Divider />
      <TableContainer component={Paper} sx={{ width: '100%', boxShadow: 'none' }}>
        <Table
          sx={{
            tableLayout: 'fixed',
            borderCollapse: 'collapse',
            '& td, & th': {
              border: `0.5px solid ${BORDER_GREY}`
            }
          }}
        >
          {/* === Header === */}
          <TableHead>
            <TableRow>
              <TableCell
                rowSpan={2}
                align='center'
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  position: 'sticky',
                  left: 0,
                  zIndex: 1200,
                  width: '23%',
                  verticalAlign: 'middle',
                  padding: '12px 14px'
                }}
              >
                Roles
              </TableCell>

              <TableCell
                align='center'
                colSpan={ECOM_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  padding: '12px 10px'
                }}
              >
                Ecom
              </TableCell>

              <TableCell
                align='center'
                colSpan={CRM_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  padding: '12px 10px'
                }}
              >
                CRM
              </TableCell>

              <TableCell
                align='center'
                colSpan={SUPPLY_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  padding: '12px 10px'
                }}
              >
                Supply Chain
              </TableCell>

              <TableCell
                rowSpan={2}
                align='center'
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  verticalAlign: 'middle',
                  padding: '12px 14px'
                }}
              >
                Action
              </TableCell>
            </TableRow>

            <TableRow>
              {ALL_ROLES.map(role => (
                <TableCell
                  key={role}
                  align='center'
                  sx={{
                    backgroundColor: LIGHT_INDIGO,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '10px 12px'
                  }}
                >
                  {role}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* === Body === */}
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.id}
                hover
                sx={{
                  '&:hover': { backgroundColor: '#f6f6ff' },
                  transition: 'background-color 0.2s ease'
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    position: 'sticky',
                    left: 0,
                    backgroundColor: '#fff',
                    zIndex: 1100,
                    padding: '14px 16px'
                  }}
                >
                  {row.field}
                </TableCell>

                {ALL_ROLES.map(roleKey => {
                  const checked = row.roles?.[roleKey] === 'Y'
                  return (
                    <TableCell key={`${row.id}-${roleKey}`} align='center' sx={{ padding: '12px 8px' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <GreenCheckbox checked={checked} onChange={() => handleToggle(row.id, roleKey)} />
                      </Box>
                    </TableCell>
                  )
                })}

                <TableCell align='center' sx={{ padding: '8px 10px' }}>
                  <Tooltip title={`View ${row.field}`}>
                    <IconButton
                      size='small'
                      onClick={() => handleView(row)}
                      aria-label={`view-${row.id}`}
                      sx={{ borderRadius: 1 }}
                    >
                      <Icon icon='mdi:eye' width='20' height='20' style={{ color: YELLOW_EYE }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default FormAccessMatrixIndigoTheme
