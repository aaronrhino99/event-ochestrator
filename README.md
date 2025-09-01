# Event Orchestrator

A simple **Node.js** application that decides whether to send notifications based on user preferences and **Do Not Disturb (DND)** schedules.

## 🚀 Features
- Save and fetch user preferences
- Define quiet hours with DND
- Decide notifications per event type
- Lightweight REST API with Express

## 📦 Setup

### Prerequisites
- Node.js v14+
- npm

### Installation

git clone https://github.com/your-username/event-orchestrator.git

cd event-orchestrator
npm install

## Run the Server
npm start
Server runs on http://localhost:3000


## How It Works 

       ┌──────────────┐
       │    Client    │
       │ (curl/Postman│
       └──────┬───────┘
              │
              ▼
       ┌──────────────┐
       │   Express    │
       │   (app.js)   │
       └──────┬───────┘
              │
   ┌──────────┴───────────┐
   ▼                      ▼
preferences route     events route
   │                      │
   ▼                      ▼
preferencesCtrl     eventsCtrl
   │                      │
   ▼                      ▼
  store (memory)    helpers (DND logic)


**Code structure

src/
├─ index.js            # Starts the server
├─ app.js              # Express app and route setup
├─ routes/             # API endpoints
│  ├─ preferences.js
│  └─ events.js
├─ controllers/        # Business logic per endpoint
│  ├─ preferencesController.js
│  └─ eventsController.js
└─ helpers.js          # Time/DND calculation

## API Endpoints

GET /preferences/:userId → Get preferences
POST /preferences/:userId → Save preferences


{
  "dnd": { "start": "22:00", "end": "07:00" },
  "eventSettings": { "item_shipped": { "enabled": true } }
}

## Events

{
  "eventId": "evt_1",
  "userId": "u1",
  "eventType": "item_shipped",
  "timestamp": "2025-08-30T23:30:00Z"
}

{ "decision": "PROCESS_NOTIFICATION" }

{ "decision": "DO_NOT_NOTIFY", "reason": "DND_ACTIVE" }







