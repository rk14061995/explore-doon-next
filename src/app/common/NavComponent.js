import PlacesList from "./PlaceList";
import Link from "next/link";
export default function NavComponent() {
  
  return (
    <ul>
      <li>
        <Link href={"/privacy-policy"} legacyBehavior>
          <a title="Privacy Policy">Privacy Policy</a>
        </Link>
      </li>
      <li className="active">
        <Link href={"#"} legacyBehavior>
          <a title="All Places">All Places</a>
        </Link>

        <PlacesList />
      </li>
      <li>
        <Link href={"/#footer"} legacyBehavior>
          <a title="Contact Us">Contact Us</a>
        </Link>
      </li>
      <li>
        <Link href={"/#content"} legacyBehavior>
          <a title="About">About</a>
        </Link>
      </li>
      <li>
        <Link href={"/"} legacyBehavior>
          <a title="Home">Home</a>
        </Link>
      </li>
    </ul>
  );
}
