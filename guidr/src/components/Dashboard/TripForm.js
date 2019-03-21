import React from "react";

export default class TripForm extends React.Component {
    constructor(props) {
        super(props);
        
    // local state component objects
    this.state = {
        title: props.trip ? props.trip.title : '',
        date: props.trip ? props.trip.date : '',
        location: props.trip ? props.trip.location: '',
        duration: props.trip ? props.trip.duration : '',
        type: props.trip ? props.trip.type : '',
        profOrPlea: props.trip ? props.trip.profOrPlea : '',
        description: props.trip ? props.trip.description : '',
        error: ''
    };
}

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onDateChange = (e) => {
        const date = e.target.value;
        this.setState(() => ({ date }));
    };

    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }));
    };

    onDurationChange = (e) => {
        const duration = e.target.value;
        this.setState(() => ({ duration }));
    };

    onTypeChange = (e) => {
        const type = e.target.value;
        this.setState(() => ({ type }));
    };

    onProfOrPleaChange = (e) => {
        const profOrPlea = e.target.value;
        this.setState(() => ({ profOrPlea }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onSubmit = (e) => {
        e.preventDefault();  //stop full page referesh 

        if (!this.state.title || !this.state.location) {
            this.setState(() => ({ error: 'Please provide title and location.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                title: this.state.description,
                date: this.state.date,
                location: this.state.location,
                duration: this.state.duration,
                type: this.state.type,
                profOrPlea: this.state.profOrPlea,
                description: this.state.description
            });
        }
    }


    render() {
        return <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    autoFocus    // put focus on this input automatically
                    value={this.state.title}
                    onChange={this.onTitleChange}
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.onDateChange}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={this.state.Location}
                    onChange={this.onLocationChange}
                />
                <input
                    type="text"
                    placeholder="Duration"
                    value={this.state.duration}
                    onChange={this.onDurationChange}
                />
                <input
                    type="type"
                    placeholder="Trip Type"
                    value={this.state.type}
                    onChange={this.onTypeChange}
                />
                <input
                    type="text"
                    placeholder="Professional or Pleasure"
                    value={this.state.profOrPlea}
                    onChange={this.onProfOrPleaChange}
                />
                <textarea
                    type="text"
                    placeholder="Add a description"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <button>Add Trip</button>
            </form>
        </div>;

    }
}
