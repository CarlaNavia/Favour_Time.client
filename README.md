<h1>Favour Time</h1> 
<h2>Description</h2>

This is a platform to offer useful services to gain credits that you could exchange for booking other new services. 

<h2>User Stories</h2>

404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

Signup: As an anon I can sign up in the platform so that I can check the services

Login: As a user I can login to the platform so that I can book and offer different services

Logout: As a user I can logout from the platform so no one else can use it

Home: as a user you can add some service and you can choose which category do you want to check in order to book a serviceDetails 

Page: as a user you can checked all the details from each service

Profile: you can check all your bookings, you can access to your requests in order to accept or decline them, you will see all your reviews, you can check your personal information, you can edit or delete the services that you uploaded

<h2>Backlog</h2>

<ul><li>To delete a booking 24 hours before the due date</li><li>Chat to talk between the owner and the client</li><li>Notifications</li>
<li>Gamming (some extra points for your birthday, or if are owner for 5 services with more than 4 in your reviews, you will receive extra credits) </li>
<li>Subcategories</li>
</ul>

<h1>Client / Frontend</h1>

<h2>React Router Routes (React App)</h2>

<table>
<tr>
  <th>Path</th>
  <th>Component</th>
  <th>Permissions</th>
  <th>Behavior</th>
</tr>
  <tr>
    <td>/</td>
    <td>Home</td>
    <td>public <Route></td>
    <td>Home page</td>
  </tr>
    <tr>
    <td>/signup</td>
    <td>Signup</td>
    <td>public <Route></td>
    <td>Signup form, navigate to home after signup</td>
  </tr>
    <tr>
    <td>/login</td>
    <td>Login</td>
    <td>public <Route></td>
    <td>Login form, link to signup, navigate to home after login</td>
  </tr>
    <tr>
    <td>/faqs</td>
    <td>Faqs</td>
    <td>public <Route></td>
    <td>Help to understand the app</td>
  </tr>
    <tr>
    <td>/servicetype</td>
    <td>ServiceType</td>
    <td>public <Route></td>
    <td>Shows all the categories</td>
  </tr>
    <tr>
    <td>/servicetype/:categoryID</td>
    <td>Services</td>
    <td>public <Route></td>
    <td>Show all the services of the same category</td>
  </tr>
    <tr>
    <td>/services/:serviceID</td>
    <td>ServicesDetails</td>
    <td>user only <PrivateRoute></td>
    <td>Detail of the service and option to book it</td>
  </tr>
    <tr>
    <td>/service/edit/:serviceId</td>
    <td>EditService</td>
    <td>user only <PrivateRoute></td>
    <td>Edit the service</td>
  </tr>
    <tr>
    <td>/profile</td>
    <td>Profile</td>
    <td>user only <PrivateRoute></td>
    <td>See personal informartion</td>
  </tr>
    <tr>
    <td>/profile/edit/:userId</td>
    <td>EditProfile</td>
    <td>user only <PrivateRoute></td>
    <td>Edit the personal informartion</td>
  </tr>
    <tr>
    <td>/packs</td>
    <td>Packs</td>
    <td>user only <PrivateRoute></td>
    <td>Buy credits</td>
  </tr>
    <tr>
    <td>/add-a-review/:bookingId</td>
    <td>AddReview</td>
    <td>user only <PrivateRoute></td>
    <td>Create a review</td>
  </tr>
</table>

<h2>Components</h2>

<ul>
  <li>Home</li>
  <li>Signup</li>
  <li>Login</li>
  <li>Faqs</li>
  <li>ServiceType</li>
  <li>Services</li>
  <li>ServicesDetails</li>
  <li>EditService</li>
  <li>NewService</li>
  <li>RandomService</li>
  <li>MyServices</li>
  <li>ServiceList</li>
  <li>ServiceListItem</li>
  <li>BookingList</li>
  <li>MyBookings</li>
  <li>MyRequests</li>
  <li>Profile</li>
  <li>EditProfile</li>
  <li>Packs</li>
  <li>AddReview</li>
  <li>MyReviews</li>
  <li>Search</li>
  <li>Rating</li>
  <li>UserDetails</li>
  <li>Footer</li>
  <li>HeaderProfile</li>
  <li>Navbar</li>
  <li>NavbarInfo</li>
