import { useRef } from "react";
import Navbar from "./components/Navbar";
import BlogPage from "./components/BlogPage";
import AboutNacomesHero from "./components/AboutNacomesHero";
import MeetLecturers from "./components/MeetLecturers";
import RecentPublications from "./components/RecentPublications";
import AboutHeader from "./components/AboutHeader";
import AboutHistory from "./components/AboutHistory";
import AboutIcons from "./components/AboutIcons";
import Executives from "./components/Executives";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogView from "./components/BlogView";

const App = () => {
  const mainContainerRef = useRef(null);

  return (
    <div ref={mainContainerRef}>
      <Navbar mainContainerRef={mainContainerRef} />
      <Header />

      <BlogPage />
      <BlogView />
      <AboutNacomesHero />
      <MeetLecturers />
      <RecentPublications />
      <AboutHeader />
      <AboutHistory />
      <AboutIcons />
      <Executives />

      <Footer />
    </div>
  );
};

export default App;
