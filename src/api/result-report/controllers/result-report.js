

'use strict';
/**
 *  result-report controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const axios = require("axios");
module.exports = createCoreController('api::result-report.result-report', ({ strapi }) => ({
  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    const response = await axios.get(
      "http://azeemdin.synology.me:8082/jasperserver/rest_v2/reports/Nizametaleem/result.html",
      {
        params: {},
        withCredentials: true,
        auth: {
          username: "jasperadmin",
          password: "bitnami",
        },
      }
    );
    var data = response.data;
    console.log(data);
    return { data };
  },
}));


