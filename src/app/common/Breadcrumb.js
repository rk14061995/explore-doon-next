import Link from "next/link";
import Wrapper from "./Wrapper";

export default function Breadcrumb(props) {
  const page = props?.page || "Dehradun";
  const currentPage = props?.currentPage || page;
  const currentPagePath = props?.currentPagePath || "/";
  return (
    <Wrapper colClassName="col2">
      <div id="breadcrumb">
        <ul>
          <li className="first">
            <Link href={"/"} legacyBehavior>
              <a title={"Dehradun"}>Home</a>
            </Link>
          </li>
          <li> &#187; </li>
          <li>
            <Link href={currentPagePath} legacyBehavior>
              <a title={currentPage}>{currentPage}</a>
            </Link>
          </li>
          {props?.blogPage && (
            <>
              <li> &#187; </li>
              <li>
                {/* <Link legacyBehavior> */}
                  <a title={props?.blogTitle}>{props?.blogTitle}</a>
                {/* </Link>  */}
              </li>
            </>
          )}
        </ul>
      </div>
    </Wrapper>
  );
}
