import { useState } from "react";
import FilterForm from "../components/meetups/FilterForm/FilterForm";
import MeetupList from "../components/meetups/MeetupList/MeetupList";
import { IMeetup } from "../components/types/meetupTypes.types";
import classes from '../styles/Home.module.css';


interface IProps {
  meetups: IMeetup[]
}

const DUMMY_MEETUPS: IMeetup[] = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: 'https://images.unsplash.com/photo-1483142667849-56d2be9daf62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    address: '2 loop street, NowhereLand',
    desc: 'This is a random description',
    eventDate:  {
      day: '27',
      month: 'February',
      year: '2022'
    }
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image: 'https://images.unsplash.com/photo-1483142667849-56d2be9daf62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    address: '2 loop street, NowhereLand',
    desc: 'This is a random description',
    eventDate: {
      day: '05',
      month: 'December',
      year: '2021'
    }
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image: 'https://images.unsplash.com/photo-1483142667849-56d2be9daf62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    address: '2 loop street, NowhereLand',
    desc: 'This is a random description',
    eventDate:  {
      day: '07',
      month: 'March',
      year: '2022'
    }
  },
  {
    id: 'm4',
    title: 'Fourth Meetup',
    image: 'https://images.unsplash.com/photo-1483142667849-56d2be9daf62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80',
    address: '2 loop street, NowhereLand',
    desc: 'This is a random description',
    eventDate: {
      day: '24',
      month: 'June',
      year: '2020'
    }
  },
]

const HomePage: React.FC<IProps> = ({ meetups }) => {
  const [meetupList, setMeetupList] = useState<IMeetup[]>(meetups);
  const [filteredDate, setFilteredDate] = useState({
    year: '',
    month: ''
  })

  
  const filterEvents = ({ year, month, reset }) => {
    if (reset) {
      setMeetupList(meetups)
    }
    else {
      const yearFilteredEvents = meetups.filter(({ eventDate }) => eventDate.year === year)
      const filteredEvents = yearFilteredEvents.filter(({eventDate}) => eventDate.month === month)
      filteredEvents ? setMeetupList(filteredEvents) : null;
      setFilteredDate({
        year,
        month
      })
    }
  }
  

   return (
     <div className={ classes.meetupList }>
       <h2>{ meetupList !== meetups ? `Events from ${filteredDate.month} ${filteredDate.year}` : `All Events` }</h2>
       <FilterForm onDateChange={ filterEvents } />
       {
         meetupList.length === 0 ? (
           <h3>No event for this date</h3>
         ) : (
           <MeetupList meetups={meetupList}/>  
         )
       }
        
     </div>
  )
};

export const getServerSideProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
  }
};

export const getEventById = (id: string | string[]) => {
  return DUMMY_MEETUPS.find(event => event.id === id)
}

export default HomePage;