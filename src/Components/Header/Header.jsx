import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Event from "../../Event/Event";
export const Header = () => {
    const [events, setEvents] = useState([]);
    const [up , setUp] =useState(false)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('events.json');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEvents(data.events); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 
    console.log(events) 
    const handleSeeMore = () => {
        setUp(!up)
    }
  return (
    <div>
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
          <h2 className="mb-5 font-sans  font-bold tracking-tight text-gray-900 text-xl sm:leading-none">
            <TypeAnimation
              sequence={[
                "What we do ?",
                1000,
                "Career Fair",
                1000,
                "Book Fair",
                1000,
                "Science Fair",
                1000,
                "Art Exhibition",
                1000,
                "Coding Camp",
                1000,
                "Math Olympics",
                1000,
                "Debate Competition",
                1000,
               
                
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
          Welcome to Creative Agency - Your Partner in Educational Event Excellence!

At Creative Agency, we are passionate about education and dedicated to making every educational event a resounding success. With a team of experienced professionals, we have been organizing and managing educational events that inspire, educate, and empower both students and educators.
          </p>

          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-purple-800 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-4xl text-center font-bold mt-10 mb-10">Brouse Our Survices</h1>
    
    <div className="grid lg:grid-cols-3 flex justify-center items-center md:grid-col-2 grid-cols-1 gap-3">
    {
  up
    ? 
    events.map((event, index) => (
      <Event key={index} event={event} />
    ))
    : 
      events.slice(0, 6).map((event, index) => (
        <Event key={index} event={event} />
      ))
}
    </div>
    <div className="flex justify-center items-center mt-4"><button onClick={handleSeeMore} className="btn btn-primary">See More</button></div>
    </div>
  );
};
