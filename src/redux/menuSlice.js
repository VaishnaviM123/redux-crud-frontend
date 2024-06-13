import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItemAPI, deleteItemAPI, getItemsAPI, updateItemAPI } from "../services/AllApis";

export const fetchMenu =createAsyncThunk("menu/fetchMenu",async()=>{
    const {data} = await getItemsAPI();
    return data;
})

export const addToMenu =createAsyncThunk("menu/addToMenu",async(bodyData)=>{
    const {data} = await addItemAPI(bodyData);
    return data;
})

export const updateMenu =createAsyncThunk("menu/updateMenu",async({id,bodyData})=>{
    const {data} = await updateItemAPI(id,bodyData);
    return data;
})

export const removeMenuItem =createAsyncThunk("menu/removeMenuItem",async(id)=>{
    const {data} = await deleteItemAPI(id);
    return data;
})

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        loading:false,
        allMenuItems: [],
        copyMenuItems: [],
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMenu.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(fetchMenu.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.allMenuItems=action.payload;
            state.copyMenuItems=action.payload;
        });
        builder.addCase(fetchMenu.rejected,(state,action)=>{
            state.loading=false;
            state.allMenuItems=[]
            state.copyMenuItems=[]
            state.error=action.error.message;
        });
        builder.addCase(addToMenu.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.allMenuItems=action.payload;
            state.copyMenuItems=action.payload;
        });
        builder.addCase(addToMenu.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(addToMenu.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        });
        builder.addCase(removeMenuItem.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(removeMenuItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.error="";
            state.copyMenuItems=state.allMenuItems
        });
        builder.addCase(removeMenuItem.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        });
        builder.addCase(updateMenu.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(updateMenu.fulfilled,(state)=>{
            state.copyMenuItems=state.allMenuItems
            state.loading=false;
            state.error="";
        });
        builder.addCase(updateMenu.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        });
    },
    reducers: {

        // Search item
        searchMenuItem: (state, action) => {
            const searchQuery = action.payload.toLowerCase();
            state.allMenuItems = state.copyMenuItems.filter(item => {
                const itemName = item.iName ? item.iName.toLowerCase() : "";
                const itemCategory = item.iCategory ? item.iCategory.toLowerCase() : "";
                const itemKeywords = item.iKeywords ? item.iKeywords.toLowerCase() : "";
                const combinedString = `${itemName} ${itemCategory} ${itemKeywords}`;
                return combinedString.includes(searchQuery);
            });
        },
        // Sort by rating
        sortByRating: (state) => {
            state.allMenuItems.sort((a, b) => {
                return b.iRating - a.iRating; // Assuming 'iRating' is nested inside 'itemData'
            });
        },
        // Sort by price
        sortByPrice: (state) => {
            state.allMenuItems.sort((a, b) => {
                return b.iPrice - a.iPrice; // Assuming 'iPrice' is nested inside 'itemData'
            });
        }
    }
});

export default menuSlice.reducer;
export const { searchMenuItem, sortByPrice, sortByRating } = menuSlice.actions;