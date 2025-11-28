import React, { useState } from 'react'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'

// Theme Icon
import Icon from 'src/@core/components/icon'

// Styled link-like text for “Learn now”
const LinkStyled = styled('span')(() => ({
  fontWeight: 500,
  fontSize: '0.8rem',
  textDecoration: 'none',
  color: '#4374fce8'
}))

// -------------------- MONTH COLOR MAP (LIGHT GRADIENTS) --------------------
const monthColorMap = {
  January: { bg: 'linear-gradient(90deg, #e8ffef, #d3ffe0)', color: '#15803D' },
  February: { bg: 'linear-gradient(90deg, #ffeadf, #ffe0cf)', color: '#C2410C' },
  March: { bg: 'linear-gradient(90deg, #f3ecff, #e3d8ff)', color: '#6D28D9' },
  April: { bg: 'linear-gradient(90deg, #e4faff, #d0f4ff)', color: '#0284C7' },
  May: { bg: 'linear-gradient(90deg, #ffeaf2, #ffd3e6)', color: '#DB2777' },
  June: { bg: 'linear-gradient(90deg, #ffeaea, #ffdede)', color: '#DC2626' },
  July: { bg: 'linear-gradient(90deg, #fff8dc, #fff2c9)', color: '#92400E' },
  August: { bg: 'linear-gradient(90deg, #e6fff4, #d4ffeb)', color: '#047857' },
  September: { bg: 'linear-gradient(90deg, #e8f6ff, #d9efff)', color: '#1D4ED8' },
  October: { bg: 'linear-gradient(90deg, #f9e6ff, #efdafe)', color: '#6D28D9' },
  November: { bg: 'linear-gradient(90deg, #fff9dc, #fff2c7)', color: '#D97706' },
  December: { bg: 'linear-gradient(90deg, #ffeaea, #ffdada)', color: '#B91C1C' }
}

// helper: select color only by month name
const getMonthStyle = monthString => {
  const monthName = monthString.split(' ')[0]
  return monthColorMap[monthName] || { bg: '#E5E7EB', color: '#111827' }
}

// -------------------- RELEASE NOTES DATA --------------------
const RELEASE_NOTES = [
  {
    id: 1,
    title: 'Introducing advanced filters!',
    description: 'Quickly narrow down your data with powerful multi-condition filters.',
    month: 'October 2026',
    // this page is what we show in the iframe
    link: '/release-notes/advanced-filters'
  },
  {
    id: 2,
    title: 'Announcing a new view type: Timeline view!',
    description: 'Visualize your work across time with an intuitive horizontal timeline.',
    month: 'September 2026',
    link: '/release-notes/advanced-filters'
  },
  {
    id: 3,
    title: 'Automations have a new look!',
    description: 'Build and manage automations with a cleaner, easier-to-scan layout.',
    month: 'September 2026',
    link: '/release-notes/advanced-filters'
  },
  {
    id: 4,
    title: 'Collapse and expand all views and sections',
    description: 'Keep big bases tidy by collapsing sections you don’t need right now.',
    month: 'August 2026',
    link: '#'
  },
  {
    id: 5,
    title: 'Favorite views',
    description: 'Pin the views you use most so they’re always just one click away.',
    month: 'July 2026',
    link: '#'
  },
  {
    id: 6,
    title: 'Drag & drop dashboard widgets',
    description: 'Create customized dashboards faster with smart drag-and-drop actions.',
    month: 'June 2026',
    link: '#'
  },
  {
    id: 7,
    title: 'Improved user permissions',
    description: 'Get more granular control with new advanced permission settings.',
    month: 'May 2026',
    link: '#'
  },
  {
    id: 8,
    title: 'Bulk formatting tools',
    description: 'Apply colors, rename fields, and adjust formats to multiple columns at once.',
    month: 'April 2026',
    link: '#'
  },
  {
    id: 9,
    title: 'Dark mode support',
    description: 'Work comfortably anytime with an automatic dark mode theme.',
    month: 'March 2026',
    link: '#'
  },
  {
    id: 10,
    title: 'Quick record preview panel',
    description: 'Open records faster with a compact preview panel without leaving your view.',
    month: 'February 2026',
    link: '#'
  }
]

// -------------------- MONTH PILL --------------------
const Pill = ({ label, bg, color }) => (
  <Box
    sx={{
      width: 150,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      background: bg,
      color
    }}
  >
    {label}
  </Box>
)

