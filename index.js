const express = require("express");
const app = express();
const cors = require("cors");
const projects = require("./db/projects.json");

const hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.options("*", cors()); // include before other routes

app.use(
	express.urlencoded({
		extended: false,
	})
);

app.get("/", (req, res, next) => {
	console.log("user is requesting main");

	res.render("mainpage", {
		layout: "main",
		msg: "This is CORS-enabled for all origins!",
	});
});

app.get("/contact", (req, res) => {
	console.log("user is requesting contact");
	res.render("contact");
});
app.get("/about", (req, res) => {
	console.log("user is rtequesting about");
	res.render("about");
});
app.get("/projects", (req, res) => {
	console.log("user is rtequesting projects");
	console.log("req.params", req.params);
	console.log("projetcs", projects);
	// const selectedProject = projects.find((item) => item.directory == project);

	// if (!selectedProject) {
	// 	return res.sendStatus(404);
	// } else {
	res.render("projects", {
		projects,
		// selectedProject,
	});
	// }
	// res.render("projects");
});
app.listen(process.env.PORT || 8080, () =>
	console.log("portfolio server is listening at http://localhost:8080")
);
