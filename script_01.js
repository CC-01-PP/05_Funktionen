"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
// // function test()
// {
//     console.log("Hallo Sabine!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

// function ausgabeNamen() {
//     let firstName = "Michael";
//     console.log("Hallo " + firstName + "!");
// }

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam(prompt("Please enter a name:","Name")); // Argument
// Argumente sind Daten für Parameter

// function ausgabeNamenParam(firstName) //Parameter
// {
//     console.log("Welcome, " + firstName + "!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Michael","Müller"); //Argument
ausgabeNamenParams((prompt("Please enter a first name:","First Name")),(prompt("Please enter a last name:","Last Name")))

function ausgabeNamenParams(firstName,familyName) //Parameter
{
    console.log("Welcome, " + firstName + " " + familyName + "!");
}
