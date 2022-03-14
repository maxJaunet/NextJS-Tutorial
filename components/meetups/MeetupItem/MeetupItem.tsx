import Image from 'next/image';
import { IMeetup } from '../../types/meetupTypes.types';
import Button from '../../ui/Button/Button';
import Card from '../../ui/Card/Card';
import classes from './MeetupItem.module.css';
import { ArrowNarrowRightIcon, CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { Grid, Stack } from '@mui/material';


const MeetupItem = ({ image, title, address, id, eventDate }: IMeetup) => {
  const meetupDate = `${eventDate.month} ${eventDate.day} ${eventDate.year}`
  return (
    <li className={ classes.item }>
      <Card>
        <Grid container>
          <Grid xs={4} item className={ classes.image }>
            <Image
              src={ image }
              alt={ title }
              objectFit='fill'
              layout='fill'
            />
          </Grid>
          <Grid xs={8} item>
            <Stack spacing={2} className={classes.content}>
              <h3>{ title }</h3>
              <Grid container>
                <LocationMarkerIcon className={ classes.icon } />
                <address className={ classes.address }>{ address }</address>
              </Grid>
              <Grid container className={ classes.date }>
                <CalendarIcon className={classes.icon} />
                <time className={classes.date}>{ meetupDate }</time>
              </Grid>
              <Grid container className={classes.actions}>
                <Button link={ String(id) }>
                  <span>Explore Event </span>
                  <ArrowNarrowRightIcon className={classes.icon} />
                </Button>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </li>
  );
}

export default MeetupItem;
