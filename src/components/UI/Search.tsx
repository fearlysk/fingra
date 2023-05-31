import ISearchProps from "../../interfaces/ISearchProps";

const Search = (props: ISearchProps) => {

    const { scale } = props;

    return (
        <svg style={{"transform": "scale(" + scale + ")"}} width="29" height="33" viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_5_8)">
                <line x1="18.416" y1="15.7226" x2="24.416" y2="24.7227" stroke="white"/>
                <circle cx="13" cy="9" r="8.5" fill="#1C1D21"/>
                <circle cx="13" cy="9" r="8.5" stroke="white"/>
                <circle cx="13" cy="9" r="8.5" stroke="white"/>
            </g>
            <defs>
                <filter id="filter0_d_5_8" x="0" y="0" width="28.832" height="43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_8"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_8" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}

export default Search;
