import Image from "next/image";
import Link from "next/link";
import { EventItem } from "../lib/constants";

const EventCard = ({ title, image, slug, location, date, time }: EventItem) => {
  return (
    <Link
      href={`/events/${slug}`}
      id="event-card"
      className="border border-gray-900 rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-200 ease-in-out transform hover:-translate-y-[2.5px]"
    >
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <div className="flex flex-col gap-3 py-2 px-4">
        <div className="flex flex-row gap-2">
          <Image
            src="/icons/pin.svg"
            alt="location icon"
            width={14}
            height={14}
          />
          <p>{location}</p>
        </div>

        <p className="title min-h-[58px]">{title}</p>

        <div className="datetime">
          <div>
            <Image
              src="/icons/calendar.svg"
              alt="calendar icon"
              width={14}
              height={14}
            />
            <p>{date}</p>
          </div>
          <div>
            <Image
              src="/icons/clock.svg"
              alt="clock icon"
              width={14}
              height={14}
            />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
