import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ScrollIndicator from "./ScrollIndicator";
import { motion } from "framer-motion";

{
  /* Mock data for articles, replace with actual data fetching logic */
}
const mockArticles = [
  {
    author: "Jane Doe",
    title: "How to Learn React",
    description: "A quick guide to getting started with React.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearning-07-600x430.jpg.webp",
  },
  {
    author: "John Smith",
    title: "Understanding JavaScript Closures",
    description: "Deep dive into closures and their use cases.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearning-08-600x430.jpg.webp",
  },
  {
    author: "Alice Johnson",
    title: "CSS Grid vs Flexbox",
    description: "When to use Grid and when to use Flexbox.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearning-09-600x430.jpg.webp",
  },
  {
    author: "Bob Lee",
    title: "Async/Await in JS",
    description: "Simplifying asynchronous code in JavaScript.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/03/demo-elearning-blog-02-600x430.jpg.webp",
  },
  {
    author: "Sara Kim",
    title: "TypeScript for Beginners",
    description: "Why and how to start using TypeScript.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/03/demo-elearning-blog-01-600x430.jpg.webp",
  },
  {
    author: "Mike Brown",
    title: "Deploying with Vercel",
    description: "A step-by-step deployment guide.",
    imageUrl:
      "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/03/demo-elearning-instructors-title-bg.jpg",
  },
];

const BlogPage = ({
  imageUrl = "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearnig-07-600x430.jpg.webp",
}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticles(mockArticles);
    }, 1000); // Simulate a delay for fetching articles
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-screen transition-transform">
      <ScrollIndicator />
      <div
        className="relative lg:h-[55%] h-[55%] w-full bg-cover max-[720px]:bg-center bg-no-repeat bg-(--dark-blue) flex items-center sm:pl-[20%] p-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <motion.div
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
          }}
          initial={{ X: -90, opacity: 0, scale: 1.4 }}
          animate={{ X: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="flex flex-col gap-6 sm:w-[40%]"
        >
          <div className="text-(--orange) items-center align-middle hover:cursor-pointer">
            <span className="text-nowrap">Latest Blog</span>
          </div>

          <motion.h2
            style={{ willChange: "transform" }}
            initial={{
              rotateX: -90,
              opacity: 0,
              transformOrigin: "top",
              scale: 1.2,
            }}
            animate={{ rotateX: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              ease: [0.42, 0, 0.58, 1],
            }}
            className="text-white text-3xl sm:text-5xl min[1440px]:text-6xl text-left"
          >
            Trending topic <br />
            Learning articles.
          </motion.h2>
        </motion.div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center max-[400px]:px-6 px-10 lg:px-40 py-20">
        {articles.length === 0 ? (
          <div className="text-center text-gray-500">Loading articles...</div>
        ) : (
          articles.map((article, index) => (
            <ArticleCard
              key={index}
              {...article}
            /> /* Spread operator to pass article properties */
          ))
        )}
      </div>
      <div className="flex w-full gap-4 pb-10 justify-center items-center">
        <button className="bg-(--light-blue) text-white h-10 w-10 items-center rounded-full over:cursor-pointer">
          1
        </button>
        <button className="text-black h-10 w-10 items-center rounded-full hover:bg-white hover:cursor-pointer hover:drop-shadow-lg transition-all duration-250">
          2
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
