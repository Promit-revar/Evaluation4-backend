const axios = require('axios');
const { BASE_URL } = require('../constants/endpoints');
exports.makeRequest = async ({ url, method }, dynamicConfig={}) => {
  try {
    const response = await axios({
      baseURL: BASE_URL,
      url,
      method,
      ...dynamicConfig,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
