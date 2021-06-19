const express = require("express"),
path = require("path"),
app = express();

app.use(express.static(__dirname + '/dist/portfolio'));

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'));
});
app.listen(process.env.PORT || 3000);