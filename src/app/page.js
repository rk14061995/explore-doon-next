import Image from "next/image";
import styles from "./page.module.css";
import HeadComponent from "./common/HeadComponent";
import Wrapper from "./common/Wrapper";
import ContainerComponent from "./common/ContainerComponent";
import ContentComponent from "./common/ContentComponent";

import Card from "./common/card/Card";
import CommonCard from "./common/card/CommonCard";
import BlogCard from "./common/card/BlogCard";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = (await params).id;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: "Top Places to Visit in Dehradun | Best Attractions in Dehradun",
    openGraph: {
      title: "Discover the Top Places to Visit in Dehradun",
      description:
        "'Explore the must-visit places in Dehradun such as the Forest Research Institute, Sahastradhara, and Robber's Cave. Plan your perfect trip to Dehradun with our detailed guide.",
      image: "https://exploredehradun.in/images/dehradun.jpg",
      url: "https://exploredehradun.in/",
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
      title: "Top Places to Visit in Dehradun - A Complete Travel Guide",
      description:
        "Explore the best places to visit in Dehradun. Check out Robber's Cave, Sahastradhara, and more in our ultimate travel guide to Dehradun’s top attractions.",
      // siteId: '1467726470533754880',
      creator: "@nextjs",
      // creatorId: '1467726470533754880',
      images: "https://exploredehradun.in/images/dehradun.jpg", // Must be an absolute URL
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
export default function Home() {
  const threePlace = {
    places: [
      {
        id: 1,
        name: "Robber's Cave (Guchhupani)",
        image: {
          src: "./images/dehradun/robers-cave-landscape.webp",
          alt: "Robber's Cave in Dehradun, also known as Guchhupani",
        },
        rating: {
          stars: 5,
          text: "(5 / 5)",
        },
        description:
          "Robber's Cave, or Guchhupani, is a stunning natural formation where a stream mysteriously disappears underground, only to reappear a few meters away. This geological marvel offers thrilling adventures through narrow passages, ideal for nature lovers and thrill-seekers alike.",
        highlights: [
          "Stream disappears underground",
          "Historical significance as a hideout",
          "Great for adventure seekers",
        ],
        link: {
          href: "robbers-cave/",
          text: "Read More »",
        },
      },
      {
        id: 2,
        name: "FRI",
        image: {
          src: "./images/dehradun/dehradun-landscape.webp",
          alt: "Forest Research Institute (FRI) in Dehradun",
        },
        rating: {
          stars: 5,
          text: "(5 / 5)",
        },
        description:
          "The Forest Research Institute in Dehradun is a sprawling colonial structure surrounded by botanical gardens. It is one of Asia's largest forestry research institutes, with museums, a herbarium, and wood sample collections, serving as a hub for education and conservation.",
        highlights: [
          "Largest forestry research institute in Asia",
          "Beautiful colonial architecture",
          "Educational and conservation hub",
        ],
        link: {
          href: "forest-research-institute/",
          text: "Read More »",
        },
      },
      {
        id: 3,
        name: "Sahastradhara",
        image: {
          src: "./images/dehradun/sahastradhara-landscape.webp",
          alt: "Sahastradhara - Thousandfold Spring in Dehradun",
        },
        rating: {
          stars: 4,
          text: "(4 / 5)",
        },
        description:
          "Sahastradhara, or 'Thousandfold Spring,' is known for its sulfur springs and scenic waterfalls. The limestone deposits create beautiful cascades, ideal for relaxation and rejuvenation. Visitors can enjoy the medicinal waters and explore the surrounding caves and trekking trails.",
        highlights: [
          "Famous for sulfur springs",
          "Therapeutic properties",
          "Beautiful waterfalls and caves",
        ],
        link: {
          href: "sahastradhara/",
          text: "Read More »",
        },
      },
    ],
  };
  const places = {
    best_place: [
      {
        id: 1,
        name: "Robber's Cave (Guchhupani)",
        image: {
          src: "./images/dehradun/robers-cave-landscape.webp",
          alt: "Robber's Cave in Dehradun, also known as Guchhupani",
        },
        rating: {
          stars: 5,
          text: "(5 / 5)",
        },
        description:
          "Robber's Cave, or Guchhupani, is a stunning natural formation where a stream mysteriously disappears underground, only to reappear a few meters away. This geological marvel offers thrilling adventures through narrow passages, ideal for nature lovers and thrill-seekers alike.",
        highlights: [
          {
            name: "Stream Disappearance",
            description:
              "The stream disappears underground and reappears a few meters away.",
          },
          {
            name: "Historical Significance",
            description: "Once a hideout, adding to its charm.",
          },
          {
            name: "Adventure Spot",
            description: "Great for thrill-seekers and exploration.",
          },
        ],
        link: {
          href: "robbers-cave/",
          text: "Read More »",
        },
      },
      {
        id: 2,
        name: "FRI",
        image: {
          src: "./images/dehradun/dehradun-landscape.webp",
          alt: "Forest Research Institute (FRI) in Dehradun",
        },
        rating: {
          stars: 5,
          text: "(5 / 5)",
        },
        description:
          "The Forest Research Institute in Dehradun is a sprawling colonial structure surrounded by botanical gardens. It is one of Asia's largest forestry research institutes, with museums, a herbarium, and wood sample collections, serving as a hub for education and conservation.",
        highlights: [
          {
            name: "Asia's Largest Forestry Institute",
            description: "Known for its educational importance and resources.",
          },
          {
            name: "Colonial Architecture",
            description: "Beautiful structure surrounded by greenery.",
          },
          {
            name: "Botanical Gardens",
            description: "Perfect for nature lovers.",
          },
        ],
        link: {
          href: "forest-research-institute/",
          text: "Read More »",
        },
      },
      {
        id: 3,
        name: "Sahastradhara",
        image: {
          src: "./images/dehradun/sahastradhara-landscape.webp",
          alt: "Sahastradhara - Thousandfold Spring in Dehradun",
        },
        rating: {
          stars: 4,
          text: "(4 / 5)",
        },
        description:
          "Sahastradhara, or 'Thousandfold Spring,' is known for its sulfur springs and scenic waterfalls. The limestone deposits create beautiful cascades, ideal for relaxation and rejuvenation. Visitors can enjoy the medicinal waters and explore the surrounding caves and trekking trails.",
        highlights: [
          {
            name: "Sulfur Springs",
            description: "Known for their therapeutic properties.",
          },
          {
            name: "Scenic Waterfalls",
            description: "Beautiful cascades formed by limestone deposits.",
          },
          {
            name: "Caves and Trails",
            description: "Ideal for exploration and trekking.",
          },
        ],
        link: {
          href: "sahastradhara/",
          text: "Read More »",
        },
      },
    ],
    hill_station: [
      {
        id: 1,
        name: "Mussoorie",
        image: {
          src: "./images/dehradun/robers-cave-landscape.webp",
          alt: "Mussoorie",
        },
        description:
          "Mussoorie, often referred to as the 'Queen of Hills,' is a popular hill station near Dehradun, located just 35 km away. Known for its scenic beauty, pleasant climate, and colonial charm, Mussoorie offers stunning views of the Shivalik ranges and the Doon Valley.",
        highlights: [
          {
            name: "Kempty Falls",
            description: "A popular waterfall located 13 km from Mussoorie.",
          },
          {
            name: "Gun Hill",
            description:
              "The second-highest point in Mussoorie, offering panoramic views of the Himalayas.",
          },
          {
            name: "Company Garden",
            description:
              "A beautiful garden with a mini lake, located 3 km from Mall Road.",
          },
          {
            name: "Lal Tibba",
            description:
              "The highest point in Mussoorie, providing stunning views of snow-capped peaks.",
          },
        ],
        link: {
          href: "mussoorie/",
          text: "Read More »",
        },
      },
      {
        id: 2,
        name: "Dhanaulti",
        image: {
          src: "./images/dehradun/robers-cave-landscape.webp",
          alt: "Dhanaulti",
        },
        description:
          "Dhanaulti is a serene hill station located about 60 km from Dehradun, known for its tranquility and unspoiled natural beauty. Perched at an altitude of 2,250 meters, Dhanaulti offers panoramic views of the Himalayas and is less crowded compared to other hill stations.",
        highlights: [
          {
            name: "Eco Park",
            description: "A quiet, scenic park with views of the Himalayas.",
          },
          {
            name: "Surkanda Devi Temple",
            description: "A popular temple located 8 km from Dhanaulti.",
          },
          {
            name: "Apple Orchards",
            description:
              "Famous for their fresh produce, great for a relaxing walk or picnic.",
          },
          {
            name: "Dashavatar Temple",
            description:
              "An ancient temple with intricate architecture and historical significance.",
          },
        ],
        link: {
          href: "",
          text: "Read More »",
        },
      },
      {
        id: 3,
        name: "Chakrata",
        image: {
          src: "./images/dehradun/robers-cave-landscape.webp",
          alt: "Chakrata",
        },
        description:
          "Chakrata is a quaint hill station located around 90 km from Dehradun, known for its untouched beauty and peaceful atmosphere. Nestled amidst dense forests and picturesque landscapes, Chakrata is ideal for trekking, bird watching, and exploring ancient caves.",
        highlights: [
          {
            name: "Tiger Falls",
            description:
              "A stunning waterfall, perfect for picnics and trekking.",
          },
          {
            name: "Deoban",
            description:
              "A scenic forest area, offering amazing views of the Himalayas.",
          },
          {
            name: "Budher Caves",
            description:
              "Known for their historical significance and ideal for exploring.",
          },
          {
            name: "Chilmiri Neck",
            description:
              "A popular sunset point providing breathtaking views of the valley.",
          },
        ],
        link: {
          href: "",
          text: "Read More »",
        },
      },
    ],

    blogsSection: {
      title: "Explore Our Latest Travel Blogs",
      description:
        "Discover insightful travel guides and tips on the best places to visit in and around Dehradun. Whether you're a nature lover, adventure enthusiast, or someone looking to unwind in the tranquility of the hills, our blogs provide all the information you need to plan your perfect trip. Check out some of our latest articles below.",
      blogs: [
        {
          title: "Famous Places to Visit in Dehradun",
          description:
            "Our comprehensive guide to the Best Places to Visit in Dehradun takes you through the must-see spots in the city, from its serene monasteries and historical landmarks to bustling markets and scenic parks. Learn about the top attractions, hidden gems, and local favorites to make the most of your visit to Dehradun.",
          link: "./article/famous-places-to-visit-dehradun",
          link_text: "Read More »",
          author: "John Doe",
          posted_on: "2024-08-20",
        },
        {
          title: "Kanatal Uttarakhand",
          description:
            "Our comprehensive guide to the Best Places to Visit in Kantal, Dehradun offers a deep dive into this serene hill station, known for its lush green landscapes and peaceful environment. From tranquil nature walks to scenic viewpoints, Kantal provides a perfect retreat for nature lovers. Learn about the best spots to visit, hidden gems, and local attractions that make Kantal a must-visit destination near Dehradun.",
          link: "./article/kanatal-uttarakhand",
          link_text: "Read More »",
          author: "Jane Smith",
          posted_on: "2024-08-22",
        },
        {
          title: "Best Hill Stations Near Dehradun",
          description:
            "Looking for a refreshing getaway? Our blog on the Best Hill Stations Near Dehradun covers serene and picturesque hill stations that are just a short drive away. From the charming town of Mussoorie to the serene environs of Dhanaulti, find your perfect escape into the hills and experience the breathtaking beauty of the Himalayas.",
          link: "./article/best-hill-station-near-dehradun",
          link_text: "Read More »",
          author: "Alex Johnson",
          posted_on: "2024-08-25",
        },
      ],
    },
    adventureActivities: {
      title: "Best Adventure Activities Near Dehradun",
      description:
        "Unleash your adventurous spirit with some of the best adventure activities near Dehradun. From thrilling river rafting to paragliding over the majestic Himalayan valleys, these activities promise adrenaline-pumping experiences for adventure seekers of all levels.",
      activities: [
        {
          name: "River Rafting in Rishikesh",
          image: {
            src: "./images/adventurePics/riverRafting.webp",
            alt: "River Rafting in Rishikesh",
          },
          description:
            "Experience the thrill of river rafting on the Ganga in Rishikesh, located near Dehradun. With rapids ranging from Grade I to Grade IV, this activity is perfect for both beginners and seasoned adventurers. The scenic landscapes and the roar of the river make it an unforgettable experience.",
          highlights: [
            "Rapids from Grade I to IV",
            "Scenic Himalayan backdrops",
            "Best from September to June",
          ],
          readMoreLink: "javascript:void(0)",
        },
        {
          name: "Paragliding in Mussoorie",
          image: {
            src: "./images/adventurePics/paragliding.webp",
            alt: "Paragliding in Mussoorie",
          },
          description:
            "Soar above the hills of Mussoorie and enjoy a bird’s-eye view of the beautiful Doon Valley. Paragliding is a popular adventure activity near Dehradun, offering a thrilling experience for adrenaline junkies and nature lovers alike.",
          highlights: [
            "Stunning views of the Doon Valley",
            "Trained instructors for a safe experience",
            "Best from March to June & September to November",
          ],
          readMoreLink: "javascript:void(0)",
        },
        {
          name: "Camping in Kanatal",
          image: {
            src: "./images/adventurePics/camping.webp",
            alt: "Camping in Kanatal",
          },
          description:
            "Set up camp under the stars in the serene and picturesque setting of Kanatal. Just a short drive from Dehradun, Kanatal offers the perfect mix of adventure and tranquility, with activities like trekking, bonfires, and stargazing.",
          highlights: [
            "Bonfires and stargazing",
            "Trekking and nature walks",
            "Best from April to June & September to November",
          ],
          readMoreLink: "javascript:void(0)",
        },
        {
          name: "Bungee Jumping in Rishikesh",
          image: {
            src: "./images/adventurePics/bungeeJumping.webp",
            alt: "Bungee Jumping in Rishikesh",
          },
          description:
            "Take a leap of faith and experience the thrill of bungee jumping in Rishikesh. This 83-meter jump from a fixed platform will leave you with an unforgettable rush of adrenaline as you dive into the abyss with the Ganges below.",
          highlights: [
            "83-meter jump from a fixed platform",
            "World-class safety standards",
            "Best from October to April",
          ],
          readMoreLink: "javascript:void(0)",
        },
        {
          name: "Trekking in Chakrata",
          image: {
            src: "./images/adventurePics/chakrataTrek.webp",
            alt: "Trekking in Chakrata",
          },
          description:
            "Explore the untouched beauty of Chakrata with its dense forests, waterfalls, and captivating landscapes. The treks in this region offer a mix of adventure and tranquility, making it an ideal getaway for nature and adventure lovers.",
          highlights: [
            "Dense forests and serene waterfalls",
            "Moderate difficulty level",
            "Best from March to June & October to November",
          ],
          readMoreLink: "javascript:void(0)",
        },
      ],
    },
  };
  const blogHeading = places.blogsSection.title || "";
  const blogs = places.blogsSection.blogs || [];
  const adventureActivities = places.adventureActivities || {};
  return (
    <>
      {/* <h1>Dehradun</h1>
    <HeadComponent /> */}
      {/* 
    <div>
      Hero
    </div>
    <div>
      About Dehradun
    </div>
    <div>
      Top Attractions
    </div>
    <div>
      Adventure activities
    </div>
    <div>
      Cultural Experience
    </div>
    <div>
      Travel Tips
    </div>
    <div>
      Testimonials
    </div>
    <div>
      Footer
    </div> */}
      <Wrapper colClassName="col2" className="Hero">
        <div id="intro">
          <span id="mainHeading">
            <h1>Places to Visit in Dehradun</h1>
          </span>
          <div className="fl_left">
            <ul>
              <li>
                <h2>Top Gems & Spots in Dehradun</h2>
                <p>
                  Dehradun, the gateway to Uttarakhand, offers a unique mix of
                  cultural heritage and natural beauty, making it one of the
                  most sought-after destinations in northern India. Among the
                  must-visit places in Dehradun is the historic{" "}
                  <a
                    target="_blank"
                    href="tapkeshwar-temple/"
                    title="Tapkeshwar Temple"
                  >
                    Tapkeshwar Temple
                  </a>
                  , dedicated to Lord Shiva, where water continuously drips over
                  the Shiva Lingam. Another iconic landmark is the{" "}
                  <a
                    target="_blank"
                    href="mindrolling-monastery/"
                    title="Mindrolling Monastery"
                  >
                    Mindrolling Monastery
                  </a>
                  , a center of Tibetan Buddhism known for its serene
                  environment and impressive architecture. The local markets of
                  Dehradun, like Paltan Bazaar, are great places to explore
                  traditional crafts, textiles, and handmade goods that reflect
                  the region's cultural vibrancy. The city also hosts colorful
                  festivals, including Basant Panchami and Ganga Dussehra, which
                  further highlight the rich cultural fabric of the region.
                </p>
              </li>
              <li className="last">
                <h2>Nature's Delight in Dehradun</h2>
                <p>
                  Dehradun is renowned for its lush green surroundings and
                  stunning landscapes, making it a paradise for nature lovers.
                  Among the top places to visit in Dehradun is Sahastradhara,
                  famous for its cascading waterfalls and healing sulfur
                  springs, perfect for relaxation and rejuvenation. For wildlife
                  enthusiasts, Rajaji National Park offers a thrilling adventure
                  on the outskirts of the city, where you might spot elephants,
                  tigers, leopards, and an array of vibrant bird species.
                </p>
                <p>
                  If you're seeking a peaceful retreat, Malsi Deer Park is ideal
                  for a relaxing day surrounded by nature, where you can spot
                  graceful deer and enjoy a refreshing environment. Another
                  serene escape is Lachhiwala Nature Park, where families can
                  enjoy boating, picnics, and nature trails amidst dense
                  greenery.
                </p>
                {/* <p>
                For breathtaking panoramic views, a visit to Robber's Cave (Guchhupani) is a must. This unique spot, with its flowing water through narrow, mysterious caves, is perfect for exploration and adventure. Similarly, Forest Research Institute (FRI) is a stunning architectural marvel surrounded by sprawling green lawns, offering visitors a blend of history, education, and natural beauty.

Whether you love adventure, wildlife, or simply relaxing in nature's lap, Dehradun has something to offer every traveler, making it a true nature's delight.
                </p> */}
              </li>
            </ul>
          </div>

          <div className="fl_right">
            <ul id="rotation">
              <li id="banner-1">
                <a
                  href="javascript:void(0)"
                  title="Best Places to Visit in Dehradun"
                >
                  <img src="./images/1.webp" alt="Dehradun" />
                </a>
              </li>
              <li id="banner-2">
                <a
                  href="javascript:void(0)"
                  title="Best Places to Visit in Dehradun"
                >
                  <img
                    src="https://exploredehradun.in/images/dehradun/1.webp"
                    alt="Best Places to Visit in Dehradun"
                  />
                </a>
              </li>
              <li id="banner-3">
                <a
                  href="javascript:void(0)"
                  title="Best Places to Visit in Dehradun"
                >
                  <img
                    src="./images/doonPics/3.webp"
                    alt="Best places in Dehradun"
                  />
                </a>
              </li>
            </ul>
          </div>
          <br className="clear" />
        </div>
      </Wrapper>
      <Wrapper colClassName="col3" className="About">
        <ContainerComponent>
          <div id="content">
            {/* <!-- About Dehradun Section --> */}
            <h2>
              About Dehradun : Unveil the Charm of Dehradun, Your Doorway to the
              Himalayas
            </h2>

            <div className="center-span">
              <img
                src="./images/dehradun/about.webp"
                alt="Explore Dehradun - Gateway to the Himalayas"
                width="100%"
              />
            </div>

            <p>
              <strong>Dehradun</strong>, the capital of Uttarakhand, India, is
              nestled in the scenic foothills of the Himalayas. Renowned for its
              picturesque landscapes, pleasant climate, and rich cultural
              heritage, the city offers a mix of natural beauty and urban
              development, making it a desired destination for tourists and
              residents alike.
            </p>
            <p>
              Home to prestigious institutions like the Indian Military Academy
              (IMA) and the <strong>Forest Research Institute (FRI)</strong>,
              Dehradun also stands out as an educational hub. These institutions
              underscore the city's academic prestige and its role as a center
              for learning and research.
            </p>

            {/* <!-- Best Places to Visit in Dehradun Section --> */}
            <h2>Best Places to Visit in Dehradun</h2>
            <p>
              Dehradun is more than just a gateway to popular destinations like{" "}
              <strong>
                <a href="/mussoorie" title="Best Places to Visit in Mussoorie">
                  Mussoorie
                </a>{" "}
                ,
                <a href="/rishikesh" title="Best Places to Visit in Rishikesh">
                  Rishikesh
                </a>{" "}
                ,
              </strong>{" "}
              and
              <strong>
                <a href="/haridwar" title="Best Places to Visit in Haridwar">
                  Haridwar
                </a>{" "}
              </strong>
              . The city itself boasts remarkable landmarks, including{" "}
              <strong>
                <a href="robbers-cave/">Robber's Cave (Gucchupani)</a>
              </strong>
              , known for its mysterious caves, and
              <strong>
                <a target="_blank" href="sahastradhara/">
                  Sahastradhara
                </a>
              </strong>
              , famous for its healing sulfur springs. Don’t miss the iconic
              Clock Tower and serene spots like{" "}
              <strong>Tapkeshwar Temple</strong> and{" "}
              <strong>Malsi Deer Park</strong>, perfect for nature enthusiasts.
            </p>

            {/* <!-- Cultural and Culinary Highlights Section --> */}
            <h2>Cultural and Culinary Highlights of Dehradun</h2>
            <p>
              Dive into Dehradun’s rich food culture with local Garhwali and
              Kumaoni flavors, offering a culinary adventure for those seeking
              regional delicacies. From bustling markets to serene spots,
              Dehradun captures the essence of tranquility and adventure.
            </p>
            <p>
              The city's vibrant heritage blends ancient temples, modern
              educational institutions, and lively markets. Whether enjoying
              local street food or shopping for traditional crafts, visitors can
              immerse themselves in Dehradun's unique atmosphere.
            </p>

            {/* <!-- How to Reach Dehradun Section --> */}
            <h2>How to Reach Dehradun</h2>
            <p>
              Dehradun is well-connected by road, rail, and air, making it
              easily accessible from major cities in India:
            </p>
            <ul>
              <li>
                <strong>By Air:</strong> The nearest airport is Jolly Grant
                Airport, about 25 km from the city center, with regular flights
                from Delhi, Mumbai, and other major cities.
              </li>
              <li>
                <strong>By Train:</strong> Dehradun Railway Station connects
                well to cities like Delhi, Kolkata, and Mumbai. Popular trains
                include the Shatabdi Express and Nanda Devi Express.
              </li>
              <li>
                <strong>By Road:</strong> Dehradun is connected by national
                highways, with frequent bus services from Delhi, Haridwar,
                Rishikesh, and other nearby towns.
              </li>
            </ul>

            {/* <!-- When to Visit Dehradun Section --> */}
            <h2>When to Visit Dehradun</h2>
            <p>
              The best time to visit Dehradun is between{" "}
              <strong>March and June</strong> and{" "}
              <strong>September and November</strong>. These months offer
              pleasant weather, ideal for sightseeing and outdoor activities.
              While the monsoon season (July to August) brings lush greenery, it
              also comes with heavy rains. Winters (December to February) can be
              quite cold, especially in the evenings.
            </p>

            {/* <!-- Best Places Near Dehradun Section --> */}
            <h2>Best Places Near Dehradun</h2>
            <p>
              Dehradun's strategic location makes it an excellent base for
              exploring nearby attractions:
            </p>
            <ul>
              <li>
                <strong>Mussoorie:</strong> Known as the "Queen of Hills," just
                35 km away, offering breathtaking views, waterfalls, and
                colonial-era architecture.
              </li>
              <li>
                <strong>Rishikesh:</strong> About 45 km from Dehradun, Rishikesh
                is a spiritual hub with ashrams, yoga centers, and adventure
                sports like river rafting.
              </li>
              <li>
                <strong>Haridwar:</strong> A holy city 55 km away, famous for
                its Ganga Aarti at Har Ki Pauri and numerous temples.
              </li>
              <li>
                <strong>Dhanaulti:</strong> A serene hill station 60 km from
                Dehradun, known for its peaceful environment, pine forests, and
                snow-capped peaks.
              </li>
              <li>
                <strong>Chakrata:</strong> Located 90 km away, Chakrata offers
                beautiful trekking trails, caves, and stunning landscapes, ideal
                for adventure enthusiasts.
              </li>
            </ul>
          </div>

          <div id="column" className="side-content">
            <div className="holder">
              <h2>
                {/* <!-- <img src="./images/doonPics/explore.webp" alt="Adventures places in Dehradun"> --> */}
                Explore the Serene Forest Trails
              </h2>
              <p>
                Dehradun offers numerous beautiful and tranquil forest trails.
                Some of the top places to explore include:
              </p>
              <ul>
                <li>
                  <strong>Rajaji National Park</strong>: Ideal for wildlife
                  lovers, offering sightings of elephants, tigers, and leopards.
                </li>
                <li>
                  <strong>Malsi Deer Park</strong>: A family-friendly spot
                  perfect for picnics and enjoying nature.
                </li>
                <li>
                  <strong>Forest Research Institute (FRI)</strong>: Known for
                  its academic prestige and expansive grounds, perfect for
                  nature walks.
                </li>
              </ul>

              {/* <!-- Hidden Waterfalls in Dehradun --> */}
              <h3>Hidden Waterfalls in Dehradun</h3>
              {/* <!-- <p>Beyond the famous <strong>Kempty Falls</strong>, Dehradun has several hidden gems:</p> --> */}
              <ul>
                <li>
                  <strong>Bhatta Falls</strong>: A less crowded and peaceful
                  spot, perfect for picnicking and relaxing.
                </li>
                <li>
                  <strong>Shikhar Falls</strong>: A hidden gem ideal for rock
                  climbing, nature photography, and exploration.
                </li>
              </ul>

              {/* <!-- Cultural Insights into Dehradun --> */}
              {/* <!-- <h3>Cultural Insights into Dehradun</h3> --> */}

              <h3>
                Dehradun’s vibrant culture shines through its local festivals:
              </h3>
              {/* <!-- <p></p> --> */}
              <ul>
                <li>
                  <strong>Magh Mela</strong>: A grand event filled with fairs,
                  music, and dance.
                </li>
                <li>
                  <strong>Jhanda Mela</strong>: A major fair celebrated at Guru
                  Ram Rai Darbar, attracting devotees from all over India.
                </li>
              </ul>

              {/* <!-- Crafts and Souvenirs --> */}
              <h3>
                Dehradun’s markets offer a wide variety of traditional crafts
                and souvenirs:
              </h3>
              {/* <!-- <p></p> --> */}
              <ul>
                <li>
                  <strong>Wooden Handicrafts</strong>: Beautifully carved wooden
                  items, perfect for home décor and gifting.
                </li>
                <li>
                  <strong>Pashmina Shawls</strong>: Famous for their fine
                  quality, these shawls are popular among tourists.
                </li>
              </ul>

              {/* <!-- Dehradun for Wellness and Spiritual Retreats --> */}
              <h3>Dehradun for Wellness and Spiritual Retreats</h3>

              {/* <!-- Yoga and Meditation Centers -->
          <!-- <h3>Influenced by its proximity to Rishikesh, Dehradun offers several wellness and retreat centers:</h3> -->
          <!-- <p></p> --> */}
              <ul>
                <li>
                  <strong>Ananda in the Himalayas</strong>: A luxury wellness
                  retreat offering yoga, meditation, and Ayurvedic therapies.
                </li>
                <li>
                  <strong>Vishranti Nature Resort</strong>: A nature and
                  wellness resort offering yoga and holistic health treatments.
                </li>
              </ul>

              {/* <!-- Spiritual Retreats --> */}
              <h3>Dehradun also offers peaceful spiritual retreats:</h3>
              {/* <!-- <p></p> --> */}
              <ul>
                <li>
                  <strong>Mindrolling Monastery</strong>: One of the largest
                  Buddhist centers in India, offering a serene atmosphere for
                  meditation and reflection.
                </li>
                <li>
                  <strong>Tapkeshwar Temple</strong>: A temple dedicated to Lord
                  Shiva, located inside a natural cave, perfect for pilgrims and
                  nature lovers alike.
                </li>
              </ul>

              {/* <!-- Day Trips from Dehradun --> */}
              <h3>Adventure Beyond the City: Day Trips from Dehradun</h3>
              <p>
                If you're staying in Dehradun, consider these exciting day trips
                to nearby attractions:
              </p>
              <ul>
                <li>
                  <strong>Lachhiwala Nature Park</strong>: Located 22 km from
                  the city, this park offers natural pools, trekking trails, and
                  picnic spots.
                </li>
                <li>
                  <strong>Tibetan Buddhist Temple</strong>: A peaceful temple
                  complex with a stupa and prayer hall featuring stunning
                  murals.
                </li>
              </ul>
            </div>
          </div>
          <div className="clear"></div>
        </ContainerComponent>
      </Wrapper>

      <Wrapper colClassName="col3" className="top-attraction">
        <ContainerComponent>
          <div id="latest" className="latest-updated">
            <h2>Top Attractions</h2>
            <ul>
              {threePlace.places &&
                threePlace.places.map((place, index) => (
                  <Card key={index} place={place} />
                ))}
            </ul>
            <br className="clear" />
          </div>
        </ContainerComponent>
      </Wrapper>
      <Wrapper colClassName="col3">
        <ContainerComponent>
          <div className="latestNew latest-updated" id="hills-station">
            <h2>Best Hill Stations Near Dehradun</h2>
            <p>
              Explore the best hill stations near Dehradun, known for their
              scenic beauty, pleasant climate, and serene environment. These
              hill stations are perfect for nature lovers, adventure seekers,
              and those looking for a peaceful retreat.
            </p>
            <br />
            <br />
            <br />
            <ul className="upper-ul">
              {/* <!-- Mussoorie Section -->/ */}
              {/* <li>
                <div>
                  <h3>Mussoorie</h3>
                </div>
                <div className="d-flex">
                  <div>
                    <p className="imgholder">
                      <img
                        src="./images/dehradun/robers-cave-landscape.webp"
                        alt="Mussoorie"
                        className="image"
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <a href="mussoorie/">Mussoorie</a>, often referred to as
                      the 'Queen of Hills,' is a popular hill station near
                      Dehradun, located just 35 km away. Known for its scenic
                      beauty, pleasant climate, and colonial charm, Mussoorie
                      offers stunning views of the Shivalik ranges and the Doon
                      Valley.
                    </p>
                    <ul>
                      <li>
                        Kempty Falls: A popular waterfall located 13 km from
                        Mussoorie.
                      </li>
                      <li>
                        Gun Hill: The second-highest point in Mussoorie,
                        offering panoramic views of the Himalayas.
                      </li>
                      <li>
                        Company Garden: A beautiful garden with a mini lake,
                        located 3 km from Mall Road.
                      </li>
                    </ul>
                    <p>
                      <a href="mussoorie/" className="new-exp-dun">
                        Read More &raquo;
                      </a>
                    </p>
                  </div>
                </div>
              </li> */}
              {places.hill_station &&
                places.hill_station.map((place, index) => (
                  <CommonCard key={index} place={place} />
                ))}
              {/* <!-- Dhanaulti Section --> */}
              {/* <li>
                <div>
                  <h3>Dhanaulti</h3>
                </div>
                <div className="d-flex">
                  <div>
                    <p className="imgholder">
                      <img
                        src="./images/dehradun/robers-cave-landscape.webp"
                        alt="Dhanaulti"
                        className="image"
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <a href="javascript:void(0)">Dhanaulti</a> is a serene
                      hill station located about 60 km from Dehradun, known for
                      its tranquility and unspoiled natural beauty. Perched at
                      an altitude of 2,250 meters, Dhanaulti offers panoramic
                      views of the Himalayas and is less crowded compared to
                      other hill stations.
                    </p>
                    <ul>
                      <li>
                        Eco Park: A quiet, scenic park with views of the
                        Himalayas.
                      </li>
                      <li>
                        Surkanda Devi Temple: A popular temple located 8 km from
                        Dhanaulti.
                      </li>
                      <li>
                        Apple Orchards: Famous for their fresh produce, great
                        for a relaxing walk or picnic.
                      </li>
                    </ul>
                    <p>
                      <a href="javascript:void(0)" className="new-exp-dun">
                        Read More &raquo;
                      </a>
                    </p>
                  </div>
                </div>
              </li> */}

              {/* <!-- Chakrata Section --> */}
              {/* <li>
                <div>
                  <h3>Chakrata</h3>
                </div>
                <div className="d-flex">
                  <div>
                    <p className="imgholder">
                      <img
                        src="./images/dehradun/robers-cave-landscape.webp"
                        alt="Chakrata"
                        className="image"
                      />
                    </p>
                  </div>
                  <div>
                    <p>
                      <a href="javascript:void(0)">Chakrata</a> is a quaint hill
                      station located around 90 km from Dehradun, known for its
                      untouched beauty and peaceful atmosphere. Nestled amidst
                      dense forests and picturesque landscapes, Chakrata is
                      ideal for trekking, bird watching, and exploring ancient
                      caves.
                    </p>
                    <ul>
                      <li>
                        Tiger Falls: A stunning waterfall, perfect for picnics
                        and trekking.
                      </li>
                      <li>
                        Deoban: A scenic forest area, offering amazing views of
                        the Himalayas.
                      </li>
                      <li>
                        Budher Caves: Known for their historical significance
                        and ideal for exploring.
                      </li>
                    </ul>
                    <p>
                      <a href="javascript:void(0)" className="new-exp-dun">
                        Read More &raquo;
                      </a>
                    </p>
                  </div>
                </div>
              </li> */}
            </ul>
            <div className="clear"></div>
          </div>
        </ContainerComponent>
      </Wrapper>
      <Wrapper colClassName="col3">
        <ContainerComponent>
          <div className="latestNew latest-updated" id="blogs-section">
            <h2>{blogHeading}</h2>
            <p className="blog-subheading">{places.blogsSection.description}</p>

            <ul>
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} className="primary-cta" />
              ))}
            </ul>
            <div className="clear"></div>
          </div>
        </ContainerComponent>
      </Wrapper>
      <Wrapper colClassName="col3">
        <ContainerComponent>
          <div className="latestNew latest-updated" id="trekking-places">
            <h2>{adventureActivities.title}</h2>
            <p className="description">
              {adventureActivities.description}
            </p>

            <ul className="upper-ul">
              {adventureActivities.activities.map((place, index) => (
                <li>
                  <div>
                    <h3>{place.name}</h3>
                  </div>
                  <div className="d-flex">
                    <div>
                      <p className="imgholder">
                        <img
                          src="./images/doonPics/riverLandscape.webp"
                          alt="Har Ki Dun Trek"
                          className="image"
                        />
                      </p>
                    </div>
                    <div>
                      <p>
                        {place.description}
                      </p>

                      <ul>
                        {
                          place.highlights.map((highlight, index) => (
                            <li>{highlight}</li>
                          ))
                        }
                        {/* <li>Ancient cultural trail</li>
                        <li>Rivers and meadows</li>
                        <li>Moderate difficulty level</li>
                        <li>Best from April to June & September to November</li> */}
                      </ul>
                      <p>
                        <a href="javascript:void(0)" className="new-exp-dun">
                          Read More &raquo;
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="clear"></div>
          </div>
        </ContainerComponent>
      </Wrapper>
    </>
  );
}
