import ContainerBox from "../../components/containers/ContainerBox"
import { useSearch } from "../../hooks/searchAuth"

const Search = () => 
{
    const [values, setValues] = useSearch();
  return (
    <ContainerBox title= "TIMEZEN - Searched Results">
        <div>
            <h1>Search Results</h1>
            <h6>{values?.searchedProducts.length <1? "No products found" : `Found ${values.searchedProducts.length}` }</h6>
        </div>
    </ContainerBox>
  )
}

export default Search