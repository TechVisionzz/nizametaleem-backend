'use strict';

/**
 *  attendence controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::attendence.attendence', ({ strapi }) => ({
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
            date: item.date,
            status: item.status,
            student: item.student,
            period: item.period,
            year: item.year,
            month: item.month,
            day: item.day,
          }
        }
        console.log(record);
        var recordResponse = await strapi.service('api::attendence.attendence').create(record);
        if (recordResponse) {
          console.log(recordResponse);
          records.push(recordResponse.id);
        }
      }
    }
    return records;
  }
}));


