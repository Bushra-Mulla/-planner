# planner

A basic web to manage the teamwork or your own work where you can find your tasks
So you can Follow up on workflow and Distribute tasks to the team

## Getting Started

Access to the [planner]()

## Technologies Used In The Project

- react.js
- Api (google calendar Api)
- Bootstrab
- CSS

## wireframes

![wireframes]()

## User Stories

- As a user, I should be able to open a new project.
- As a user, I should be able to add new tasks
- As a user, I should be able to edit tasks
- As a user, I should be able to delete one or all tasks in the project
- As a user, I should be able to Follow up on workflow
- As a user, I should be able to Change the status of tasks

## Project Plan

- Started first by create wireframes
- write the Requirements in the project
- Wrote the process / flow the code
- Created component flow
- After that, I began working on the Api.

## Difficulties encountered

The difficulties pars was in auth2 to get access to the google chalendar Api
Get the key is very easy, but to be able for change (post/put/delete) the Api url not accespt the key it need access token.
get access token is not that easy there are meny steps to do

- From google console api in the project in your project you need to requests the client id, whene you do that you have to save the Client ID and Client secret for later use.
  //img
- You need to Authorized redirect URIs to use with requests from a web server (every web server has a Specific Urls so you need to know the server that you will use) in this case
  - I recommend using google developer OAuth 2.0 Playground.
    //img
    The first one is for postman, it give you the access token but not give you the refresh token (you need to do more steps to get the refresh token from postman)
    The second one is for google developer OAuth 2.0 Playground.
- Now in the google developer OAuth 2.0 Playground:
  - Go to the setting in the top right and write your own Client ID and Client secret
    //img
  - Select the authorize APIs (Select the scope for the APIs you would like to access or input your own OAuth scopes below. Then click the "Authorize APIs" button.
    //img
  - it need allow to access to your google account
  - and then Finally you get the access token and the refresh token
    //img
    The standard OAuth behaviour, configure lifetimes access tken and refresh token
    • Access token lasts 60 minutes
    • Refresh token lasts for 12 hours
    But since we use our own Oauth credentials the refresh token will not revoke after the lifetime up.
    But still you have short lifetime for access token, so we need to use the refresh token to create a new access token
    This step is a little confusing in google Oauth2 documentation, the way to do it is Using OAuth 2.0 for Web Server Applications
    There are steps to get your own refresh token using code but it as a little confuse too, so I recommend using google developer OAuth 2.0 Playground As I said earlier
    //img

## Future updates to project

- create account and see my own task
- share any information aboute project in project page
- create dashbourd with Portfolios

## ReSources

- https://developers.google.com/calendar/concepts
- https://developers.google.com/identity/protocols/oauth2/web-server#httprest_7
- https://developers.google.com/identity/protocols/oauth2/service-account
- https://developers.google.com/oauthplayground/
# planner.
# planner.
# planner.
