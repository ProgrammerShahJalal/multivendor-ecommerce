import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <>
        <Helmet>
          <title>Team :: Unity Mart</title>
          <meta
            name="description"
            content="Welcome to our professionals Unity Mart Team."
          />
          <link rel="canonical" href="/team" />
        </Helmet>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <h1 className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-orange-900 dark:text-white uppercase rounded-full bg-teal-accent-400">
                Remote Coder Unity-
                <span style={{ color: 'rgb(79, 70, 229)', fontWeight: 'bold' }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['Unite We stand!✊', 'Divide we fall!!']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Welcome To</span>
              </span>{' '}
              our Unity Mart team of Professionals
            </h2>
            <p className="text-base text-gray-700 dark:text-white md:text-lg select-none">
              An Unity Mart team members work cooperatively alongside other  workers to select, pack, and promptly ship customer orders.Our Team Leader  assignes every works perfectly to ours, and take responsibilities specific to the different Fulfillment Center areas.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-orange-500 hover:shadow-2xl shadow-lg shadow-cyan-500/50" data-aos="fade-right" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/Wxr4sgr/najmus-sakib-vai.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Najmus Sakib
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    The  Associate Manager at Programming Hero is the most intelligent, challenge taker, plan maker,hard working  and enthusiastic person . He always holds his mind to be successful.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/Najmus7/"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                      target="_blank" rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abubakarmd/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/gSYPKD3/tarekvai.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Ahmad Tarique Hasan
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Job Placement Executive-Programming Hero who is a passionate, diligent,  patienceable and knowledgeable person. He always provides important guidelines and gives the answer to our silly questions.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/ahmad.tarique.bappy" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahmad-tarique/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/VN7NkrZ/Istiaque-Ahmed-vai.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Ishtiaque Ahmed
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    Job Placement Executive - Programming hero is also an intelligent , active and weariless person. He always keeps his patience up and gives the answer to our repetitive questions.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/ishtiaqueAhmed08" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/aishtiaque/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/zHMTPQj/shahjalal-logo.png"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Md Shah Jalal
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Leader</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    He is an absolute responsibility leader. He practices 3I: Inspiration, Influence, Impact. He focuses on the possibilities and takes responsibility to change the world.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/msh.farabi.1" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ProgrammerShahJalal/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/G5fqRy9/fathe-vai.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Fathe Karim
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Member</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    He is a really good and honest and excellent coding person.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/fathe44" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fathekarim/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/wQMDcnn/Junaidul-Kader-Tanzim.jpg&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Junaidul Kader Tanzim
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Member</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    He is a good and honest person and researcher.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/tanzim.khan.12" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/junaidul-kader/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/QQhFjsk/ifazd.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Mutasim Hussain
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Member</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    He is a really good, intelligent and honest person.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/mutasim.ifaz" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mutasimifaz/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/QkR7gLx/karima-a.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Karima Akteri
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Member</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    She is a giver of wisdom, honest, hard worker. Very calmly handles any kind of feature development or any challenge wisely. Very keen to work she is unique in eye-catching UI design.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/karima.haque911" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/karima-aktari-1b9545226/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='select-none'>
              <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
                <img
                  className="object-contain w-full h-56 md:h-64 xl:h-80"
                  src="https://i.ibb.co/ZmBwzhy/Sahara-Banu-removebg-preview.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Sahara Banu
                  </p>
                  <p className="mb-4 text-xs text-gray-100">Team Member</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    She is a really good and honest person.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <a
                      href="https://www.facebook.com/sahara.banu.796" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-facebook fa-2xl"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/saharabanu/" target="_blank" rel="noreferrer"
                      className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                    >
                      <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
