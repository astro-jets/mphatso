import Image from "next/image";
import { FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

// components/AboutMe.js
const AboutMe = () => {
  return (
    <section className="py-12" id="about">
      <div className="container mx-auto flex-col flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          {/* Features */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="w-full lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                <div className="lg:col-span-7">
                {/* Grid */}
                <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                    <div className="col-span-4">
                    <Image width={500} height={500} className="rounded-xl" src="/images/astro2.jpg" alt="Image Description"/>
                    </div>
                    {/* End Col */}

                    <div className="col-span-3">
                    <img className="rounded-xl" src="/images/astro.jpg" alt="Image Description"/>
                    </div>
                    {/* End Col */}

                    <div className="col-span-5">
                    <img className="rounded-xl" src="/images/mpha.jpg" alt="Image Description"/>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
                </div>
                {/* End Col */}

                <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">
                    {/* Title */}
                    <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                        Crafting Digital Experiences That Inspire
                    </h2>
                    <p className="text-white">
                         I'm Mphatso, a passionate web developer specializing in Next.js, dedicated to turning your digital dreams into reality. With a keen eye for detail and a love for clean, efficient code, I thrive on creating captivating online experiences that not only meet but exceed expectations.
                         <span className="text-goldenrod font-bold block my-2">My mission? </span>
                         
                         To collaborate with you, understand your unique vision, and meticulously craft websites and applications that resonate with your audience, boost your brand, and drive results. From seamless user interfaces to robust functionalities, I ensure every project reflects your essence while delivering exceptional performance and usability.
                         Let's embark on a journey together where innovation meets reliability. Whether you're a startup looking to establish a compelling online presence or an established business seeking to enhance user engagement, let's create something extraordinary.
                         Ready to elevate your digital presence? Let's connect and bring your ideas to life!
                    </p>
                    </div>
                    {/* End Title */}

                    {/* List */}
                    <ul role="list" className="space-y-2 sm:space-y-4">
                        <li className="flex space-x-3 bg-goldenrod h-16 rounded-lg items-center px-4">
                            {/* Solid Check */}
                            <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-[#222] dark:text-goldenrod">
                            <FaGithub size={30} color="#fff" />
                            </span>
                            {/* End Solid Check */}

                            <span className="text-sm sm:text-base text-white">
                                <a className="font-bold" href="https:/github.com/astro-jets/repositories">Github Repository</a>
                            </span>
                        </li>
                        <li className="flex space-x-3 bg-goldenrod h-16 rounded-lg items-center px-4">
                            {/* Solid Check */}
                            <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-[#222] dark:text-blue-500">
                            <FaEnvelope size={30} color="#fff" />
                            </span>
                            {/* End Solid Check */}

                            <span className="text-sm sm:text-base text-white">
                                <a className="font-bold" href="https:/mail.google.com">mphatsomtogolo30@gmail.com</a>
                            </span>
                        </li>
                        <li className="flex space-x-3 bg-goldenrod h-16 rounded-lg items-center px-4">
                            {/* Solid Check */}
                            <span className="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-[#222] dark:text-blue-500">
                            <FaPhone size={30} color="#fff" />
                            </span>
                            {/* End Solid Check */}

                            <span className="text-sm sm:text-base text-white">
                                <a className="font-bold" href="#">+265 886 074 474</a>
                            </span>
                        </li>
                    </ul>
                    {/* End List */}
                </div>
                </div>
                {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Features */}
      </div>
    </section>
  );
};

export default AboutMe;
