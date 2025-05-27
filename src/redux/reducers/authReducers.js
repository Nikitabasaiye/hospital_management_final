import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, adminRegister, doctorLogin, doctorRegister, employeeLogin, employeeRegister } from "../actions/authAction";

// The slice itself
const authSlice = createSlice({
    name: 'auth',
    initialState: {
      isAuthenticated: false,
      userType: null,
      user: null,
      loading: false,
      error: null,
    },
    reducers: {
      logout: (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.userType = null;
        state.error = null;
      },
      clearError: (state) => {
        state.error = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Doctor Login Reducers
        .addCase(doctorLogin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(doctorLogin.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(doctorLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        
        // Employee Login Reducers
        .addCase(employeeLogin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(employeeLogin.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(employeeLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Admin Login Reducers
        .addCase(adminLogin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(adminLogin.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(adminLogin.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Doctor Registration Reducers
        .addCase(doctorRegister.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(doctorRegister.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(doctorRegister.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Employee Registration Reducers
        .addCase(employeeRegister.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(employeeRegister.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(employeeRegister.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
  
        // Admin Registration Reducers
        .addCase(adminRegister.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(adminRegister.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.userType = action.payload.userType;
          state.loading = false;
        })
        .addCase(adminRegister.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { logout, clearError } = authSlice.actions;
  
  export default authSlice.reducer;