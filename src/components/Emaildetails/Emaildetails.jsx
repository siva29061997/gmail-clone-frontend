import React from 'react'
import '../Emaillist/Emaillist.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import { Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import { useLinkClickHandler, useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { env } from '../config';






function Emaildetails() {

    const link = useLinkClickHandler()
    const navigate = useNavigate();


    const params = useParams()
    console.log(params)

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams)

    const [mailData, setMailData] = useState({})

    useEffect(() => {
        loadMail()
    }, [])

    let loadMail = async () => {
        try {
            let mail = await axios.get(`${env.api}/email/${params.id}`, {
                headers: {
                    'authorization': window.localStorage.getItem("app-token")
                }
            })
            setMailData(mail.data)
        } catch (error) {

        }
    }

    let emailDelete = async (id) => {
        try {
            let ask = window.confirm("Are you sure? Do you want to delete this Mail?");
            if (ask) {
                await axios.delete(`${env.api}/email/${id}`, {
                    headers: {
                        'authorization': window.localStorage.getItem("app-token")
                        
                    }
                })
                navigate("/portal/list")
            }
            loadMail()
        } catch (error) {

        }
    }

    return (
        <div className='emaildetails'>
            <div className='emaillist_setting'>
                <div className='emaillist_setting_left'>
                    <IconButton>
                        <ArrowBackIcon onClick={() => navigate("/portal/list")} />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className='emaillist_setting_right'>
                    <p>1-50 of 7,555</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className='emaildetails_messege'>
                <div className='emaildetails_header'>
                    <div className='emaildetails_header_left'>
                        <h4>{mailData.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                    </div>
                    <div className='emaildetails_header_right'>
                        <IconButton>
                            <DeleteIcon onClick={() => emailDelete(params.id)} />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>

                <div className='emaildetails_middleheader'>
                    <div className='emaildetails_middleheader_left'>
                        <IconButton>
                            <Avatar />
                        </IconButton>
                        <h4>{mailData.subject}</h4>
                        <p>{mailData.to}</p>
                    </div>
                    <div className='emaildetails_middleheader_right'>
                        <p>{mailData.time}</p>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className='emaildetails_body'>
                    <p>{mailData.messege}</p>
                </div>
            </div>
        </div>
    )
}

export default Emaildetails
