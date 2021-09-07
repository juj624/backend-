const express = require("express");
const router = express.Router();



// Donnee de base API restaurant
const restaurants = [
    {
        "id": 1,
        "name": "Les trois Mousquetaires",
        "address": "22 av des Champs-Élysées",
        "city": "Paris",
        "country": "France",
        "stars": 4,
        "cuisine": "french",
        "priceCategory": 3
    },
    {
        "id": 2,
        "name": "The Fat Guy",
        "address": "47 Jackson Boulevard",
        "city": "New York",
        "country": "US",
        "stars": 5,
        "cusine": "burger",
        "priceCategory": 1
    },
    {
        "id": 3,
        "name": "Veggies",
        "address": "77 Avenir Street",
        "city": "Sydnet",
        "country": "Australia",
        "stars": 5,
        "cuisine": "vegan",
        "priceCategory": 2
    }
];

const getRestaurants = (_req, res) => {
    res.json({
        status: 'ok',
        data: restaurants,
    })
}

const getBuyReastaurant = (req, res) => {
    const id = req.params.id
    res.json({
        data: restaurants[id - 1]
    });
};

const addRestaurant = (req, res) => {
    let body = req.body
    restaurants.push(body);
    res.json({
        status: 'ok',
        data: restaurants,
    });
};

const changRestaurant = (req, res) => {
    const name = req.query.name;
    const id = req.params.id;
    // recuper l'index(la ou se trouve l'id de l'hotel dans le tableau)
    const index = restaurants.findIndex((restaurant) => restaurant.id === parseInt(id));
    // recuper l'element de mon hotel.
    const restaurant = restaurants[index];
    // change le nom de l'hotel
    restaurant.name = name
    // selectionne l'index de mon tableau et le remplace par le nouvel elements 
    restaurants.splice(index, 1, restaurant);
    res.json({
        status: "ok",
        data: restaurants,
    });
};

const deleteRestaurant = (req, res) => {
    const id = req.params.id
    // recuper l'index(la ou se trouve l'id de l'hotel dans le tableau)
    let index = restaurants.findIndex((restaurant) => restaurant.id === parseInt(id));
    restaurants.splice(index, 1);
    // selectionne l'index de mon tableau a supprimer 
    res.json({
        status: "ok",
        status: 'hotel delete !',
        data: restaurants,
    });
};

module.exports = {
    getRestaurants: getRestaurants,
    getBuyReastaurant: getBuyReastaurant,
    addRestaurant: addRestaurant,
    changRestaurant: changRestaurant,
    deleteRestaurant: deleteRestaurant,
};

module.exports = router;