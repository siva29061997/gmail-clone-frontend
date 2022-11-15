import { useNavigate, NavLink } from 'react-router-dom'
import Emailbody from '../Emailbody/Emailbody'
import EmaillistSetting from '../EmailListSetting/EmaillistSetting'
import Emailtype from '../Emailtype/Emailtype'
import './Emaillist.css'

function Emaillist({mail}) {

  

  const navigate = useNavigate();
  
  return (
    <div className='emaillist'>
      <EmaillistSetting />
      <Emailtype />
      
      <Emailbody />


    </div>
  )
}

export default Emaillist
