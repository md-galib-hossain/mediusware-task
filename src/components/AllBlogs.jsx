import KeywordCapsule from "./Ui/KeywordCapsule/KeywordCapsule";

const AllBlogs = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
     
        
          {keywordsArr.map((keyword) => (
            <KeywordCapsule
              key={keyword.id}
              name={keyword.name}
              count={keyword.count}
            />
          ))}
      
      </div>
    </div>
  );
};

export default AllBlogs;

const keywordsArr = [
  {
    id: 1,
    name: "All",
    
  },
  {
    id: 2,
    name: "Node.js",
    count: 5,
  },
  {
    id: 3,
    name: "React.js",
    count: 5,
  },
  {
    id: 4,
    name: "Next.js",
    count: 5,
  },
  {
    id: 5,
    name: "Express.js",
    count: 5,
  },
  {
    id: 6,
    name: "Redux.js",
    count: 5,
  },
];
