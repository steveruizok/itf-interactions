const { GraphQLServer } = require('graphql-yoga')

const fetch = require('node-fetch')
const baseURL = `https://itftennis.itfdataservices.com/`

const typeDefs = `
	type Tournament {
		TournamentId: String!
		TournamentKey: String!
		Name: String!
		HostNationName: String!
		Date: String!
		PromotionalName: String
		Category: String
		Prize: String
		Surface: String
		SiteName: String
		SiteCity: String
		SiteAddress: String
		SiteWebsite: String
		entryCateoryDesc: String
	}

	type OlympicEvent {
		EndDate: String
		EventClassificationCode: String
		EventClassificationDesc: String
		EventId: Int
		HostNationCode: String
		HostNationName: String
		IndoorOutdoorFlag: String
		MatchTypeCode: String
		MatchTypeDesc: String
		Name: String
		PlayerTypeCode: String
		PlayerTypeDesc: String
		StartDate: String
		SurfaceDesc: String
		Venue: String
		Year: Int
	}

	type OlympicMatch {
		DrawsheetPositionMatch: Int
		DrawsheetRoundCode: String
		DrawsheetRoundDesc: String
		DrawsheetRoundNumber: Int
		EventID: Int
		MatchID: Int
		Score: String
		Side1Player1FamilyName: String
		Side1Player1GivenName: String
		Side1Player1ID: Int
		Side1Player1NationalityCode: String
		Side1Player2FamilyName: String
		Side1Player2GivenName: String
		Side1Player2ID: String
		Side1Player2NationalityCode: String
		Side1Seeding: Int
		Side1TieNationCode: String
		Side2Player1FamilyName: String
		Side2Player1GivenName: String
		Side2Player1ID: Int
		Side2Player1NationalityCode: String
		Side2Player2FamilyName: String
		Side2Player2GivenName: String
		Side2Player2ID: Int
		Side2Player2NationalityCode: String
		Side2Seeding: Int
		Side2TieNationCode: String
		TieID: Int
		TournamentID: Int
		WinningSide: Int
  }
  
  type CalendarEvent {
		Id: String
		Key: String
		Name: String
		HostNationCode: String
		HostNationName: String
		Category: String
		Venue: String
		IsLiveScoring: Boolean
		LatestOOPDate: String
  }


	type Query {
		tournaments(tourType: String): [Tournament]
    tournament(tourId: String, tourType: String): [Tournament]
    calendarEvents(division: String): [CalendarEvent]
	}
`

const resolvers = {
	Query: {
		tournament: (_, { tourId, tourType = 'mt' }, context) => {
			return fetch(`${baseURL}/tournament/${tourId}/${tourType}`).then(res =>
				res.json()
			)
		},
		tournaments: (_, { tourType = 'mt' }, context) => {
			return fetch(`${baseURL}/tournaments/${tourType}`).then(res => res.json())
		},
		calendarEvents: (_, { division = 'mt' }, context) => {
			return fetch(`${baseURL}/calendar/${division}/`).then(res => res.json())
		},
	},
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
