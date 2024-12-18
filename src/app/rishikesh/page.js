
import Descritption from "../common/Descritption";

export default function Rishikesh() {
  const pageData = {
    "title": "Rishikesh: The Yoga Capital of the World",
    "description": "Rishikesh, located in Uttarakhand, India, is renowned as the 'Yoga Capital of the World.' This serene town is set on the banks of the holy Ganges River and is known for its spiritual ambiance, yoga retreats, and adventure activities. With its lush green landscapes, scenic beauty, and vibrant spiritual culture, Rishikesh offers a unique blend of tranquility and thrill for visitors seeking both relaxation and adventure.",
    "sections": [
      {
        "type": "array_of_strings",
        "heading": "Why Visit Rishikesh?",
        "content": [
          "Rishikesh is a hub for spiritual seekers and adventure enthusiasts alike. The town's tranquil environment and numerous ashrams provide opportunities for meditation, yoga, and spiritual growth. Additionally, Rishikesh is renowned for its thrilling adventure sports, including white-water rafting, trekking, and camping. The town's stunning natural beauty, coupled with its spiritual significance, makes it a must-visit destination for those looking to rejuvenate their mind, body, and soul.",
          "Key attractions in Rishikesh include the iconic Lakshman Jhula, a suspension bridge with religious significance; Parmarth Niketan, a prominent ashram known for its yoga and meditation programs; and the Ganga Aarti, a mesmerizing evening ritual performed on the banks of the Ganges. The town also offers beautiful hiking trails, serene riverfronts, and vibrant local markets."
        ]  
      },
      {
        "type": "string",
        "heading": "History of Rishikesh",
        "content": "Rishikesh has been a spiritual center for thousands of years, with its origins deeply rooted in Hindu mythology and ancient traditions. The town gained prominence in the 1960s when The Beatles visited the Maharishi Mahesh Yogi ashram, bringing global attention to Rishikesh as a center for meditation and yoga. Today, Rishikesh continues to attract spiritual seekers, yoga practitioners, and tourists from around the world."
      },
      {
        "type": "array",
        "heading": "Things to Do in Rishikesh",
        "subType": "ol-list",
        "content": [
          {
            "title": "Participate in Yoga and Meditation",
            "description": "Join yoga classes and meditation sessions at ashrams like Parmarth Niketan and Sivananda Ashram to experience the town's spiritual essence."
          },
          {
            "title": "Adventure Sports",
            "description": "Enjoy thrilling activities like white-water rafting on the Ganges, trekking in the nearby hills, and camping under the stars."
          },
          {
            "title": "Explore Local Temples",
            "description": "Visit temples such as Neelkanth Mahadev and Bharat Mandir to immerse yourself in Rishikesh's rich religious and cultural heritage."
          },
          {
            "title": "Attend Ganga Aarti",
            "description": "Witness the mesmerizing Ganga Aarti at Triveni Ghat, a captivating ritual that pays homage to the sacred Ganges River."
          }
        ]
      },
      {
        "type": "string",
        "heading": "Best Time to Visit Rishikesh",
        "content": "The best time to visit Rishikesh is from March to June when the weather is pleasant and ideal for outdoor activities. The months from October to February are also popular for those who enjoy cooler temperatures and spiritual retreats."
      },
      {
        "type": "array",
        "subType": "ul-list",
        "heading": "Rishikesh Entry Fee and Timings",
        "content": [
          {
            "title": "Entry Fee",
            "description": "Most attractions in Rishikesh are free to visit, but certain ashrams and adventure activities may have entry fees or charges."
          },
          {
            "title": "Timings",
            "description": "Attractions and ashrams are generally open from 6:00 AM to 8:00 PM, though specific timings may vary. It's advisable to check in advance for yoga classes, meditation sessions, and adventure bookings."
          }
        ]
      },
      {
        "heading": "How to Reach Rishikesh",
        "type": "array",
        "subType": "ul-list",
        "content": [
          {
            "title": "By Air",
            "description": "The nearest airport is Jolly Grant Airport in Dehradun, about 20 km from Rishikesh."
          },
          {
            "title": "By Rail",
            "description": "The nearest railway station is Haridwar Railway Station, approximately 25 km from Rishikesh."
          },
          {
            "title": "By Road",
            "description": "Rishikesh is well-connected by road with Dehradun, Haridwar, and other nearby towns. Regular buses, taxis, and shared cabs are available from these places."
          }
        ]
      },
      {
        "type": "array",
        "subType": "ul-list",
        "heading": "Nearby Attractions",
        "content": [
          {
            "title": "Haridwar",
            "description": "A sacred city on the banks of the Ganges, famous for its ghats and spiritual significance."
          },
          {
            "title": "Rajaji National Park",
            "description": "A renowned wildlife sanctuary offering opportunities for safari and wildlife spotting."
          },
          {
            "title": "Mussoorie",
            "description": "A charming hill station known for its scenic beauty, colonial architecture, and pleasant climate."
          }
        ]
      },
      { 
        "type": "table",
        "heading": "Rishikesh - Summary",
        "table": {
          "columns": ["Feature", "Description"],
          "rows": [
            { "Feature": "Location", "Description": "Rishikesh, Uttarakhand, India" },
            { "Feature": "Established", "Description": "Ancient Times" },
            { "Feature": "Main Attractions", "Description": "Lakshman Jhula, Parmarth Niketan, Ganga Aarti, Local Temples" },
            { "Feature": "Best Time to Visit", "Description": "March to June (Summer), October to February (Winter)" },
            { "Feature": "Accessibility", "Description": "20 km from Dehradun; accessible by taxi or local bus" },
            { "Feature": "Nearest Railway", "Description": "Haridwar Railway Station" },
            { "Feature": "Nearest Airport", "Description": "Jolly Grant Airport, Dehradun" },
            { "Feature": "Activities", "Description": "Yoga, meditation, white-water rafting, trekking, local temple visits" },
            { "Feature": "Recommended Gear", "Description": "Comfortable clothing, yoga mat, adventure gear, camera" }
          ]
        }
      }
    ]
  };
  
  return (
    <>
      <Descritption pageData={pageData} page="Rishikesh" currentPage="Rishikesh" currentPagePath="/rishikesh" />
    </>
  );
}
