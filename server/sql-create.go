package main

import (
	"database/sql"
	"server/model"

	_ "github.com/mattn/go-sqlite3"
)

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}
func (u *UserRepository) CreateUser(user model.User) (int64, error) {
	result, err := u.db.Exec("INSERT INTO users(name, email, password, username, asal, phone_number) VALUES(?, ?, ?, ?, ?, ?)", user.Name, user.Email, user.Password, user.Username, user.Asal, user.Phone)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
	//statement, _ := u.db.Prepare("INSERT INTO users(name, email, password, username, asal, phone_number) VALUES(?, ?, ?, ?, ?, ?)")
	//_, err := statement.Exec(user.Name, user.Email, user.Password)
	//if err != nil {
	//	return 0, err
	//}
	//return result.LastInsertId()
}
