const { celebrate, Segments, Joi } = require('celebrate');

// const index = celebrate({});

// const show = celebrate({});

const create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    url: Joi.string().required(),
    description: Joi.string().required(),
  }),
});

// const postsOfCategory = celebrate({});

// const categoryDetails = celebrate({});

module.exports = {
  create,
};
