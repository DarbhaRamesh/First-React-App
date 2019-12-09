import React  from "react";


const SearchBox = ({ searchChange }) => {
    return(
        <div className = 'ma2'>
            <input 
            className = 'ba pa3 b--green bg-lightest-blue tc'
            type="search" 
            placeholder="Search Robot"
            onChange = { searchChange }
            />
        </div>
    )
    
}

export default SearchBox
