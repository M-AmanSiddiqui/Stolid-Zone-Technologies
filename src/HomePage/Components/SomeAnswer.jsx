import TeamWorking1 from "../../assets/Images/TeamWorking1.jpg"; 
import TeamWorking2 from "../../assets/Images/TeamWorking2.jpg"; 
import TeamWorking3 from "../../assets/Images/TeamWorking3.jpg"; 

const SomeAnswer = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8 pb-16">
        {/* Left Side Content */}
        <div>
          <button className="text-sm font-medium text-blue-600 bg-blue-100 px-4 py-2 rounded-lg mb-4">
            Get Some Question Answer
          </button>
          <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-snug">
            Share the joy of achieving <br />
            glorious moments & climb up to the top
          </h1>
          <div className="space-y-4">
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                What is the typical duration of a consulting engagement?
              </summary>
              <p className="mt-2 text-gray-600 ">
              The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                What types of businesses do you work with?
              </summary>
              <p className="mt-2 text-gray-600">
              The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
            <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
              <summary className="font-medium text-lg text-gray-800">
                How is the working process simplified?
              </summary>
              <p className="mt-2 text-gray-600">
              The consultancy industry is constantly evolving, new trends, technologies, and methodologies emerging regularly. Staying ahead of these changes is crucial for a consultancy firm’s success.
              </p>
            </details>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="relative">
          {/* <div className="absolute ml-80 -mt-14 text-black px-8 py-3 w-56 rounded-lg ">
            <p className="text-7xl font-bold">68%</p>
            <p className="text-md font-semibold  px-3 mt-3">Extra Growth For <br /> Your Company</p>
          </div> */}
          <div className="grid grid-cols-2 gap-2">
            <img
              src={TeamWorking1}
              alt="Team working"
              className="rounded-lg shadow-lg w-full h-56 object-cover"
            />
            <img
              src={TeamWorking2}
              alt="Group discussion"
              className="rounded-lg shadow-lg w-full h-72 object-cover mt-28"
            />
            <img
              src={TeamWorking3}
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full h-56 object-cover -mt-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeAnswer;
