import '../App.css';
import React,{useReducer} from 'react'
import SearchBar from './SearchBar'
import Header from './Header'
import Movie from './Movie'
import axios from "axios"
import loader from "../loader/ajax-loader.gif"



const initialState = {
  loading: false,
  movies: [],
  errormsg: null
}

const reducer = (state,action) => {
  switch(action.type){
    case "Search_Movies_Request":
      return {
        ...state,  //to update state
        loading: true,
        errormsg: null
      }

      case "Search_Movies_Success":
        return {
          ...state,
          loading: false,
          movies: action.payload
        }

      case "Search_Movies_Error":
        return{
          ...state,
          loading:false,
          errormsg: action.errors
        }

        default:
          return state
  }
}

function App() {

  // const api="https://api.themoviedb.org/3/search/movie?api_key=e3aa92d4d9518199909dfa9a38012d33&query=wonder"
  const api_without_query="https://api.themoviedb.org/3/search/movie?api_key=e3aa92d4d9518199909dfa9a38012d33&query="

  
  //using reducer



    const [state, dispatch] = useReducer(reducer, initialState) //dispatch: to trigger action

    // useEffect(()=>{
    //   axios.get(api)
    //   .then(users =>{
        
    //     dispatch({
    //       type:"Search_Movies_Success",
    //       payload:users.data.results
    //     })
    //   })
    // },[])
  

  const search = (searchValue) =>{
    dispatch({
      type:"Search_Movies_Request"
    })
    
    axios(api_without_query.concat(searchValue.split(" ").join("+")))
    .then(users => {
      if(users.total_results===0){
        dispatch({
          type:"Search_Movies_Error",
          error:"No result found"
        })
      }
      else{
        console.log(users.data.results)
        dispatch({
          type:"Search_Movies_Success",
          payload:users.data.results
        })
      }
    })
  }

  const {loading, movies, errormsg} = state
  console.log(movies);
  return (
    <div className="App">
      <Header text="Movie Meter"/>
      <SearchBar search={search} />
      <div className="movies">
        { loading && !errormsg ? 
        (<span><img className="spinner" src={loader} alt="Loading data...."/></span>)
        :((errormsg ? (<div className="errorMessage">{errormsg}</div>)
          : (movies.map((movie, index) => 
            (<Movie key={`${index}-${movie.title}`} movie={movie} />)))))}
          <center><p style={{marginBottom:"2rem"}}>Total Result: {movies.length}</p></center>
   
      </div>
      
    </div>
  );
}

export default App;
