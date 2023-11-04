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
