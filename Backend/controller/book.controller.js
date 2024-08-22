import Book from "../model/book.model.js";

const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Books not found:", error);
    res
      .status(500)
      .json({ message: "Error fetching books", error: error.message });
  }
};

export default getBook;
