import { createStackNavigator } from 'react-navigation'

import stackNavigatorConfig from './config'

import AdvocacyDaysListScreen from '@/screens/AdvocacyDaysListScreen'
import AdvocacyDayScreen from '@/screens/AdvocacyDayScreen'
import EventsScreen from '@/screens/EventsScreen'
import EventDetailsScreen from '@/screens/EventDetailsScreen'
import LegislatorBioScreen from '@/screens/LegislatorBioScreen'
import NotesScreen from '@/screens/NotesScreen'
import DocumentsScreen from '@/screens/DocumentsScreen'

const AppStack = createStackNavigator(
  {
    advocacyDaysList: { screen: AdvocacyDaysListScreen, path: 'advocacyDaysList' },
    advocacyDay: { screen: AdvocacyDayScreen, path: 'advocacyDay/:token' },
    events: { screen: EventsScreen, path: 'events' },
    eventDetails: { screen: EventDetailsScreen, path: 'eventDetails/:token' },
    notes: { screen: NotesScreen, path: 'notes' },
    documents: { screen: DocumentsScreen, path: 'documents' },
    legislatorBio: { screen: LegislatorBioScreen, path: 'legislatorBio/:token' }
  },
  stackNavigatorConfig
)

export default AppStack
