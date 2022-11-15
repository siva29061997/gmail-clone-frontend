import React, { useState } from 'react'
import './compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../app/future/mailSlice';
import { useFormik } from 'formik';
import { env } from '../config';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';





function Compose() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            to: "",
            subject: "",
            messege: ""
        },
        validate: (values) => {
            let errors = {}

            if (values.to == "") {
                errors.to = "To is Required"
            }
            if (values.subject == "") {
                errors.subject = "Subject is Required"
            }
            if (values.messege == "") {
                errors.messege = "messege is Required"
            }
            return errors
        },
        onSubmit: async (values) => {
            let email = await axios.post(`${env.api}/email`, values)
            alert("Email Send Successfully")
            navigate('/portal/list')
            dispatch(closeSendMessage())
        }
    })

    return (
        <div className='compose'>
            <div className='compose_header'>
                <div className='compose_header_left'>
                    <span>New messege</span>
                </div>
                <div className='compose_header_right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <NavLink to={'/portal/list'} style={isActive => ({ color: isActive ? "white" : "blue" })}>
                        <CloseIcon onClick={() => dispatch(closeSendMessage())} />
                    </NavLink>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='compose_body'>
                    <div className='compose_body_form'>
                        <input type="email" placeholder="to" value={formik.values.to} onChange={formik.handleChange} name="to" />
                        <input type="text" placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange} name="subject" />
                        <textarea rows="20" onChange={formik.handleChange} value={formik.values.messege} name="messege" />
                    </div>
                </div>
                <div className='compose_footer'>
                    <div className='compose_footer_left'>
                        <button type="submit" onClick={() => dispatch(closeSendMessage())} >Sent <ArrowDropDownIcon /> </button>
                    </div>
                    <div className='compose_footer_right'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoCameraIcon />
                        <PhonelinkRingIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose
