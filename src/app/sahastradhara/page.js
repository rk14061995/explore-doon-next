
import Descritption from "../common/Descritption";

export default function Sahastradhara() {
  const pageData = {
    "title": "Discover the Serenity of Sahastradhara in Dehradun",
    "description": "Sahastradhara, meaning 'Thousand-fold Spring,' is one of the most picturesque and popular tourist destinations in Dehradun. Known for its serene beauty, therapeutic properties, and tranquil environment, it’s a perfect getaway for visitors seeking relaxation and rejuvenation.",
    "sections": [
      {
        "type": "array_of_strings",
        "heading": "Why Visit Sahastradhara?",
        "content": [
          "Sahastradhara is famous for its numerous water pools and waterfalls, fed by the Baldi River. The water contains sulfur, believed to have medicinal properties, making it a popular spot for those looking to experience therapeutic benefits. Its natural beauty, combined with adventure opportunities, makes it a must-visit."
        ]
      },
      {
        "type": "string",
        "heading": "Key Attractions in Sahastradhara",
        "content": "Sahastradhara is known for its cascading waterfalls, sulfur-rich water pools, and surrounding caves. The area offers a soothing atmosphere, with a chance to relax in the mineral-rich waters, which are believed to cure skin ailments and relieve joint pains."
      },
      {
        "type": "string",
        "heading": "Location & Accessibility",
        "content": "Sahastradhara is located approximately 14 kilometers from Dehradun city center. It is easily accessible by taxi, auto-rickshaw, or private vehicle, with local buses also operating to and from the area."
      },
      {
        "type": "string",
        "heading": "Natural Beauty & Attractions",
        "content": "The main attraction of Sahastradhara is its stunning waterfall cascading over limestone cliffs. The surrounding area, with lush greenery and caves, provides excellent opportunities for photography and nature walks."
      },
      {
        "type": "array",
        "heading": "Activities & Experiences",
        "subType": "ol-list",
        "content": [
          {
            "title": "Bathing in Sulfur Springs",
            "description": "Experience the therapeutic benefits of the sulfur-rich waters."
          },
          {
            "title": "Photography",
            "description": "Capture the natural beauty of the waterfall and its surroundings."
          },
          {
            "title": "Nature Walks",
            "description": "Enjoy peaceful walks along the well-maintained paths in the area."
          },
          {
            "title": "Picnicking",
            "description": "Bring along a picnic and enjoy a meal amidst the scenic beauty."
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
            "description": "A fascinating cave formation with a cool stream running through it."
          },
          {
            "title": "Forest Research Institute (FRI)",
            "description": "A historic institute with stunning colonial architecture and lush gardens."
          },
          {
            "title": "Mindrolling Monastery",
            "description": "A peaceful Tibetan monastery offering spiritual solace and architectural beauty."
          },
          {
            "title": "Tapkeshwar Temple",
            "description": "A revered Hindu temple dedicated to Lord Shiva, located in a serene cave."
          }
        ]
      },
      {
        "type": "string",
        "heading": "Visitor Information",
        "content": "Sahastradhara is open daily from 7:00 AM to 7:00 PM. A nominal entry fee is charged, which includes access to the sulfur springs. The best time to visit is from March to June and September to November when the weather is pleasant."
      },
      {
        "type": "array",
        "subType": "ul-list",
        "heading": "Travel Tips",
        "content": [
          {
            "title": "Wear Comfortable Shoes",
            "description": "Comfortable walking shoes are recommended, especially if you plan to take a dip in the springs."
          },
          {
            "title": "Bring a Camera",
            "description": "Don’t forget to bring a camera to capture the stunning views of the waterfall and surrounding landscape."
          },
          {
            "title": "Carry Cash",
            "description": "It’s advisable to carry some cash for the entry fee and local purchases."
          }
        ]
      },
      {
        "type": "table",
        "heading": "Sahastradhara - Summary",
        "table": {
          "columns": ["Feature", "Description"],
          "rows": [
            { "Feature": "Location", "Description": "Dehradun, Uttarakhand, India" },
            { "Feature": "Local Name", "Description": "Sahastradhara" },
            { "Feature": "Main Attractions", "Description": "Waterfalls, sulfur-rich water pools, caves, lush greenery" },
            { "Feature": "Therapeutic Properties", "Description": "Sulfur water believed to cure skin ailments and joint pains" },
            { "Feature": "Best Time to Visit", "Description": "March to June (Summer), October to February (Winter)" },
            { "Feature": "Accessibility", "Description": "14 km from Dehradun city center; accessible by taxi or local bus" },
            { "Feature": "Nearest Railway", "Description": "Dehradun Railway Station" },
            { "Feature": "Nearest Airport", "Description": "Jolly Grant Airport, Dehradun" },
            { "Feature": "Activities", "Description": "Trekking, bathing in sulfur pools, exploring caves, photography" },
            { "Feature": "Recommended Gear", "Description": "Comfortable clothing, waterproof footwear, swimwear, towel" }
          ]
        }
      }
    ]
  };
  
  return (
    <>
      <Descritption pageData={pageData} page="Sahastradhara" currentPage="Sahastradhara" currentPagePath="/sahastradhara" />
    </>
  );
}
