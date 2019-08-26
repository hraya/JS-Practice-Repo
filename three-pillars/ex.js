class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}


function loadBooks(theBookShelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function onBooks(bookNameArr){
		for(let bookName of bookNameArr){
			theBookShelf.addFavoriteBook(bookName);
		}
		theBookShelf.printFavoriteBooks();
	})
}


var BOOK_API = "https://some.url/api";


var newBooks = new Bookshelf();
loadBooks(newBooks)

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
