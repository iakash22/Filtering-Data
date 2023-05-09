import React, { useState } from 'react';
import Card from './Card.js'

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const [liked,setLiked] = useState([]);

    const getCourse = () => {
        if(category === 'All'){
            let allCourse = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourse.push(courseData);
                });
            });

            return allCourse;
        }
        else{
            console.log(courses[category]);
            return courses[category];
        }
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            { 
            getCourse().map( (course) => {
                return <Card course={course} key={course.id} liked={liked} setLiked={setLiked}/>
            })
            }
        </div>
    )
}

export default Cards
