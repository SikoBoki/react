module.exports = {
	port: process.env.PORT || 3000,
	database:
		process.env.DATABASE ||
		'mongodb+srv://poznansiakoboki:pq8rHGHFD2NyYB1t@cluster0.ex0vc.mongodb.net/note-tuts?retryWrites=true&w=majority&appName=Cluster0',
	//database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/notes-app',
	// 'mongodb+srv://siakoboki:test1234@cluster0.k6y0k.mongodb.net/notatki-szczecin?retryWrites=true&w=majority&appName=Cluster0',
}

//db connect :: const uri = "mongodb+srv://siakoboki:test1234@cluster0.k6y0k.mongodb.net/notatki-szczecin?retryWrites=true&w=majority&appName=Cluster0";
//<password>test1234
//'mongodb://127.0.0.1:27017/notes-app'
