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
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// Project icon
import Icon from 'src/@core/components/icon'
import BlankLayout from 'src/@core/layouts/BlankLayout' // <- layout without sidebar/topbar

// Inline link in body text
const InlineLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' }
}))

// Helper to turn JSX into text for searching
const extractText = node => {
  if (!node) return ''
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join(' ')
  if (node.props && node.props.children) return extractText(node.props.children)
  return ''
}

// ------------------------- RELEASE NOTES DATA (Slack-style) -------------------------
const RELEASE_ITEMS = [
  {
    id: 0,
    title: 'Introducing advanced filters!',
    slug: 'advanced-filters',
    body: (
      <>
        Advanced filters make it easy to narrow down large datasets by combining multiple conditions in a single view.
        You can filter by status, owner, dates, tags and many other fields at the same time.
      </>
    ),
    extra: (
      <>
        Start by opening any view and clicking the <strong>Filter</strong> button. Add one or more rules such as
        &quot;Status is Active&quot; and &quot;Owner is Me&quot;. You can save these filters as part of a view so your
        team can re-use them. Learn more in the{' '}
        <InlineLink href='/help/advanced-filters'>Advanced filters guide</InlineLink>.
      </>
    )
  },
  {
    id: 1,
    title: 'New Slack Connect permissions for DMs',
    slug: 'slack-connect-permissions',
    body: (
      <>
        Slack Connect for direct messages will soon let members start secure DMs with people outside their organisation.
        Workspace owners and admins will be able to control who can use this capability and manage related security
        settings.
      </>
    ),
    extra: (
      <>
        Admins can review and update these controls from the Slack Connect settings page. You can{' '}
        <InlineLink href='/help/slack-connect-permissions'>learn more about managing Slack Connect</InlineLink> in your
        workspace.
      </>
    )
  },
  {
    id: 2,
    title: 'Improvements to top-level desktop app navigation',
    slug: 'desktop-app-navigation',
    body: (
      <>
        The Slack desktop app now includes updated system-level menus so you can move around channels, conversations and
        features with the keyboard or a few quick clicks.
      </>
    ),
    extra: (
      <>
        Use the File menu to create messages and manage workspace settings, or the Go menu to jump to recent items,
        downloads and more.{' '}
        <InlineLink href='/help/slack-desktop-download'>
          Download the latest desktop version for Mac, Windows or Linux
        </InlineLink>{' '}
        to try it out.
      </>
    )
  },
  {
    id: 3,
    title: 'Slack video calls now available on mobile devices',
    slug: 'mobile-video-calls',
    body: (
      <>
        You can now join or start video calls from the Slack mobile apps, using the same calling experience you have on
        desktop.
      </>
    ),
    extra: (
      <>
        Open a conversation, tap the call icon and choose a voice or video call. Visit the{' '}
        <InlineLink href='/help/slack-calling'>Slack calling help centre</InlineLink> for details on requirements and
        troubleshooting.
      </>
    )
  },
  {
    id: 4,
    title: 'Build more secure Slack apps with Socket Mode',
    slug: 'socket-mode-apps',
    body: (
      <>
        Developers can now run Slack apps inside their own infrastructure using Socket Mode, allowing apps to receive
        events from Slack without exposing public HTTP endpoints.
      </>
    ),
    extra: (
      <>
        This helps teams keep traffic behind a firewall while still using the Events API and interactive features. Read
        more in the <InlineLink href='/api/socket-mode'>Slack API documentation for Socket Mode</InlineLink>.
      </>
    )
  }
]

// ------------------------- MAIN PAGE -------------------------
function AdvancedFiltersReleaseNotesPage() {
  const [search, setSearch] = useState('')

  const filteredItems = useMemo(() => {
    const q = (search || '').toLowerCase().trim()
    if (!q) return RELEASE_ITEMS

    return RELEASE_ITEMS.filter(item => {
      const textTitle = item.title.toLowerCase()
      const textBody = extractText(item.body).toLowerCase()
      const textExtra = extractText(item.extra).toLowerCase()
      return textTitle.includes(q) || textBody.includes(q) || textExtra.includes(q)
    })
  }, [search])

  return (
    <Grid container spacing={6} sx={{ p: 3 }}>
      <Grid item xs={12}>
        <Card sx={{ borderRadius: 3 }}>
          {/* Card header (no app navbar because we use BlankLayout) */}
          {/* <CardHeader
          // title='Product updates'
          sx={{ pb: '5px', '& .MuiCardHeader-title': { letterSpacing: '.15px', fontWeight: 700 } }}
          /> */}
          <Divider />

          {/* Search bar row */}
          <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              size='small'
              placeholder='Search updates...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              sx={{ minWidth: 420 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Icon icon='mdi:magnify' />
                  </InputAdornment>
                )
              }}
            />
          </CardContent>

          <Divider />

          {/* Slack-style list */}
          <CardContent sx={{ pt: 4, pb: 5 }}>
            {filteredItems.map((item, index) => {
              const isFirst = index === 0
              const isLast = index === filteredItems.length - 1

              return (
                <Box
                  key={item.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    pb: isLast ? 0 : 4,
                    position: 'relative'
                  }}
                >
                  {/* Timeline rail + dot on the left */}
                  <Box
                    sx={{
                      width: 32,
                      display: 'flex',
                      justifyContent: 'center',
                      mr: 3
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%'
                      }}
                    >
                      {!isFirst && (
                        <Box
                          sx={{
                            flexGrow: 1,
                            width: 2,
                            bgcolor: theme => theme.palette.primary.main,
                            opacity: 0.2
                          }}
                        />
                      )}

                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: theme => theme.palette.primary.main
                        }}
                      />

                      {!isLast && (
                        <Box
                          sx={{
                            flexGrow: 1,
                            width: 2,
                            bgcolor: theme => theme.palette.primary.main,
                            opacity: 0.2
                          }}
                        />
                      )}
                    </Box>
                  </Box>

                  {/* Right content block */}
                  <Box sx={{ flex: 1 }}>
                    <Typography component='h3' sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem', lineHeight: 1.4 }}>
                      {item.title}
                    </Typography>

                    <Typography variant='body2' sx={{ mb: 1.5, color: 'text.primary', lineHeight: 1.6 }}>
                      {item.body}
                    </Typography>

                    {item.extra && (
                      <Typography variant='body2' sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                        {item.extra}
                      </Typography>
                    )}
                  </Box>
                </Box>
              )
            })}

            {filteredItems.length === 0 && (
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant='body2' color='text.secondary'>
                  No updates found for that search.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

// ---------- tell Next.js to use a blank layout: NO sidebar, NO top navbar ----------
AdvancedFiltersReleaseNotesPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default AdvancedFiltersReleaseNotesPage
