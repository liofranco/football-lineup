import style from './Settings.module.css'
import { colors } from '../../Colors'
import { useContext, useState } from 'react';
import { DesignContext } from '../../context/DesignContext';

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
            {dropDownIndex === 1 && (
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSecondaryColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            )}
            <div className={style.option_container} onClick={() => handleDropDownIndex(2)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: '#fff' }}></div>
                </div>
                <p>Diseño</p>
            </div>
            {dropDownIndex === 2 && (
                <div className='color-picker'>
                    <p onClick={() => setDesign(0)}>0</p>
                    <p onClick={() => setDesign(1)}>1</p>
                    <p onClick={() => setDesign(2)}>2</p>
                    <p onClick={() => setDesign(3)}>3</p>
                    <p onClick={() => setDesign(4)}>4</p>
                    <p onClick={() => setDesign(5)}>5</p>
                    <p onClick={() => setDesign(6)}>6</p>
                    <p onClick={() => setDesign(7)}>7</p>
                    <p onClick={() => setDesign(8)}>8</p>
                    <p onClick={() => setDesign(9)}>9</p>
                </div>
            )}
            <div className={style.option_container} onClick={() => handleDropDownIndex(3)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${sleeveColor}` }}></div>
                </div>
                <p>Mangas</p>
            </div>
            {dropDownIndex === 3 && (
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSleeveColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            )}
            <div className={style.option_container} onClick={() => handleDropDownIndex(4)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${collarColor}` }}></div>
                </div>
                <p>Cuello</p>
            </div>
            {dropDownIndex === 4 && (
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setCollarColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            )}
            <h3>Arquero</h3>
            <div className={style.option_container} onClick={() => handleDropDownIndex(5)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${primaryColorGK}` }}></div>
                </div>
                <p>Color Principal</p>
            </div>
            {dropDownIndex === 5 && (
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setPrimaryColorGK(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            )}
            <div className={style.option_container} onClick={() => handleDropDownIndex(6)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${secondaryColorGK}` }}></div>
                </div>
                <p>Cuello</p>
            </div>
            {dropDownIndex === 6 && (
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setSecondaryColorGK(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            )}
        </div>
    );
};

export default EditDesign;