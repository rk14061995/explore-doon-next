import Breadcrumb from "@/app/common/Breadcrumb";
import Wrapper from "@/app/common/Wrapper";
import ContainerComponent from "@/app/common/ContainerComponent";
export const generateStaticParams = async () => {
  // Define or fetch all possible slugs
  const slugs = [
    "famous-places-to-visit-dehradun",
    "kanatal-uttarakhand",
    "best-hill-station-near-dehradun",
    "dhanolti-uttrakhand",
    "best-hill-station-in-uttarakhand",
  ];

  return slugs.map((slug) => ({ slug }));
};

  

export default function BlogPage({ params }, props) {
  const { slug } = params; // Access the slug directly from the params prop
  const formatString = function (input) {
    return input
      .split('-') // Split the string into an array using '-' as the delimiter
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the array back into a string with spaces
  }
  const formattedString = formatString(slug);
  return (
    <>
      <Breadcrumb
        currentPage={props?.currentPage || "Blog"}
        currentPagePath={props?.currentPagePath || "NAMe"}
        blogPage={true}
        blogTitle={formattedString || " This is dummy title "}
      />
      <Wrapper colClassName="col3">
        <ContainerComponent>
        <div id="column" className="side-content">
            <div className="holder">
              <h2>
              
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

              <h3>Hidden Waterfalls in Dehradun</h3>

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


              <h3>
                Dehradun’s vibrant culture shines through its local festivals:
              </h3>

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

              <h3>
                Dehradun’s markets offer a wide variety of traditional crafts
                and souvenirs:
              </h3>

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

            </div>
          </div>
          <div id="content">
            {/* <!-- About Dehradun Section --> */}
            <h2>Unveil the Charm of Dehradun: Your Doorway to the Himalayas</h2>

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

          
          <div className="clear"></div>
        </ContainerComponent>
      </Wrapper>
    </>
  );
}
