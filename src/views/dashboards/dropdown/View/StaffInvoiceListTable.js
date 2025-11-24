// // ** React Imports
// import { useState } from 'react'

// // ** Next Import
// import Link from 'next/link'

// // ** MUI Imports
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import Menu from '@mui/material/Menu'
// import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
// import MenuItem from '@mui/material/MenuItem'
// import { styled } from '@mui/material/styles'
// import CardHeader from '@mui/material/CardHeader'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import { DataGrid } from '@mui/x-data-grid'

// // ** Icon Imports
// import Icon from 'src/@core/components/icon'

// // ** Custom Component Imports
// import CustomAvatar from 'src/@core/components/mui/avatar'
// import OptionsMenu from 'src/@core/components/option-menu'

// const LinkStyled = styled(Link)(({ theme }) => ({
//   textDecoration: 'none',
//   color: theme.palette.primary.main
// }))

// // ** Vars
// const invoiceStatusObj = {
//   Sent: { color: 'secondary', icon: 'mdi:send' },
//   Paid: { color: 'success', icon: 'mdi:check' },
//   Draft: { color: 'primary', icon: 'mdi:content-save-outline' },
//   'Partial Payment': { color: 'warning', icon: 'mdi:chart-pie' },
//   'Past Due': { color: 'error', icon: 'mdi:information-outline' },
//   Downloaded: { color: 'info', icon: 'mdi:arrow-down' }
// }

// const columns = [
//   {
//     flex: 0.2,
//     field: 'id',
//     minWidth: 90,
//     headerName: '# ID',
//     renderCell: ({ row }) => <LinkStyled href={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</LinkStyled>
//   },
//   {
//     flex: 0.15,
//     minWidth: 80,
//     field: 'invoiceStatus',
//     renderHeader: () => <Icon icon='mdi:trending-up' fontSize={20} />,
//     renderCell: ({ row }) => {
//       const { dueDate, balance, invoiceStatus } = row
//       const color = invoiceStatusObj[invoiceStatus] ? invoiceStatusObj[invoiceStatus].color : 'primary'

//       return (
//         <Tooltip
//           title={
//             <>
//               <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
//                 {invoiceStatus}
//               </Typography>
//               <br />
//               <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
//                 Balance:
//               </Typography>{' '}
//               {balance}
//               <br />
//               <Typography variant='caption' sx={{ color: 'common.white', fontWeight: 600 }}>
//                 Due Date:
//               </Typography>{' '}
//               {dueDate}
//             </>
//           }
//         >
//           <CustomAvatar skin='light' color={color} sx={{ width: '1.875rem', height: '1.875rem' }}>
//             <Icon icon={invoiceStatusObj[invoiceStatus].icon} fontSize='1rem' />
//           </CustomAvatar>
//         </Tooltip>
//       )
//     }
//   },
//   {
//     flex: 0.25,
//     minWidth: 90,
//     field: 'total',
//     headerName: 'Total',
//     renderCell: ({ row }) => <Typography variant='body2'>${row.total || 0}</Typography>
//   },
//   {
//     flex: 0.3,
//     minWidth: 125,
//     field: 'issuedDate',
//     headerName: 'Issued Date',
//     renderCell: ({ row }) => <Typography variant='body2'>{row.issuedDate}</Typography>
//   },
//   {
//     flex: 0.1,
//     minWidth: 130,
//     sortable: false,
//     field: 'actions',
//     headerName: 'Actions',
//     renderCell: ({ row }) => (
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Tooltip title='Delete Invoice'>
//           <IconButton size='small'>
//             <Icon icon='mdi:delete-outline' fontSize={20} />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title='View'>
//           <IconButton size='small' component={Link} href={`/apps/invoice/preview/${row.id}`}>
//             <Icon icon='mdi:eye-outline' fontSize={20} />
//           </IconButton>
//         </Tooltip>
//         <OptionsMenu
//           iconProps={{ fontSize: 20 }}
//           iconButtonProps={{ size: 'small' }}
//           menuProps={{ sx: { '& .MuiMenuItem-root svg': { mr: 2 } } }}
//           options={[
//             {
//               text: 'Download',
//               icon: <Icon icon='mdi:download' fontSize={20} />
//             },
//             {
//               text: 'Edit',
//               href: `/apps/invoice/edit/${row.id}`,
//               icon: <Icon icon='mdi:pencil-outline' fontSize={20} />
//             },
//             {
//               text: 'Duplicate',
//               icon: <Icon icon='mdi:content-copy' fontSize={20} />
//             }
//           ]}
//         />
//       </Box>
//     )
//   }
// ]

