# Trellolow

## Description

Trellolow is a Project Management Tool that organizes your project using a Kanaban board.   It functions like a board of stickies that you can organize in columns.  You can easily view what you are working on, who is assigned to any step, what you have competed and what is left to be done.  Trellolow utilizes cards that you may use for tasks, reminders, notes, general information, and resources.  Use it like a whiteboard or a spare filing cabinet for your brain.

## Page Link

https://github.com/DaveToth77/Trellolow

## Table of Contents

* [Description](#description)
* [Page Link](#page-link)
* [Table of Contents](#table-of-contents)
* [Built With](#built-with)
* [Code Link](#code-link)
* [User Story](#user-story)
* [CRITERIA](#criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Roadmap](#roadmap)
* [Contributions](#contributions)
* [Credits](#credits)
* [License](#license)

## Built With

- Server-side JavaScript
- Node.js
- Express.js
- RESTful APIs
- Handlebars.js
- MySQL 
- Sequelize ORM (Object-Relational Mapping)
- MVC Paradigm Folder Structure
- Express-session and Cookies

## Code Link

https://git.heroku.com/immense-ocean-25208.git

## User Story

AS A user

- I WANT an easy to use project management tool that provides one place to keep information and track of progress on a project.
  - SO THAT I can eliminate wasted time, lost ideas and notes, and improve my productivity and time management.

## CRITERIA

GIVEN THAT I want to be able to organize notes and lists digitally, in a single location, for my self and any group members to be authenticated:
WHEN I open the app I want to be given an option to be directed to a log-in and/or signup page.
THEN I can chose a button, or link, to go to a page(s) where I will find a form to complete based on my option.
WHEN I complete the form, by entering my information, depending upon whether it is my first time, or I am already registered,
THEN I can make another selection, which will take me to the main dashboard that contains a place for my information.
WHEN I reach the dashboard,
THEN I can choose to create a new list and give it a new title, or view and interact with lists that I have previously created, if any.
WHEN I have lists, they will be displayed across the screen with options for action,
THEN I may choose to add a card, edit or view and existing list.
WHEN I choose to edit, or create, a card,
THEN a display will pop up and allow me to create a new card, or edit the information of the existing card.
WHEN I have completed the information,
THEN I may save the card
When I need to move the card to another list
Then I can select the card I wish to relocate and move it to the appropriate list.

## Installation

To install this application you must have a few things on your computer already installed. Node.js and MySql should be on the computer to make sure the software is ready to run the app. Once these are installed, you can follow along for more specific instructions from the video that is above.

At the repo for this project, click on the green button.

Click on the SSH Key and copy the link to be used later.

Create a new folder on your desktop.

Open up Terminal.

Navigate to the new folder on the desktop and type in "git clone" and paste the link that was copied from teh Github repo.

Go into the folder and go into the folder that was cloned from the repo.

When you are there, type in "npm install" to install the dependencies that are needed for the project.

While are you are in the root folder, type in "mysql -u root -p", where it will take you to to insert your password.

When you have entered in the beginning of the Terminal will have mysql and then you can type in "source db/schema.sql". This wording will allow the user to create a the database "trellolow_db" and the tables that correspond with the database.

In order for the database to correctly interact with the server, you have to make a new ".env" file. Make sure the file has the structure of 

DB_HOST=localhost
DB_NAME='trellolow_db'
DB_USER=‘root’
DB_PW=‘your-password’

In there you must add  and make sure the DB_PW is you MySql password.

Then type "quit" to leave MySql.

Type in "npm run seed" in the terminal and that will populate the database with table and rows.

For more specific instructions, please reach out to me with questions with the links below!


## Usage

To use the application

Open the root folder of the repo with Terminal or Git bash.

This root folder is "Trellolow".

Run the command "npm start". This will create a message tha the local server is working on port 3001.

Then you can go to the localhost3001 on your browser of choice and run the app. 

## Support

For support, please start an issue in the repository, instead of emailing one of the developers.

## Roadmap

Initial: 

- Single project board with default template.

Future features:

- Multiple board capability
- Templates 
- Cloud Storage
- Enable use of multiple devices
- Team Collaboration 

## Contributions

Although, contributions are not allowed, at this time.  You may submit any feedback on the code to through github issues. 

## Credits
Developers:
  Sean Murphy: Full-Stack Web Developer
    Email: smurphy7326@gmail.com
  David Toth: Full-Stack Web Developer
    Email: dtoth77@gmail.com
  Sherri Winslow: Full-Stack Web Develop
    Email: swinslowcoding@gmail.com
  
## License
For Personal, Educational and Portfolio use.

©2021 Murphy, Toth, & Winslow