import React, { createContext, useState } from 'react';

export const DesignContext = createContext()

const DesignProvider = (props) => {

    const [primaryColor, setPrimaryColor] = useState('#ffffff')
    const [secondaryColor, setSecondaryColor] = useState('#000000')
    const [sleeveColor, setSleeveColor] = useState('#ffffff')
    const [collarColor, setCollarColor] = useState('#000000')
    const [primaryColorGK, setPrimaryColorGK] = useState('#000000')
    const [secondaryColorGK, setSecondaryColorGK] = useState('#ffffff')
    const [design, setDesign] = useState(0)
    const [fieldPerspective, setFieldPerspective] = useState('3d')
    const [fieldColor, setFieldColor] = useState('#1aaf7d')
    const [backgroundColor, setBackgroundColor] = useState('#222327')
    const [textColor, setTextColor] = useState('#ffffff')

    return(
        <DesignContext.Provider
            value={{
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
                setDesign,
                fieldPerspective,
                setFieldPerspective,
                fieldColor,
                setFieldColor,
                backgroundColor,
                setBackgroundColor,
                textColor,
                setTextColor
            }}
        >
            {props.children}
        </DesignContext.Provider>
    )
}

export default DesignProvider