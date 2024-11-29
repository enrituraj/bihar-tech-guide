import React from "react";
const ImportantLinksSection = () => {
  const importantLinks = [
    {
      label: "BEU holidays",
      image: "https://logopond.com/logos/9f75ce26a6d2f71382faec2224d15668.png",
      description: "According to our Bihar Engineering university.",
      buttonLabel: "Explore it",
      link: "#",
    },
    {
      label: "AICTE",
      image: "https://upload.wikimedia.org/wikipedia/en/e/eb/All_India_Council_for_Technical_Education_logo.png",
      description: "All India institute of technical education internship.",
      buttonLabel: "Learn more",
      link: "#",
    },
    {
      label: "Important Questions",
      image: "https://www.shutterstock.com/image-photo/important-questions-word-abstract-vintage-260nw-505479823.jpg",
      description: "Question Asked in Placements or internship",
      buttonLabel: "Read More",
      link: "#",
    },
    {
      label: "Placements & Internship",
      image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-169697,resizemode-75,msid-69278604/wealth/earn/how-students-can-make-the-most-of-summer-internships.jpg",
      description: " Placements & Internship sites For all Engineering students.",
      buttonLabel: "Explore it",
      link: "#",
    },
    {
      label: "BSSC",
      image: "https://pbs.twimg.com/profile_images/1270971741334953984/tZ0c85tg_400x400.jpg",
      description: " Bihar Student credit card.",
      buttonLabel: "Read more",
      link: "#",
    },
    {
      label: "NSP",
      image: "https://scholarships.gov.in/addaadhaarfresh2324/img/nspSchemeSellogo.jpg",
      description: "Find scholarships for aspiring engineering students.",
      buttonLabel: "Find Scholarships",
      link: "#",
    }
  ];

  return (
    <section className=" py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight mb-6">
          Important Links for Engineering Students
        </h2>
        <p className="text-gray-800 font-semibold mb-8">
          Explore essential online resources, platforms, and tools to assist you in your engineering journey.
        </p>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-3 
            gap-8
          "
        >
          {importantLinks.map((link, index) => (
            <ImportantLinkCard
              key={index}
              image={link.image}
              label={link.label}
              description={link.description}
              buttonLabel={link.buttonLabel}
              link={link.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const ImportantLinkCard = ({ image, label, description, buttonLabel, link }) => {
  return (
    <div className="flex flex-col bg-gray-300 hover:bg-gray-200 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all">
      <div className="w-40 h-40 mx-auto mb-4">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className=" text-xl font-semibold mb-2">{label}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
      >
        {buttonLabel}
      </a>
    </div>
  );
};



export default ImportantLinksSection;
