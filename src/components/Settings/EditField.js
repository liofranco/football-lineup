import { useContext, useState } from 'react';
import { colors } from '../../Colors';
import { DesignContext } from '../../context/DesignContext';
import style from './Settings.module.css'

const EditField = () => {

    const {fieldPerspective, setFieldPerspective, fieldColor, backgroundColor, textColor,
        setFieldColor, setBackgroundColor, setTextColor} = useContext(DesignContext)

    const [dropDownIndex, setDropDownIndex] = useState(null)

    const handleDropDownIndex = index => {
        if (dropDownIndex === index) {
            setDropDownIndex(null)
        } else setDropDownIndex(index)
    }

    return (
        <div className={style.edit_design_container}>
            <h3>Vista</h3>
            <div className='select-options-container'>
                <p className={`${fieldPerspective === '2d' ? 'option-selected' : 'option'}`} onClick={()=>setFieldPerspective('2d')}>2D</p>
                <p className={`${fieldPerspective === '3d' ? 'option-selected' : 'option'}`} onClick={()=>setFieldPerspective('3d')}>3D</p>
            </div>
            <h3>Colores</h3>
            <div className={style.option_container} onClick={() => handleDropDownIndex(0)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${fieldColor}` }}></div>
                </div>
                <p>Campo de juego</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 0 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setFieldColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(1)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${backgroundColor}` }}></div>
                </div>
                <p>Fondo</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 1 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setBackgroundColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
            <div className={style.option_container} onClick={() => handleDropDownIndex(2)}>
                <div className={style.option_buttons_container}>
                    <div className={style.color_container} style={{ backgroundColor: `${textColor}` }}></div>
                </div>
                <p>Texto</p>
            </div>
            <div className={`color-picker-container ${dropDownIndex === 2 ? 'color-picker-visible' : ''}`}>
                <div className='color-picker'>
                    {colors.map((color, i) => <div key={i} onClick={() => setTextColor(color)} className='color' style={{ backgroundColor: color }}></div>)}
                </div>
            </div>
        </div>
    );
};

export default EditField;