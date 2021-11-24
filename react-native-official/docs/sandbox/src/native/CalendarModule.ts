import {NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;
const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants() as {DEFAULT_EVENT_NAME: string};

interface CalenderIF {
  createCalendarEvent(name: string, location: string): void;
}

export default CalendarModule as CalenderIF;
export {DEFAULT_EVENT_NAME};
