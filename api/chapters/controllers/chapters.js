'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    // GET /chaptertitles
    titles: async ctx => {
        const result = await strapi
            .query('chapters')            
            .model.fetchAll({
                columns: ['title', 'locale']
            })
        
        ctx.send(result.filter(e => e.attributes.locale === (ctx.query.locale ? ctx.query.locale : "en")));
    }
};
