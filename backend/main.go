package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/rs/cors"
)

type CreateRoomRequest struct {
	Link string `json: "link"`
}
type CreateRoomResponse struct {
	RoomID string `json: "roomId"`
}

type Room struct {
	ID string
	Link string
}

var rooms = map[string]Room{}

func createRoomHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req CreateRoomRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid JSON body", http.StatusBadRequest)
		return
	}

	if !strings.Contains(req.Link, "youtube") {
		http.Error(w, "Unsupported link", http.StatusBadRequest)
		return
	}

	roomID := uuid.New().String()
	rooms[roomID] = Room{
		ID:   roomID,
		Link: req.Link,
	}

	resp := CreateRoomResponse{RoomID: roomID}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func getRoomHandler(w http.ResponseWriter, r *http.Request){
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	roomID := strings.TrimPrefix(r.URL.Path, "/rooms/")
	room, ok := rooms[roomID]
	if !ok {
		http.Error(w, "Room has not been found", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "appliaction/json")
	json.NewEncoder(w).Encode(room)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/rooms", createRoomHandler)
	mux.HandleFunc("/rooms/", getRoomHandler)

	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173"},
		AllowedMethods: []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders: []string{"Content-Type"},
		AllowCredentials: true,
	})

	handler := c.Handler(mux)
}
