import React, { Component } from 'react'
import CardList from '../components/CardList'
// import {robots} from './robots'
import Social from '../components/Social'
import Search from '../components/Search'
import Scroll from '../components/Scroll'
import ErrorBoundries from '../components/ErrorBoundaries'

// const state = {
//     robots:robots,
//     query:'',
// }

// function onQuery(event) {
//   console.log(event)
// }


// export default function() {
//   return (
//     <div className='mw7 measure center'>
//         <Social/>
//         <Search query={onQuery}/>
//         <CardList robots={state.robots}/>
//     </div>
//   )
// }


class App extends Component {
  
  // usual flow of life-cycle of 'mounting'
  // Constructor Call > render > component mounted
  
  // Everytime the state changes, the render() function 
  // runs again and again - it is 'updating' life-cycle


    constructor() {
      super()
      this.state = {
        DisplayRobots:[],
        Searchquery:'',
      }
      console.log('Constructor call done.')
    }
    

    componentDidMount() {

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({DisplayRobots:users}))

      console.log('Checked: Mount Succesful! - Loading Robots')
      //this.setState({DisplayRobots:robots})
    }
  
    onQuery = (event) => {
      this.setState({Searchquery: event.target.value})
    }

    render() {
      console.log('Rendering')
      this.filteredRobots = this.state.DisplayRobots.filter(robot => {
        return (
          (robot.name.toLowerCase()+' '+robot.username.toLowerCase()).includes(this.state.Searchquery.toLowerCase())
        )


      })
      return(

        <ErrorBoundries>
            <div className='mw7 measure center'>
              <Social/>
              <Search query={this.onQuery}/>
              <Scroll>
                <CardList robots={this.filteredRobots}/>
              </Scroll>
          </div>
        </ErrorBoundries>

      );
    }

}

export default App;