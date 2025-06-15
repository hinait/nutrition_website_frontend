#  Food Nutrition Website - Cloud Based Web Application 

## Note: Backend Services Are Currently Offline

This frontend was developed by me as the frontend developer in a group project for COMPX527 at the *University of Waikato*.  
The frontend was built using **React.js**, while the backend services were developed by two teammates using **Python**, and hosted on **AWS** (EC2, DynamoDB, etc.).

To avoid unnecessary costs and redeployment, backend services have not been restored.  
This repository is intended to showcase the **frontend UI, user flow, and design**, and includes:

- 🧱 **[AWS Architecture diagram used during the project]** (https://1drv.ms/f/c/90e734331ddc2501/EjMvh-mg6Y9Iua_YIB6zP-8B8TidBE_KwvglPjhCWrO35g?e=c1b1Mf)
- 🧠 **[Report Submission]** (https://1drv.ms/b/c/90e734331ddc2501/EeU4r6E6Dq5OjT8E7IE27HsBDENMRQjQ1zggGn8ID4-PbQ?e=OEUPmY)

👉 For a detailed breakdown of the system architecture and AWS services used, please check my blog post here.


## How to Run the Frontend 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Functionality

### Authentication
- Implements OAuth2 with JWT authentication handled by the backend (FastAPI).
- When user login, the backend issues a JWT access token with a 30-minute expiry.
- The frontend stores the token in localStorage and attaches it to API requests using Authorization: Bearer <token>.

### UserProfile
- Logged-in users can view their email and search history.

### Search
- Users can search any food item via the search bar.
- Results are fetched from the USDA Food Central API (via backend).
- Search results show nutritional information (calories, protein, etc.).
- Clicking an item displays detailed nutrition info in a clean UI layout.

### History
- Personal history: All search queries made by the current user.
- Global search stats: View how many users have searched for a particular item.
- Real-time rendering of search counts using bar or table components.

## 🛠 Tech Stack

- **Frontend:** React.js, React Router
- **API Handling:** Axios
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** AWS S3, CloudFront (via Jenkins pipeline)










