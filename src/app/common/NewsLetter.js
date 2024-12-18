
export default function NewsLetter(props) {
    return (
        <div id="newsletter">
            <h2>Stay In The Know !</h2>
                <p>Please enter your email to join our mailing list</p>
                <form action="#" method="post">
                    <fieldset>
                        <legend>News Letter</legend>
                        {/* <input type="text" value="Enter Email Here&hellip;"
                            onfocus="this.value=(this.value=='Enter Email Here&hellip;')? '' : this.value ;" /> */}
                        <input type="submit" name="news_go" id="news_go" value="GO" />
                    </fieldset>
                </form>
                <p>To unsubscribe please <a href="#">click here &raquo;</a></p>
        </div>
    );
}