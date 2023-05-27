import Angular from './images/angular.jpg'
import Bootstrap from "./images/bootstrap5.png"
import Ccsharp from "./images/ccsharp.png"
import KompleWeb from "./images/Kompleweb.jpg"
import "./Course.css";

const CourseMap ={
    Angular,
    Bootstrap,
    Ccsharp,
    KompleWeb
}
const Course = ({courseName}) => {

  return (
    <div className='courseDiv'>
        <img className='course' src={CourseMap[courseName]} alt="course" />
    </div>
  )
};

export default Course;
