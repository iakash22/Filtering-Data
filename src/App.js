import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import {filterData, apiUrl} from './data';
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from './components/Spinner'
const App = () => {
  // const [filterData, setFilterData] = useState(filterData);
  
  const [loading, setLoading] = useState(true);
  const [courses, setCourse] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let data = await response.json();
        // console.log(data);
        setCourse(data.data);

        // console.log(courses)
      }
    catch(error){
      toast.error('Something went wrong');
    }
    setLoading(false);
  }
  useEffect(()=> {
    fetchData();
  },[]);

  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter  filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className=" w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center min-h-[50vh]">
          {
          loading ? (<Spinner />) : (<Cards  courses={courses} category={category} />)
          }
        </div>
      </div>
    </div>
)};

export default App;
