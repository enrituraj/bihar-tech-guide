import Hero from "../../components/Hero/Hero";
import ExamsSection from "../../components/ExamsSection/ExamsSection";
import ExamInfoSection from "../../components/ExamInfoSection/ExamInfoSection";
import ImportantLinksSection from "../../components/ImportantLinksSection/ImportantLinksSection";
import BEULinks from "../../components/BEULinks/BEULinks";

const Home = () => {
    return (
      <div class="scroll-smooth">
        <Hero/>
        <ExamsSection/>
        <ExamInfoSection/>
        <ImportantLinksSection/>
        <BEULinks/>
      </div>
    );
  }
  
  export default Home;
  