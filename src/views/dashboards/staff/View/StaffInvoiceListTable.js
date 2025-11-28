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
      </Box>
    </Card>
  )
}

export default OrdersListTable
