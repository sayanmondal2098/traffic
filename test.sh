#!/bin/bash
echo  “Enter a string:”
read strval
len=`expr "$strval" : '.*'`
echo "$len"

if [[ "$strval" =~ ^[A-Z] ]]
then
   echo "Upper found"
else
   echo "No Upper"
fi