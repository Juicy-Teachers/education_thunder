# Quisbee

## Overview 

Quisbee is an educational quiz app for kids covering various categories. This project is brought to you by a randomly assigned group of Engineers, Designers, and Data Scientists over a 3-day hackathon.

## Approach Taken
We wanted to create an interactive app where children can both learn and have fun. We incorporated big buttons, various colors, and some animations in order to keep the kids engaged. Furthermore, we also incorporated a scoreboard and a timer in order to give the app a sense of gamification.

We first focused on finding an API to get the questions we needed, but unfortunately, we didn't find one that would suit our needs. We then decided to build out our own data with MongoDB with various categories, questions, and multiple choices. Soon after that was done, we then looked to build out the frontend with the the UX/UI design in mind.

The database was tested using Postman and the design concept was brought to life with Figma.

## Using the App

As a player, the app is initialized after hitting the play button on the landing page. You are then brought to a category section where you are asked to choose your topic. Shortly after, you are shown your score, the time, and the start button. Once you click start, the game begins and you are tasked with answering as many questions correctly as you can. After the game has concluded, you are able to play the game again to either attempt to beat your previous score, or to test your knowledge in another category.

We added both a back and home button on the nav in order to navigate to the desired pages.

### Next Steps

- Selecting an avatar before initializing the game
- Fully functional "create quiz" mode for educators and guardians


### Relevant Links

- [Quisbee](http://www.quisbee.netlify.app)
- [Backend Repo](https://github.com/Juicy-Teachers/backend)
- [Deployed Backend](https://quisbee.herokuapp.com/trivia)

### Design Prototypes

![Welcome Screen](src/images/Quisbee_Welcome.png)

![Intro](src/images/Quisbee_Intro@3x.png)

![Avatar Select](src/images/Quisbee_Avatar_Select@3x.png)

![Question](src/images/Quisbee_MC_Question.png)

![Educator](src/images/Quisbee_Educator_Input.png)

### Languages and Tools

<p align="left"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
     <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/>
</p>