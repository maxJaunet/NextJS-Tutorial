import { useState } from 'react';
import Card from '../../ui/Card/Card';
import classes from './NewMeetupForm.module.css';


const NewMeetupForm = ({ onAddMeetup }) => {
  const [formValue, setFormValue] = useState({
    title: '',
    image: '',
    address: '',
    desc: '',
    eventDate: {
      day: new Date().toLocaleDateString('en-US', {day: '2-digit'}),
      month: new Date().toLocaleDateString('en-US', {month: 'long'}),
      year: new Date().toLocaleDateString('en-US', {year: 'numeric'})
  }
  });


  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onAddMeetup(formValue);
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValue(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' name='title' required id='title' onChange={handleChange} value={formValue.title} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' name='image' required id='image' onChange={handleChange} value={formValue.image} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' required id='address' onChange={handleChange} value={formValue.address} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            name='desc'
            id='description'
            onChange={ handleChange }
            required
            rows={5}
            value={formValue.desc}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
