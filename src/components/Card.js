import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'
const Card = ({course,liked,setLiked}) => {
    function likeHandle(){
        if(liked.includes(course.id)){
            setLiked( (prev) => prev.filter((cid) =>  (cid !== course.id ) ) );
            toast.warning("liked removing")
        }
        else{
            if(liked.length === 0){
                setLiked([course.id]);
            }
            else{
                setLiked((prev) => [...prev, course.id]);
            }
            toast.success('Liked Successfully')
        }
    }
    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
            <div className=' relative'>
                <img src={course.image.url} />
                <div>
                    <button className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-20px] flex justify-center items-center'
                    onClick={likeHandle}>
                        {
                            !liked.includes(course.id) ?
                            (<FcLikePlaceholder fontSize='1.75rem' />) :
                            (<FcLike fontSize='1.75rem' />)
                        }
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{
                    course.description.length > 100 ?
                    (course.description.substr(0, 100) + '...') :
                    (course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card;
