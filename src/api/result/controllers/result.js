'use strict';

/**
 *  result controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::result.result', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
    }
    //create results
    let records = [];
    if (ctx.request.body.data.modifiedData) {
      for (const item of ctx.request.body.data.modifiedData) {
        console.log(item);
        let record = {
          data: {
            subject: item.subject,
            obtainMarks: item.obtainMarks,
            type: item.type,
            year: item.year,
            student: item.student

          }
        }
        var recordResponse = await strapi.service('api::result.result').create(record);
        if (recordResponse) {
          console.log(recordResponse);
          records.push(recordResponse.id);

        }
      }

    }
    // create result data
    // const response = await super.create(ctx);
    return records;
  }
}));

