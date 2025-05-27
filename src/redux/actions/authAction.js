import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Doctor Login Action
export const doctorLogin = createAsyncThunk(
  "logout",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/doctor`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      console.log({ "response from the server": data });
      // const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to login as doctor");
      }
      console.log(data.token);
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully!!!");

      return { userType: "doctor", user: { ...data } };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Employee Login Action
export const employeeLogin = createAsyncThunk(
  "auth/employee",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/employee`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to login as employee");
      }
      return { userType: "employee", user: { ...data } };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Admin Login Action
export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/admin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to login as admin");
      }
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully!!!");
      return { userType: "admin", user: { ...data } };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Doctor Registration Action
export const doctorRegister = createAsyncThunk(
  "auth/doctorRegister",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/doctor/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to register as doctor");
      }
      return { userType: "doctor", ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Employee Registration Action
export const employeeRegister = createAsyncThunk(
  "auth/employeeRegister",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/employee/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(
          data.message || "Failed to register as employee"
        );
      }
      return { userType: "employee", ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Admin Registration Action
export const adminRegister = createAsyncThunk(
  "auth/adminRegister",
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to register as admin");
      }
      return { userType: "admin", ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const { logout, clearError } = authSlice.actions;

// export default authSlice.reducer;
