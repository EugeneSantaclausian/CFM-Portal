const dev_url = "http://localhost:4000/api";
const prod_url = "https://cfm-portal-api.herokuapp.com/api";

const config = {
  baseUrl: process.env.NODE_ENV === "development" ? dev_url : prod_url,
  //token: StorageService.getStringData("access_token"),
};

export default config;
