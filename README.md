# Eventify - Event Management System

A full-stack MERN application for managing events and RSVPs, allowing users to create, manage and RSVP to events.

## Live Demo

You can view the live application [HERE](https://eventmanagement-codequillskills.vercel.app)

<!-- ### Demo Credentials:
- Admin:
  - Email: admin@eventify.com 
  - Password: admin123
- User:
  - Email: user@eventify.com
  - Password: user123 -->

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Management**:
  - Admin dashboard for user,event and rsvp management
  - User registration and authentication
  - JWT-based authentication with 1-hour session expiration

- **Event Management**:
  - Create, read, update and delete events
  - Event details include title, date, location, description
  
- **RSVP System**:
  - Users can RSVP to events
  - Real-time updates on event capacity
  <!-- - Email notifications for event updates -->

- **Additional Features**:
  - Responsive design for all devices
  <!-- - Search and filter events -->
  <!-- - Download event details as PDF -->

## Requirements

- Node.js
- MongoDB (Atlas or Compass)
- GitHub

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/codequillskills/Event-Management.git
    ```
2. Install dependencies:

    - Frontend:
    ```bash
    cd client
    npm install
    ```

    - Backend:
    ```bash
    cd server
    npm install
    ```

    - Update the .env file with the appropriate configuration details as mentioned in the .env.example file.

3. Start the server:
    - Frontend:
    ```bash
    cd client
    npm run dev
    ```
    - Backend:
    ```bash
    cd server
    npm run dev
    ```

## Usage

- Admin can manage users, events and rsvps
- Users can view events and RSVP to them

## Contributing

- Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.