// -------------------- MAIN PAGE --------------------
export default function ReleaseNotesPage() {
  const [search, setSearch] = useState('')
  const [activeNote, setActiveNote] = useState(null)

  const filteredNotes = RELEASE_NOTES.filter(note => {
    const q = search.toLowerCase()
    return note.title.toLowerCase().includes(q) || note.month.toLowerCase().includes(q)
  })

  const handleOpenNote = note => {
    setActiveNote(note)
  }

  const handleCloseDialog = () => {
    setActiveNote(null)
  }

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 2 }}>
            {/* Header */}
            <CardHeader
              title={
                <Typography variant='h6' sx={{ pb: 4, pt: 2, pl: 3 }}>
                  What&apos;s new
                </Typography>
              }
              sx={{ px: 3, py: 3 }}
              action={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Button
                    size='small'
                    startIcon={<Icon icon='mdi:filter-variant' />}
                    variant='text'
                    sx={{ textTransform: 'none', fontSize: '0.8rem' }}
                  >
                    Filter
                  </Button>
                  <IconButton size='small'>
                    <Icon icon='mdi:dots-horizontal' />
                  </IconButton>
                  <TextField
                    size='small'
                    placeholder='Search releases...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    sx={{ minWidth: 260 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <Icon icon='mdi:magnify' />
                        </InputAdornment>
                      )
                    }}
                  />
                </Box>
              }
            />

            <Divider />

            {/* Header for columns */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 3,
                fontWeight: 700,
                fontSize: '.75rem',
                color: 'text.secondary'
              }}
            >
              <Box sx={{ flexGrow: 1, pl: 3 }}>FEATURE NAME</Box>

              <Box sx={{ display: 'flex', gap: 6, minWidth: 350, justifyContent: 'flex-end', pr: 3 }}>
                <Box sx={{ width: 160, textAlign: 'center', pr: 7 }}>MONTH OF RELEASE</Box>
                <Box sx={{ width: 150, textAlign: 'center', pr: 9 }}>EXPLORE MORE</Box>
              </Box>
            </Box>

            <Divider />

            {/* Scroll list */}
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ maxHeight: 630, overflowY: 'auto' }}>
                {filteredNotes.map(note => {
                  const m = getMonthStyle(note.month)
                  return (
                    <Box
                      key={note.id}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3,
                        py: 2.5,
                        borderBottom: theme => `1px solid ${theme.palette.divider}`,
                        '&:hover': { backgroundColor: theme => theme.palette.action.hover }
                      }}
                    >
                      {/* LEFT – title + description */}
                      <Box sx={{ flexGrow: 1, pr: 3 }}>
                        <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                          {note.title}
                        </Typography>
                        <Typography variant='body2' sx={{ color: 'text.secondary', mt: 0.5 }}>
                          {note.description}
                        </Typography>
                      </Box>

                      {/* RIGHT – month pill + learn button */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                          minWidth: 350,
                          justifyContent: 'flex-end',
                          borderLeft: theme => `1px solid ${theme.palette.divider}`,
                          pl: 3
                        }}
                      >
                        <Pill label={note.month} bg={m.bg} color={m.color} />

                        <Button
                          size='small'
                          variant='outlined'
                          onClick={() => handleOpenNote(note)}
                          sx={{
                            width: 150,
                            height: 36,
                            borderRadius: '999px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <LinkStyled>Learn now</LinkStyled>
                        </Button>
                      </Box>
                    </Box>
                  )
                })}

                {filteredNotes.length === 0 && (
                  <Box sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant='body2' color='text.secondary'>
                      No release notes found for this search.
                    </Typography>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* -------------- IFRAME DIALOG -------------- */}
      <Dialog
        open={Boolean(activeNote)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth='md'
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 3,
            overflow: 'hidden' // prevent outer scroll bar
          }
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 2
          }}
        >
          <Typography variant='h6'>{activeNote?.title}</Typography>
          <IconButton size='small' onClick={handleCloseDialog}>
            <Icon icon='mdi:close' />
          </IconButton>
        </DialogTitle>

        {/* IMPORTANT: hide DialogContent scroll so only iframe scrolls */}
        <DialogContent dividers={false} sx={{ p: 0, overflow: 'hidden' }}>
          {activeNote?.link ? (
            <Box sx={{ width: '100%', height: 600 }}>
              <Box
                component='iframe'
                src={activeNote.link}
                sx={{
                  border: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </Box>
          ) : (
            <Box sx={{ p: 4 }}>
              <Typography variant='body2'>No details URL configured for this release note.</Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
