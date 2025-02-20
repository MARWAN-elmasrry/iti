import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    componentName: null,
    idProduct: null
}


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.componentName = action.payload.name;
            state.idProduct = action.payload.id;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.componentName = null;
            state.idProduct = null;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
