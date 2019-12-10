# Title :

### ParkIn: A Smart Parking App

# Graphics : 

No extra graphics library used.

# Short description : 

The number of personal vehicles usage is increasing manifold. People prefer personal vehicles to
commute than depend on public transportation. Finding a parking space in most metropolitan
areas, especially during the rush hours, is difficult for drivers. Due to this there is a need
to provide sufficient parking places coupled with plenty of slots to help the user park his
vehicle safely, also to ensure the user does not end up parking on non-parking area and cause
discomfort to pedestrian.Due to this there is a need to provide sufficient parking places coupled
with plenty of slots to help the user park his vehicle safely, also to ensure the user does not
end up parking on non-parking area and cause discomfort to pedestrian. The idea behind our
Android Application- “**ParkIn**” is to help the user analyse area’s where parking is available and
number of slots free in that area.Additionally, the user can pre-book a slot in the area he desires
for some consecutive days (along with the daily service) if it is available. This will help reduce
the load on the administrator as his physical work reduces drastically and user can search the
parking slot through Android Application.User can pay after completion of parking service he
received. “**ParkIn**” Application relieves the user from the hassle of manually searching and
waiting for empty slots to park the vehicle.

# Team :

#### Raihanul Alam Hridoy | Student ID: 1505010
#### Ahnaf Faisal | Student ID: 1505005
#### Md.Rajibul Islam | Student ID: 1505001

# Installation Guidelines (if applicable) :

Download the apk and install. [Download](https://github.com/hridoy100/ParkIn.apk/raw/master/ParkIn.apk)

# Promotional Video :

[![Watch the video](https://cms-assets.tutsplus.com/uploads/users/69/posts/26743/image/basic-video-styles.jpg)](https://youtu.be/o5scMmDP22I)

# Description & Screenshots :

### 1 Client Side

#### 1.1 Starting the Application

The user needs to install the “ParkIn” application on his Android based device. After installation, the icon of the app will feature on the Home Screen of the user’s device. “ParkIn” Home Screen will be flashed to the user on opening the application.

#### 1.2 Registration

Initially, the user has to register his details with the application for the first time. This is a one-time registration. The user has to enter details like mobile no. as username,name, email-id,address,birthdate etc.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Account_Creation/CreateAccountActivity.jpg" width="300" title="Create Account Activity">
  
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Account_Creation/CreateAccountActivity_when_details_given.jpg" width="300" title="Create Account Activity with Details">
  <br>
  Figure 1: (a) Create Account (b) Create Account Activity with Details
  <br>
</p>

All this data will be stored on server and confidentiality will be ensured. User can then book slot and also rent garage slot using same registered account. We use Google’s firebase authentatication system to send verification emails and verify.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Account_Creation/Verificationemailsenttoemailaddress.jpg" width="300" title="Verification Email Sent">
  
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Account_Creation/email_verified_window.jpg" width="300" title="Email Verified">
  <br>
  Figure 2: (a) Verification Email (b) Email Verified
  <br>
</p>


#### 1.3 LogIn

Once the user registers, he can use his mobile number to login in future. This authenticates the user. After login he can see his profile,history,available garages,vehicles information etc.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/LogIn/LoginActivity.jpg" width="300" title="Login Activity">
  <br>
  Figure 3: Login Activity
  <br>
</p>

#### 1.4 Home

From this window user can go to add garage,vehicle or search for parking location,see ongoing status,notifications and logout.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/HomeActivity.jpg" width="300" title="Home Activity">
  <br>
  Figure 9: Home Activity
  <br>
</p>

#### 1.5 Vehicle Details

A user can enter vehicles he wishes to park in vehicle window.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Vehicle/VehicleEditActivity_used_for_adding_vehicle.jpg" width="300" title="Vehicle Add Window">
  
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Vehicle/Vehicle_List_after_adding_all_types_of_vehicles.jpg" width="300" title="Vehicle List Window">
  <br>
  Figure 10: (a) Vehicle Add Window (b) Vehicle List Window
  <br>
</p>

#### 1.6 Adding Garage as Renter

User’s single registered account provides him services of both as the customer and the renter. He can add garage and provide garage spaces for rent in a specified time-interval.To rent spaces, detials of spaces have to be inserted and all records will be stored in the server side database. User can also deactivate the availabilty of his rented space for a certain period and activate then with new initialized date.While adding garage, a record for the user is created as renter and this record will be stored in the database.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/GarageAdd/AddressFragment1.jpg" width="300" title="Garage Add Search">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/GarageAdd/AddressFragment2.jpg" width="300" title="Garage Add Search Suggestion">
  <br>
  <br>
  Figure 11: (a) Garage Add Search (b) Garage Add Search Suggestion
  <br>
  <br>
</p>

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/GarageAdd/Location.jpg" width="300" title="Garage Add Location Map">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/GarageAdd/DetailsFragment1.jpg" width="300" title="Garage Add Details Size Selection">
  <br>
  <br>
  Figure 12: (a) Garage Add Location Map (b) Garage Add Details Size Selection
  <br>
</p>

#### 1.7 Location Selection for Parking

The user selectsParking Location Iconfor getting available garages. By selecting desired garage with Arrival and Departure time along with the vehicle type, user can see multiple spaces available for him. User has to select one of the spaces provided where he desires to park
the vehicle.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Location_Selection/search_for_parkinglocations.jpg" width="250" title="Search Location Window">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Location_Selection/showing_space_list_for_adding_vehicles.jpg" width="250" title="Available Space List">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Location_Selection/select_vehicle_for_allocation.jpg" width="250" title="Vehicle Selection">
  <br>
  <br>
  Figure 13: (a) Search Location Window (b) Available Space List (c) Vehicle Selection
  <br>
</p>

#### 1.8 Notification Details

The server sends notification to renter and client side when renting time has started and when it is over.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Notification/notification_showing.jpg" width="300" title="List of Notifications">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Notification/notification.jpg" width="300" title="Single Notification">
  <br>
  <br>
  Figure 14: (a) List of Notifications (b) Single Notification
  <br>
</p>


### 1.9 Confirmation and Payment

When user selects slot for rent, a request is sent to the server and server responses with the confirmation status on user window. Also,Server sends notification to the user with details information about the pre-booking of slot.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Payment/payment_notification.jpg" width="300" title="Payment Notifications">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/Payment/payment_window.jpg" width="300" title="Payment Window">
  <br>
  <br>
  Figure 15: (a) Payment Notifications (b) Payment Window
  <br>
</p>

User will have to confirm his payment. Our payment window has payment methods. After confirmation, the service will be completed. We haven't implemented the API for the methods as it is paid API.

### 2 Server Side

The server side processing will be enabled using PHP and MySQL. The administrator has to control the server side. Whenever a new user registers with the app, the record will be stored in the server side database. When the registered user selects the location and vehicle type, immediately server receives the client’s request. After receiving the request for the desired location, server processes the related information and responds accordingly. Furthermore, the administrator has direct option to view user details and slot details stored on the server direct via the application. There will also be a ongoing server written in java which will run threads to see if rent time is starting for a customer or ending and thus sending proper notifications.

<p align="center">
  <img src="https://github.com/hridoy100/ParkInAndroid/blob/hridoy/latex/parkin_server.png" title="Server Running">
  <br>
  <br>
  Figure 16: Server Running
  <br>
</p>

# Disclaimer
 --
# License
 --
