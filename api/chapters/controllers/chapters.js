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
                columns: ['id', 'title', 'locale', 'published_at'],
            });
        
        const f = result.filter(e => e.attributes.published_at && e.attributes.locale === (ctx.query._locale ? ctx.query._locale : "en"));

        ctx.send(f.map(entry => {
            if (entry.content) {
                delete entry.content;
            }
            if (entry.localizations) {
                delete entry.localizations;
            }
            return entry;
        }));
    }
};