</ul>

<h2>Services</h2>

<ul>
  <li>auth-service</li>
  <ul>
    <li>auth-login(user)</li>
    <li>auth.signup(user)</li>
    <li>auth.logout()</li>
    <li>auth.profile()</li>
  </ul> 
  <li>booking-service</li>
  <ul>
    <li>getBookingsByUserID(userId)</li>
    <li>getRequestsByUserID(userId)</li>
    <li>changeTheBookingStatus(bookingId, status)</li>
    <li>getReviewsByUserID(userId)</li>
    <li>getServicesByUserID(userId)</li>
    <li>deleteTheService(userId)</li>
    <li>editTheService(serviceId, form)</li>
    <li>addANewReview(bookingId, form)</li>
    <li>newBokking(serviceID, info)</li>
    <li>getOneBooking(bookingId)</li>
  </ul> 
  <li>serviceType-service</li>
    <ul>
      <li>getAllServiceType()</li>
      <li>getAllServicesSameType(categoryId)</li>
      <li>getServiceDetail(serviceID)</li>
      <li>getAllServices()</li>
      <li>handleUpload(theImage, serviceId)</li>
      <li>newService()</li>
  </ul> 
  <li>user-service</li>
    <ul>
      <li>uploadPhoto(image)</li>
      <li>uploadProfile8userId, currentUser)</li>
      <li>buyCredits(credits)</li>
  </ul> </ul>

  <h1>Server/Backend</h1>

  <h2>Models</h2>
