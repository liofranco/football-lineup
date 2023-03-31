import style from './Settings.module.css'
import { colors } from '../../Colors'
import { useContext, useState } from 'react';
import { DesignContext } from '../../context/DesignContext';
import Designs from '../Designs';

const EditDesign = () => {

    const {
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        sleeveColor,
        setSleeveColor,
        collarColor,
        setCollarColor,
        primaryColorGK,
        setPrimaryColorGK,
        secondaryColorGK,
        setSecondaryColorGK,
        design,
        setDesign
    } = useContext(DesignContext)

    const [dropDownIndex, setDropDownIndex] = useState(null)

    const handleDropDownIndex = index => {
        if (dropDownIndex === index) {
            setDropDownIndex(null)
        } else setDropDownIndex(index)
    }

    return (
        <div className={style.edit_design_container}>
            <h3>Jugadores</h3>
            <div className={style.option_container} onClick={() => handleDropDownIndex(0)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${primaryColor}` }}></div>
                </div>
                <p>Color Principal</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 0 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setPrimaryColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(1)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${secondaryColor}` }}></div>
                </div>
                <p>Color Secundario</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 1 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSecondaryColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(2)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: '#fff' }}></div>
                </div>
                <p>Diseño</p>
            </div>
            <div className={`select-design-container ${dropDownIndex === 2 ? 'select-design-container-visible' : ''}`}>
                <div className='select-design'>
                    <div onClick={() => setDesign(0)} className={`shirt-container ${design === 0 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={0} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(1)} className={`shirt-container ${design === 1 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={1} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(2)} className={`shirt-container ${design === 2 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex',justifyContent: 'center' }} >
                                <Designs design={2} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(3)} className={`shirt-container ${design === 3 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={3} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(4)} className={`shirt-container ${design === 4 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={4} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(5)} className={`shirt-container ${design === 5 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex',justifyContent: 'center' }} >
                                <Designs design={5} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(6)} className={`shirt-container ${design === 6 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={6} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(7)} className={`shirt-container ${design === 7 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex',justifyContent: 'center' }} >
                                <Designs design={7} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(8)} className={`shirt-container ${design === 8 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={8} color={secondaryColor} />
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setDesign(9)} className={`shirt-container ${design === 9 ? 'shirt-selected' : ''}`}>
                        <div className="shirt">
                            <svg width="30" height="45" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M220.503 0H79.7704L0 21.3744V450H300V21.3011L220.503 0Z" fill={primaryColor} />
                            </svg>
                            <div style={{ position: 'absolute', width: '14px', height: '7px' }} >
                                <svg width={14} height={7} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 -6.10352e-05C0 -5.08626e-05 0 -4.06901e-05 0 -3.05176e-05C0 38.6599 31.3401 70 70 70C108.66 70 140 38.6599 140 -3.05176e-05H130C130 33.1371 103.137 60 70 60C36.8629 60 10 33.1371 10 -3.05176e-05C10 -4.06901e-05 10 -5.08626e-05 10 -6.10352e-05H0Z" fill={collarColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '13px', height: '6.5px' }} >
                                <svg width="13" height="6.5" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg" className='cuello-fondo'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0C0 35.8985 29.1015 65 65 65C100.899 65 130 35.8985 130 0H0Z" fill={primaryColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute', width: '45.4px', height: '15.6px' }} >
                                <svg width="45.4" height="15.6" viewBox="0 0 454 156" fill="none" xmlns="http://www.w3.org/2000/svg" className='mangas'>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M247 0H207V40H247V0ZM377 143.218L423.274 155.617L453.753 41.8668L377 21.3008V143.218ZM0.575241 41.8524L77 21.3744V143.307L31.0583 155.617L0.575241 41.8524Z" fill={sleeveColor} />
                                </svg>
                            </div>
                            <div style={{ position: 'absolute',top: '0', width: '30px', height: '45px', display: 'flex', justifyContent: 'center' }} >
                                <Designs design={9} color={secondaryColor} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(3)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${sleeveColor}` }}></div>
                </div>
                <p>Mangas</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 3 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSleeveColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(4)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${collarColor}` }}></div>
                </div>
                <p>Cuello</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 4 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setCollarColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <h3>Arquero</h3>
            <div className={style.option_container} onClick={() => handleDropDownIndex(5)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${primaryColorGK}` }}></div>
                </div>
                <p>Color Principal</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 5 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setPrimaryColorGK(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(6)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${secondaryColorGK}` }}></div>
                </div>
                <p>Cuello</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 6 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSecondaryColorGK(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
        </div>
    );
};

export default EditDesign;