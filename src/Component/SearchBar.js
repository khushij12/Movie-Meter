import React,{useState} from 'react'

function SearchBar(props) {
    const [searchValue,setSearchValue]=useState("");

    const handleSearchInputChanges= (e) =>{
        setSearchValue(e.target.value);
    } 

    const resetsearchValue=()=>{
        setSearchValue("");
    }

    const callSearchFunction=(e)=>{
        e.preventDefault();
        setSearchValue((searchValue.split(" ")).join('+'))
        props.search(searchValue);
        resetsearchValue();
    }

    return (<center>
        <form className="search">
            <input type="search" onChange={handleSearchInputChanges} placeholder="Search..." />
            {/* <input type="submit" onClick={callSearchFunction} value="Search"/> */}
            <button type="submit" onClick={callSearchFunction}>Go</button>
        </form></center>
    )
   
}

export default SearchBar

