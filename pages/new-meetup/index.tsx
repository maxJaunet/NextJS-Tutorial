import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";
import { IMeetup } from "../../components/types/meetupTypes.types";

const NewMeetUp = () => {

  const addMeetupHandler = (data: IMeetup) => {
    console.log(data)
  }

   return (
     <div>
       <NewMeetupForm onAddMeetup={ addMeetupHandler } />
    </div>
  )
};
export default NewMeetUp;