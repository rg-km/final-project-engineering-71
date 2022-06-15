package model

type User struct {
	ID       int    `db:"id" json:"id"`
	Name     string `db:"name" json:"name"`
	Email    string `db:"email" json:"email"`
	Password string `db:"password" json:"password"`
	Username string `db:"username" json:"username"`
	Asal     string `db:"asal" json:"asal"`
	Phone    string `db:"phone_number" json:"phone_number"`
}
