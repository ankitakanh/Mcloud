'use client'

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
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
  TablePagination
} from '@mui/material'

// === Roles ===
const ECOM_ROLES = ['User']
const CRM_ROLES = ['AE', 'PM', 'ME', 'QE', 'BDM', 'Admin']
const SUPPLY_ROLES = ['Supplier']
const ALL_ROLES = ['User', ...CRM_ROLES, ...SUPPLY_ROLES]

// === Colors ===
const PRIMARY_INDIGO = '#787EFF'
const LIGHT_INDIGO = '#6f78ff' // slightly darker so white text is readable
const BORDER_GREY = '#e2e2e285'

// === Table Data ===
const initialRows = [
  /* keep your 50-row array exactly as provided earlier */
  {
    id: 1,
    field: 'Lead Owner',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 2,
    field: 'SDR',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 3,
    field: 'First Name',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 4,
    field: 'Email',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 5,
    field: 'Last Name',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 6,
    field: 'Website',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 7,
    field: 'Company',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 8,
    field: 'Phone',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 9,
    field: 'Industry',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 10,
    field: 'Mobile',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 11,
    field: 'Lead Source',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 12,
    field: 'Reg. From',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 13,
    field: 'Process',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 14,
    field: 'Customer Status',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 15,
    field: 'Lead Status',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 16,
    field: 'SIC Code',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 17,
    field: 'Rating',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 18,
    field: 'Job Title',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 19,
    field: 'Service Interest',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 20,
    field: 'Date of Next Follow-up',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 21,
    field: 'LinkedIn',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 22,
    field: 'Address 2',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 23,
    field: 'Address 3',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 24,
    field: 'City',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 25,
    field: 'State',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 26,
    field: 'Zip',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 27,
    field: 'Country',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 28,
    field: 'Description Information',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 29,
    field: 'Created By',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 30,
    field: 'Updated By',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 31,
    field: 'Updated On',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 32,
    field: 'Active From',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 33,
    field: 'Assigned Date',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 34,
    field: 'Adopted Date',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },

  // Activity section
  {
    id: 35,
    field: 'Activity: Assigned To',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 36,
    field: 'Activity: Related To',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 37,
    field: 'Activity: Subject',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 38,
    field: 'Activity: Status',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 39,
    field: 'Activity: Due Date',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 40,
    field: 'Activity: Priority',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 41,
    field: 'Activity: Comment',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },

  // Details section
  {
    id: 42,
    field: 'Details: Subject',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 43,
    field: 'Details: Comment',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 44,
    field: 'Details: Name',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 45,
    field: 'Details: Related To',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },

  // Email section
  {
    id: 46,
    field: 'Email: From',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 47,
    field: 'Email: To',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 48,
    field: 'Email: CC',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 49,
    field: 'Email: BCC',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  },
  {
    id: 50,
    field: 'Email: Subject',
    roles: { User: false, AE: true, PM: false, ME: false, QE: false, BDM: false, Admin: true, Supplier: false }
  }
]

// --- header & row heights (tweak values if needed) ---
const HEADER_TOP_HEIGHT = 56 // grouped header row (Ecom / CRM / Supply Chain)
const HEADER_SECOND_HEIGHT = 48 // role names row (User / AE / PM / ...)
const BODY_ROW_HEIGHT = 56

// Green Checkbox component
const GreenCheckbox = ({ checked, onChange, size = 'medium' }) => (
  <Checkbox
    checked={checked}
    onChange={onChange}
    size={size}
    sx={{
      '&.Mui-checked': { color: 'success.main' },
      padding: 0,
      margin: 0
    }}
    inputProps={{ 'aria-label': checked ? 'Has access' : 'No access' }}
  />
)

