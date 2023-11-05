import React from 'react'; 

import clogo from '../../Assets/c++logo.png';
import cpdf from '../../Assets/C++.pdf';
import cpresentationstatic from '../../Assets/C++PresentationStatic.pdf';

let introText = (`C++ is a high level programming language that expanded upon the functionality of it's predecessor C by adding support for object oriented programming features. 

In 1979, Danish computer scientist Bjarne Stroustrup wanted to create a new programming language that would easily support large scale software development. Stroustrup wanted to mix features of the object-oriented programming language Simula, like classes and inheritance, with the speed, portability, and popularity of C. 

First Stroustrup created an extension of C dubbed "C with Classes". In 1982, Stroustrup decided to expand upon the project further, adding more features like virtual functions, function overloading, and a new compiler called Cfront. The name "C++" was chosen for the new language as a reference to the increment-by-one operator present in many languages. 

C++ was released to the public in 1985, and standardized by the International Organization for Standardization in 1991. Today C++ is ranked as the third most popular programming language by the TIOBE index, with an estimated over 4 million users.`); 

let whyLearnText = (`I chose to learn C++ because it is widely used in a variety of applications like browsers, video games, graphics, and operating systems. Since I am most interested in the fields of game development and cybersecurity, C++ seemed like a valuable language to have a firm grasp of. `)

let codeSnippet = (`#include <iostream>

void main() {

std::string myName;

while (myName != "Caroline") {

	std::cout << "Unathorized.\n";

	std::cout << "Enter your name: "; 

std::cin >> myName; 

}

std::cout << "Hello " << myName << "\n";

for (int i = 0; i < 3; i++) {

	std::cout << "Counting: " << i << "\n";

}

int myNumberArray[] = {3, 5, 7, 9};

for (int myNum : myNumberArray) {

	std::cout << myNum; 

}

}

`);

let codeSnip2 = (`class Cat {

	std::string name; 

	int age; 

	public: 

		Cat(std::string catName, int catAge) {

name = catName; 

age = catAge; 			

		}

		~Cat() {

			std::cout << "Cat object DESTROYED??? D:";

		}

		std::string Meow() {

			std::cout << "MEOW";

		}

};

Cat piper = Cat("Piper", 9);`); 

