import tour from './newTour';

export default {
	Query: {
		...tour.Query,
	},
	Mutation: {
		...tour.Mutation,
	},
};
