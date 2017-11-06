# HELP

Hey there and welcome! Thanks for checking out Help. Help is a yelp like application that allows users to rate and review restaurants. Navigating the site is literally as easy as clicking a button. You're able to Sign up, log in (or demo login) and get straight to looking for delicious places to eat. From the index page you can see the rating of each restaurant as well as it's price ranges. Besides the restaurants basic composition, all qualities are derived from user scored averages.

Check out the site! [Help: it's where the food's at!](http://www.corey-ladovsky-help.club/#/)

### Technologies

This app is a fullstack application that has been designed using Rails in the backend and React Redux in the front end.
In addition to using Postgress to hold my core database, I used Amazon Web Service as a second database in order to house pictures from the web. I am attaching these pictures with the paperclip gem. In order to do that I also had to install figaro so that I could make a gitignored yml file to hide my AWS keys.
Using Ruby on Rails I was able to build models with proper validations, and controllers to handle my ajax requests. I am rendering JSON and using jbuilder files to pass information around my application.  
In the frontend I am using React in order to keep my App a single page application and Redux in order to store slices of state. This allows me to have persisting users as well as to aid my application dynamically. My application was designed using SCSS.

### Problem Solving

After building my Auth Routes I realized that I had made all successful log ins/ sign ups go directly to the home/ landing page. This tends to be the norm but I realized that it posed a future problem that I would soon encounter. The problem was that most of my site is navigable before officially signing in. This is a problem because a user could potentially go to the page, check out the businesses, look at a specific business, decide to write a review and then be asked to log in. If I had left everything to the 'standard' setup my user would sign in, land back at the landing page and then have to find their way back to the original desired business they wished to write a review for. This would be a very bad and frustrating user experience.
In order to get around this problem I decided to chisel out another slice of state. This slice is called intended page. Whenever I have a protected route that would otherwise send the user directly to sign in, I add a click handler that stores my intended page. Now, after they have a successful log in the landing page checks for the existence of an intended page. If one exists, the user is redirected back to the page they initially wished to visit.
I am proud of the details that I paid attention to. I enjoyed manipulating the html with css. One of my initial difficulties was figuring out how to make the partial grey vertical partition in the center of the search bar. I was successful by creating divs inside of divs and camouflaging their background colors. The small div is propped in the center of the larger one and has a side border. My logo was also a challenge to create solely using css. I was successful by creating a text shadow to all different sides.
![Logo and part of search bar](https://github.com/coreyladovsky/help/blob/master/app/assets/images/logo_and_bar.png)

Please feel free to reach out to me with any questions or request. Have a wonderful day! Enjoy Help!


Things I plan to implement in the near future: I'd like to add working search/ filters. I want clicks on the cuisine type to automatically send a search request to similar cuisines. I'd love to focus on being able to filter by 'open now'.
I'd also like to make my app more adaptive to different screen sizes.
