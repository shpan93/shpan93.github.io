import moment from 'moment';
import {createDay} from '../utils/index'
import {dateFormat} from '../constants/index'
export const INITIAL_STATE = {
    data: {
        isNewTaskWidgetOpened:false,
        today: createDay(moment().set({hour:0, minute:0,second:0})),
        displayed: {
            date: moment(),
            year: moment().year(),
            month: moment().format('MMMM'),
            monthIndex: moment().month() + 1,
            weekIndex: moment().week(),
            dayIndex: moment().date(),
            time: moment().format('H:MM'),
            YMD: moment().format(dateFormat),
        },
        selectedDay: createDay(),
        events: [
            {
                "description": "Fighting versus Joker",
                "author":'Bruce Wayne',
                "day": '30-08-2016',
                "startDate": '15:30',
                "endDate":'17:30',
                cuid:'1234'
            },
            {
                "description": "Meeting with CatWoman",
                "author":'Bruce Wayne',
                "day": '01-09-2016',
                "startDate": '10:30',
                "endDate":'13:30',
                cuid:'12345'
            }

        ]
    }

}