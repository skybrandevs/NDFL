import axios from "axios";

export const createHeroImage = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/hero-sections`,
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

export const getHeroImages = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/hero-sections`,
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

export const deleteSingleHeroImage = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/hero-sections/${id}`,
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

export const updateSingleHeroImage = async (id, form) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/hero-sections/${id}`,
      form,
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


export const createCEOQuote = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/ceo-quote`,
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

export const updateCEOQuote = async (id, formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/ceo-quote/${id, formData}`,
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

export const getCeoData = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/ceo-quote`,
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

export const deleteSingleCeoData = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/hero-sections/${id}`,
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


export const createSection3 = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/link-section`,
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

export const getSection3 = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/link-section`,
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

export const createClientsImage = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/clients`,
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

export const getClientsImage = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/clients`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const updateClientsImage = async (id,formData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/clients/${id}`,
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

export const deleteSingleClientImage = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/clients/${id}`,
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

export const createTestimony = async (formData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/v1/testimonials`,
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

export const getTestimonials = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/testimonials`,
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

export const getSingleTestimonial = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/v1/testimonials/${id}`,
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

export const updateSingleTestimonial = async (id, form) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/v1/testimonials/${id}`,
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

export const deleteSingleTestimonial = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/v1/testimonials/${id}`,
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
