import * as React from 'react';

export interface IAppProps {
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h1 className="inline-block px-3 py-px mb-4 text-2xl font-semibold tracking-wider text-orange-900 uppercase rounded-full bg-teal-accent-400">
              Our Team
            </h1>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
              <span className="relative">Welcome</span>
            </span>{' '}
            our Unity Mart team of professionals
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            An Unity Mart team members work cooperatively alongside other  workers to select, pack, and promptly ship customer orders.Our Team Leader  assignes every works perfectly to ours, and take responsibilities specific to the different Fulfillment Center areas.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-orange-500 hover:shadow-2xl shadow-lg shadow-cyan-500/50" data-aos="fade-right" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/81774568_2374148269367028_4897027122834440192_n.jpg?stp=c44.0.206.206a_dst-jpg_p206x206&_nc_cat=107&ccb=1-5&_nc_sid=da31f3&_nc_eui2=AeGm6zpY2ydibKsi6MDGd6T-mba4gP6KgauZtriA_oqBq1oszSEp3OWsMpU3C53d_wi_E2TJkvHBqB8uFJT7XgVB&_nc_ohc=nh1cr7snIuoAX_S3jdx&_nc_ht=scontent.fdac5-2.fna&oh=00_AT_wfv-5enepPXOqLllZ0HAOtBNGA9WyFIWOhLXj2pISlA&oe=6231189E&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Najmus Sakib
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is a really talented and helpful man.
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/272684305_699123697742751_7676321117895740436_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFj56WGqL9MF2cavnhQEqwHULDJyVKePSlQsMnJUp49Kevq-a25-BWlYN2z9j7d2-qJAAmi7TEDqgM_A8oNoJjs&_nc_ohc=iYVZ1HVqvP4AX-yPZUR&tn=j2GnWNnH2ZMiVTPa&_nc_ht=scontent.fdac5-2.fna&oh=00_AT9l7vthIHf3K-XqGeJr3iy9sDPIjsFsomb7y6oJBgPlfQ&oe=620F7A8F&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ahmad Tarique Hasan
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is a really talented and helpfull man.
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-1/89676678_1058195187894147_6201235113821339648_n.jpg?stp=dst-jpg_p100x100&_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGSspR5LVbEWcY8ybB98A7lbJia4PoAmYtsmJrg-gCZi09_zOYKeKTC1xyfYpOrGPSE7iCNgDPkJR3RgfzDlC-m&_nc_ohc=E7jP6FAH-sIAX-D0JcK&_nc_ht=scontent.fjsr8-1.fna&oh=00_AT_qBMQpRgWL9iFZE8WytNDCe7fwWA9SQVwsxJLRrp9f6g&oe=6235DA8B"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Ishtiaque Ahmed
                </p>
                <p className="mb-4 text-xs text-gray-100">Project Manager</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is a really good and honest and intelligent person.
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/272165249_649116166134108_6382011702662200284_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGO4G3m257A7Olb9ilyuIgpm_iZLBJqM3yb-JksEmozfFNs_1evPZ4rtrt4Up4GLph2lzj3GyKygqT5fRVrlqsS&_nc_ohc=EGbKuhdyowUAX-kMUrc&_nc_ht=scontent.fdac5-1.fna&oh=00_AT-MNvQmlgnSjDujinZZl7evxIq3Sgh8od38hWmZpXLH_A&oe=620FFF89&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Md Shah Jalal
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Leader</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  He is a really good and honest and intelligent person.
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/47389856_2098362933810267_3537401941921366016_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE6KLBEVXD0C01fWHLJGz9jh0v71pUv1tmHS_vWlS_W2a2XrCUz4ClOgMR4prh1GPNjwCcEtCWF2WLYESU7ubdR&_nc_ohc=xWrbDkeq7_QAX_m-Vge&_nc_ht=scontent.fdac5-2.fna&oh=00_AT_3gAG93dFHf2V_tvaStvmSL8kA1UnYKOaforx_XZE9xQ&oe=622E6D12&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/266505808_127512469774728_2050182720154645040_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGRKIbkgT-EjDDTwl2Aiy5QBgy1S2Y_MTgGDLVLZj8xOA9HKFu6xQAWprit675MCKyyMHtAruZLMsK37kjHysbj&_nc_ohc=qD7LkksrWBgAX_CuEUg&_nc_ht=scontent.fdac24-1.fna&oh=00_AT8TBfHm8LeCeXdLGNMBHxDpkxLOh-IxnS92mJqjOPRkIw&oe=620F6F99&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-up" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQGWpcYbkDeROg/profile-displayphoto-shrink_200_200/0/1638090973136?e=1650499200&v=beta&t=JZVshilFo6YTnSQz-TEiLOctvKuqo99hvpA3nuF5OyY&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt="Person"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-1 text-lg font-bold text-gray-100">
                  Karima Akteri
                </p>
                <p className="mb-4 text-xs text-gray-100">Team Member</p>
                <p className="mb-4 text-xs tracking-wide text-gray-400">
                  She is really good and honest person.
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
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded hover:shadow-2xl shadow-lg shadow-cyan-500/50 hover:shadow-orange-500" data-aos="fade-right" data-aos-duration="1500">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/262402659_1735915976601927_4074890799033005079_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeGDA2ilotiM8Y4uutqHqh9xfdg2QrckHk592DZCtyQeTpYvvtOpfs5gHR5jm-pOl1CedWuPeTB-aJg7Tj5Zh4H5&_nc_ohc=0HuAQFhiGxYAX-fBIAD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJAJrzofj81rdFWnfZskWG1UKgPHxLuwLNQFKwXg8Qrag&oe=62307A64&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
    );
  }
}


// npm install --save typescript @types/node @types/react @types/react-dom @types/jest

// http://preview.themeforest.net/item/team-multisport-esport-wordpress-theme/full_screen_preview/19713558?_ga=2.237784768.1960273582.1644902476-1742640196.1635468369
