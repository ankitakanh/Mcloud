// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import UserViewPage from 'src/views/dashboards/loginAuditTrails/View/LoginATViewPage'

const UserView = ({ tab, invoiceData }) => {
  return <UserViewPage tab={tab} invoiceData={invoiceData} />
}

export default UserView
