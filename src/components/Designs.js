import React from 'react';

const Designs = ({ design, color }) => {

    const Banda = ({ fill }) =>
        <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M170 0H130V40H170V0ZM242.099 5.7865L0 351.539V450H43.3684L300 83.4921V21.3011L242.099 5.7865Z" fill={fill} />
        </svg>

    const Banda2 = ({ fill }) =>
        <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M170 0H130V40H170V0ZM0 98.455L246.154 450H300V366.502L49.1225 8.2121L0 21.3744V98.455Z" fill={fill} />
        </svg>

    const Horizontal = ({ fill }) =>
        <svg width="30" height="26.5" viewBox="0 0 300 265" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M170 0H130V40H170V0ZM300 160H0V265H300V160Z" fill={fill} />
        </svg>

    const Mitad = ({ fill }) =>
        <svg width="15" height="45" viewBox="0 0 150 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design' style={{ left: 0, top: 0 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M150 450V0H79.7704L0 21.3744V450H150Z" fill={fill} />
        </svg>

    const Mitad2 = ({ fill }) =>
        <svg width="28.9" height="45" viewBox="0 0 289 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design' style={{ left: 0, top: 0 }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 21.3744L79.7704 0H220.503L288.624 18.2531L0 449.907V21.3744ZM0.138863 450L0 449.907V450H0.138863Z" fill={fill}/>
        </svg>

    const Vertical1 = ({ fill }) =>
        <svg width="10" height="45" viewBox="0 0 100 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <rect width="100" height="450" fill={fill} />
        </svg>

    const Vertical2 = ({ fill }) =>
        <svg width="18" height="45" viewBox="0 0 180 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M120 0V450H180V5.22418L160.503 0H120ZM60 450V0H19.7704L0 5.29749V450H60Z" fill={fill} />
        </svg>

    const Vertical3 = ({ fill }) =>
        <svg width="21" height="45" viewBox="0 0 210 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 450V9.31671L34.7704 0H40V450H0ZM125 450H85V0H125V450ZM210 450H170V0H175.503L210 9.24341V450Z" fill={fill} />
        </svg>

    const Vertical4 = ({ fill }) =>
        <svg width="27" height="45" viewBox="0 0 270 450" fill="none" xmlns="http://www.w3.org/2000/svg" className='design'>
            <path fillRule="evenodd" clipRule="evenodd" d="M180 0V450H210V1.20496L205.503 0H180ZM240 9.24341V450H270V17.2819L240 9.24341ZM150 450V0H120V450H150ZM90 450V0H64.7704L60 1.2782V450H90ZM30 450V9.31671L0 17.3552V450H30Z" fill={fill} />
        </svg>


    return (
        <>
            {design === 0 && null}
            {design === 1 && <Banda fill={color} />}
            {design === 2 && <Banda2 fill={color} />}
            {design === 3 && <Horizontal fill={color} />}
            {design === 4 && <Mitad fill={color} />}
            {design === 5 && <Mitad2 fill={color} />}
            {design === 6 && <Vertical1 fill={color} />}
            {design === 7 && <Vertical2 fill={color} />}
            {design === 8 && <Vertical3 fill={color} />}
            {design === 9 && <Vertical4 fill={color} />}
        </>
    );
};

export default Designs;