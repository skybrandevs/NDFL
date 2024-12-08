import axios from "axios";

export const createJobSubmissionEntry = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/job-submissions`,
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

export const getJobSubmissionEntries = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/job-submissions`,
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

export const getSingleJobSubmissionEntry = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/job-submissions/${id}`,
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