import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: '',
            artist: '',
            title: '',
            genre: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });

        console.log(name, value);
    }

    handleSubmit(event) {
        fetch('/api/artOutput')
            .then(res => {
                if(!res.ok) throw res;
                return res.json;
            }).then(data => {
                // will need a component.setState({}); command here
            })
    }

    compileSQL(){
        const outputCode = 
        "select * " +
        "from Art " +
        "where artid in (select artid " +
        ""


    }

    render() {
        return (
            <form className="searcher">
                <p>Enter search parameters below</p>
                <label>
                    GALLERY
                    <input 
                        name="gallery" 
                        type="text"
                        onChange={this.handleInputChange}/>
                </label><br/>
                <label>
                    ARTIST
                    <input
                        name="artist" 
                        type="text"
                        onChange={this.handleInputChange}/>
                </label><br/>
                <label>
                    TITLE
                    <input
                        name="title" 
                        type="text"
                        onChange={this.handleInputChange}/>
                </label><br/>
                <label>
                    GENRE
                    <input
                        name="genre" 
                        type="text"
                        onChange={this.handleInputChange}/>
                </label><br/>
                <input type="submit" onClick={this.handleSubmit} value="Search"/>
            </form>
        )
    }
}

export default Form;