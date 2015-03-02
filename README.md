basicBackboneSite
=============

Basic Backbone Site project for creating a base structure for sites to use


**How to setup:**

download into any webserver that is running http services

designed to be used with http://github.com/kodysmith/gruntServer

1. check out gruntServer into any directory you perfer to host from
2. checkout this repository into the gruntServer directory as "src" directory
3. in terminal navigate to the gruntServer directory
4. type "grunt server"
5. navigate to localhost in any browser

**Troubleshooting**
port 80 may be already taken by an instance of apache or other web services.  you can do the following to resolve this.

1. stop the service that is using port 80.
2. use that service to host this repository instead of using gruntServer
3. edit the GruntFile.js of gruntServer to use a different port


**Purpose:**

this project was as a demonstration of using Backbone, Require.js, Underscore, jQuery, and SCSS

**Function:**

This project provides a logical structure which allows users to quickly and easily get a backbone site up and running quickly, with minimal edits.  

