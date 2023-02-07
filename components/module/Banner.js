import { Typography } from "@mui/material";
import styles from "./Banner.module.scss"
const Banner = () => {
    const mystyle = {
        background: "url(/images/Javad-Taghizadeh-Firouzjaee2.jpg)",
        margin: "0px",
        height: "calc(100vh)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: " all 0.2s linear",
        display: "flex",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    };
    return (
        <div style={mystyle}>
            <div>
                <Typography
                    fontSize={30}
                    fontWeight="bold"
                >
                    Javad Taghizadeh <span style={{ color: "red" }}>Firouzjaei</span>
                </Typography>
                <div className={styles.suj}>
                    <Typography
                        fontSize={20}
                        fontWeight="bold"
                    >
                        Researcher <span style={{ color: "red", }}>-</span> Book Writer <span style={{ color: "red", }}>-</span> Professor
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Banner