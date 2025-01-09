import SideNavBar from "./side-nav-bar/page";

export default function ColumnComponent(props) {
    const currentPagePath = props?.currentPagePath || "/";
    return <div id="column">
           <div className="subnav">
                    <h2>Explore Dehradun</h2>
                    <SideNavBar currentPagePath={currentPagePath} isSideBar={true}/>
                    
                </div>

                <div className="holder">
                    <h2>Dehradun Weather</h2>
                    <p>Stay updated with the latest weather information for a perfect visit. Plan your days with
                        accurate forecasts.</p>
                    <div className="forecast">
                        {/* <!-- Weather forecast information --> */}
                        <ul>
                            <li>Today: Sunny, 25C - Ideal weather for exploring the local attractions.</li>
                            <li>Tomorrow: Partly Cloudy, 24Â°C - Great for sightseeing with cooler temperatures.</li>
                            <li>Day After: Rain, 22Â°C - Perfect for enjoying indoor activities and local cafes.</li>
                        </ul>
                    </div>
                    <p>Dehradun experiences pleasant weather year-round, making it a great destination in any season.
                        Stay prepared with our real-time updates!</p>
                </div>

                <div className="holder">
                    <h2>Local Cuisine</h2>
                    <p>Experience the authentic flavors of Dehradun with these traditional delicacies that showcase the
                        rich culture of Uttarakhand.</p>
                    <ul>
                        <li><strong>Aloo ke Gutke</strong> - A spicy potato dish cooked with local spices, a must-try
                            for anyone seeking a true taste of the region.</li>
                        <li><strong>Bal Mithai</strong> - A popular sweet made of roasted khoya and coated with sugar
                            balls, this is a local favorite for those with a sweet tooth.</li>
                        <li><strong>Singori</strong> - A unique dessert wrapped in maalu leaf, with a coconut and khoya
                            filling that's simply irresistible.</li>
                    </ul>
                    <p>Don't miss out on the vibrant food culture of Dehradun, offering a delightful culinary journey
                        for food enthusiasts.</p>
                </div>
                <div id="comments">
                    <h2>Comments</h2>
                    <ul className="commentlist">
                        <li className="comment_odd">
                            <div className="author"><img className="avatar" src="../images/demo/avatar.gif"
                                    alt="Forest Research Institute Dehradun" /><span className="name"><a
                                        href="fri.html">Neha S.</a></span> <span className="wrote">wrote:</span></div>
                            <div className="submitdate"><a href="fri.html">September 14, 2023 at 11:30 am</a></div>
                            <p>"FRI is a magnificent place. The architecture is stunning and the museums are very
                                informative. A must-visit for anyone coming to Dehradun."</p>
                        </li>
                        <li className="comment_even">
                            <div className="author"><img className="avatar" src="../images/demo/avatar.gif"
                                    alt="Forest Research Institute Dehradun" /><span className="name"><a
                                        href="fri.html">Ankit R.</a></span> <span className="wrote">wrote:</span></div>
                            <div className="submitdate"><a href="fri.html">November 22, 2023 at 3:45 pm</a></div>
                            <p>"The botanical garden at FRI is beautiful. It's a great place to relax and enjoy nature.
                                The guided tour was very informative and engaging."</p>
                        </li>
                        <li className="comment_odd">
                            <div className="author"><img className="avatar" src="../images/demo/avatar.gif"
                                    alt="Forest Research Institute Dehradun" /><span className="name"><a
                                        href="fri.html">Pooja M.</a></span> <span className="wrote">wrote:</span></div>
                            <div className="submitdate"><a href="fri.html">February 10, 2024 at 1:20 pm</a></div>
                            <p>"I loved visiting the museums at FRI. Each one offers something unique and interesting.
                                The main building is a masterpiece of colonial architecture."</p>
                        </li>
                    </ul>
                </div>
                <h2>Write A Comment</h2>
                <div id="respond">
                    {/* <form action="fri.html" method="post">
                        <p>
                            <input type="text" name="name" id="name" value="" size="22" />
                            <label for="name"><small>Name (required)</small></label>
                        </p>
                        <p>
                            <input type="text" name="email" id="email" value="" size="22" />
                            <label for="email"><small>Mail (will not be published) (required)</small></label>
                        </p>
                        <p>
                            <textarea name="comment" id="comment" cols="100%" rows="10"></textarea>
                            <label for="comment" style="display:none;"><small>Comment (required)</small></label>
                        </p>
                        <p>
                            <input name="submit" type="submit" id="submit" value="Submit Form" />
                            &nbsp;
                            <input name="reset" type="reset" id="reset" tabindex="5" value="Reset Form" />
                        </p>
                    </form> */}
                </div>
    </div>
}