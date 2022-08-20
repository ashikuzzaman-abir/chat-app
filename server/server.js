require("dotenv").config();

const http = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cluster = require("cluster");
const os = require("os");
const fs = require("fs");

const config = require("./configs/main.config");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");


//View SetUp
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middleware SetUp
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(
	cors({
		origin: config.corsOrigin,
		credentials: config.corsCreedentials,
	})
);
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
	morgan(config.morganMode, {
		skip: function (req, res) {
			return res.statusCode < 400;
		},
		stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a', encoding: 'utf-8' }),
	})
);

//Route SetUp
const apiRoute = require("./routes/api.route");

app.get("/", (req, res) => {
	res.render("index");
});

//API ENGINE
app.use("/api", apiRoute);


//404 / DEFAULT ROUTE
app.use('*', (req, res) => {
	res.status(404).render("404");
})


//SOCKET Logics
const io = new Server(server, {
	cors: {
		origin: config.corsOrigin,
		credentials: config.corsCreedentials,
	},
});


io.on("connection", (socket) => {
	console.log(socket.id, ' socket connected');
	// console.log(socket.handshake.headers);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	})
});

//cluster SetUp
if (cluster.isMaster) {
	const cpus = os.cpus().length;
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}
	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
		cluster.fork();
	});
} else {
	server.listen(PORT);
}

module.exports = server;
