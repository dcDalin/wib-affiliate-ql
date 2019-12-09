import { gql } from 'apollo-server-express';

export default gql`
	extend type Query {
		tours: [Tour]
	}

	extend type Mutation {
		newTour(newTourInput: NewTourInput): Tour
	}

	type Tour {
		id: ID!
		tourTitle: String!
		tourDescription: TourDescription!
		price: String
		createdBy: String
		approved: String
	}

	type TourDescription {
		shortDescription: String
		fullDescription: String
		from: String
		to: String
		highlights: String
		inclusions: String
		exclusions: String
		knowBeforeYouBook: String
		meetingPoint: String
	}

	input NewTourInput {
		tourTitle: String!
		price: String
		shortDescription: String
		fullDescription: String
		from: String
		to: String
		highlights: String
		inclusions: String
		exclusions: String
		knowBeforeYouBook: String
		meetingPoint: String
	}
`;
