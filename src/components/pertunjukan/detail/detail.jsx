/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import DetailKonten from './contentDetail';
import Posisi from './posisi';

function Detail() {
  return (
    <div className="">
        
        <Container className='bg-color-four '>
        <Posisi  />
        <DetailKonten />
      </Container>
   </div>
  );
}

export default Detail;