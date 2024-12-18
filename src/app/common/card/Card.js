"use client";
import Link from "next/link";
export default function Card(props) {
  const place = props?.place || {};
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
  return (
    <li className={`${place.id == 3 ? "last" : ""}`}>
      <h3>
        {place.id}. {place.name}
      </h3>
      <p className="imgholder">
        <img
          src={place.image.src}
          alt={place.alt}
          loading="lazy"
          className="image"
        />
      </p>
      <div className="rating mt-5 py-3">
        <span className="rating-label">Ratings: </span>
        <div className="stars">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="text-dark">{place.rating.text}</span>
        </div>
      </div>
      <p>{place.description}</p>
      <h4>Key Highlights :</h4>
      <ul>
        {place.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <Link href={place.link.href} legacyBehavior>
        <a
          title={place.name}
          target="_blank"
          className="new-exp-dun"
          onClick={(event) => {
            event.preventDefault(); // Prevent default Link behavior to ensure event fires
            handleCtaClick(place); // Pass the place data to the handler
          }}
        >
          {place.link.text}
        </a>
      </Link>
    </li>
  );
}
