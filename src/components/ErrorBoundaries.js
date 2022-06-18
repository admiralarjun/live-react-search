const { Component } = require("react")

class ErrorBoundries extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasEror: false
        }
    }

    componentDidCatch(error,info) {
        this.setState({hasEror:true})
    }

    render() {
        if(this.state.hasEror) {
            return <h1>Something Went Wrong</h1>
        }
        else {
            return this.props.children
        }
    }

}

export default ErrorBoundries