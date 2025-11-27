export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location?: string;
  date?: string;
  time?: string;
};

export const events: EventItem[] = [
  {
    title: "Tech Conference 2024",
    image: "/images/event1.png",
    slug: "tech-conference-2024",
    location: "San Francisco, CA",
    date: "15-Mar-2025",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "JavaScript Summit",
    image: "/images/event2.png",
    slug: "javascript-summit",
    location: "New York, NY",
    date: "20-Apr-2025",
    time: "9:00 AM - 6:00 PM",
  },
  {
    title: "AI & ML Expo",
    image: "/images/event3.png",
    slug: "ai-ml-expo",
    location: "Boston, MA",
    date: "5-May-2025",
    time: "11:00 AM - 4:00 PM",
  },
  {
    title: "Web Dev Workshop",
    image: "/images/event4.png",
    slug: "web-dev-workshop",
    location: "Los Angeles, CA",
    date: "10-Jun-2025",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Cloud Computing Meetup",
    image: "/images/event5.png",
    slug: "cloud-computing-meetup",
    location: "Seattle, WA",
    date: "25-Jul-2025",
    time: "1:00 PM - 6:00 PM",
  },
  {
    title: "Cybersecurity Forum",
    image: "/images/event6.png",
    slug: "cybersecurity-forum",
    location: "Chicago, IL",
    date: "15-Aug-2025",
    time: "9:00 AM - 5:00 PM",
  },
];
