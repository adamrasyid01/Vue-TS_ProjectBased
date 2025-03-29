import { suratInstance, juzInstance } from "./api";

const apiBaseGetSurat = async (url: string, data: object) => {
    try {
      let response = await suratInstance.get(url, data);
      return response.data.data;
    } catch (error) {
      errorApiHandler(error);
    }
};

const apiBaseGetJuz = async (url: string, data: object) => {
    try {
      let response = await juzInstance(url, data);
      return response.data.data;
    } catch (error) {
      errorApiHandler(error);
    }
}

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

export { apiBaseGetSurat, apiBaseGetJuz};