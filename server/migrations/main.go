package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./db/expo.db")
	if err != nil {
		panic(err)
	}
	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users(id integer not null primary key AUTOINCREMENT, name TEXT, email TEXT, password TEXT, username TEXT, asal TEXT, phone_number TEXT);
	INSERT INTO users(id,name, email, password, username, asal, phone_number) VALUES(1, 'Bayu Adhitya Wibisana', 'b.awibisana@gmail.com', 'aditwibisana', 'aditwibisana', 'Klaten', '085748484848');
	`)
	if err != nil {
		panic(err)
	}
	defer db.Close()

}
