import React from 'react'
import './Sidebar.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Sidebaroption from '../Sidebaroption/Sidebaroption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../app/future/mailSlice';
import { Link } from 'react-router-dom';


function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Link to="/portal/list/:compose">
        <Button startIcon={<AddIcon />} className='compose_btn'>Compose</Button>
      </Link>
      <Sidebaroption Icon={InboxIcon} title="Inbox" number="234" isactive={true} />
      <Sidebaroption Icon={StarOutlineIcon} title="Starred" number="" />
      <Sidebaroption Icon={WatchLaterIcon} title="Snoozed" number="" />
      <Sidebaroption Icon={LabelImportantIcon} title="Important" number="" />
      <Sidebaroption Icon={SendIcon} title="Send" number="" />
      <Sidebaroption Icon={InsertDriveFileIcon} title="Drafts" number="" />
      <Sidebaroption Icon={LabelIcon} title="Catagary" number="" />
      <Sidebaroption Icon={DeleteIcon} title="[Map/Trash]" number="" />
      <Sidebaroption Icon={FindInPageIcon} title="Documents" number="" />
      <Sidebaroption Icon={ExpandMoreIcon} title="More" number="" />
    </div>
  )
}

export default Sidebar
