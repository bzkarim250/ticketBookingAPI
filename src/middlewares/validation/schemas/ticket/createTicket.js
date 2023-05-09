import Joi from 'joi';

export default Joi.object({
  from: Joi.string().min(3).required().error(new Error('Invalid departure location')),
  to: Joi.string().required().error(new Error('Invalid destination')),
  agency: Joi.string().required().error(new Error('Invalid agency')),
  numberOfTickets: Joi.number().required().error(new Error('Number of tickets must be valid')),
  departureTime: Joi.date().error(new Error('Invalid departure date and time'))
});
