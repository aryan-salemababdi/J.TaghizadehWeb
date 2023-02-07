import { Typography } from "@mui/material";

const Banner = () => {
    const mystyle = {
        background: "url(images/michal-parzuchowski-kKf1ZkS_wcs-unsplash.jpg)",
        margin: "0px",
        height: "calc(100vh)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: " all 0.2s linear",
        display: "flex",
        color: "#fff",
        listStyle: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    };
    return (
        <div style={mystyle}>
            <Typography fontSize={20} fontWeight="bold">
                Welcome to the personal page of Dr. Taghizadeh <span style={{color:"red"}}>Firouzjaei</span>
            </Typography>
        </div>
    )
}

export default Banner