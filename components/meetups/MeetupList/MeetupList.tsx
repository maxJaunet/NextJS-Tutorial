import { IMeetup } from '../../types/meetupTypes.types';
import MeetupItem from '../MeetupItem/MeetupItem';
import { Stack } from '@mui/material';
import classes from './MeetupList.module.css';

interface IProps {
  meetups: IMeetup[]
}

const MeetupList: React.FC<IProps> = ({ meetups }) => {
  return (
    <ul className={ classes.list }>
      <Stack spacing={ 30 }>
        {meetups.map((meetup: IMeetup) => (
          <MeetupItem
            key={ meetup.id }
            id= {meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={ meetup.address }
            eventDate={meetup.eventDate}
          />
      ))}
      </Stack>
      
    </ul>
  );
}

export default MeetupList;
