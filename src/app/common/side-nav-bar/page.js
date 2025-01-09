import PlacesList from "../PlaceList";

export default function SideNavBar(props) {
    const currentPagePath = props?.currentPagePath || "/";
    const isSideBar = props?.isSideBar || false;
    return <PlacesList isSideBar={isSideBar} currentPagePath={currentPagePath}/>;
}