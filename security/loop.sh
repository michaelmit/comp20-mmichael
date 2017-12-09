#!/bin/bash

# This script is used to automate inject large amount of invalid data into a heroku database using curl unix tool
# This sample script sends a POST query i = 4 times

i="0"

while [ $i -lt 4 ]
do
echo "adding to the database"
curl --data "login=DEC 17 Phishers Are Upping Their Game. So Should You. Not long ago, phishing attacks were fairly easy for the average Internet user to spot: Full of grammatical and spelling errors, and linking to phony bank or email logins at unencrypted (http:// vs. https://) Web pages. Increasingly, however, phishers are upping their game, polishing their copy and hosting scam pages over https:// connections — complete with the green lock icon in the browser address bar to make the fake sites appear more legitimate.&lat=42.408239&lng=-71.109811" http://rocky-basin-93447.herokuapp.com/sendLocation

i=$[$i+1]
done