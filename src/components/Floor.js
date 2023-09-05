import React, { useState } from 'react'

function Floor({ floorNumber, isActiveFloor, userClickedInfo, onUserFloorClick }) {

    const handleClick = (i) => {
        onUserFloorClick({
            userFloor: floorNumber,
            userRequiredFloor: i
        })
    }
    const renderButtons = () => {
        const buttons = []
        for (let i = 0; i <= 13; i++) {
            buttons.push(<button key={i} className={userClickedInfo.userFloor == floorNumber && userClickedInfo.userRequiredFloor == i ? 'btn red' : 'btn'} onClick={() => handleClick(i)}>{i === 0 ? 'G' : i}</button>)
        }
        return buttons;
    }
    return (
        <div className='flex'>
            <h1 className='floor-number'>{floorNumber}</h1>
            <div className={isActiveFloor ? 'lift-container green' : 'lift-container'}>
                {renderButtons()}

            </div>
        </div>

    )
}

export default Floor





















// import React from 'react';

// function Floor({ floorNumber, isActiveFloor, userClickedInfo, onUserFloorClick }) {
//     const handleClick = (i) => {
//         onUserFloorClick({
//             userFloor: floorNumber,
//             userRequiredFloor: i
//         });
//     };

//     return (
//         <div className='flex'>
//             <h1 className='floor-number'>{floorNumber}</h1>
//             <div className={isActiveFloor ? 'lift-container green' : 'lift-container'}>
//                 <button
//                     className={userClickedInfo.userFloor === floorNumber && userClickedInfo.userRequiredFloor === 0 ? 'btn red' : 'btn'}
//                     onClick={() => handleClick(0)}
//                 >
//                     G
//                 </button>
//                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
//                     <button
//                         key={i}
//                         className={userClickedInfo.userFloor === floorNumber && userClickedInfo.userRequiredFloor === i ? 'btn red' : 'btn'}
//                         onClick={() => handleClick(i)}
//                     >
//                         {i}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Floor;
