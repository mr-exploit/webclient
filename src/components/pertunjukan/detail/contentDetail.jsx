/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Comment from "./comment";
import Spinner from 'react-bootstrap/Spinner';

const DetailKonten = () => {
    const [detailData, setDetailData] = useState({});
   
    const { id } = useParams(); 

    const detailDate = {
      created_at: new Date(), // Ubah nilai ini sesuai data Anda (harus berupa objek Date)
    };
    useEffect(() => {

        async function fetchData() {
            const url = import.meta.env.VITE_API_URL + "/pertunjukan/" + `${id}`;
            try {
                
              // You can use await to fetch data from your API
              const response = await axios.get(url);
              if (response.status !== 200) {
                throw new Error('Network response was not ok');
              }
              setDetailData(response.data.data);
              
            } catch (error) {
              console.error('Error:', error);
            }
        }
        fetchData();
      }, [id]);

      // ubah format waktu
      const getFormattedDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('id-ID', options).format(date);
      };

      // Make sure to check if detailData is not empty before rendering the content
      if (!Object.keys(detailData).length) {
        return <div className="mt-5"> 
                 
                 <Spinner animation="border"  role="status" variant="warning">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>;
      }
      

    return (
        
        <div >
       
        <h1 className="text-orange mb-4 mt-4">{detailData.judul}</h1>
        <h3 className="mb-3">
          <Badge pill bg="warning"  text="white" className="me-3 ">{detailData.provinsi}</Badge>
        <Badge pill bg="warning"  text="white" >{detailData.jenis}</Badge>
        </h3>
        <div className="mb-5 text-orange">
          <span className="me-2 text-orange fs-bold-2"><BsFillCalendarEventFill />
          </span>
          {getFormattedDate(detailDate.created_at)}

        </div>
        
        <div>
          <img src={detailData.image} alt={detailData.judul} className="img-fluid mb-5" width="100%"/>
        </div>

        {detailData.content.split("\n").map((el, i) => (
                <p key={i} className="text-justify">
                  {el}
                </p>
              ))}
        <iframe width="100%" height="600px" allow="fullscreen" src={detailData.linkyt} className='mt-5 mb-5'/>
        <h5>referensi:</h5>
        <a href={detailData.referensi} className="link-2"> {detailData.referensi}</a>
        <div>
        <Comment />

        </div>
      </div>
    );
}


export default DetailKonten;