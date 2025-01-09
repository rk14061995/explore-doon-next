import Link from "next/link";

const availablePlaceData = [
  { name: "Rishikesh", link: "/rishikesh", title: "Visit Rishikesh" },
  { name: "Mussoorie", link: "/mussoorie", title: "Visit Mussoorie" },
  { name: "Haridwar", link: "/haridwar", title: "Visit Haridwar" },
  {
    name: "Robber's Cave (Guchhupani)",
    link: "/robbers-cave",
    title: "Visit Robber's Cave",
  },
  {
    name: "Sahastradhara",
    link: "/sahastradhara",
    title: "Visit Sahastradhara",
  },
  {
    name: "Forest Research Institute (FRI)",
    link: "/forest-research-institute",
    title: "Visit Forest Research Institute (FRI)",
  },
  {
    name: "Mindrolling Monastery",
    link: "/mindrolling-monastery",
    title: "Visit Mindrolling Monastery",
  },
  {
    name: "Tapkeshwar Temple",
    link: "/tapkeshwar-temple",
    title: "Visit Tapkeshwar Temple",
  },
];

export default function PlacesList(props) {
  const currentPagePath = props?.currentPagePath || "/";
  const isSideBar = props?.isSideBar || false;
  return (
    <ul>
      {availablePlaceData.map((place, index) => {
        if (isSideBar && place.link!= currentPagePath) {
            return <li key={index}>
            <Link href={place.link} legacyBehavior>
              <a title={place.title} data-path={currentPagePath}>
                {place.name}
              </a>
            </Link>
          </li>
        } else {
          return <li key={index}>
            <Link href={place.link} legacyBehavior>
              <a title={place.title} data-path={currentPagePath}>
                {place.name}
              </a>
            </Link>
          </li>;
        }
      })}
    </ul>
  );
}
