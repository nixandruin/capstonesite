import React from 'react'; 
import MemeGenerator  from '../MemeGenerator/MemeGenerator';
import webDevNotes from '../../Assets/webDevNotes.pdf';
import webDevLogos from '../../Assets/weblogos.png'; 

const memeGenCode1 = (
    `
    import React, {Component} from 'react'; 
    import './MemeGenerator.css'; 
    
    class MemeGenerator extends Component {
        constructor() {
            super(); 
            this.state = {
                topText: 'One Does Not Simply', 
                bottomText: 'Code With React', 
                memeTextColor: 'white', 
                randomImage: 'http://i.imgflip.com/1bij.jpg', 
                allMemeImgs: []
            }; 
            this.handleChange = this.handleChange.bind(this); 
            this.handleSubmit = this.handleSubmit.bind(this); 
        }
    
        componentDidMount() {
            fetch('https://api.imgflip.com/get_memes')
                .then(response => response.json())
                .then(response => {
                    const { memes } = response.data; 
                    this.setState({allMemeImgs: memes});
                });
        }
    
        handleChange(event) {
            const {name, value} = event.target; 
            this.setState( {[name] : value})
        }
    
        handleSubmit(event) {
            event.preventDefault(); 
            let randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length); 
            const randomMeme = this.state.allMemeImgs[randomIndex].url; 
            this.setState({randomImage : randomMeme});
        }
        
        `
); 

const memeGenCode2 = (
    `  
    render() {
        return (
            <div id = 'meme-generator'>
                <h5>Meme Generator</h5>
                <form onSubmit = {this.handleSubmit} >
                    <label for = 'topText' >TopText: </label> 
                    <input 
                        type = "text"
                        name = "topText"
                        id = 'topText'
                        placeholder = 'Top Text'
                        value = {this.state.topText} 
                        onChange = {this.handleChange}
                    />
                    <br/>
                    <label for = 'bottomText' >BottomText: </label> 
                    <input 
                        type = 'text'
                        name = 'bottomText'
                        id = 'bottomText'
                        placeholder = 'Bottom Text'
                        value = {this.state.bottomText}
                        onChange = {this.handleChange} 
                    />
                    <br/>
                    <label for = 'memeTextColor' >Text Color: </label> 
                    <input 
                        type = 'text'
                        name = 'memeTextColor'
                        id = 'memeTextColor'
                        placeholder = 'text color'
                        value = {this.state.memeTextColor}
                        onChange={this.handleChange} />
                    <br/>
                    <button>Generate Meme</button>
                </form>
                <figure className = 'meme-image'>
                    <img src = {this.state.randomImage} alt = 'meme' />
                    <p className = 'meme-top-text' style = {{color: this.state.memeTextColor}}>{this.state.topText} </p>
                    <p className = 'meme-bottom-text' style = {{color: this.state.memeTextColor}}>{this.state.bottomText} </p>
                </figure>
            </div>
        );
    }
}

export default MemeGenerator; 

`
); 