let september = (

    <div>
        <div className = 'flex-parent'>
            <article className = 'background-section flex-child-with-image' >
                <h4>Introduction to C++</h4>
                <h5>History of C++</h5>
                <p>{introText}</p>
                <h4>Why Learn C++</h4>
                <p>{whyLearnText}</p>
            </article>
            <figure className = 'flex-child-with-image'>
                <img src = {clogo} alt = 'logo'></img>
                <figcaption>C++ Logo</figcaption>
            </figure>
        </div>
        <div className = 'flex-parent'>
            <div className = 'flex-child'>
                <object data = {cpdf} type = 'application/pdf' aria-label = 'c++ pdf'/>
            </div>
            <div className = "learning-resources flex-child">
                <h4>Learning</h4>
                <h5>Basic C++ Notes</h5>
                <h5>Resources Used</h5>
                <ul>
                    <li>
                        <a href = "https://www.codecademy.com/enrolled/courses/learn-c-plus-plus">Codecademy Learn C++</a>: basic introduction to C++ syntax and foundational concept like variables, inputs/outputs, loops, conditional, and functions. 
                    </li>
                    <li>
                        <a href = "https://www.codecademy.com/enrolled/courses/c-plus-plus-for-programmers">Codecademy C++ For Programmers</a>: more advanced overview of C++ concepts with practice problems for application.
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=B31LgI4Y4DQ&t=3782s">FreeCodeCamp's Data Structures Using C++</a>: video course teaching data structures in C++. I focused on linked lists, about the first two hours of the course. 
                    </li>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=dS5AUaYFcdw&list=PLaaDnVlfJwc4Lncf4XTYaTRG_osOk-T0N">Getting into C++ With Unreal Engine</a>: this video series walks you through the basics of using C++ in Unreal Engine for 3D game development
                    </li>
                </ul>
            </div>
        </div>
        <div className = "codeExample flex-parent">
            <div className = 'flex-child'>
                <h4>C++ Concepts and Examples: The Very Basics</h4>
                <p>To the right is an example C++ program. The basic syntax and logic is very similar to other languages like Java.</p>
                <ol className = "codeExampleTextDescription">
                    <li>
                        The include statement- this is how libraries and dependencies are imported into C++ programs. Every program must include &lt;iostream&rt;, which contains basic functionality like displaying output to screen and reading keyboard input.
                    </li>
                    <li>
                        Main function: C++ programs must have a main function in order to compile.
                    </li>
                    <li>
                        Variable declaration: variables must be defined with their datatype and name. Since strings are not a primitive datatype, they are referred to with std::string.
                    </li>
                    <li>
                        While loops/conditionals: conditional statements like in if statements or while loops are evaluated to determine if the code within their block is executed. Logical operators like ==, !=, &&, and || can be used.
                    </li>
                    <li>
                        Output: std::cout &lt;&lt; outputs to the console. Strings and variables can be output. Chaining multiple outputs together with multiple &lt;&lt;s concats them without requiring type casting.
                    </li>
                    <li>
                        Input: std::cin &rt;&rt; retrieves user input from the console and stores it in the designated variable.
                    </li>
                    <li>
                        For loops: the starting value, ending condition, and step is determined in the () before the loop and separated by semi colons. C++ also supports a type of enhanced for-loop for iterating through an array or vector: for (&lt;datatype&rt; i : array/vector) {"{}"}
                    </li>
                    <li>
                        Arrays: immutable collections of one data type. Items can be accessed with name[index]. The size can be accessed using sizeof(name). A mutable datatype called a vector can be imported with #Include &lt;vector&rt;. This functions much like an ArrayList in Java.
                    </li>
                    <li>
                        Classes: C++ classes were the main feature added between C and C++. Class components are private by default unless placed under the public keyword.
                    </li>
                    <li>
                        C++ supports both constructors and destructors. Destructors have a ~ before their name, which is just the class name. They are called when an object is deleted or passes out of memory.
                    </li>
                    <li>
                        Classes have a semicolon at the end of their definition which I also forget about.
                    </li>
                    <li>
                        To create an object of a class, just use the class as a datatype and call the constructor in the assignment. No new keyword necessary.
                    </li>
                </ol>
            </div>
            <code className = 'display-linebreak flex-child code-snip'>
                {codeSnippet}
            </code>
            <code className = 'display-linebreak flex-child code-snip'>
                {codeSnip2}
            </code>
        </div>
        <h4>Showcase of Learning: Tetris and Reverse Engineering</h4>
        <p>To put my C++ knowledge to the test, I focused on two mini-projects. Using Visual Studio, I followed a tutorial to create a terminal-based rendition of Tetris. This project makes use of the basics of C++ like conditional and functions. Then, I revisited one of my favorite CTFs, picoCTF, and challenged myself to solve a C++ reverse engineering problem. Together these three projects show how C++ can be used by itself to create simple programs and games, and in cybersecurity cases for analyzing insecure code. </p>
        
        <div className = 'flex-gird'>

            <div className = 'grid-row'>
                <iframe title = 'presentation' src="https://docs.google.com/presentation/d/e/2PACX-1vRCTqWQYeA6740nC5v5zOsv6oInpn8c0kyTdL49B-lpHb06ZDOYUpJ1Ci69dLSDNMf4XVorEldWah1K/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" className = 'grid-col'></iframe>
                <object aria-label = 'presentation' data = {cpresentationstatic} type = "application/pdf" className = 'grid-col' />
            </div>

            <div className = 'grid-row'>
                <div className = 'grid-col'>
                    <p>Stonks Demo</p>
                    <iframe src = 'https://youtu.be/DEx_ZdTyDXI' title = 'stonksVideo' width="420" height="315"></iframe>
                </div>
                <div className = 'grid-col'>
                    <p>Tetris Demo</p>
                    <iframe src = 'https://youtu.be/lnWW9vLf794' title = 'tetrisVideo' width="420" height="315"></iframe>
                </div>
            </div>
        </div>
    </div>
);  

export default september; 