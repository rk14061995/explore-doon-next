import Descritption from "../common/Descritption";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = (await params).id;

  // fetch data (if needed)
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: "Top Places to Visit in Haridwar | Best Attractions in Haridwar",
    openGraph: {
      title: "Explore the Top Places to Visit in Haridwar",
      description:
        "Discover the spiritual and cultural wonders of Haridwar, including Har Ki Pauri, Mansa Devi Temple, and the serene Ganga Aarti. Plan your unforgettable trip to Haridwar with our comprehensive guide.",
      image: "https://exploredehradun.in/images/haridwar.jpg",
      url: "https://exploredehradun.in/haridwar",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      // nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    manifest: "https://exploredehradun.in/manifest.webmanifest",
    twitter: {
      card: "summary_large_image",
      title: "Top Places to Visit in Haridwar - A Complete Travel Guide",
      description:
        "Explore the spiritual hub of Haridwar with our detailed travel guide. Check out Har Ki Pauri, Mansa Devi Temple, and other must-visit attractions in Haridwar.",
      // siteId: '1467726470533754880',
      creator: "@nextjs",
      // creatorId: '1467726470533754880',
      images: "https://exploredehradun.in/images/haridwar.jpg", // Must be an absolute URL
    },
    icons: {
      icon: [
        { url: "/images/favicon.ico", media: "(prefers-color-scheme: dark)" },
      ],
      apple: [
        {
          url: "/images/favicon_io/android-chrome-192x192.webp",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
  };
}

export default function Haridwar() {
  const pageData = {
    title: "Haridwar: The Gateway to the Gods",
    description:
      "Haridwar, located in Uttarakhand, India, is one of the holiest cities in Hinduism and is often referred to as the 'Gateway to the Gods.' Situated on the banks of the sacred Ganges River, this ancient city is known for its religious significance, spiritual atmosphere, and vibrant cultural festivals. With its spiritual allure, ghats, and temples, Haridwar offers a profound experience for visitors seeking a deep connection with the divine.",
    sections: [
      {
        type: "array_of_strings",
        heading: "Why Visit Haridwar?",
        content: [
          "Haridwar is a key pilgrimage site for Hindus and is renowned for its ghats, temples, and spiritual rituals. The city's serene environment, coupled with its sacred rituals, offers visitors a unique opportunity for spiritual enrichment and reflection. The town's cultural vibrancy, historical significance, and religious ceremonies make it a compelling destination for those looking to immerse themselves in India's spiritual heritage.",
        ],
      },
      {
        type: "string",
        heading: "Key Attractions in Haridwar",
        content:
          "Key attractions in Haridwar include the renowned Har Ki Pauri, a sacred ghat on the Ganges River; Chandi Devi Temple, an ancient temple dedicated to the goddess Chandi; and the Maya Devi Temple, an important religious site. The city is also famous for the Ganga Aarti, a grand evening ceremony that captivates visitors with its devotional beauty.",
      },
      {
        type: "string",
        heading: "History of Haridwar",
        content:
          "Haridwar's history is deeply entwined with Hindu mythology and ancient traditions. The city is mentioned in various ancient texts and scriptures as a significant spiritual center. Haridwar gained global recognition as a pilgrimage destination and a hub for spiritual seekers. The city continues to attract millions of devotees and tourists annually, drawn by its spiritual significance and historical heritage.",
      },
      {
        type: "array",
        heading: "Things to Do in Haridwar",
        subType: "ol-list",
        content: [
          {
            title: "Participate in Ganga Aarti",
            description:
              "Witness the spectacular Ganga Aarti at Har Ki Pauri, a profound ritual that honors the sacred Ganges River with hymns and lighted lamps.",
          },
          {
            title: "Explore Local Temples",
            description:
              "Visit important temples such as Chandi Devi Temple and Maya Devi Temple to experience the city's religious atmosphere and historical significance.",
          },
          {
            title: "Take a Holy Dip",
            description:
              "Experience the spiritual tradition of taking a holy dip in the Ganges River at Har Ki Pauri to cleanse oneself of sins and gain spiritual merit.",
          },
          {
            title: "Shop at Local Markets",
            description:
              "Explore the bustling local markets for traditional handicrafts, religious artifacts, and souvenirs that capture the essence of Haridwar.",
          },
        ],
      },
      {
        type: "string",
        heading: "Best Time to Visit Haridwar",
        content:
          "The best time to visit Haridwar is from March to June when the weather is warm and ideal for exploring outdoor attractions. The months from October to February are also popular due to the cooler temperatures, making it a pleasant time for spiritual retreats and festivals.",
      },
      {
        type: "array",
        subType: "ul-list",
        heading: "Haridwar Entry Fee and Timings",
        content: [
          {
            title: "Entry Fee",
            description:
              "Most attractions in Haridwar are free to visit, but some temples and religious sites may have small entry fees or donation requests.",
          },
          {
            title: "Timings",
            description:
              "Temples and ghats are generally open from 6:00 AM to 9:00 PM, though specific timings may vary. It's advisable to check in advance for festival schedules and special events.",
          },
        ],
      },
      {
        type: "array",
        subType: "ul-list",
        heading: "How to Reach Haridwar",
        content: [
          {
            title: "By Air",
            description:
              "The nearest airport is Jolly Grant Airport in Dehradun, approximately 35 km from Haridwar.",
          },
          {
            title: "By Rail",
            description:
              "Haridwar Railway Station is a major railway hub with frequent connections to major cities in India.",
          },
          {
            title: "By Road",
            description:
              "Haridwar is easily accessible by road from Dehradun, Rishikesh, and other nearby towns. Regular buses, taxis, and shared cabs are available from these places.",
          },
        ],
      },
      {
        type: "array",
        subType: "ul-list",
        heading: "Nearby Attractions",
        content: [
          {
            title: "Rishikesh",
            description:
              "Known for its yoga and adventure activities, Rishikesh is a nearby town offering spiritual and thrilling experiences.",
          },
          {
            title: "Rajaji National Park",
            description:
              "A renowned wildlife sanctuary offering opportunities for safari and wildlife spotting.",
          },
          {
            title: "Mussoorie",
            description:
              "A charming hill station known for its scenic beauty, colonial architecture, and pleasant climate.",
          },
        ],
      },
      {
        type: "table",
        heading: "Haridwar - Summary",
        table: {
          columns: ["Feature", "Description"],
          rows: [
            {
              Feature: "Location",
              Description: "Haridwar, Uttarakhand, India",
            },
            { Feature: "Established", Description: "Ancient Times" },
            {
              Feature: "Main Attractions",
              Description:
                "Har Ki Pauri, Chandi Devi Temple, Maya Devi Temple, Ganga Aarti",
            },
            {
              Feature: "Best Time to Visit",
              Description:
                "March to June (Summer), October to February (Winter)",
            },
            {
              Feature: "Accessibility",
              Description:
                "35 km from Dehradun; accessible by taxi or local bus",
            },
            {
              Feature: "Nearest Railway",
              Description: "Haridwar Railway Station",
            },
            {
              Feature: "Nearest Airport",
              Description: "Jolly Grant Airport, Dehradun",
            },
            {
              Feature: "Activities",
              Description:
                "Spiritual rituals, temple visits, holy dips, local market shopping",
            },
            {
              Feature: "Recommended Gear",
              Description: "Comfortable clothing, camera, religious offerings",
            },
          ],
        },
      },
    ],
  };

  return (
    <>
      <Descritption
        pageData={pageData}
        page="Haridwar"
        currentPage="Haridwar"
        currentPagePath="/haridwar"
      />
    </>
  );
}