// const InvoiceListTable = ({ invoiceData }) => {
//   // ** State
//   const [anchorEl, setAnchorEl] = useState(null)
//   const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

//   // ** Var
//   const open = Boolean(anchorEl)

//   const handleClick = event => {
//     setAnchorEl(event.currentTarget)
//   }

//   const handleClose = () => {
//     setAnchorEl(null)
//   }

//   return (
//     <Card>
//       <CardHeader
//         title='Orders List'
//         sx={{ '& .MuiCardHeader-action': { m: 0 } }}
//         action={
//           <>
//             <Button
//               variant='contained'
//               aria-haspopup='true'
//               onClick={handleClick}
//               aria-expanded={open ? 'true' : undefined}
//               endIcon={<Icon icon='mdi:chevron-down' />}
//               aria-controls={open ? 'user-view-overview-export' : undefined}
//             >
//               Export
//             </Button>
//             <Menu open={open} anchorEl={anchorEl} onClose={handleClose} id='user-view-overview-export'>
//               <MenuItem onClick={handleClose}>PDF</MenuItem>
//               <MenuItem onClick={handleClose}>XLSX</MenuItem>
//               <MenuItem onClick={handleClose}>CSV</MenuItem>
//             </Menu>
//           </>
//         }
//       />
//       <DataGrid
//         autoHeight
//         columns={columns}
//         rows={invoiceData}
//         disableRowSelectionOnClick
//         pageSizeOptions={[7, 10, 25, 50]}
//         paginationModel={paginationModel}
//         onPaginationModelChange={setPaginationModel}
//         sx={{ '& .MuiDataGrid-columnHeaders': { borderRadius: 0 } }}
//       />
//     </Card>
//   )
// }

// export default InvoiceListTable

// OrdersListTableMapped.jsx
import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'
import { styled, useTheme } from '@mui/material/styles'

// small styled Next Link so links look like in theme
const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const money = v =>
  typeof v === 'number'
    ? v.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
    : v ?? ''

// columns for the grid (labels like your screenshots)
const columns = [
  { field: 'orderDate', headerName: 'ORDER DATE', minWidth: 120, flex: 0.12 },
  { field: 'orderId', headerName: 'ORDER ID', minWidth: 110, flex: 0.1 },
  { field: 'stage', headerName: 'STAGE', minWidth: 140, flex: 0.12 },
  { field: 'projectManager', headerName: 'PROJECT MANAGER', minWidth: 150, flex: 0.16 },
  { field: 'leadType', headerName: 'LEAD TYPE', minWidth: 120, flex: 0.1 },
  { field: 'account', headerName: 'ACCOUNT', minWidth: 180, flex: 0.18 },
  { field: 'process', headerName: 'PROCESS', minWidth: 140, flex: 0.14 },
  { field: 'amount', headerName: 'AMOUNT', minWidth: 120, flex: 0.12 },
  { field: 'shippingCharge', headerName: 'SHIPPING CHARGE', minWidth: 140, flex: 0.12 },
  { field: 'customCharge', headerName: 'CUSTOM CHARGE', minWidth: 130, flex: 0.1 },
  { field: 'invoiceAmount', headerName: 'INVOICE AMOUNT', minWidth: 140, flex: 0.12 },
  { field: 'customerPo', headerName: 'CUSTOMER PO#', minWidth: 130, flex: 0.1 },
  { field: 'paymentTerms', headerName: 'PAYMENT TERMS', minWidth: 120, flex: 0.1 },
  { field: 'supplier', headerName: 'SUPPLIER', minWidth: 180, flex: 0.16 },
  { field: 'supplierCountry', headerName: 'SUPPLIER COUNTRY', minWidth: 130, flex: 0.12 },
  { field: 'manufacturingLocation', headerName: 'MANUFACTURING LOC.', minWidth: 140, flex: 0.12 },
  { field: 'supplierAmount', headerName: 'SUPPLIER AMOUNT', minWidth: 140, flex: 0.12 },
  { field: 'shippingCost', headerName: 'SHIPPING COST', minWidth: 130, flex: 0.12 },
  { field: 'projectAmount', headerName: 'PROJECT AMOUNT', minWidth: 140, flex: 0.12 },
  { field: 'supplierNetTerms', headerName: 'SUPPLIER NET TERMS', minWidth: 140, flex: 0.12 }
]

