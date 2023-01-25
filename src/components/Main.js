import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope, faLink, faFile} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"

function Main() {
  return (
    <main style={{position: 'absolute'}}>

    <header>
      <h1>Hello World!</h1>
      <p>
      <TypeAnimation
      sequence={[
        'I am Sami 👋', // Types 'One'
        1500, // Waits 1s
        'Welcome to my website 💥', // Types 'One'
        1500, // Waits 1s
        'I am a developer 💻', // Deletes 'One' and types 'Two'
        1500, // Waits 2s
        'a budding data scientist 📊', // Types 'Three' without deleting 'Two'
        1500,
        'and an amateur historian 📜', // Types 'Three' without deleting 'Two'
        1500
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', color: 'green' }}
      speed={60}
    />
      </p>
      <motion.div style={{float:"left"}} whileHover={{ scale: 1.2 }} ><a title="Email" href='mailto:mohammad.sami.islam@mail.mcgill.ca'><FontAwesomeIcon style={{margin: '20' }} icon={faEnvelope}/></a></motion.div>
      <motion.div style={{float:"left"}} whileHover={{ scale: 1.2 }}><a title="LinkedIn" href='https://www.linkedin.com/in/sami-nur-047027181/'><FontAwesomeIcon style={{margin: '20'}} icon={faLinkedin}/></a></motion.div>
      <motion.div style={{float:"left"}} whileHover={{ scale: 1.2 }}><a title="Github" href='https://github.com/Sami6720'><FontAwesomeIcon style={{margin: '20'}} icon={faGithub}/></a></motion.div>
      <motion.div style={{float:"left"}} whileHover={{ scale: 1.2 }}><a href='Mohammad_Sami Nur Islam_Resume_02-01-2023.pdf' download title="Recent CV"><FontAwesomeIcon style={{margin: '20'}} icon={faFile}/></a></motion.div>
    </header>
  

    <section className="left">
      <h2> 💻 Work Experience</h2>
      <h3>IntelsenseAI <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
      <h3>Software Developer Intern (Part time)</h3>
      <p>
        <ul>
          <li> Building a new restaurant chatbot product prototype using the Python-based RASA framework.</li>
          <li>Researching and consolidating appropriate datasets, with a team of three, for the chatbot.</li>
          <li>Implementing the backend for the chatbot using MySQL and Express.</li>
        </ul>
      </p>
      <h3>Shikhbe Shobai <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
      <h3>Software Developer and Data Science Intern</h3>
        <ul>
          <li>Built a data visualization dashboard for internal use using Streamlit and React.</li>
          <li>Wrote data-wrangling scripts with the Pandas and Scikit-learn libraries and visualization scripts with the Matplotlib library.</li>
          <li>Created simple regression models using the Scikit-learn library to predict the total future revenue from each new user.</li>

          <li>Built a task management system (with user authentication) into the dashboard using React, Express, and MongoDB.</li>
         <li> Conducted a market segmentation analysis from the user data and collaborated with the marketing team on their strategy.</li>
          <li>Built an automated form recognizer system using AWS's form recognizer API and Streamlit, improving the processing time of paper registration forms by 600%.</li>
        </ul>
    
    </section>
    
    <section className="light">
      <h2>👩🏽‍🚀 Projects</h2>
      <h3>Wallstreet Sentiments <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
        <ul>
          <li>Conceived the idea and then collaborated with two to build a web app (in Streamlit) that predicts the likely direction of the price of the most popular stocks on the r/WallStreetBets subreddit by combining sentiment analysis of comments and posts with fundamental analysis of P/E ratio, market cap, etc..</li>
          <li>Researching and consolidating appropriate datasets, with a team of three, for the chatbot.</li>
          <li>Prepared the training data set by consolidating key metrics of relevant popular stocks and cleaning them using Pandas library.</li>
          <li>Designed and coded in Python the algorithm for the fundamental analysis of relevant stocks. The algorithm works by fetching data from TDAmeritrade API, cleaning it, and then running the cleaned dataset through a random forest classifier using the Scikit-learn library.</li>
        </ul>
      <h3>Built my own neural network <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
        <ul>
          <li>Used only the NumPy and SciPy library to build a simple three-layer neural network.</li>
          <li>Tested the neural network on the MNIST data set with 97% accuracy.</li>
          <li>Bettered my understanding of backpropagation, gradient descent, activation functions, and ways to improve the accuracy of this prediction.</li>
        </ul>
      <h3>What2Wear <a  href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
        <ul>
          <li>Collaborated with two friends to create a simple web app that recommends clothing depending on weather conditions.</li>
          <li>Designed and wrote the heuristic algorithm that actually predicted the clothing using the Open Weather API.</li>
          <li>Used vanilla JavaScript and Bootstrap to design the web app.</li>
        </ul>
    </section>

    <section className="left">
    <h2>🏆 Leadership and Activities</h2>    
    <h3>Trainee, MAIS 202: Accelerated Introduction to Machine Learning Program <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
      <ul>
        <li>Selected as one of the top 20 amongst more than 120 students to be part of this introduction to machine learning program after a competitive selection process that included a coding assignment followed by interviews of the shortlisted candidates.</li>
        <li>Completed a capstone project (Wallstreet-sentiments) and presented it at the McGill AI project fair.</li>
      </ul>
    <h3>President, Scholastica International Mathematics Summit <a href='#'><FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></h3>
      <ul>
        <li>    Conceived the idea to organize Bangladesh's first international high school mathematics competition, where ultimately 1000 participated, including 200 international students.</li>
        <li>Interviewed, recruited, and oversaw the day-to-day operations of an 80-member, seven-department organizing committee.</li>
      </ul>
    </section>
    
    <section className="light">
    <h2>A bit more about me</h2>    
      <ul>
        {/* I am orginally from Bangladesh. I currently go to McGill University in Montreal, Canada where I study Mathematics and Computer Science/ */}
        <li> I am orginally from Dhaka, Bangladesh. </li>
        <li>I currently go to McGill University in Montreal, Canada where I study Mathematics and Computer Science.</li>
        <li>I love history, especially World War history. Maybe checkout my favourite <a target={"_blank"} href="https://www.youtube.com/@OverSimplified">channel</a> on youtube?</li>
      </ul>
    </section>
    
    <blockquote className="light">
      <p>Thanks for visiting ❤️</p>
    </blockquote>
    
    
    </main>
    
  )
}

export default Main