let october = (
    <div>

        <section className = 'background-info' >

            <div className = 'flex-parent'>
                <div className = 'flex-child-with-image'>
                    <h4>The Basics of Web Dev</h4>
                    <p>
                        Web development dates back to 1989, when CERN scientist Tim Berners-Lee came up with the idea of the World Wide Web. Three languages work together to create most of the pages on the WWW today: HTML, CSS, and JavaScript. 
                        <br/><br/>
                        HTML stands for Hypertext Markup Language, and was created by Berners-Lee in 1990 to give structure to simple web pages and documents. 
                        Within .html files, HTML <u>elements</u> wrap around text to define it and give it some bare bones styling, like automatically adjusting the size of headers or numbering lists. Elements can also contain attributes, like class or id, which can be passed into JavaScript or CSS to perform more advanced styling or logic. 
                        <br/><br/>
                        CSS stands for Cascading Style Sheets, and was invented by Håkon Wium Lie, another CERN scientist, in 1994. CSS allowed developers to control the styling of their webpages, changing text colors, sizes, and font families. In a .css file,  CSS <u>rules</u> or selectors select HTML elements either by elements type, class, or id, and apply a set of style rules. Specificity matters, so a class rule override an element rule for a specific element, and id rules override class rules. Today CSS is very verbose and has thousands of rules, with the capacity to handle animations and adjustments for screen size. 
                        <br/><br/>
                        The last main web development language is JavaScript, a programming language developed by Brendan Eich in 1995. JavaScript is a very multi-purpose language, and can be used by itself as “vanilla” JavaScript to perform simple scripts by editing the DOM (Document Object Model), like by creating an alert when a user clicks a button, or changing the styling of elements. There are also several JavaScript libraries tailored for web development, like React or Angular. 
                        <br/><br/>
                        Together these languages create the front end of website, the part that the user sees and interacts with. Today there are over a billion websites, all built using at least one, but probably all three of the languages above. 
                    </p>
                </div>

                <img id = 'web-dev-logos' className = 'flex-child-with0image' src = {webDevLogos} alt = 'logos' />
            </div>

            <h4>Why I Learned Web Development</h4>
            <p>
                I chose to learn web development this month for a variety of reasons: first, I've always wanted to create my own personal portfolio site, and I liked the idea of creating one from scratch; 
                second, I thought that understanding front end web design might be benefical for client side CTF web exploitation challenges; and finally, I figured that it might come in handy for whatever I decide 
                to do for my final capstone project if it interfaces with a website, or that I could at least use it as my Capstone portfolio site for the rest of the year.
                <br/><br/>
                Because of the volume of content involved with web development, and the time constrain of a month, I decided to stick to
                learning front-end development this month. This means that all my code runs on the client side and does not connect to a server. 
                Instead of learning the backend, after I finished learning about creating basic vanilla pages, I began to learn about the React framework instead, 
                since React is a very popular web development library and rated as one of the most useful JavaScript libraries to know alltogether. 
            </p>
        </section>

        <section className = 'flex-parent learning-resources'>
            <figure className = 'flex-child'>
                <object data = {webDevNotes} type = 'application/pdf' aria-label = 'web dev notes'/>
            </figure>
            <div className = 'flex-child'>
                <h4>Learning</h4>
                <ul>
                    <li>
                        <a href = 'https://www.codecademy.com/career-journey/front-end-engineer'>Codecademy Front-End Engineer Couse</a>: Comprehensive course starting with basic HTML and CSS and progressing all the way to React, advanced CSS, and local development. 
                    </li>
                    <li>
                        <a href = 'https://www.freecodecamp.org/news/learn-react-by-building-a-meme-generator/'>FreeCodeCamp's Meme-Generator Tutorial</a>: a basic walkthrough for using React with forms and APIs! See the implementation below. 
                    </li>
                    <li>
                        <a href = 'https://www.w3schools.com/css/default.asp'>W3School's CSS Tutorials</a>: Great CSS examples for different scenarios and rules. SAVED ME when it came to positioning and flex-box. 
                    </li>
                </ul>
            </div>
        </section>

        <section className = ' flex-parent learning-showcase'>
            <div className = 'flex-child'>
                <h4>Showcase of Learning</h4>
                <p><strong>This website!</strong> This month I used the HTML, CSS, JavaScript, and React I learned to create this site. </p>
                <p>Just for kicks here's a meme generator too. This uses forms, React's state attributes, a simple call to an image API, and onChange and onSubmit listeners to create a ruidmentary meme editor.</p>
                <MemeGenerator />
                <h5>Basic Explanation of Source Code (to left)</h5>
                <ol>
                    <li>React, CSS imported, compnent created</li>
                    <li>Inital state set so that sample image appears on first render</li>
                    <li>Call to API is made as soon as component renders to get array for image urls</li>
                    <li>handleChange listens for text input changes and updates state to reflect new values for topText, bottonText, or color</li>
                    <li>handleSubmit picks a random image to display</li>
                    <li>An HTML form with text inputs and a submit button is returned. This form updates the image and text boxes below it with the component's state.</li>
                </ol>
            </div>
            <code className = 'display-linebreak flex-child code-snip'>
                {memeGenCode1}
            </code>
            <code className = 'display-linebreak flex-child code-snip'>
                {memeGenCode2}
            </code>

        </section>
        <section>
            <h5>Slides and Demo's</h5>
            <div className ='flex-grid'>
                <div className = 'grid-row'>
                    <iframe className = 'grid-col' title = 'Web Development Presentation' src="https://docs.google.com/presentation/d/e/2PACX-1vSkwV6cNWgkT6tGvod3XClb-uGBwlevVyUIVafyQ_XAtnsFEo36W-19SyWcdeNlWJG31M3WvmMTPS6g/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    <video className = 'grid-col' src = ''>Demo Video</video>
                </div>
            </div>
        </section>
    </div>
);

export default october; 