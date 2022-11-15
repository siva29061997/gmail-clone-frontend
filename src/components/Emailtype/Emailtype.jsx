import React from 'react'
import '../Emaillist/Emaillist.css'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Emailtype() {
  return (
    <div className='emailtype'>
      <div className='emailtype_options emailtype_options_active'>
          <MoveToInboxIcon />
          <p>Primary</p>
      </div>
      <div className='emailtype_options'>
          <PeopleIcon />
          <p>Promotions</p>
      </div>
      <div className='emailtype_options'>
          <LocalOfferIcon />
          <p>Social</p>
      </div>
    </div>
  )
}

export default Emailtype
