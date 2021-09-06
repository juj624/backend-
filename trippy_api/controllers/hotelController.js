const express = require("express");
const router = express.Router();


// Donnee de base API hotel
const hotels = [
    {
        "id": 1,
        "name": "Imperial Hotel",
        "address": "84 av des Champs-Élysées",
        "city": "Paris",
        "country": "France",
        "stars": 5,
        "hasSpa": true,
        "hasPool": true,
        "priceCategory": 3
    },
    {
        "id": 2,
        "name": "The Queen",
        "address": "3 Darwin Street",
        "city": "London",
        "country": "England",
        "stars": 4,
        "hasSpa": true,
        "hasPool": false,
        "priceCategory": 3
    },
    {
        "id": 3,
        "name": "Kiwi land",
        "address": "4587 George St.",
        "city": "Auckland",
        "country": "New-Zealand",
        "stars": 3,
        "hasSpa": false,
        "hasPool": true,
        "priceCategory": 2
    }
];

const getHotel = (_req, res) => {
    res.json({
        status: 'ok',
        data: hotels,
    })
}

const getBuyHotel = (req, res) => {
    const id = req.params.id
    res.json({
        data: hotels[id - 1]
    });
};

const addHotel = (req, res) => {
    let body = req.body
    hotels.push(body);
    res.json({
        status: 'ok',
        data: hotels,
    });
};

const changeHotel = (req, res) => {
    const name = req.query.name;
    const id = req.params.id;
    // recuper l'index(la ou se trouve l'id de l'hotel dans le tableau)
    const index = hotels.findIndex((hotel) => hotel.id === parseInt(id));
    // recuper l'element de mon hotel.
    const hotel = hotels[index];
    // change le nom de l'hotel
    hotel.name = name
    // selectionne l'index de mon tableau et le remplace par le nouvel elements 
    hotels.splice(index, 1, hotel);
    res.json({
        status: "ok",
        data: hotels,
    });
};

const deleteHotel = (req, res) => {
    const id = req.params.id
    // recuper l'index(la ou se trouve l'id de l'hotel dans le tableau)
    let index = hotels.findIndex((hotel) => hotel.id === parseInt(id));
    hotels.splice(index, 1);
    // selectionne l'index de mon tableau a supprimer 
    res.json({
        status: "ok",
        status: 'hotel delete !',
        data: hotels,
    });
};


module.exports = {
    getHotel: getHotel,
    getBuyHotel: getBuyHotel,
    addHotel: addHotel,
    changeHotel: changeHotel,
    deleteHotel: deleteHotel,
};