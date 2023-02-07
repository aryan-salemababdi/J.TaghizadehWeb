import { Typography } from "@mui/material"
import Image from "next/image"
import styles from "./AboutMe.module.scss"

const AboutMe = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.imageMe}>
                    <Image
                        src="/images/PH1200009.jpg"
                        alt="imgMe"
                        width={200}
                        height={250}
                        style={{ borderRadius: "5px" }}
                    />
                </div>
                <div className={styles.textMe} >
                    <Typography
                        fontSize={25}
                        fontWeight="Light"
                        color="red"
                    >
                        Welcome
                    </Typography>
                    <Typography
                        fontSize={15}
                        fontWeight="bold"
                        color="Purple"
                    >
                      I'm Javad Taghizadeh, A Professor Of Physic At KNTU University
                    </Typography>
                    <Typography
                        fontSize={10}
                        fontWeight="bold"
                        color="Gray"
                    >
                     A scholar of social science, technology, and social inequality. I’m the author of Technology and Everyday Life, Solar Power in the Developing Countries. You can also find my words in a wide range of scholarly and mainstream publications including the The Nation, New York Times, Social Text, American Quarterly, Jacobin, and The Atlantic. As Professor of sociology at KNTU university, I teach a social science research course for social justice, youth culture, and material culture.I help my students understand and practice different approaches to problem solving, including political theory and social scientific methodologies. I created this website to share my life and my practice with you.
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default AboutMe