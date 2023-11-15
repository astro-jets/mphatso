// components/Projects.js
const Projects = () => {
  return (
    <section className="bg-brown py-12" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Projects</h2>
        <p className="px-4">Below is a list of my projects. click to view the demos.</p>
        {/* Grid or cards for projects here */}
        {/* Masonry Cards */}
        <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-12 gap-6">
            <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
                {/* Card */}
                <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://simply-news-tau.vercel.app">
                    <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                    <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/images/project-news.png" alt="Image Description"/>
                    </div>
                    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                    <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                        Coporate News
                    </div>
                    </div>
                </a>
                {/* End Card */}
            </div>
            {/* End Col */}

            <div className="col-span-12 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://google.com">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/images/project-rides.png" alt="Image Description"/>
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Rides Car Hire
                </div>
                </div>
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://astro-jets.github.io/street-vibes/dist/">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/images/projects-streetvibes.png" alt="Image Description"/>
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Street Vibes
                </div>
                </div>
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}

            <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://astro-jets.github.io/Nyakie/dist/">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/images/projects-nails.png" alt="Image Description"/>
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Nails by Nyakie
                </div>
                </div>
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}

            
            <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            {/* Card */}
            <a className="group relative block rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://google.com">
                <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover" src="/images/projects-x.png" alt="Image Description"/>
                </div>
                <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Studio X
                </div>
                </div>
            </a>
            {/* End Card */}
            </div>
            {/* End Col */}
        </div>
        {/* End Grid */}
        </div>
        {/* End Masonry Cards */}
      </div>
    </section>
  );
};

export default Projects;
