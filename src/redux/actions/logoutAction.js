import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
  "logout",
  async ({ token }, { rejectWithValue }) => {
    if (!token) {
      return rejectWithValue({ message: "Token is required for logout" });
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`, // Use token in headers if supported
          },
          body: JSON.stringify({ token }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue({
          message: data.message || "Failed to logout",
          status: response.status,
          error: data,
        });
      }

      //   return;
    } catch (error) {
      return rejectWithValue({
        message: "Network error occurred",
        error: error.message || error,
      });
    }
  }
);
