#!/bin/bash -x
password="Johnny12"
patPassword="^(?=.*[A-Z].*)[a-zA-Z0-9]{8,}$"
if [[ $password =~ $patPassword ]]
then
    echo "Valid password"
else
    echo "Invalid password"
fi