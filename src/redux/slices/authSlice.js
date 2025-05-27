// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // Mock API call for login (you can replace this with your actual API call)
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       // Mock login API logic (you would replace this with an actual request)
//       // if (email === 'doctor@example.com' && password === 'password') {
//       if (email === 'email' && password === 'password') {
//         return { userType: 'doctor', token: 'mockToken123' };
//       } else {
//         return rejectWithValue('Invalid login credentials');
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     isAuthenticated: false,
//     userType: null,
//     token: null,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.userType = null;
//       state.token = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isAuthenticated = true;
//         state.userType = action.payload.userType;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isAuthenticated = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;


// redux/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk to handle user login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password, userType }, { rejectWithValue }) => {
    try {
      // You would make an API call here (use your backend endpoint)
      // Example of successful login response:
      const response = await fetch('YOUR_API_ENDPOINT/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }),
      });

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || 'Failed to login');
      }

      return data; // Assuming the response contains user info and a token
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Initial state of the auth slice
const initialState = {
  isAuthenticated: false,
  userType: '',
  error: '',
  loading: false,
};

// Auth slice to handle login state
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Clear any errors
    clearError: (state) => {
      state.error = '';
    },
    // Logout user
    logout: (state) => {
      state.isAuthenticated = false;
      state.userType = '';
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.userType = action.payload.userType; // "doctor", "employee", or "admin"
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
