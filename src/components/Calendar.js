import React from 'react'
import { uniqueId } from 'lodash'
import ShortStory from 'short-story'

import gql from 'graphql-tag'

import { useQuery } from 'react-apollo-hooks'

const CALENDAR_EVENTS = gql`
	{
		calendarEvents(division: "mt") {
			Id
			Key
			Name
			HostNationCode
			HostNationName
			Category
			Venue
			IsLiveScoring
			LatestOOPDate
		}
	}
`

const Calendar = () => {
	const { data } = useQuery(CALENDAR_EVENTS)

	const events = data.calendarEvents

	return (
		<div>
			{events && events.map(e => <EventListing key={uniqueId()} {...e} />)}
		</div>
	)
}

export default Calendar

const EventListing = ({
	Caegory,
	HostNationCode,
	HostNationName,
	Id,
	IsLiveScoring,
	Key,
	LatestOOPDate,
	Name,
	Venue,
}) => {
	return (
		<div>
			<h2>{Name}</h2>
		</div>
	)
}

export const CalendarStory = ({ name }) => {
	return (
		<ShortStory
			name={name}
			knobs={{
				division: {
					type: 'segment',
					label: 'Division',
					options: ['mt', 'wt'],
					labels: ['Mens', 'Womens'],
					default: 'mt',
				},
			}}
		>
			{state => <Calendar id={name} {...state} />}
		</ShortStory>
	)
}
