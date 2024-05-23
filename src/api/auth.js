import axios from "axios";

export class Auth {
  static async register(formData) {
    return await axios.post(
      `${import.meta.VITE_BASE_API_URL}register`,
      formData
    );
  }

  static async login(formData) {
    const { data } = await axios.post(
      `${import.meta.VITE_BASE_API_URL}login`,
      formData
    );

    return data;
  }

  static async forgot(formData) {
    return await axios.post(`${import.meta.VITE_BASE_API_URL}forgot`, formData);
  }
}
