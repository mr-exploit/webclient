/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCaretRightFill } from "react-icons/bs";

const Posisi = () => {
  
      
    return (
        <div className="mt-5 ">
            <div className="mt-4 mb-5"><br /></div>
            <div className="">
            <Link to={"/"} className="link-2 mt-5 me-2 ">Home</Link>
            <span className="text-orange"><BsCaretRightFill /></span>
            <Link to={"/pertunjukan"} className="link-2  ms-2">Pertunjukan</Link>
            
            </div>
        </div>

    );
}


export default Posisi;

