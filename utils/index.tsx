import { Calendar, CalendarDays, Grid2X2, Inbox } from 'lucide-react';

export const PrimaryNavItems = [
  {
    name: 'Inbox',
    link: '/loggedin',
    icon: <Inbox className='h-4 w-4' />,
  },
  {
    name: 'Today',
    link: '/loggedin/today',
    icon: <Calendar className='h-4 w-4' />,
  },
  {
    name: 'Upcoming',
    link: '/loggedin/upcoming',
    icon: <CalendarDays className='h-4 w-4' />,
  },
  {
    name: 'Filters & Labels',
    link: '/loggedin/filter-labels',
    icon: <Grid2X2 className='h-4 w-4' />,
  },
];
