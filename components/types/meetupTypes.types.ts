export interface IMeetup {
  id: string | number;
  image: string;
  title: string;
  address: string;
  key?: string | number;
  desc?: string;
  eventDate: {
    day: string,
    month: string,
    year: string
  }
}