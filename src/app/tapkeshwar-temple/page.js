
import Descritption from "../common/Descritption";

export default function TapkeshwarTemple() {
  const pageData = {
    "title": "Tapkeshwar Mahadev Temple: Discover the Sacred Cave Temple in Dehradun",
    "description": "Tapkeshwar Mahadev Temple in Dehradun is a must-visit destination for devotees of Lord Shiva and tourists exploring Uttarakhand's spiritual side. This ancient temple is known for its unique natural setting and divine ambiance.",
    "sections": [
      {
        "type": "array_of_strings",
        "heading": "Why Visit Tapkeshwar Mahadev Temple?",
        "content": [
          "Tapkeshwar Mahadev Temple is an important religious site in Dehradun, attracting devotees of Lord Shiva and tourists alike. Its natural cave setting and the continuously dripping water on the Shiva Linga make it unique and spiritually significant.",
          "The temple offers a peaceful environment for spiritual reflection and is also a great spot for those interested in exploring the natural beauty of Dehradun."
        ]
      },
      {
        "type": "string",
        "heading": "History of Tapkeshwar Mahadev Temple",
        "content": "Tapkeshwar Mahadev Temple is believed to be one of the oldest Shiva temples in Dehradun. The temple's natural cave is considered a manifestation of Lord Shiva. The continuous water dripping from the cave's ceiling symbolizes the tears of Lord Shiva, enhancing the temple's sacred ambiance."
      },
      {
        "type": "array",
        "heading": "Things to Do at Tapkeshwar Mahadev Temple",
        "subType": "ol-list",
        "content": [
          {
            "title": "Visit the Cave Temple",
            "description": "Explore the natural cave where the Shiva Lingam is enshrined, and witness the unique water-dripping phenomenon that attracts both devotees and tourists."
          },
          {
            "title": "Seek Spiritual Blessings",
            "description": "Offer prayers at the temple and experience a sense of tranquility in its serene surroundings."
          },
          {
            "title": "Dip in the Sulphur Springs",
            "description": "Take a dip in the nearby sulphur water springs, believed to purify the soul before entering the temple."
          }
        ]
      },
      {
        "type": "string",
        "heading": "Best Time to Visit Tapkeshwar Mahadev Temple",
        "content": "The best time to visit the Tapkeshwar Mahadev Temple is from March to June, during the summer months when the weather is pleasant. The temple also attracts large crowds during the Mahashivratri festival in February or March."
      },
      {
        "type": "array",
        "subType": "ul-list",
        "heading": "Visiting Tips for Tapkeshwar Mahadev Temple",
        "content": [
          {
            "title": "Timings",
            "description": "The temple is open throughout the year. However, it's recommended to visit early in the morning or late in the afternoon to avoid the crowds and enjoy a more peaceful experience."
          },
          {
            "title": "Dress Code",
            "description": "Visitors should dress modestly, as the temple is a sacred place. Shoes must be removed before entering the temple premises."
          },
          {
            "title": "Facilities",
            "description": "Basic facilities like drinking water and restrooms are available near the temple. It's a good idea to carry some water and snacks if you plan to visit during peak hours."
          }
        ]
      },
      {
        "type": "array",
        "subType": "ul-list",
        "heading": "Nearby Attractions",
        "content": [
          {
            "title": "Robber's Cave (Guchhupani)",
            "description": "A natural cave with a stream running through it, perfect for a short adventure."
          },
          {
            "title": "Sahastradhara",
            "description": "Known for its medicinal sulfur springs and stunning waterfalls."
          },
          {
            "title": "Forest Research Institute",
            "description": "A renowned institution with beautiful colonial architecture and lush green surroundings."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Tapkeshwar Mahadev Temple Summary",
        "table": {
          "columns": ["Feature", "Description"],
          "rows": [
            { "Feature": "Location", "Description": "Dehradun, Uttarakhand, India" },
            { "Feature": "Dedicated To", "Description": "Lord Shiva" },
            { "Feature": "Unique Feature", "Description": "Continuous water dripping on the Shiva Linga" },
            { "Feature": "Accessibility", "Description": "6.5 km from Dehradun city center; accessible by taxi or local bus" },
            { "Feature": "Best Time to Visit", "Description": "March to June (Summer), October to February (Winter), especially during Mahashivratri" },
            { "Feature": "Nearest Railway", "Description": "Dehradun Railway Station" },
            { "Feature": "Nearest Airport", "Description": "Jolly Grant Airport, Dehradun" },
            { "Feature": "Activities", "Description": "Offering prayers, participating in religious rituals, exploring the natural cave" },
            { "Feature": "Recommended Gear", "Description": "Comfortable clothing, water bottle, camera for capturing the serene landscape" }
          ]
        }
      }
    ]
  };
  

  return (
    <>
      <Descritption pageData={pageData} page="Tapkeshwar" currentPage="Tapkeshwar Mahadev Temple" currentPagePath="/tapkeshwar-temple" />
    </>
  );
}
