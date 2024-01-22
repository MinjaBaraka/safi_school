// Home
import MainHeader from './home/MainHeader.vue'
import FAQ from "./home/FAQ.vue";
import VisionMission from "./home/VissionMission.vue";
import Feedback from "./home/Feedback.vue";
import Presentation from "./home/Presentation.vue";
import About from "./home/About.vue";
import BlogsNews from "./home/BlogsNews.vue";


// NavBar and Footer
import Nav from "./included/Nav.vue";
import Footer from "./included/Footer.vue";

// Blogs and News Details
import BlogHeader from "./moreBlogs/BlogHeader.vue";
import DetailBlogs from "./moreBlogs/DetailBlogs.vue";

// Calendar
import CalendarHeader from './calendar/CalendarHeader.vue'
import CalendarDetail from "./calendar/CalendarDetail.vue";

export {
  //   Home
  MainHeader,
  VisionMission,
  Presentation,
  FAQ,
  About,
  BlogsNews,
  Feedback,

  //   Included
  Nav,
  Footer,

  // Blogs and News Details
  BlogHeader,
  DetailBlogs,

  //   calendar
  CalendarHeader,
  CalendarDetail,
};