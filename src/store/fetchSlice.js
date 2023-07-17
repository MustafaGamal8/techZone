import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: null,
  isLoading: true
};

export const fetchData =   createAsyncThunk('fetchData', async (args,thunkApi) => {
  
    try {
      let  response  =  await axios.get("https://server.mustafagamal9.repl.co/data", {
      params: {
        secretKey: "mustafa"
      }
    })

    response =  response.data
    sessionStorage.setItem("isDataFetched",true)  
    return response;
    } catch (error) {
      console.log(error)
      
    }


  });


const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  }
});


export default productsSlice.reducer;
