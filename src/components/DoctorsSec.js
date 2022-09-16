import React from 'react';
import { FiStar } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import { DoctorData } from '../data-folder/DoctorsData';
import './Styles/DoctorsSec.css';

const positive = [1, 2, 3, 4, 5];

const DoctorsSec = () => {
  return (
    <div className='doctor-review-card contains'>
      <header>
        <h4 className='row-header'>Doctors vs Patients</h4>
      </header>
      {DoctorData.map((item, index) => {
        return (
          <div key={index} className='container-doctor'>
            <div className='doc-section'>
              <div>
                <img src={item.img} className='doc-image' alt=''></img>
              </div>
              <div className='spacing-name'>
                {item.docName}
                <div className='type-of-doc'>{item.specialist}</div>
                <div>
                  <span className='doc-rate-num'>{item.review}</span>
                  {positive.map((item, ind) => {
                    return (
                      <FiStar style={{
                        color: '#ffad31',
                        fill: '#ffad31'
                      }} key={ind} className={
                    'star-res'
                      } />
                    );
                  })}
                </div>
              </div>
              <div>
                <HiUsers className='icon-style' />
                <span className='num-people'>{item.users}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default DoctorsSec;