"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  // {
  //   id: 1,
  //   color: "from-red-300 to-blue-300",
  //   title: "React Commerce",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   link: "https://lama.dev",
  // },
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Flappy Bird",
    desc: "This project is a Flappy Bird game built using React and JavaScript. It features dynamic bird movement, gravity and procedurally generated obstacles. The game includes collision detection, a scoring system, and sound effects for enhanced gameplay. It is optimized for smooth performance across different devices and screen sizes.",
    img: "/flappy_bird.png",
    // link: "https://github.com/kjagadeesh683/flappy-bird",
    link: "https://flappy-bird-rho-coral.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Wild Rydes",
    desc: "Wild Rydes is a serverless AWS application that allows users to request rides via a React interface. The app uses AWS Lambda, API Gateway, and DynamoDB for the backend, with Amplify hosting the frontend. User authentication is managed through Amazon Cognito, and all ride data is stored in DynamoDB, while the backend API handles ride dispatch and communication between the frontend and backend.",
    img: "/wildrydes.png",
    link: "https://github.com/kjagadeesh683/wildrydes-site",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Weather App",
    desc: "This weather app is a JavaScript-based application that fetches real-time weather data via an API and displays it through a simple user interface. The app allows users to enter a location and receive current weather information. It uses modern JavaScript features for API interaction and DOM manipulation, and the data is dynamically rendered in the browser for an easy, responsive user experience.",
    img: "/weatherapp.png",
    link: "https://github.com/kjagadeesh683/js-weather-app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Health Care Management",
    desc: "The E-Health Care Management System enables administrators to manage Doctors, Laboratories, Medical Stores, Front Office, and Patient/Guardian profiles with full CRUD capabilities. It allows doctors to update patient data, prescriptions, and lab reports, while laboratories and stores manage test results and prescriptions, ensuring efficient, secure healthcare data management.",
    img: "/ehealthcare.png",
    link: "https://github.com/kjagadeesh683/e-healthcare-management-system",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank" className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Link</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
