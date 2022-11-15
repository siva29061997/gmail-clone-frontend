import React, { useEffect, useState } from 'react'

import '../Emaillist/Emaillist.css'
import axios from 'axios';
import Emails from './Emails';
import { env } from '../config';

function Emailbody() {
      
    const [mail,setMail] = useState([])

    useEffect(() => {
        loadData()
    }, [])
    
         let loadData = async () => {
            let mail = await axios.get(`${env.api}/emails`)
            console.log(mail)
            setMail(mail.data)
         }


    return (
        <>
            {
                mail.map((mail) => {
                    return <Emails mail={mail} />
  
                })
            }
        </>

    )
}

export default Emailbody
