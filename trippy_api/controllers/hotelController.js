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
    const objHotel = req.params.id
    res.json({
        data: hotels[objHotel - 1]
    });
}



module.exports = {
    getHotel: getHotel,
    getBuyHotel: getBuyHotel,
};