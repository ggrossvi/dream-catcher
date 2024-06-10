import React from 'react';
import Member from './Member';

const MemberList = () => {
    return (
        <div className='container'>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Member List</h2> 
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    
                    <div className='box'>
                        <Member fname = "Sarah" lname = "Smith" email = "XOjWJ@example.com" username = "sarah123"   password = "sarah123" thumbnail = "../assets/starter_profile.jpg"/> 

                        <Member fname = "Lisa" lname = "Omari" email = "lisa@example.com" username = "lisa123" password = "lisa123" thumbnail = "../assets/starter_profile.jpg"/> 

                        <Member fname = "Nancy" lname = "Janes" email = "nancy@example.com" username = "nancy123" password = "nancy123" thumbnail = "../assets/starter_profile.jpg"/> 
                    </div>
                </div>
        </div>
    );
};

export default MemberList;