// A helper that returns the first existing property from a prioritized list of keys
const pick = (obj, keys, fallback = '') => {
  if (!obj) return fallback
  for (const k of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== undefined && obj[k] !== null) return obj[k]
    // also try nested (dot notation) e.g. "vendor.name"
    if (k.includes('.')) {
      const parts = k.split('.')
      let cur = obj
      let ok = true
      for (const p of parts) {
        if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p]
        else {
          ok = false
          break
        }
      }
      if (ok && cur !== undefined && cur !== null) return cur
    }
  }
  return fallback
}

// Map an incoming raw object from API (whatever shape) into the grid row shape
const mapToRow = raw => {
  // try many possible keys for each target column
  return {
    // ensure unique id existed or fallback to generated from some field
    id:
      pick(raw, ['id', 'orderId', 'order_id', 'invoiceId', 'invoice_id', 'quoteNumber']) ||
      `${Math.random().toString(36).slice(2, 9)}`,
    orderDate:
      pick(raw, ['orderDate', 'order_date', 'issuedDate', 'issued_date', 'createdAt', 'date', 'dateCreated']) || '',
    orderId: pick(raw, ['orderId', 'order_id', 'id', 'invoiceId', 'invoice_id', 'quoteNumber']) || '',
    stage: pick(raw, ['stage', 'status', 'orderStatus']) || '',
    projectManager: pick(raw, ['projectManager', 'manager', 'owner', 'assignedTo', 'name']) || '',
    leadType: pick(raw, ['leadType', 'lead_type', 'lead']) || '',
    account: pick(raw, ['account', 'company', 'companyName', 'client', 'clientName', 'name']) || '',
    process: pick(raw, ['process', 'service', 'processType']) || '',
    amount: (() => {
      const val = pick(raw, ['amount', 'total', 'invoiceAmount', 'price', 'amountTotal'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    shippingCharge: (() => {
      const val = pick(raw, ['shippingCharge', 'shipping_cost', 'shippingCost', 'shipping'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    customCharge: (() => {
      const val = pick(raw, ['customCharge', 'custom_charge', 'custom_cost'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    invoiceAmount: (() => {
      const val = pick(raw, ['invoiceAmount', 'invoice_amount', 'total', 'amount'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    customerPo: pick(raw, ['customerPo', 'customer_po', 'po', 'poNumber', 'customerPO']) || '',
    paymentTerms: pick(raw, ['paymentTerms', 'netTerms', 'payment_terms']) || '',
    supplier: pick(raw, ['supplier', 'vendor', 'supplierName', 'vendorName', 'company']) || '',
    supplierCountry: pick(raw, ['supplierCountry', 'supplier_country', 'country']) || '',
    manufacturingLocation:
      pick(raw, ['manufacturingLocation', 'manufacturing_loc', 'manufacturingLocationName', 'manufacturing']) || '',
    supplierAmount: (() => {
      const val = pick(raw, ['supplierAmount', 'supplier_amount', 'vendorAmount', 'vendor_amount'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    shippingCost: (() => {
      const val = pick(raw, ['shippingCost', 'shipping_cost', 'shipCost'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    projectAmount: (() => {
      const val = pick(raw, ['projectAmount', 'project_amount', 'projectTotal', 'project_total'])
      return typeof val === 'number' ? val : Number(val) || 0
    })(),
    supplierNetTerms: pick(raw, ['supplierNetTerms', 'supplier_net_terms', 'vendorNetTerms']) || ''
  }
}

const OrdersListTable = ({ invoiceData }) => {
  const theme = useTheme()
  const [search, setSearch] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  // Use invoiceData if provided; otherwise try to use a probable global source (fallback sample minimal)
  const rowsSource = Array.isArray(invoiceData) && invoiceData.length ? invoiceData : []

  // Mapped rows — apply mapping to each raw object. Memoized for perf.
  const mappedRows = useMemo(() => rowsSource.map(mapToRow), [rowsSource])

  // Filter mapped rows with search (search across several rendered fields)
  const filteredRows = useMemo(() => {
    if (!search) return mappedRows
    const q = search.toLowerCase()
    return mappedRows.filter(r =>
      [
        String(r.orderId || ''),
        String(r.account || ''),
        String(r.process || ''),
        String(r.supplier || ''),
        String(r.customerPo || ''),
        String(r.orderDate || '')
      ].some(f => f.toLowerCase().includes(q))
    )
  }, [search, mappedRows])

  // If no invoiceData passed, show a tiny fallback example so grid is never totally empty.
  // (You can remove this if you always pass invoiceData)
  const finalRows = filteredRows.length ? filteredRows : []

  return (
    <Card>
      <CardHeader
        title='Orders List'
        sx={{
          '& .MuiCardHeader-action': { alignSelf: 'center', mr: 2 }
        }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Search:
            </Typography>
            <TextField
              size='small'
              placeholder='Search Order ID, Account, Supplier, Process'
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Box>
        }
      />

      <Box sx={{ p: 2 }}>
        {/* Plain HTML table for immediate visibility */}
        {/* <Typography variant='subtitle2' sx={{ mb: 1 }}>
          Plain HTML Table (preview of first 8 mapped rows)
        </Typography>
        <Box component='div' sx={{ overflowX: 'auto', mb: 2 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f5f6f8' }}>
                {columns.slice(0, 8).map(c => (
                  <th
                    key={c.field}
                    style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}`, textAlign: 'left' }}
                  >
                    {c.headerName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {finalRows.slice(0, 8).map(r => (
                <tr key={r.id}>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.orderDate}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.orderId}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.stage}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.projectManager}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.leadType}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.account}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{r.process}</td>
                  <td style={{ padding: 8, borderBottom: `1px solid ${theme.palette.divider}` }}>{money(r.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box> */}

        {/* The actual DataGrid */}
        <Box sx={{ height: 420, width: '100%', background: '#fff', borderRadius: 1 }}>
          <DataGrid
            rows={finalRows}
            columns={columns.map(col => {
              // render money columns nicely
              if (
                [
                  'amount',
                  'shippingCharge',
                  'customCharge',
                  'invoiceAmount',
                  'supplierAmount',
                  'shippingCost',
                  'projectAmount'
                ].includes(col.field)
              ) {
                return {
                  ...col,
                  renderCell: params => <Typography>{money(params.value)}</Typography>
                }
              }
              if (col.field === 'orderId') {
                return {
                  ...col,
                  renderCell: params => <LinkStyled href={`#`}>{params.value}</LinkStyled>
                }
              }
              if (col.field === 'account') {
                return {
                  ...col,
                  renderCell: params => <Typography>{params.value}</Typography>
                }
              }
              return col
            })}
            getRowId={row => row.id}
            autoHeight={false}
            disableRowSelectionOnClick
            pageSizeOptions={[7, 10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            sx={{
              '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeaderTitle': {
                color: theme.palette.text.primary
              },
              '& .MuiDataGrid-virtualScroller': {
                minHeight: 250
              }
            }}
          />
        </Box>

        {/* Debug JSON so you can inspect mapping results */}
        {/* <Box sx={{ mt: 2 }}>
          <Typography variant='caption' sx={{ display: 'block', mb: 1' }}>
            Mapped rows (preview)
          </Typography>
          <Box
            component='pre'
            sx={{
              maxHeight: 180,
              overflow: 'auto',
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
              p: 1,
              borderRadius: 1,
              fontSize: '0.75rem'
            }}
          >
            {JSON.stringify(finalRows.slice(0, 10), null, 2)}
          </Box>
        </Box> */}
      </Box>
    </Card>
  )
}

export default OrdersListTable
