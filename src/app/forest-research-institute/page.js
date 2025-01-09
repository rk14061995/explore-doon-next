
import Descritption from "../common/Descritption";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = (await params).id;

  // fetch data (if needed)
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "FRI Dehradun Timings | Forest Research Institute Dehradun Guide",
    openGraph: {
      title: "FRI Dehradun Timings and Visitor Information",
      description:
        "Explore the Forest Research Institute (FRI) in Dehradun. Get details on FRI Dehradun timings, history, architecture, and must-visit spots within the campus.",
      image: "https://exploredehradun.in/images/fri-dehradun.jpg",
      url: "https://exploredehradun.in/forest-research-institute",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
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
      title: "FRI Dehradun Timings and Visitor Guide",
      description:
        "Plan your visit to the Forest Research Institute in Dehradun. Learn about FRI Dehradun timings, its colonial architecture, and key attractions.",
      images: "https://exploredehradun.in/images/fri-dehradun.jpg",
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

export default function ForestResearchInstitute() {
  const pageData = {
    "title": "Forest Research Institute (FRI) Dehradun: Timings, Entry Fee & Visitor Guide",
    "description": "The Forest Research Institute (FRI) Dehradun is a prime tourist attraction located in the heart of Uttarakhand. Known for its magnificent colonial architecture and rich history, FRI is more than just a research institute. It is a treasure trove of knowledge, with museums showcasing the diversity of India's forestry resources. Established in 1906, this renowned institute has become an important center for research, education, and training in forestry and environmental sciences.",
    "sections": [

      {
        "type": "array",
        "heading": "FRI Dehradun Timings and Entry Fee",
        "subType": "ul-list",
        "subDesc":"If you're planning a visit to the Forest Research Institute, it's essential to know the FRI Dehradun timings and entry fees:",
        "content": [
          {
            "title": "Entry Fee",
            "description": "If you're planning a visit to the Forest Research Institute, it's essential to know the FRI Dehradun timings and entry fees."
          },
          {
            "title": "Timings",
            "description": "FRI is open to visitors from 9:00 AM to 5:30 PM every day. However, the museums remain closed on Sundays and public holidays."
          }
        ],
        "shortSumm":"It is advisable to plan your visit early in the day to fully experience the beauty of the campus and its various attractions. The FRI grounds are expansive, and thereâ€™s plenty to see and do within the premises. The museums inside FRI are filled with valuable information, making it a perfect educational outing for families, students, and nature enthusiasts."
      },
      {
        "type": "string",
        "heading": "What to Expect During Your Visit to FRI Dehradun",
        "content": "When visiting FRI, you can expect to be immersed in the natural beauty and the scientific significance of the forests."
      },
      {
        "type": "array_of_strings",
        "heading": "What to Expect During Your Visit to FRI Dehradun",
        "content": [
          "FRI hosts six museums that display various aspects of forestry, including the Pathology Museum, Social Forestry Museum, and Timber Museum.",
          "The botanical garden within the FRI premises is home to a variety of flora, including several exotic species.",
          "FRI is not just a tourist spot; it is also a leading research institute. Visitors can learn about the various research initiatives being undertaken to improve forest management and sustainability.",
          "The picturesque setting of FRI offers many opportunities for photography enthusiasts to capture the beauty of nature and the stunning architecture of the buildings."
        ]
      },
      {
        "type": "string",
        "heading": "Why Visit FRI Dehradun?",
        "content": "FRI is a unique blend of education, nature, and history. The institute is a haven for students and researchers, but it also serves as a popular tourist destination."
      },
      {
        "type": "array_of_strings",
        "heading": "Why Visit FRI Dehradun?",
        "content": [
          "The colonial-style architecture is a major draw for visitors, making it a significant landmark in Dehradun.",
          "The museums provide an excellent opportunity for learning about forestry and environmental conservation.",
          "The lush greenery and well-maintained gardens create a serene environment perfect for relaxation and reflection.",
          "FRI is an ideal spot for family outings, where kids can learn about nature and science while enjoying the outdoors."
        ]
      },
      {
        "type": "string",
        "heading": "Best Time to Visit FRI Dehradun",
        "content": "The best time to visit FRI is between October and March when the weather in Dehradun is cool and pleasant."
      },
      {
        "type": "string",
        "heading": "How to Reach FRI Dehradun",
        "content": "FRI is conveniently located about 7 kilometers from the Dehradun city center, making it easily accessible."
      },
      {
        "type": "array_of_strings",
        "heading": "How to Reach FRI Dehradun",
        "content": [
          "The nearest airport is Jolly Grant Airport, which is about 30 km away from FRI. You can hire a taxi from the airport to reach the institute.",
          "Dehradun Railway Station is the nearest railhead, approximately 7 km away. Regular trains connect Dehradun with major cities across India.",
          "Local transportation, including taxis, auto-rickshaws, and buses, are readily available. You can easily hire a cab or take a local bus to FRI from different parts of Dehradun."
        ]
      },
      {
        "type": "string",
        "heading": "Nearby Attractions",
        "content": "While visiting FRI Dehradun, you can explore other nearby attractions to make the most of your trip."
      },
      {
        "type": "array_of_strings",
        "heading": "Nearby Attractions",
        "content": [
          "A popular natural cave formation with a flowing stream, perfect for a short adventure and picnic.",
          "Famous for its medicinal sulfur springs and scenic waterfalls, it's an excellent spot for relaxation and rejuvenation.",
          "A cave temple dedicated to Lord Shiva, located by a river. It's a serene spot for spiritual seekers and tourists alike.",
          "A small but beautiful park that is home to various deer species and is ideal for family outings and nature walks."
        ]
      },
      {
        "type": "string",
        "heading": "Visitor Tips",
        "content": "Before heading to FRI, here are some helpful tips to ensure you have a great visit."
      },
      {
        "type": "array_of_strings",
        "heading": "Visitor Tips",
        "content": [
          "Check the FRI Dehradun timings and museum opening hours beforehand to make the most of your visit.",
          "Given the expansive grounds, comfortable footwear will help you explore easily.",
          "While there are places nearby, it's always good to have water and light snacks, especially if you're traveling with children.",
          "Be sure to check if photography is allowed in certain areas or museums, as restrictions may apply.",
          "While enjoying the beauty of the institute, please do not litter and respect the natural surroundings."
        ]
      },
      {
        "type": "string",
        "heading": "Summary",
        "content": "The Forest Research Institute (FRI) Dehradun is a must-visit destination for anyone interested in nature, science, and history."
      }
    ]
  };
    

  return (
    <>
      <Descritption pageData={pageData} page="FRI" currentPage="Forest Research Institute" currentPagePath="/forest-research-institute" />
    </>
  );
}
