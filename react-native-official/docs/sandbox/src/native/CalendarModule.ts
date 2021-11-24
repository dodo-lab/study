import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

interface CalenderIF {
  createCalendarEvent(name: string, location: string): void;
}

export default CalendarModule as CalenderIF;
