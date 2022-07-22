import React from "react";

const features = [
  {
    name: "Python",
    description:
      "Python is a programming language that is interpreted and high-level, and easy to learn. It has been my daily drive to do Data Science and Algorithm modeling using Tensorflow and Sci-kit. ",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is an easy to learn, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. It always has been my daily drive to make a website, and to make a web application from Front to Back. ",
  },
];

const TechUsed = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Language & Library Used
            </h2>
            <p className="mt-4 text-white">
              Since I started my journey as a Front-End Developer, Data
              Scientist, and Machine Learning Engineer, I have been working with
              the following languages:
            </p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-white pt-4">
                  <dt className="font-medium text-white">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="./assets/images/impianmu.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-white rounded-lg"
            />
            <img
              src="./assets/images/garden-deployed.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-white rounded-lg"
            />
            <img
              src="./assets/images/algo.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-white rounded-lg"
            />
            <img
              src="./assets/images/models.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-white rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechUsed;
