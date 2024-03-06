const express = require("express");
const errorMiddleware = require("./middleware/err-404");
const indexRouter = require("./routes/index");
const booksRouter = require("./routes/new-books");
const userRouter = require("./routes/api/user");

const app = express();

app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/api/user", userRouter);
app.use("/api/books", booksRouter);


app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});