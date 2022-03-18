# MongooseStore
 Per Scholas Project 2: Make a product inventory manager with full CRUD using Mongoose


# Mongoose/MongoDB Webstore Project
### This is the second project assigned from Per Scholas' Software Engineer course

## Objectives
Create a full CRUD app in Express with Mongoose and deploy to Heroku [here] (https://nuetzistore.herokuapp.com/products).

## Technologies Used:
- HTML5
- CSS3
- JavaScript
- Express.js
- Mongoose / MongoDB
- Heroku

----------------------------

## Index Page:
Your app should have an index page where:
- all the products are displayed
- the images link to the product's show page
- and there should be a link to add a new product.


## Show Page
1. Your show page should display a product with:
   - a link back to the products
   - a link to edit the product (goes to the edit page)
   - a delete button that deletes
   - and the number of items remaining in stock.
2. There should be a BUY button. The BUY button will reduce the number of items in stock by 1 each time it's pressed.
3. If the quantity of your item is zero, the show page should say 'OUT OF STOCK' instead of saying how many are remaining.
4. On the edit page, make sure you can set the quantity to zero if you want so that you can test if this is working.
5. The BUY button should also not be rendered if the quantity of the item is zero.


## Edit & New Page
- These views should render forms and submit to the appropriate routes.


## Redirects
1. The create route should redirect to the index
2. The delete route should redirect to the index
3. The update route will redirect back to the product's show page.
4. For the Hungry for more? the BUY button will go to a route that redirects back to the product's show page


## The Buy Button
After you have your full CRUD app working, it's time to break/extend RESTful conventions according to your own lights. The app needs a buy button. It's up to you to make your own routes to facilitate it.
As mentioned in the expected functionality, if a product is in stock (the qty is above 0), the show page should have a BUY button. If the product is out of stock, it should not have this button.
When the BUY button is pressed, it will make a request to update the qty of the product (decrease it by 1). An example of how to increase something by 1 but you need to decrease it by one, research the answer in the docs/google

----------------------------

## Required Installation
1. Clone the repository and open a terminal in that directory (or cd to that directory form an existing terminal)
2. In the terminal window, enter `npm install` to install Node modules
3. Other packages 
4. Set up database
5. Create .env file
6. Run `nodemon` in the terminal
7. In your web browser, navigate to [http://localhost:3000/products](http://localhost:3000/products)

(Future update will include a video [here]())