const FormAccessMatrixIndigoTheme = () => {
  const [rows, setRows] = useState(initialRows)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // pagination state
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleToggle = useCallback((rowId, roleKey) => {
    setRows(prev =>
      prev.map(r => {
        if (r.id !== rowId) return r
        const current = !!r.roles?.[roleKey]
        return { ...r, roles: { ...r.roles, [roleKey]: !current } }
      })
    )
  }, [])

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  // MOBILE: stacked cards (unchanged)
  if (isMobile) {
    return (
      <Stack spacing={2}>
        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
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
                <Typography variant='subtitle1' sx={{ fontWeight: 700, fontSize: '1.05rem', color: PRIMARY_INDIGO }}>
                  {row.field}
                </Typography>
              }
              sx={{ pb: 0 }}
            />
            <Divider />
            <Box sx={{ p: 1 }}>
              <Grid container spacing={1} alignItems='center'>
                {ALL_ROLES.map(roleKey => {
                  const checked = !!row.roles?.[roleKey]
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
              </Grid>
            </Box>
          </Card>
        ))}

        {/* Mobile pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pt: 1 }}>
          <TablePagination
            component='div'
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
            labelRowsPerPage='Rows per page:'
            sx={{ '.MuiTablePagination-toolbar': { paddingLeft: 0, paddingRight: 0 } }}
          />
        </Box>
      </Stack>
    )
  }

  // DESKTOP/TABLET
  const visibleRows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Card sx={{ width: '100%', borderRadius: 2, boxShadow: 4 }}>
      <CardHeader
        title={
          <Typography variant='h5' sx={{ pb: 5, fontSize: '2rem', letterSpacing: '.3px' }}>
            Leads Form Details
          </Typography>
        }
        sx={{ pb: 0 }}
      />
      <Divider />

      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          boxShadow: 'none',
          maxHeight: '640px',
          overflow: 'auto',
          '&::-webkit-scrollbar': { width: '8px', height: '8px' },
          '&::-webkit-scrollbar-track': { background: '#f5f5f5', borderRadius: '10px' },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd',
            borderRadius: '10px',
            border: '2px solid #f5f5f5'
          },
          '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#9e9e9e' },
          scrollbarWidth: 'thin',
          scrollbarColor: '#bdbdbd #f5f5f5'
        }}
      >
        <Table
          stickyHeader
          sx={{
            tableLayout: 'fixed',
            // borderCollapse: 'collapse',
            // default cell padding & height for uniformity
            '& td, & th': {
              border: `0.5px solid ${BORDER_GREY}`,
              padding: 0,
              boxSizing: 'border-box'
            },
            // ensure inner wrapper centers content vertically
            '.cellInner': {
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            }
          }}
        >
          <TableHead>
            {/* First header row (group labels) - sticky at top */}
            <TableRow sx={{ height: HEADER_TOP_HEIGHT }}>
              <TableCell
                rowSpan={2}
                align='center'
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  position: 'sticky',
                  top: 0,
                  left: 0,
                  zIndex: 1600,
                  width: '15%',
                  verticalAlign: 'middle',
                  padding: 0
                }}
              >
                <div className='cellInner' style={{ justifyContent: 'flex-start', paddingLeft: 16 }}>
                  FIELDS
                </div>
              </TableCell>

              <TableCell
                align='center'
                colSpan={ECOM_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  position: 'sticky',
                  top: 0,
                  zIndex: 1500
                }}
              >
                <div className='cellInner' style={{ padding: '0 8px' }}>
                  ECOM
                </div>
              </TableCell>

              <TableCell
                align='center'
                colSpan={CRM_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  position: 'sticky',
                  top: 0,
                  zIndex: 1500
                }}
              >
                <div className='cellInner' style={{ padding: '0 8px' }}>
                  CRM
                </div>
              </TableCell>

              <TableCell
                align='center'
                colSpan={SUPPLY_ROLES.length}
                sx={{
                  backgroundColor: PRIMARY_INDIGO,
                  color: '#fff',
                  fontWeight: 700,
                  position: 'sticky',
                  top: 0,
                  zIndex: 1500
                }}
              >
                <div className='cellInner' style={{ padding: '0 8px' }}>
                  SUPPLY CHAIN
                </div>
              </TableCell>
            </TableRow>

            {/* Second header row (role names) - sticky under the first header row */}
            <TableRow sx={{ height: HEADER_SECOND_HEIGHT }}>
              {ALL_ROLES.map(role => (
                <TableCell
                  key={role}
                  align='center'
                  sx={{
                    backgroundColor: LIGHT_INDIGO,
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    position: 'sticky',
                    top: `${HEADER_TOP_HEIGHT}px`,
                    zIndex: 1550,
                    padding: 0
                  }}
                >
                  <div className='cellInner' style={{ padding: '0 12px' }}>
                    {role}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleRows.map(row => (
              <TableRow key={row.id} hover sx={{ height: BODY_ROW_HEIGHT }}>
                <TableCell
                  sx={{
                    fontWeight: 600,
                    position: 'sticky',
                    left: 0,
                    // first column must appear below both header rows
                    top: `${HEADER_TOP_HEIGHT + HEADER_SECOND_HEIGHT}px`,
                    backgroundColor: '#fff',
                    zIndex: 1400,
                    padding: 0
                  }}
                >
                  <div className='cellInner' style={{ justifyContent: 'flex-start', paddingLeft: 16 }}>
                    {row.field}
                  </div>
                </TableCell>

                {ALL_ROLES.map(roleKey => {
                  const checked = !!row.roles?.[roleKey]
                  return (
                    <TableCell key={`${row.id}-${roleKey}`} align='center' sx={{ padding: 0 }}>
                      <div className='cellInner'>
                        <GreenCheckbox checked={checked} onChange={() => handleToggle(row.id, roleKey)} />
                      </div>
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 1 }}>
        <TablePagination
          component='div'
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
          labelRowsPerPage='Rows per page:'
          sx={{
            '.MuiTablePagination-toolbar': { paddingLeft: 0, paddingRight: 0, minHeight: '48px' },
            '.MuiTablePagination-actions': { marginLeft: 1 }
          }}
        />
      </Box>
    </Card>
  )
}

export default FormAccessMatrixIndigoTheme
