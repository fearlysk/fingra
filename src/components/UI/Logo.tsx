import useWindowDimensions from "../../utils/getWindowDimensions";

const Logo = () => {

    const { width } = useWindowDimensions();

    const setLogoHeight = () => {
        let logoHeight;
        if (width > 579 ) {
          logoHeight = 58;
        } 
        else {
          logoHeight = 56;
        }
        return logoHeight;
    }
  
    const setLogoWidth = () => {
        let logoWidth;
        if (width > 579 ) {
          logoWidth = 251;
        } 
        else {
          logoWidth = 220;
        }
        return logoWidth;
    }

    return (
        <svg width={setLogoWidth()} height={setLogoHeight()} viewBox="0 0 251 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width={setLogoWidth()} height={setLogoHeight()} fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_6_4" transform="scale(0.00175131 0.00757896)"/>
                </pattern>
                <image id="image0_6_4" width="571" height="132" xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}

export default Logo;
