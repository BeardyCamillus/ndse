const express = require("express");
const errorMiddleware = require("./middleware/err-404");
const userRouter = require("./routes/user");
const booksRouter = require("./routes/books");

const app = express();

app.use("/api/user", userRouter);
app.use("/api/books", booksRouter);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});