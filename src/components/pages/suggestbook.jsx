import React, {Component} from "react";
/*
function userInput(props) {
    function handleChange(event) {
        if (props.onChange) props.onChange(event)
    }
    return (
        <p>
            <input type='title' value={props.value} na
        </p>
    )
}

*/

/*
const Suggest = () => {
    return (        
        <div>
              
            <button>Submit suggestion!</button>

        </div>
    );
}; */

export default class Suggest extends Component {

    constructor(props) {
        super(props);
        this.state={
            title: '',
            author:'',
            genre:'',
            month:'',
        }

        //bind the methods to the this object
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookGenre = this.onChangeBookGenre.bind(this);
        this.onChangeBookMonth = this.onChangeBookMonth.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeBookAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    onChangeBookGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }

    onChangeBookMonth(e) {
        this.setState({
            month: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();  //prevents browser reload or refresh
        
        console.log('Form submitted:');
        console.log('Book Title: ${this.state.title}');
        console.log('Author: ${this.state.author}');
        console.log('Genre: ${this.state.genre}');
        console.log('Month of Suggestion: ${this.state.month}');

        this.setState({
            title: '',
            author: '',
            genre: '',
            month: '',
        })
    
    }


    render() {
        return (
            <div style={{marginTop: 10}}>
                <h2> Suggest a Book Component!!</h2>
                <form onSubmit={this.onSubmit}>
                    <div classname="form-group">
                        <label>Book Title: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeBookTitle}
                                />
                    </div>
                    <div classname="form-group">
                        <label>Author: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.author}
                                onChange={this.onChangeBookAuthor}
                                />
                    </div>
                    <div classname="form-group">
                        <label>Genre: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.genre}
                                onChange={this.onChangeBookGenre}
                                />
                    </div>
                    <div classname="form-group">
                        <label>Month of Suggestion: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.month}
                                onChange={this.onChangeBookMonth}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Suggest Book" className="btn btn-primary"/>
                    </div>
                </form>

            </div>
        )
    }
}


//export default Suggest;