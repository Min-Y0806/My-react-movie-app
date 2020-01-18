import React from 'react';
import './App.css';
import Movie from "./components/Movie"
import axios from "axios"
import HeadBar from './components/HeadBar';
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"



class App extends React.Component{
state={
  movies:[],
  isLoading:true
}
_getMovies=async()=>{
  const {data:{data:{movies}}}=await axios.get("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
  this.setState({
    movies:movies,
    isLoading:false
  })
  console.log(this.state.movies)
}


componentDidMount(){
  this._getMovies()
}


  render(){
    const {isLoading,movies}=this.state;
    return(
      <div className="App">
        {isLoading?<div className="Loading"><p className="Loading_text">Loading...</p></div>:
        <Table>
          <TableHead>
            <HeadBar></HeadBar>
          </TableHead>
          <TableBody>
            {movies.map((movie,index)=>{
              return <Movie title={movie.title} 
              poster={movie.small_cover_image}
              id={index}
              key={movie.id}
              year={movie.year}
              summary={movie.summary}
              ></Movie>
            })}
          </TableBody>
        </Table>
        
        
        }
      </div>
    )
  }
}

export default App;
