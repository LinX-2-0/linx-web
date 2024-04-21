import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'userReducer/fetchData',
  async (url, { getState, rejectWithValue }) => {
    const accessToken = getState().auth.accessToken;

    try {
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` } // Access token added here
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
