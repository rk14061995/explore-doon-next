"use client";
import Link from "next/link";
export default function BlogCard(props) {
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
  const blog = props?.blog || {};
  const additionalClasses = props?.className || "";
  return (
    <li>
      <h3>
        <strong>{blog.title}</strong>
      </h3>
      <div className="post-meta">
        <span className="post-by"><strong>Posted By:</strong> Rahul Kumar</span>
        <span className="post-on"><strong>Posted On:</strong> 14/12/2022</span>
      </div>
      <p>{blog.description}</p>
      <Link href={blog.link} legacyBehavior>
        <a title={blog.title} className={`new-exp-dun ${additionalClasses}`}>
          Read Full Blog
        </a>
      </Link>
    </li>
  );
}
