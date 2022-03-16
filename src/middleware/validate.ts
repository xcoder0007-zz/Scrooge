import {Joi} from 'express-validation';

export default {
  openAccount: {
    body: Joi.object({
      fname:Joi.string().min(3).required(),
      lname:Joi.string().min(3).required(),
      username:Joi.string().min(3).required(),
      dob:Joi.date().raw().required(),
      accountType:Joi.string().required(),
      phone:Joi.string().required(),
      address:Joi.string().required(),
      city:Joi.string().required(),
      state:Joi.string().min(2).max(2).optional(),
      country:Joi.string().min(3).max(3).optional(),
      currency:Joi.string().min(3).max(3).optional(),
      acceptTerms: Joi.boolean().valid(true).required(),
      ssn:Joi.string().regex(/^[0-9]{9}$/).messages({'string.pattern.base': `SSN number must have 10 digits.`}).required() 
      //Just an example of how I can verify fields
    }),
  }

};