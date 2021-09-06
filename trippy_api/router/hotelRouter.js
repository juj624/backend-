const express = require("express");
const hotelController = require("../controllers/hotelController")


const router = express.Router();
// ici, on est dans /hotel(all hotel)
router.get('/', hotelController.getHotel);

router.get('/:id', hotelController.getBuyHotel);




module.exports = router;