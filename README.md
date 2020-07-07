# Cameron Duncan - Milestone project 01 - Highland Treks Website

---

Highland Treks is a Website for a fictional company based in the Highlands of Scotland.  The company, named **Highland Treks**, specialises in tour guides through specific locations in the scottish highlands.  The Website is designed to provide information on the specific *treks*, the *locations* visited on the treks and a *booking* system to easily book a time for a trek.  

The website is a useful tool for anyone looking for tours through the highlands and provides all information necessary for the company as well as some extra features to sell the company to potential customers.  This includes: 
* Features of the Company and Website.
* Testimonials of previous customers.
* History and Brief information on all the locations in the treks.
* Easy to use booking system 
* Good visual experiance while viewing website

---

## UX and Design

In this section is a discussion on the User Experiance and design of the Website.  Website is catering for tourist visits to the Highlands so this was the focus of the design.  Images and information was tailored to be highland specific.  A particular emphasis was put on images as these would be used to sell the locations as well as the company. 

### Site wide

#### Navigation 
The first thing necessary for this website was a good navigation system for moving around easily.  To accomplish this the **Bootstrap nav classes** where used.  These provided a minimalist yet effective nav bar at the top of all site pages.  

Navigation features: 
 * Company Logo (Setup as a Nav link to home page)
 * Nav links
    * Home page 
    * Trek page 
    * Book page

For design the navbar used a minimal one lighter color style with white letters. The color chosen was the **primary colour** (see color section) with white lettering to make it easier for users to see.  For further ease in user experiance each page contains a class coded in **style.css** of active If the user is currently on the specific page the nav item is referring to. Or inactive if the user is not on the page specified by the nav item.

These are for easy identification of the page the user is currently on.

#### Colours

Colours chosen for the website where for minimal style reasons only and not the main focus of the site design.  However some colour was necessary to avoid the website looking bland for users.  

Originally the colors picked was a green primary colour with a darker green secondary colour. Colours where in hex.

While the green certainly matched some of the images used it was not a primary colour found throughout the site.  Because of this a brighter orange colour was chosen.  

The orange was alot more fitting throughout as it matched the tones of the images on the sight.  

### Webpages
#### Index

The main page of the website is the **index.html** document.  

Upon visiting the site a landscape image is the first thing the user sees.  This was a way for the user to immediately uderstand what the site is about.  The image takes up the entire view width to really emphasize the idea of the site.  

Below this is the title section with a brief description of the site as well as a *learn more* button for quick page navigation.  

The next section on the sight is the features section which gives a 3 simple and easy to view descriptions of what the site is for.  This features a map graphic of the highlands region.  The features also contain headers for each with an icon.  

The next section is a brief history section with an image.  This is to introduce potential users to the Highlands and drive excitement to use the site.  This also provides a nicer buffer between last and next sections for better UI design.  

The next section is a link section to the **Trek Page**.  Each image box contains a title to what treks are available.  The boxes grow when the user hovers over them as well as the image changing from a transparent top layer to a clearer image for nice nicer experiance.  

The next section is a testimonial section used to sell the company.  The testimonials are from two people located in very different locations which gives a good indication that people from many places have used the site.  An image of a Highland cow with a darker transparent layer was chosen as the background as this is a very famous animal of the Scottish Highlands.  The section also contains a button which links to the **Book page**.  

#### Trek

The trek page is the second page on the sight and gives a detailed explanation of the locations available on the specific treks available to book.  

The treks include:
* Castle Trek
* Forest Trek
* River Trek

The treks contain 3 locations each which can be viewed upon clicking on a coresponding button at the top of the page.  The pages uses a **Javascript** file to manipulate the DOM and display the information selected.  

Each button corresponds to a unique function in the **scrips/app.js** file.  The functions: 

While each function contains a different name and flow statments based on the button clicked the general code is similar.  

Each trek information displayed also comes with a book button like in index.html testimonials section which also links to the **Book page**.  


#### Book

The booking page is the shortest page and focuses around the form section. 

The page has 3 buttons which when hovered over will grow and becomes lighter similar to the trek buttons in the index.html.  The buttons when clicked run a javascript function in **app.js**.  Again the functions contain different names but still function similarly:


When clicked on the text next to 'Booking for:' will change to the corresponding trek title.  

The rest of the section contains a form that has:
* First Name input
* Last Name input
* Email address input
* Date input
* Submit button

This is for users to book a trek.  

---

## Features

The site contains several features used to investigate and book a trek from the company.  

#### Existing Features

* Allow users to investigate each trek using a UI interface
* Allow users to book a trek by using a form on the final page


#### Features to Implement 

* Store booking info in a database 
* Email sent to user to confirm booking

---

## Technologies

This section is a list of all the technologies used in the building of the website.

* HTML - For site information and data
* CSS - Styling for the HTML docuemnts created
* Javascript - For DOM manipulation 
* Bootstrap - For quick styling and formatting each page
* FontAwesome - For icons used within the site 
* Animate.css - For animated transitions 
* Adobe Photoshop - For image editing
* Adobe Illustrator - For Vector Image creation
* Adobe XD - For Wireframe and UI design

---

## Testing

Testing for desktop was done on 4 browsers:
* Google Chrome 
* Firefox
* Microsoft Edge
* Safari

All browser displayed the site with no errors.

The site has been tested on multiple different devices to ensure its usability on any screen.  The sight has been tested on: 

* Desktop PC 
* Microsoft Go tablet
* Apple Iphone

On all devices the website responds well and shows all information needed without any major UI problems.  

---

## Deployment 

The site was deployed using GitHub pages.

URL: https://cameronduncan678.github.io/HighlandTreks-Website/

Steps to deploy:
* Move html documents to main directory
* On the Github repository page
* In settings/ Github pages
* set source to master

For deployment the HTML documents and the assets folder have been placed in the main folder.  This allowed GitHub pages to find the index.html document and run the website.  

The original deployment caused a bug that crashed the website after a few seconds causing a 404 error.  This bug effected live server on VScode too.  

The Second deployment attempt was taken carefully and proved successful.  The was deployed and has run successfully since. 

---

## Credits

### Media 

* Images for this site were sourced from Google images

* Icons where sourced from FontAwesome

* Style classes from Bootstrap where used throughout the source code

### Acknowledgements

Inspiration for this project was from my experiance living in the Scottish Highlands






