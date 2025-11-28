// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid } from '@mui/x-data-grid'
import { styled, useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

// ** Styled Link for clickable cells
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontWeight: 500
}))

const AssociatedContactsDataGrid = () => {
  const theme = useTheme()

  // Pagination state
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  // Search/filter state for the top search bar (optional)
  const [searchText, setSearchText] = useState('')

  // Sample data from your screenshot
  const rows = [
    {
      id: 1,
      firstName: 'Leo',
      lastName: 'Jon',
      email: 'leo@gmail.com',
      registrationDate: '10/09/2025',
      phone: '(151) 654-5644',
      company: 'Delta',
      leadSource: 'LinkedIn',
      industry: 'Automotive'
    },
    {
      id: 2,
      firstName: 'Jason',
      lastName: 'Glen',
      email: 'jason@deltacrp.com',
      registrationDate: '',
      phone: '',
      company: 'Delta',
      leadSource: 'Other',
      industry: ''
    }
  ]

  // Columns definition
  const columns = [
    {
      field: 'firstName',
      headerName: 'First Name',
      flex: 0.15,
      minWidth: 150,
      renderCell: params => <LinkStyled href='#'>{params.value}</LinkStyled>
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      flex: 0.15,
      minWidth: 150,
      renderCell: params => <Typography>{params.value}</Typography>
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 0.25,
      minWidth: 220,
      renderCell: params => <LinkStyled href={`mailto:${params.value}`}>{params.value}</LinkStyled>
    },
    {
      field: 'registrationDate',
      headerName: 'Registration Date',
      flex: 0.15,
      minWidth: 150,
      renderCell: params => <Typography>{params.value}</Typography>
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 0.15,
      minWidth: 160,
      renderCell: params => <Typography>{params.value}</Typography>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 0.15,
      minWidth: 150,
      renderCell: params => <Typography>{params.value}</Typography>
    },
    {
      field: 'leadSource',
      headerName: 'Lead Source',
      flex: 0.15,
      minWidth: 140,
      renderCell: params => <Typography>{params.value}</Typography>
    },
    {
      field: 'industry',
      headerName: 'Industry',
      flex: 0.15,
      minWidth: 150,
      renderCell: params => <Typography>{params.value}</Typography>
    }
  ]

  // Filtered rows (optional search functionality)
  const filteredRows = rows.filter(row =>
    Object.values(row).some(value => value && value.toString().toLowerCase().includes(searchText.toLowerCase()))
  )

  return (
    <Card>
      <CardHeader
        title='Associated Contacts'
        sx={{ '& .MuiCardHeader-action': { m: 0 } }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Search:
            </Typography>
            <TextField
              size='small'
              placeholder='Search contacts...'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </Box>
        }
      />

      <Box
        sx={{
          height: 420,
          width: '100%',
          background: '#fff',
          borderRadius: 1,
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <DataGrid
          rows={filteredRows}
          columns={columns}
          getRowId={row => row.id}
          autoHeight={false}
          disableRowSelectionOnClick
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          sx={{
            '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle': {
              color: theme.palette.text.primary,
              whiteSpace: 'normal'
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.mode === 'light' ? 'grey.50' : theme.palette.background.paper
            },
            '& .MuiDataGrid-virtualScroller': {
              minHeight: 250
            },
            '& .MuiDataGrid-cell': {
              alignItems: 'center'
            }
          }}
        />
      </Box>
    </Card>
  )
}

export default AssociatedContactsDataGrid
