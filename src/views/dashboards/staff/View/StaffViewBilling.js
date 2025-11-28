import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Stack from '@mui/material/Stack'
import { styled, useTheme } from '@mui/material/styles'
import Icon from 'src/@core/components/icon'
import Chip from '@mui/material/Chip'

const Dot = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: 10,
  height: 10,
  borderRadius: 6,
  marginRight: theme.spacing(1),
  background: theme.palette.primary.main
}))

const SectionTitle = ({ children }) => (
  <Typography sx={{ fontWeight: 700, mb: 1, mt: 2, fontSize: '0.95rem' }}>{children}</Typography>
)

const SmallCaption = ({ children }) => (
  <Typography variant='caption' sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
    {children}
  </Typography>
)

export default function AccountExecutiveCard() {
  const theme = useTheme()

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardHeader
        title={
          <Box>
            <Typography variant='h6' sx={{ fontWeight: 700 }}>
              Account Executive — Core Role & Responsibilities
            </Typography>
            <SmallCaption>Primary owner of client relationships and revenue delivery</SmallCaption>
          </Box>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Chip label='Key Role' color='primary' size='small' sx={{ mr: 1, fontWeight: 700, borderRadius: '6px' }} />
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1,
                background: '#f5f6fb',
                display: 'grid',
                placeItems: 'center'
              }}
            >
              <Icon icon='mdi:account-tie' fontSize={20} />
            </Box>
          </Box>
        }
        sx={{ pb: 0 }}
      />

      <CardContent sx={{ pt: 1 }}>
        {/* Core Roles */}
        <SectionTitle>🔑 Core Roles of an Account Executive</SectionTitle>
        <List dense disablePadding>
          <ListItem sx={{ alignItems: 'flex-start', py: 0.8 }}>
            <ListItemIcon sx={{ minWidth: 34, mt: 0.5 }}>
              <Icon icon='mdi:phone-classic' fontSize={18} />
            </ListItemIcon>
            <ListItemText
              primary='Primary Point of Contact'
              secondary='Serve as the direct link between the client/customer and the company.'
            />
          </ListItem>

          <ListItem sx={{ alignItems: 'flex-start', py: 0.8 }}>
            <ListItemIcon sx={{ minWidth: 34, mt: 0.5 }}>
              <Icon icon='mdi:handshake-outline' fontSize={18} />
            </ListItemIcon>
            <ListItemText
              primary='Relationship Builder'
              secondary='Cultivate and maintain strong, long-lasting, and trusting client relationships.'
            />
          </ListItem>

          <ListItem sx={{ alignItems: 'flex-start', py: 0.8 }}>
            <ListItemIcon sx={{ minWidth: 34, mt: 0.5 }}>
              <Icon icon='mdi:cash-multiple' fontSize={18} />
            </ListItemIcon>
            <ListItemText
              primary='Revenue Driver'
              secondary='Focus on achieving sales targets and company revenue goals for assigned accounts/territory.'
            />
          </ListItem>

          <ListItem sx={{ alignItems: 'flex-start', py: 0.8 }}>
            <ListItemIcon sx={{ minWidth: 34, mt: 0.5 }}>
              <Icon icon='mdi:lightbulb-on-outline' fontSize={18} />
            </ListItemIcon>
            <ListItemText
              primary='Client Strategist'
              secondary='Understand client objectives and propose relevant products or services.'
            />
          </ListItem>

          <ListItem sx={{ alignItems: 'flex-start', py: 0.8 }}>
            <ListItemIcon sx={{ minWidth: 34, mt: 0.5 }}>
              <Icon icon='mdi:account-group' fontSize={18} />
            </ListItemIcon>
            <ListItemText
              primary='Internal Collaborator'
              secondary='Coordinate internal teams (Marketing, Product, Support) to deliver on client needs.'
            />
          </ListItem>
        </List>

        <Divider sx={{ my: 2 }} />

        {/* Responsibilities */}
        <SectionTitle>✅ Key Responsibilities</SectionTitle>

        {/* 1. Sales & Business Development */}
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>1. Sales & Business Development</Typography>
          <SmallCaption>High-level activities that drive new business and revenue growth</SmallCaption>

          <List dense>
            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Lead Generation'
                secondary='Identify, qualify, and pursue new opportunities (cold outreach, networking).'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Value Presentation'
                secondary='Present and demonstrate the value of products/services to prospects.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Negotiation & Closing'
                secondary='Lead contract negotiations and finalize terms to close deals.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Upsell & Cross-sell'
                secondary='Grow revenue within existing accounts by selling additional offerings.'
              />
            </ListItem>
          </List>
        </Box>

        {/* 2. Client Management & Retention */}
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>2. Client Management & Retention</Typography>
          <SmallCaption>Keep clients happy, productive, and loyal</SmallCaption>

          <List dense>
            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Client Onboarding'
                secondary='Assist new clients with smooth transition and setup.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Account Reviews'
                secondary='Regular check-ins to assess satisfaction and project progress.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Issue Resolution'
                secondary='Serve as first escalation point and coordinate internal support.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Satisfaction'
                secondary='Continuously work to ensure high client satisfaction and loyalty.'
              />
            </ListItem>
          </List>
        </Box>

        {/* 3. Strategy & Reporting */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 0.5 }}>3. Strategy & Reporting</Typography>
          <SmallCaption>Plan, track and report so leadership knows the pipeline and performance</SmallCaption>

          <List dense>
            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Sales Strategy'
                secondary='Develop and execute plans to target new customers and expand market reach.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Market Intelligence'
                secondary='Stay current on industry trends, competitors and product offerings.'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText
                primary='Pipeline Management'
                secondary='Manage CRM activities, leads, and opportunities (eg. Salesforce).'
              />
            </ListItem>

            <ListItem sx={{ py: 0.6 }}>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <Dot />
              </ListItemIcon>
              <ListItemText primary='Reporting' secondary='Prepare forecasts and KPI reports for management.' />
            </ListItem>
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Stack direction='row' spacing={2} alignItems='center'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon icon='mdi:check-decagram' fontSize={20} />
          </Box>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            This card is styled to match your app theme. Want this printed, exported, or converted into a PDF-friendly
            layout? I can add buttons for export/print or make it a compact single-page job description card.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
