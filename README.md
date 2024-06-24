## Backend
using mysql bitch 

### Requirements

- Node.js
- npm

### Installation

1. Clone the repository

```bash	
$ git clone https://github.com/josiiq/odontogram-with-react.git
```

2. Install the dependencies

```bash
$ cd backend
$ npm install
```

3. Create a `.env` file in the root directory with the following content:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=odontogram
```

4. Start the server

```bash
$ npm run start
```

### Endpoints

- `GET /api/v1/`
  - Returns a message indicating that the server is running
- `GET /api/v1/patients`
  - Returns a list of patients
- `GET /api/v1/patients/:id`
  - Returns a specific patient by ID
- `POST /api/v1/patients`
  - Creates a new patient
- `PUT /api/v1/patients/:id`
  - Updates a patient by IDÇ

### Database
| Patients | Odontograms | Teeth | Tooth_Status | Treatments |
| -------- | ----------- | ----- | ------------ | ---------- |
| patient_id | odontogram_id | tooth_id | status_id | treatment_id |
| first_name | patient_id | tooth_number | status_name | treatment_name |
| last_name | date | tooth_position | description | description |
|    |notes | | | |



