           ADMIN  Dashboard

|
| **Action** | **Endpoint** | **Method** | **Request Body** | respons
|---------------------|-------------------|------------|------------------------------------------------|-----

Signin | `/auth/login/     |    POST     | `{ "email": "user@example.com", "password": "1234" }`| `{ "token": "abc123", "Admin": { "id": 1, "name": "John" } }`Signup               | `/auth/signup/ | POST |`{ "name": "John", "email": "user@example.com","password": "123" }`||`{ "id": 1, "name":"John","email": "user@example.com" } 
logout               |    `/auth/logout | Post | none | message:Logout successfull;

> > > > > > > > > > > > > > > > > > > > > > > > . admin

addroute | /route/createroute | POST | `"routename":"mexic-bethel" | none
Notfiyadmin | /route/get/ | GET | none | data(all route) (it will notify the admin whenever the request size is > 30 .

> > > > > > > > > > > > > > > > > > .. route status

accepted | ("/status/application", { id, status: "accepted" })| put | none
pending | /status/application", {id, status:"pending"} | put | none
rejected | /status/application , {id, status: "rejected) } | put |none

> > > > > > > > > > > > > > > > > . notify commuter

             /////

                             we will notify the commuter for the status of there route whether they will get the bus or not ...

findRouteStatus | /commuter/get/ | GET | DATA

              {

                   filter each route based on there status . so for the route where status is  accepted  notify all commuter in SMS.
