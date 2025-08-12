import ScrollIndicator from "./ScrollIndicator";
import { motion } from "framer-motion";
const BlogView = ({
  author = "Author name",
  title = "Experience the breathtaking views and perspectives.",
  date = new Date(),
  genre = "genre",
  imageUrl = "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearnig-07-600x430.jpg.webp",
}) => {
  const updated = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="h-screen w-screen transition-transform">
      <ScrollIndicator />
      <div
        className="relative lg:h-[90%] h-[90%] w-full bg-cover max-[720px]:bg-center bg-no-repeat bg-(--light-blue) flex items-center sm:pl-[20%] p-4"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col gap-10 sm:w-[40%]"
        >
          <div className="text-(--beige) items-center align-middle font-semibold hover:cursor-pointer">
            <span className="text-nowrap">{updated}</span>
            <span className="before:content-['•'] before:mx-2">{genre}</span>
          </div>

          <h2 className="text-white text-3xl sm:text-5xl lg:text-6xl lg:tracking-widest sm:tracking-wide font-semibold text-left">
            {title}
          </h2>
          <motion.p initial={{x:10}} animate={{x:0}} transition={{delay:0.7, duration:0.8}} className="font-medium text-white ">{author}</motion.p>
        </motion.div>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
      <div className="p-30">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt magnam, nisi earum dolorem ad placeat, ipsa quisquam qui
          soluta consectetur, vero vitae ipsum! Iure facilis maiores totam
          eveniet? Ullam.
        </p>
      </div>
    </div>
  );
};

export default BlogView;
