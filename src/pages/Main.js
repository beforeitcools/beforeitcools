import SectionBanner from "../component/Main/SectionBanner";
import SectionCollect from "../component/Main/SectionCollect";
import SectionContents from "../component/Main/SectionContents";
import SectionDownload from "../component/Main/SectionDownload";
import './Main.css';

const Main = () => {

    return (
        <main>
            <SectionBanner/>
            <SectionCollect/>
            <SectionContents/>
            <SectionDownload/>
        </main>
    );
};

export default Main;