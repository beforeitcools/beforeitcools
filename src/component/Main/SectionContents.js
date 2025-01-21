import ContentsChatting from "./ContentsChatting";
import ContentsEditing from "./ContentsEditing";
import ContentsTrip from "./ContentsTrip";

const SectionContents = () => {
    return(
        <section className="section section-contents">
            <div className="inner">
                <ContentsTrip/>
                <ContentsEditing/>
                <ContentsChatting/>
            </div>
        </section>
    );
}

export default SectionContents;