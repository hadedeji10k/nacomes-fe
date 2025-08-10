const ArticleCard = ({
  author = "Author name",
  title = "Card Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem et recusandae omnis at! Cupiditate officia enim perferendis neque, labore commodi sed eaque? Soluta, cupiditate quisquam veritatis deserunt dolores ex.",
  imageUrl = "https://crafto.themezaa.com/elearning/wp-content/uploads/sites/28/2024/10/demo-elearning-07-600x430.jpg.webp",
}) => {
  return (
    <div className="flex flex-col bg-white min-[400px]:w-[300px] w-[450px] shadow-xl">
      <div className="px-3 py-3">
        <h4 className="text-sm text-gray-500">
          By
          <span className="font-semibold text-gray-700 ml-0.5">{author}</span>
        </h4>
      </div>
      <div className="w-full h-full min-[400px]:max-h-[200px] max-h-[300px] overflow-hidden">
        <img
          className="w-full h-48 object-cover hover:scale-120 transition-transform duration-700"
          src={imageUrl}
          alt="Placeholder"
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-700 text-base font-semibold text-left mb-1">
          {title}
        </h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
