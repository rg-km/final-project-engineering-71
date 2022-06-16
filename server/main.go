package main

import (
	"database/sql"
	"log"
	"net/http"
	"server/model"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	//db, err := sql.Open("sqlite3", "./db/expo.db")
	//if err != nil {
	//	fmt.Println("error opening database:", err)
	//}

	r := gin.Default()
	r.GET("/", helloHandler)
	r.POST("/api/register", registerHandler)
	r.Run(":8080")
}

func helloHandler(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Welcome to EXPO API",
		"status":  "True",
	})
}
func registerHandler(c *gin.Context) {
	var user model.User
	c.BindJSON(&user)
	c.JSON(http.StatusOK, gin.H{
		"name":         user.Name,
		"email":        user.Email,
		"password":     user.Password,
		"username":     user.Username,
		"asal":         user.Asal,
		"phone_number": user.Phone,
	})
	db, err := sql.Open("sqlite3", "./db/expo.db")
	if err != nil {
		panic(err)
	}
	defer db.Close()
	{
		tx, err := db.Begin()
		if err != nil {
			panic(err)
		}
		stmt, err := tx.Prepare("INSERT INTO users(name, email, password, username, asal, phone_number) VALUES(?, ?, ?, ?, ?, ?)")
		if err != nil {
			log.Fatal(err)
		}
		defer stmt.Close()
		user_data := []*model.User{&user}
		for _, user := range user_data {
			_, err := stmt.Exec(user.Name, user.Email, user.Password, user.Username, user.Asal, user.Phone)
			if err != nil {
				log.Fatal(err)
			}
		}

		//user_data = append(user_data, &user)
		//for _, user := range user_data {
		//	_, err := stmt.Exec(user.Name, user.Email, user.Password, user.Username, user.Asal, user.Phone)
		//	if err != nil {
		//		log.Fatal(err)
		//	}
		//}
		tx.Commit()
	}

}
