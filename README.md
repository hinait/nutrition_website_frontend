#  Food Nutrition Website - Cloud Based Web Application 

## Note: Backend Services Are Currently Offline

This frontend was developed by me as the frontend developer in a group project.  
The frontend was built using **React.js**, while the backend services were developed by two teammates using **Python**, and hosted on **AWS** (EC2, DynamoDB, etc.).

To avoid unnecessary costs and redeployment, backend services have not been restored.  
This repository is intended to showcase the **frontend UI, user flow, and design**, and includes:

-  **[AWS Architecture diagram used during the project]** (https://1drv.ms/f/c/90e734331ddc2501/EjMvh-mg6Y9Iua_YIB6zP-8B8TidBE_KwvglPjhCWrO35g?e=c1b1Mf)
-  **[Nutrition_website_Backend]**(https://github.com/hinait/Nutrition_website_backend.git)

## UI

Home page

![Home Page](./Public/page1.png)

Register Page

![Register Page](./Public/page2.png)

Food detail Page

![Food detail Page](./Public/page3.png)

Food detail Page 2

![Food detail Page](./Public/page4.png)

## How to Run the Frontend locally

- git clone :

https://github.com/hinait/Nutrition_website_frontend.git
cd compx527-frontend-react

In the project directory, you can run:

#### `npm start`

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










