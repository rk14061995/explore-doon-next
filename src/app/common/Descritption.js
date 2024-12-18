import Breadcrumb from "./Breadcrumb";
import HeadComponent from "./HeadComponent";
import Wrapper from "./Wrapper";
import ContainerComponent from "./ContainerComponent";
import ContentComponent from "./ContentComponent";
import ColumnComponent from "./ColumnComponent";
export default function Descritption(props) {
  const pageData = props?.pageData || {};
  const otherPage = props?.otherPage || false;
  return (
    <>
      
      <Breadcrumb
        currentPage={props.currentPage}
        currentPagePath={props.currentPagePath}
      />
      <Wrapper colClassName="col3">
        <ContainerComponent>
          {!otherPage && (
            <>
              <ContentComponent {...pageData} id="content"></ContentComponent>
              <ColumnComponent></ColumnComponent>
              <br className="clear" />
            </>
          )}
           {otherPage && (
            <>
              <ContentComponent {...pageData} id="contentNew" otherPage={otherPage}></ContentComponent>
              <div className="clear"></div>
            </>
          )}
        </ContainerComponent>
      </Wrapper>
    </>
  );
}
