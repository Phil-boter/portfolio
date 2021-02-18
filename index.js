const express = require("express");
const app = express();

const hb = require("express-handlebars");
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use(express.static("./public"));

app.get("/", (req, res) => {
	console.log("user is requesting GET / route");
	res.render("portfolio", {
		layout: "main",
	});
});

app.listen(process.env.PORT || 8080, () =>
	console.log("petition server is listening")
);
// if (require.main == module) {
// 	app.listen(process.env.PORT || 8080, () =>
// 		console.log("portfolio server is listening")
// 	);
// }
