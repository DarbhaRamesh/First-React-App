import React ,{ Component } from "react";
import CardList from '../Components/Cardlist'
import SearchBox from '../Components/searchbox'
import Scroll from '../Components/scroll'
import ErrorBoundary from '../Components/ErrorBoundary'
import '../Containers/App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robot => {this.setState({robots: robot})} )
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render(){
        const { robots, searchField} =this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if(!robots.length ){
            return <h1 className = 'tc'>LOADING...</h1>
        }
        else{
            return(
                <div className = 'tc'>
                    <h1 className = 'f1'> ROBOFRIENDS</h1>
                    <h3 className = 'i f3'>My First React App</h3>
                    <SearchBox searchChange = { this.onSearchChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App