<h6>Booking model</h6>
<p>{<br>
    date: { type: Date, required: true},<br>
    time: { type: String, required: true},<br>
    extraInformation: { type: String },<br>
    clientBooking: { type: Schema.Types.ObjectId, ref: &quot;User&quot; },<br>
    ownerService: { type: Schema.Types.ObjectId, ref: &quot;User&quot; },<br>
    service: { type: Schema.Types.ObjectId, ref: &quot;Service&quot; },<br>
    status: { type: String , default: &quot;pending&quot;, enum: [&#39;accepted&#39;, &#39;declined&#39;, &#39;pending&#39;]},<br>
    review: {type: Schema.Types.ObjectId, ref: &quot;Review&quot; },<br>
  }
 </p> 
<h6>Review model</h6>
<p>
  {<br>
    booking: { type: Schema.Types.ObjectId, ref: &quot;Booking&quot; },<br>
    author: { type: Schema.Types.ObjectId, ref: &quot;User&quot; },<br>
    user: { type: Schema.Types.ObjectId, ref: &quot;User&quot; },<br>
    service: { type: Schema.Types.ObjectId, ref: &quot;Service&quot; },<br>
    description: { type: String },<br>
    rating: {type:Number , min:0, max:5},<br>
  }
</p> 
<h6>Service model</h6>
<p>
  { <br>
    serviceName: { type: String, required: true},<br>
    imageService: { type: String },<br>
    description: { type: String, required: true },<br>
    serviceType: { type: Schema.Types.ObjectId, ref: &#39;ServiceType&#39; },<br>
    availableTime: { type: String },<br>
    cityToBeHeld: { type: String, required: true  },<br>
    addressToBeHeld: { type: String, required: true  },<br>
    streetNumberToBeHeld: { type: String, required: true  },<br>
    credits: { type: Number, required: true },<br>
    owner: { type: Schema.Types.ObjectId, ref: &#39;User&#39; },<br>
    bookings:[{ type: Schema.Types.ObjectId, ref: &#39;Booking&#39; }],<br>
  }
</p>
<h6>  ServiceType model</h6>
<p>
  { <br>
    serviceName: { type: String, required: true },<br>
    iconCode: Number,<br>
    services: [{ type: Schema.Types.ObjectId, ref: &#39;Service&#39; }],<br>
  }
</p>
<h6>User model</h6>
<p>
  {<br>
    name: { type: String, required: true},<br>
    lastName: { type: String, required: true},<br>
    credits: { type: Number, default: 30 },<br>
    email: { type: String, required: true},<br>
    password: { type: String, required: true},<br>
    imageProfile: { type: String },<br>
    review: [{ type: Schema.Types.ObjectId, ref: &quot;Review&quot; }],<br>
    dateOfBirth: {type: Date ,  default: &quot;2000/01/01&quot;},<br>
    phoneNumber: {type: Number, default: 0},<br>
    address: {<br>
      streetName: {type:String, default: &quot;C/&quot;},<br>
      streetNumber: {type:Number , default: 99},<br>
      zipCode:{type:Number , default: 00000},<br>
      city:{type:String, default: &quot;---&quot;},<br>
      country: {type:String , default: &quot;---&quot;},<br>
    }<br>
  }<br>
</p>

<h2>API Endpoints (backend routes)</h2>
<table>
  <tbody><tr>
    <th>HTTP Method</th>
    <th>URL</th>
    <th>Request Body</th>
    <th>Success Status</th>
    <th>Error Status</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>GET</td>
     <td>/auth/profile</td>
     <td>Saved session</td>
     <td>200</td>
     <td>404</td>
     <td>Check if user is logged in and return profile page</td>
  </tr>
    <tr>
    <td>PUT</td>
     <td>/auth/profile/:userID</td>
     <td>Edit user profile</td>
     <td>200</td>
     <td>400</td>
     <td>Edit and add extra information to the user profile</td>
  </tr>
      <tr>
    <td>GET</td>
     <td>/auth/private</td>
     <td>User is logged in</td>
     <td>200</td>
     <td>404</td>
     <td>Check if user is logged in</td>
  </tr>
        <tr>
    <td>POST</td>
     <td>/auth/signup</td>
     <td>{name, lastName, email, password}</td>
     <td>200</td>
     <td>400</td>
     <td>Checks if fields not empty (400) and user not exists (400), then create user with encrypted password, and store user in session</td>
  </tr>
        <tr>
    <td>POST</td>
     <td>/auth/login</td>
     <td>{email, password}</td>
     <td>200</td>
     <td>401</td>
     <td>Checks if fields not empty (401), if user exists (404), and if password matches (404), then stores user in session</td>
  </tr>
          <tr>
    <td>POST</td>
     <td>/auth/buy</td>
     <td>{credits}</td>
     <td>200</td>
     <td>401</td>
     <td>Add the credits number to the profile</td>
  </tr>
            <tr>
    <td>POST</td>
     <td>/auth/logout</td>
     <td>(empty)</td>
     <td>204</td>
     <td>400</td>
     <td>Logs out the user</td>
  </tr>
              <tr>
    <td>GET</td>
     <td>/servicetype</td>
     <td>(empty)</td>
     <td>204</td>
     <td>400</td>
     <td>Show all servicetypes</td>
  </tr>
                <tr>
    <td>GET</td>
     <td>/servicetype/:categoryID</td>
     <td>{categoryID}</td>
     <td>200</td>
     <td>400</td>
     <td>Show a specific servicetype</td>
  </tr>
                  <tr>
    <td>GET</td>
     <td>/clientbooking/:userID</td>
     <td>{userID}</td>
     <td>200</td>
     <td>400</td>
     <td>Get all bookings where the client is the the current user</td>
  </tr>
                    <tr>
    <td>GET</td>
     <td>/ownerservice/:userID</td>
     <td>{userID}</td>
     <td>200</td>
     <td>400</td>
     <td>Get all bookings where the current user is the owner </td>
  </tr>
                      <tr>
    <td>GET</td>
     <td>/booking/:bookingId</td>
     <td>{bookingId}</td>
     <td>200</td>
     <td>400</td>
     <td>Show a specific booking</td>
  </tr>
                        <tr>
    <td>POST</td>
     <td>/bookings/:serviceID</td>
     <td>{date, time, extraInformation}</td>
     <td>200</td>
     <td>400</td>
     <td>To book a service</td>
  </tr>
                          <tr>
    <td>PUT</td>
     <td>/bookings/:bookingId/:status</td>
     <td>{bookingId}</td>
     <td>200</td>
     <td>500</td>
     <td>Change the status of the booking</td>
  </tr>
                            <tr>
    <td>POST</td>
     <td>/upload</td>
     <td>{imageProfile}</td>
     <td>200</td>
     <td>404</td>
     <td>Add an image to your user profile</td>
  </tr>
                              <tr>
    <td>POST</td>
     <td>/uploadservice/:serviceId</td>
     <td>{imageService}</td>
     <td>200</td>
     <td>404</td>
     <td>Add an image to your service</td>
  </tr>
                                <tr>
    <td>GET</td>
     <td>/reviews/:userID</td>
     <td>{userID}</td>
     <td>200</td>
     <td>400</td>
     <td>Show all reviews of a specific user</td>
  </tr>
                                  <tr>
    <td>POST</td>
     <td>/reviews/:bookingID</td>
     <td>{bookingID}</td>
     <td>200</td>
     <td>400</td>
     <td>Add a review regarding a specific booking</td>
  </tr>
                                    <tr>
    <td>POST</td>
     <td>/newservice</td>
     <td>{serviceName,imageService,description,serviceType,availableTime,cityToBeHeld,addressToBeHeld,streetNumberToBeHeld,credits}</td>
     <td>200</td>
     <td>400</td>
     <td>Add a new service</td>
  </tr>
                                      <tr>
    <td>GET</td>
     <td>/allservices</td>
     <td> </td>
     <td>200</td>
     <td>400</td>
     <td>Show all services</td>
  </tr>
                                        <tr>
    <td>GET</td>
     <td>/searchservices</td>
     <td> </td>
     <td>200</td>
     <td>400</td>
     <td>Search a service by text</td>
  </tr>
                                          <tr>
    <td>PUT</td>
     <td>/services/:id</td>
     <td> {id} </td>
     <td>200</td>
     <td>400</td>
     <td>Edit a service</td>
  </tr>
                                            <tr>
    <td>GET</td>
     <td>/services/:serviceID</td>
     <td> {serviceID} </td>
     <td>200</td>
     <td>400</td>
     <td> To show the detail of a specific service</td>
  </tr>
                                              <tr>
    <td>GET</td>
     <td>/servicesOwner/:userID</td>
     <td> {userID} </td>
     <td>200</td>
     <td>400</td>
     <td> To get all services where the current user is the owner of the service</td>
  </tr>
                                                <tr>
    <td>DELETE</td>
     <td>/services/:id</td>
     <td> {ID} </td>
     <td>200</td>
     <td>400</td>
     <td> Delete a specific service</td>
  </tr>
</tbody></table>

<h1>Links</h1>
<h2>Trello/kanban</h2>
<p><a href="https://trello.com/b/Pcj3FmlM/m3-favour-time">Trello board</a></p>

<h2>Git</h2>
<p><a href="https://github.com/CarlaNavia/Favour_Time.client">Client repository</a></p>
<p><a href="https://github.com/CarlaNavia/Favour_Time.server">Server repository</a></p>
<p><a href="https://favourtime.herokuapp.com/">Deploy App</a></p>

<h2>Slides</h2> 
<p><a href="https://docs.google.com/presentation/d/1gpxEksMalnN-l5NcIEXAH9D_0vpXLAI0VrVkdzF7LZE/edit?usp=sharing">Slides</a></p>