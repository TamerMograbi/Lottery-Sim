# Lottery Sim
Building small project to learn React and js
# Arch
Deployed in the US and Europe, each region has 10 Load balancers and up to 10k auto scaling group.
Since I am expecting a huge read rate over write, I'm using write-through memcache.
The DB is normal RDS but if read/write rates become too much for the puny RDS then
a lambda function will get triggered that will change the cloud formation file which
will take all the data in the DB and store it in serverless aurora which according
to amazon docs, auto scales and expands faster than the cosmos itself.
# Real Arch
I created this website in order to learn React and javascript. and deployed it on
heroku so I can easily access it from anywhere.
# Try it
https://lottery-simulator.herokuapp.com/