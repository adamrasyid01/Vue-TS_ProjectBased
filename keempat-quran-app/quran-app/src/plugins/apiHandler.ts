import baseInstance from "./api";

const apiBaseGet = async (url: string, data: object) => {
    try {
      let response = await baseInstance.get(url, data);
      return response.data.data;
    } catch (error) {
      errorApiHandler(error);
    }
};

const errorApiHandler = (error: any) => {
    if (error.response) {
        console.error("Error Response:", error.response.data);
        console.error("Error Status:", error.response.status);
        console.error("Error Headers:", error.response.headers);
    } else if (error.request) {
        console.error("Error Request:", error.request);
    } else {
        console.error("Error Message:", error.message);
    }
}

export { apiBaseGet};