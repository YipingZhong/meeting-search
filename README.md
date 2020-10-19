# Acme Search

## Project Description
Acme search is a search engine built with ReactJS. It aims to help users search relevant info cross various data sources/apps, such as calendar, contacts, files, and related social media records. 

## How to run your project
1. Open 2 terminals, one in the "frontend" directory and the other in the "meeting-search-api" directory.
2. In both terminals, use "npm install" to install packages that are used in building this project.
3. Run "npm start" for both terminals, you should see the frontend webpage runs on localhost port 3000 and a json server runs on port 3004.

## Features you implemented
### Main Features:
Search method: as users search a string of words, this program will find all the relevant info and display based on relevance, which is the number of matching terms. However, meetings are ranked by time (see below for reasoning).

Side menu: if users want to jump to a certain section, they can use the menu aside to quickly jump to a different section instead of scrolling back and forth.

Interactive icon: for icons in the meeting section, it will change when user click it. (I know this icon may not make sense since I feel I understand calendar part of data wrong when I made this feature. At first, I thought this part of data is coming from some event management website, so this icon is designed for actions like "addToGoogleCalendar". After further developing and reserching about Neeva, I believe this data comes from a calendar instead).

Pop-up window for contacts: Showing the emails, phones, and even additional description in the main searching page can be space consuming. I would prefer to lead to a new page or just display the additional information in a pop-up window like this program.

### Additional Feature:
I chose to implement the dynamic loading for Tweets section. For this section, it is initialized with all tweets data in the json server. When users reach the end of tweets in the json server, it will automatically generate random tweets as users keep scrolling down, which simulates the scenario when new tweets data become avaliable. It will stop generate random tweets if there are more than 20 tweets loaded in this section.

## Design Decisions and Trade-offs

Meetings ranking: Instead of rank by relevance, I believe rank by time will be more reasonable as people usually wants to see the upcoming meetings before the past meetings. In this section, the nearest upcoming meetings will come first. After displaying all upcoming meetings, this section will show the most recent past meetings.

Time display: For meetings, I believe the relevant time would be better. However, the dropbox part, I feel it makes more sense to show an exact date that the file is created/updated.

## Future Improvement
Ranking of different sections: as the number of data sources increase, using a side menu with fixed section ranking is not a satisfying solution to bring great user experience. I think some data analytics might be helpful to determine which section should be display first.

Initial display: this program displays all information when the search text is empty because we don't have too much data and it's convenient for testing. However, I would prefer to either display nothing or only display sections that users pin when we have more data sources.