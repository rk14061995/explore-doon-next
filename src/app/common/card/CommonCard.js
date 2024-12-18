"use client";
import Link from "next/link";
export default function CommonCard(props) {
//   const place = props?.place || {};
  // Function to handle CTA click
  const handleCtaClick = (customData) => {
    const eventData = {
      event_category: "CTA",
      event_label: "Click on CTA Button",
      value: 1,
      place_name: customData?.name || "", // Custom data: Name of the place
      place_id: customData?.id || "", // Custom data: ID of the place
      description: customData?.description || "", // Custom data: Description of the place
      rating: customData.rating?.text || "", // Custom data: Rating text
      cta_name: customData.link?.text || "", // Custom data: Name of the clicked CTA button
      cta_location: "Top 3 Best Places", // Custom data: Where the CTA is located (e.g., "Home Page", "Popular Attractions")
      current_url: window.location.href, // Custom data: The current page URL
    };
    // Send event to Google Analytics
    gtag("event", "cta_click", eventData);
    // Optionally, you can handle further actions here, like navigating or opening a modal
    console.log("CTA Button Clicked", eventData);
  };
  console.log("  props  ", props);
  const {place} = props;
  const description = place?.description || '';
  const highlights = place?.highlights || [];
  const href = place?.link?.href || '/';
  const text = place?.link?.text || '';
  return (
    <li>
      <div>
        <h3> {props?.place?.name}</h3>
      </div>
      <div className="d-flex">
        <div>
          <p className="imgholder">
            <img
              src="./images/dehradun/robers-cave-landscape.webp"
              alt="Chakrata"
              className="image" loading="lazy"
            />
          </p>
        </div>
        <div>
          <p>
            {props?.place?.description}
          </p>
          <ul>
            {highlights.map((highlight, index) => ( 
              <li key={index}><strong>{highlight.name}:</strong> {highlight.description}</li>
            ))}
          </ul>
          <Link href={href} legacyBehavior>
            <a title={text} className="new-exp-dun">{text}</a>
          </Link>
          {/* <p>
            <a href="javascript:void(0)" className="new-exp-dun">
              Read More &raquo;
            </a>
          </p> */}
        </div>
      </div>
    </li>
  );
}
