// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates how much it will cost for a certain order
 */
function displayNumbers () {

	//declare variables
	let counter = 1
	let calculation = 1

	//get user input
	let userNum = parseInt(document.getElementById('userNum').value)
	
	// use a do while loop to calculate the factorial of the number
  do {
    calculation = calculation * counter
    counter = counter + 1
  } while (counter <= userNum)

	//Display results
	document.getElementById('display-results').innerHTML = "The factorial of the number " + userNum + " is " + calculation + "."
}
	