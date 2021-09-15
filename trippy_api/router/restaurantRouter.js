const express = require("express");
const restaurantController = require("../controllers/restaurantController");


const router = express.Router();
// ici, on est dans /restaurant

// ici, on est dans /hotel(all restaurant)
router.get('/', hotelController.getHotel);

router.get('/:id', hotelController.getBuyHotel);

router.post('/', hotelController.addHotel);

router.put('/:id', hotelController.changeHotel)

router.delete('/:id', hotelController.deleteHotel)



module.exports = router;