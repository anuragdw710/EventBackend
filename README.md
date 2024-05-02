## Api Description 🔗

1. Get all events short des
   - endpoint /api/events
   - verb: get
2. Get event full detail
   - endpoint: /api/event?eventId=65e72adb1a811501c45afd72
   - verb: get
3. Post/Booking for a event for n seats
   - endpoint: /api/booking
   - verb: post
   - payload:
   ```
   {
    "eventId":"65e72adb1a811501c45afd72",
    "count":5
   }
   ```
4. Update Booking,desc or inc seats
   - endpoint: /api/booking
   - verb: put
   - payload:
   ```
   {
    "bookingId":65e72adb1a811501c45afd72",
    "count":5
   }
   ```
5. Delete/Cancel Booking
   - endpoint: /api/booking?bookingId=65e72adb1a811501c45afd72
   - verb: delete
6. Get all past booking of user
   - endpoint: /api/user/booking
7. Login user
   - endpoint: /api/user/login
8. Register user
   - endpoint: /api/user/register

## DB Structure 🏗️

- Event

  - eventId
  - eventName
  - eventOrganizer
  - eventCityName
  - eventDate
  - imgUrl
  - seats
  - seatsBooked
  - eventDescription
  - rating
  - review
  - price

- User
  - userId
  - name
  - email
  - password
  - pastBooking
    - array of bookingId,eventId and seats

## Requirement Analysis:

- Many events are organize in the city at various places. Management of booking process made simple by organise booking system
