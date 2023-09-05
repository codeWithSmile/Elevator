import React, { useState, useEffect } from 'react';
import './Elevator.css';
import Floor from './Floor';

function Elevator() {
    const [defaultLiftPosition, setDefaultLiftPosition] = useState(0);
    const [isDefaultPositionEnter, setIsDefaultPositionEnter] = useState(false);
    const [userClickedInfo, setUserClickedInfo] = useState({
        userFloor: undefined,
        userRequiredFloor: undefined
    });

    const [currentFloor, setCurrentFloor] = useState(0);
    const [isMoving, setIsMoving] = useState(false);

    useEffect(() => {
        if (isMoving) {
            const interval = setInterval(() => {
                if (currentFloor === userClickedInfo.userRequiredFloor) {
                    setIsMoving(false);
                    clearInterval(interval);
                } else {
                    setCurrentFloor((prevFloor) => prevFloor + (currentFloor < userClickedInfo.userRequiredFloor ? 1 : -1));
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isMoving, currentFloor, userClickedInfo]);

    const handleFloorClick = (clickedInfo) => {
        setUserClickedInfo(clickedInfo);
        setIsMoving(true);
    };

    const handleSubmit = () => {
        setIsDefaultPositionEnter(true);
        setCurrentFloor(parseInt(defaultLiftPosition, 10));
    };

    const handleOnChange = (e) => {
        setDefaultLiftPosition(e.target.value);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={defaultLiftPosition}
                    name="floorPosition"
                    label="Floor position"
                    onChange={handleOnChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
            {isDefaultPositionEnter && (
                <div className='container'>
                    {Array.from({ length: 14 }, (_, i) => i).map((floorNumber) => (
                        <Floor
                            key={floorNumber}
                            userClickedInfo={userClickedInfo}
                            floorNumber={floorNumber}
                            isActiveFloor={floorNumber === currentFloor}
                            onUserFloorClick={handleFloorClick}
                        />
                    ))}
                </div>
            )}
        </>
    );
}

export default Elevator;





















// import React from 'react'
// import { useState } from 'react';
// import './Elevator.css'
// import Floor from './Floor';
// function Elevator() {
//     const [defaultLiftPosition, setDefaultLiftPosition] = useState(0);
//     const [isDefaultPositionEnter, setIsDefaultPositionEnter] = useState(false);
//     const [userClickedInfo, setUserClickedInfo] = useState({
//         userFloor: undefined,
//         userRequiredFloor: undefined
//     });

//     const renderFloors = () => {
//         const floors = []
//         for (let i = 0; i <= 13; i++) {
//             floors.push(<Floor userClickedInfo={userClickedInfo} floorNumber={i} isActiveFloor={i == defaultLiftPosition} onUserFloorClick={setUserClickedInfo} />)
//         }
//         return floors;
//     }
//     const handleSubmit = () => {
//         setIsDefaultPositionEnter(true);
//     }
//     const handleOnChange = (e) => {
//         setDefaultLiftPosition(e.target.value);
//     }
//     return (

//         <>
//             <>
//                 <input type="text"
//                     value={defaultLiftPosition}
//                     name='floorPosition'
//                     label='Floor position'
//                     onChange={handleOnChange} />
//                 <button onClick={handleSubmit}>Submit</button>
//             </>
//             {isDefaultPositionEnter && <div className='container'>
//                 {renderFloors()}
//             </div>}

//         </>

//     )
// }

// export default Elevator






