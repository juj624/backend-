const express = require("express");
const dotenv = require("dotenv");
dotenv.config({
    path: "./config.env",
});
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());

function protect(req, res, next) {
    try {
        const data = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        req.cookies.jwtData = data;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Your token is not valid",
        });
    }
}

// Connexion à MongoDB
mongoose
    .connect(process.env.DB, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to MongoDB !");
    });

// Models
const UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    password: String,
});

const User = mongoose.model("User", UserSchema);

// Routes
app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    // Hash password
    // Transformer "abcd1234" -> "AIj/.fdsf6595dqsdzacx21...."
    const hashedPassword = await bcrypt.hash(password, 12);

    // Save user to DB
    try {
        await User.create({ email: email, password: hashedPassword });
    } catch (err) {
        return res.status(400).json({
            message: "This user already exists",
        });
    }

    res.status(201).json({
        message: `User created with email: ${email}`,
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    //const user = await User.findOne({ email: email });
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    // Check if password is correct
    // On compare le mot de passe du body avec le hash de la BD
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Create cookie
    // Le troisième argument est un objet de configuration
    res.cookie("jwt", token, { httpOnly: true, secure: false });

    res.json({
        message: "Here is your cookie for subsequent requests, have fun :)",
    });
});

// Protéger les routes avec un middleware qui vérifie l'autorisation
app.get("/users", protect, async (req, res) => {
    console.log("Utilisateur qui fait la requête :", req.cookies.jwtData.id);

    res.json({
        message: "You are authorized",
    });
});

////////// STARTING SERVER ////////
app.listen(process.env.PORT, () => {
    console.log("Listening on port 3000");
});