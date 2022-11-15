import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import { Link } from 'react-router-dom'

function Emails({ mail }) {
    return (
        <>
            <div className='emailbody'>
                <div className='emailbody_left'>
                    <CheckBoxOutlineBlankIcon />
                    <StarBorderIcon />
                    <LabelIcon />
                    <Link to={`/portal/mail/${mail._id}`}>
                        <h4>{mail.to}</h4>
                    </Link>
                </div>
                <div className='emailbody_middle'>
                    <div className='emailbody_middle_msg'>   
                            <p><b>{mail.subject}</b> {mail.messege}</p>
                    </div>
                </div>
                <div className='emailbody_right'>
                    <p>{mail.time}</p>
                </div>
            </div>
        </>
    )
}

export default Emails
