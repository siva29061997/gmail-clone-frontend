import { createSlice } from "@reduxjs/toolkit";

export const mailslice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
        selectMessage: null,
    },

    reducers: {
        openSendMessage: (state) => {
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false
        },
        openMessage: (state,action) => {
            state.sendMessage = action.payload
        },
        deleteMassege: (state) => {
            state.deleteOk = false
        }
    }

});

export const { openSendMessage, closeSendMessage, openMessage, deleteMassege } = mailslice.actions;

export const selctSendMessegeIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selctMail = (state) => state.mail.sendMessage;

export const selctMailDelete = (state) => state.mail.deleteOk;

export default mailslice.reducer;