import axios from "axios";

export const createTeamMembers = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/team-members`,
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

export const createSection = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/about-section`,
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

export const getSection = async (formData) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/about-section`,
      formData,
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

export const getAllTeamMembers = async (page) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/team-members`,
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

export const getSingleTeamMember = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/team-members/${id}`,
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

export const deleteSingleMember = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/team-members/${id}`,
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

