import Image from "next/image";
import { useRouter } from "next/router";
import { getEventById } from "../../../pages";
import classes from './MeetupDetails.module.css';

const MeetupDetails = () => {
  const router = useRouter();
  const pathId = router.query.single_meetup;
  const meetup = getEventById(pathId);
  return !meetup
    ? (
      <p>No meetup found</p>
    ) : (
     <section className={classes.details}>
      <h2>{ meetup.title }</h2>
      <div>
        <Image
         src={ meetup.image }
         alt={ meetup.title }
          width="200px"
          height="200px"
        />
      </div>
       <p>{ meetup.desc }</p>
       <address>{ meetup.address }</address>
     </section>
  )
};
export default MeetupDetails;