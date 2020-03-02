# Request giosg api

A React application that fetches some numbers from giosg reporting API's and shows totals for time range on upper half of the page and daily numbers on table belows.

<img width="572" alt="Updated" src="https://user-images.githubusercontent.com/39858235/75645401-79452300-5c4e-11ea-831d-e7a29450d04c.png">


Table shows the results for maximum of 5 days at time. If there are more days in selected date range then table should be paginated.

Note: Demo data is available between 01.05.2017 - 15.06.2017 so use any dates between those dates when testing.

- `start date` , `end date` and `access token` are arguments for the App when quering data from giosg Reporting APIs.

- App makes HTTP GET request to giosg reporting API to fetch chat counts between those two given dates.

- API url is: https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date={start}&end_date={end}

- {start} and {end} are replaced with the actual values

- API documentation used is from http://developers.giosg.com/reporting_http_api.html#chat-stats-api

- From the received response, `total_conversation_count`, `total_use_,essage_count`, `total_visitor_message_count` are displayed in cards

- And from `by_date` array `conversation_count`, `missed_chat_count`, `visitors_with_conversation_count` are displayed in table.

- Auth token is required to access the API. This app uses a particular access token which is gitignored. OnChange, new access Token is required to data of other chat room.


# Folder Structure

frontend : Stores all browser related files (React/axios)


# Using the repository in local computer

- Download zip from 'Clone or Download' button of repository file
- Open terminal, cd folderPath, and paste

 `git clone https://github.com/archanakarki/request_giosg_api.git`

- In terminal : 
```
cd request_giosg_api
npm install
npm start
```

- App runs in http://localhost:3000

