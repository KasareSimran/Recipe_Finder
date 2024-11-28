// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function SearchBar({value,handleSubmission,isLoading,onChange}){

    return(
        <form onSubmit= {handleSubmission}>
            <input
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder='Search Recipes'
            className='form-control'
            />
            <input
            disabled={isLoading || !value}
            type='submit'
            className='button'
            value="Search"
            />

        </form>
    );

}
export default SearchBar