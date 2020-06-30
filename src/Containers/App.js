import React ,{ Component } from "react";
import { connect } from 'react-redux';


import CardList from '../Components/Cardlist';
import SearchBox from '../Components/searchbox';
import Scroll from '../Components/scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

import {setSearchField, requestRobots} from '../redux/actions';

const mapStateToProps = state =>{
    return{
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount(){
        this.props.onRequestRobots()
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return(
        <div className = 'tc'>
            <h1 className = 'f1'> ROBOFRIENDS</h1>
            <h3 className = 'i f3'>My First React App</h3>
            {
                isPending ? <h1 className = 'tc'>LOADING ROBOTS...</h1> : 
                <div>
                <SearchBox searchChange = { onSearchChange } />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = { filteredRobots } />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            }
        </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);