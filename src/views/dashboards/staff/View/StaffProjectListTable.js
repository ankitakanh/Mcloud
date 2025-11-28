// // ** React Imports
// import { useState, useEffect } from 'react'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import { styled } from '@mui/material/styles'
// import TextField from '@mui/material/TextField'
// import CardHeader from '@mui/material/CardHeader'
// import Typography from '@mui/material/Typography'
// import CardContent from '@mui/material/CardContent'
// import { DataGrid } from '@mui/x-data-grid'
// import LinearProgress from '@mui/material/LinearProgress'

// // ** Third Party Imports
// import axios from 'axios'

// const Img = styled('img')(({ theme }) => ({
//   width: 32,
//   height: 32,
//   borderRadius: '50%',
//   marginRight: theme.spacing(3)
// }))

// const columns = [
//   {
//     flex: 0.3,
//     minWidth: 230,
//     field: 'projectTitle',
//     headerName: 'Project',
//     renderCell: ({ row }) => (
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Img src={row.img} alt={`project-${row.projectTitle}`} />
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>{row.projectTitle}</Typography>
//           <Typography variant='caption' sx={{ color: 'text.disabled' }}>
//             {row.projectType}
//           </Typography>
//         </Box>
//       </Box>
//     )
//   },
//   {
//     flex: 0.15,
//     minWidth: 100,
//     field: 'totalTask',
//     headerName: 'Total Tasks',
//     renderCell: ({ row }) => <Typography variant='body2'>{row.totalTask}</Typography>
//   },
//   {
//     flex: 0.15,
//     minWidth: 200,
//     headerName: 'Progress',
//     field: 'progressValue',
//     renderCell: ({ row }) => (
//       <Box sx={{ width: '100%' }}>
//         <Typography variant='body2'>{row.progressValue}%</Typography>
//         <LinearProgress
//           variant='determinate'
//           value={row.progressValue}
//           color={row.progressColor}
//           sx={{ height: 6, mt: 1, borderRadius: '5px' }}
//         />
//       </Box>
//     )
//   },
//   {
//     flex: 0.15,
//     minWidth: 100,
//     field: 'hours',
//     headerName: 'Hours',
//     renderCell: ({ row }) => <Typography variant='body2'>{row.hours}</Typography>
//   }
// ]

// const InvoiceListTable = () => {
//   // ** State
//   const [value, setValue] = useState('')
//   const [data, setData] = useState([])
//   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
//   useEffect(() => {
//     axios
//       .get('/apps/users/project-list', {
//         params: {
//           q: value
//         }
//       })
//       .then(res => setData(res.data))
//   }, [value])

//   return (
//     <Card>
//       <CardHeader title='Quotes List' />
//       <CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
//           <Typography variant='body2' sx={{ mr: 2 }}>
//             Search:
//           </Typography>
//           <TextField size='small' placeholder='Search Project' value={value} onChange={e => setValue(e.target.value)} />
//         </Box>
//       </CardContent>
//       <DataGrid
//         autoHeight
//         rows={data}
//         columns={columns}
//         disableRowSelectionOnClick
//         pageSizeOptions={[7, 10, 25, 50]}
//         paginationModel={paginationModel}
//         onPaginationModelChange={setPaginationModel}
//       />
//     </Card>
//   )
// }

// export default InvoiceListTable

// InvoiceListTable.jsx
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled, useTheme } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import { DataGrid } from '@mui/x-data-grid'
import LinearProgress from '@mui/material/LinearProgress'

const formatCurrency = value =>
  typeof value === 'number' ? value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : value

