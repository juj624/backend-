const express = require("express");
const app = express();
const PORT = 8000;
const hotelRouter = require('./router/hotelRouter');
const restaurantRouter = require('./router/restaurantRouter');

app.use('/hotels', hotelRouter);
app.use('/hotels/:id', hotelRouter);









app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`)
});
