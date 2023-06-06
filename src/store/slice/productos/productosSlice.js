import { createSlice } from '@reduxjs/toolkit';
export const productosSlice = createSlice({
    name: 'productos',
    initialState: {
        productos: [],
        imagen:'',
        isSaving:false
    },
    reducers:{
        loadingProduct:(state,action) =>{
            state.productos=action.payload
        },
        savingProduct:(state)=>{
            state.isSaving=true
        },
        saveData: (state, action ) => {
            state.productos.unshift(action.payload)
            state.isSaving  = false
        }
        ,
        upLoadImg:(state,action) => {
            state.imagen=action.payload
        }

    }
});
export const { saveData,savingProduct,loadingProduct,upLoadImg } = productosSlice.actions;