const columns = [
  { field: 'quoteDate', headerName: 'QUOTE DATE', minWidth: 120, flex: 0.12 },
  {
    field: 'quoteNumber',
    headerName: 'QUOTE#',
    minWidth: 110,
    flex: 0.1,
    renderCell: ({ row }) => (
      <Link href='#' underline='hover' onClick={e => e.preventDefault()}>
        {row.quoteNumber}
      </Link>
    )
  },
  { field: 'stage', headerName: 'STAGE', minWidth: 120, flex: 0.12 },
  { field: 'leadType', headerName: 'LEAD TYPE', minWidth: 120, flex: 0.1 },
  {
    field: 'account',
    headerName: 'ACCOUNT',
    minWidth: 150,
    flex: 0.14,
    renderCell: ({ row }) => <Typography sx={{ fontWeight: 500 }}>{row.account}</Typography>
  },
  { field: 'process', headerName: 'PROCESS', minWidth: 150, flex: 0.14 },
  {
    field: 'amount',
    headerName: 'AMOUNT',
    minWidth: 120,
    flex: 0.12,
    renderCell: ({ row }) => <Typography>{formatCurrency(row.amount)}</Typography>
  },
  { field: 'netTerms', headerName: 'NET TERMS', minWidth: 100, flex: 0.1 },
  { field: 'supplier', headerName: 'SUPPLIER', minWidth: 160, flex: 0.14 },
  {
    field: 'manufacturingLocation',
    headerName: 'MANUFACTURING LOCATION',
    minWidth: 160,
    flex: 0.16
  },
  {
    field: 'supplierAmount',
    headerName: 'SUPPLIER AMOUNT',
    minWidth: 150,
    flex: 0.12,
    renderCell: ({ row }) => <Typography>{formatCurrency(row.supplierAmount)}</Typography>
  },
  {
    field: 'gp',
    headerName: 'GP%',
    minWidth: 100,
    flex: 0.08,
    renderCell: ({ row }) => <Typography>{row.gp}</Typography>
  }
]

// sample rows from your screenshot
const sampleRows = [
  {
    id: 1,
    quoteDate: '10/30/2025',
    quoteNumber: '105799',
    stage: 'Purchase Order',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'CNC Machining',
    amount: 0.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 0.0,
    gp: 'TBD'
  },
  {
    id: 2,
    quoteDate: '10/30/2025',
    quoteNumber: '105798',
    stage: 'Manual',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'CNC Machining',
    amount: 0.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 0.0,
    gp: 'TBD'
  },
  {
    id: 3,
    quoteDate: '10/24/2025',
    quoteNumber: '105787',
    stage: 'Manual',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'SLA',
    amount: 110.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 1.25,
    gp: 98.75
  },
  {
    id: 4,
    quoteDate: '10/23/2025',
    quoteNumber: '105785',
    stage: 'Manual',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'Die-Casting',
    amount: 0.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 0.0,
    gp: 'TBD'
  },
  {
    id: 5,
    quoteDate: '10/16/2025',
    quoteNumber: '105779',
    stage: 'Quote',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'Die-Casting',
    amount: 26400.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 0.0,
    gp: 'TBD'
  },
  {
    id: 6,
    quoteDate: '10/16/2025',
    quoteNumber: '105778',
    stage: 'Quote',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'Die-Casting',
    amount: 26400.0,
    netTerms: 'Net 30',
    supplier: '',
    manufacturingLocation: 'International',
    supplierAmount: 0.0,
    gp: 'TBD'
  },
  {
    id: 7,
    quoteDate: '10/16/2025',
    quoteNumber: '105777',
    stage: 'Quote',
    leadType: 'Existing',
    account: 'Spaceaero',
    process: 'Die-Casting',
    amount: 26400.0,
    netTerms: 'Net 30',
    supplier: 'Sharang Kapsikar',
    manufacturingLocation: 'International',
    supplierAmount: 4475.8,
    gp: 81.35
  }
]

const InvoiceListTable = () => {
  const theme = useTheme()
  const [value, setValue] = useState('')
  // use only sample rows to prove visibility
  const [data] = useState(sampleRows)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })
  const [loading] = useState(false)

  return (
    <Card>
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant='h6'>Quotes List</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant='body2'>Search:</Typography>
              <TextField
                size='small'
                placeholder='Search Quote'
                value={value}
                onChange={e => setValue(e.target.value)}
              />
            </Box>
          </Box>
        }
      />

      {loading && <LinearProgress />}

      <Box sx={{ p: 2 }}>
        <DataGrid
          autoHeight
          rows={data}
          columns={columns}
          disableRowSelectionOnClick
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          getRowId={row => row.id ?? row.quoteNumber}
          rowHeight={56}
          headerHeight={64}
          sx={{
            // force readable text & make grid area visually obvious
            '& .MuiDataGrid-root': {
              backgroundColor: 'background.paper'
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.background.default
            },
            '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle': {
              color: theme.palette.text.primary,
              fontSize: '0.875rem'
            },
            '& .MuiDataGrid-virtualScroller': {
              // ensure rows area is visible
              minHeight: 300
            }
          }}
        />
      </Box>
    </Card>
  )
}

export default InvoiceListTable
