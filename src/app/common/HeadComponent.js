import NavComponent from "../common/NavComponent";
import Wrapper from "../common/Wrapper";
export default function HeadComponent(props) {
  const page = props?.page || "Dehradun";
  return (
    <Wrapper colClassName="col1">
      <div id="header">
        <div id="logo">
          <span>
            <a href="https://exploredehradun.in/" title={page}>
              {page}
            </a>
          </span>
          <p> Your Ultimate Guide to the Heart of Uttarakhand </p>
        </div>
        <div id="search"></div>
        <div id="topnav">
          <NavComponent />
        </div>
        <br className="clear" />
      </div>
    </Wrapper>
  );
}
