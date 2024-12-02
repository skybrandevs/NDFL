import axios from "axios";

export const createCareer = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/careers`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCareers = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/careers`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleCareer = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/careers/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSingleCareer = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/careers/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateSingleCareer = async (id, form) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/careers/${id}`,
      form,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
