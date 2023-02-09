import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import styles from "./Featured.module.scss"

const Featured = () => {
    return (
        <>
            <div className={styles.sujText}>
                <Typography
                    fontSize={25}
                    fontWeight="light"
                    color="gray"
                >
                    Featured
                </Typography>
            </div>
            <div className={styles.container} >
                <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        component="img"
                        alt="pdat"
                        height="150"
                        image="/images/PDAT-logo-2-2048x1106.png"
                        sx={{ padding: "10px" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                            PDAT <span style={{ color: "#ED6C02" }}>LAB</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            PDAT are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            variant="contained"
                            color="warning"
                            onClick={() => {
                                alert("push to pdat web")
                            }}
                        >
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                            >
                                LINK
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        component="img"
                        alt="KNTU"
                        height="150"
                        image="/images/2105406.png"
                        sx={{ padding: "10px" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                            KNTU <span style={{ color: "#ED6C02" }}>UNI</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            KNTU are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            variant="contained"
                            color="warning"
                            onClick={() => {
                                alert("push to pdat web")
                            }}
                        >
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                            >
                                LINK
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 245 }}>
                    <CardMedia
                        component="img"
                        alt="KNTU"
                        height="150"
                        image="/images/2105406.png"
                        sx={{ padding: "10px" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                            KNTU <span style={{ color: "#ED6C02" }}>UNI</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            KNTU are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            variant="contained"
                            color="warning"
                            onClick={() => {
                                alert("push to pdat web")
                            }}
                        >
                            <Typography
                                fontSize={15}
                                fontWeight="bold"
                            >
                                LINK
                            </Typography>
                        </Button>
                    </CardActions>
                </Card>
            </div>

        </>
    )
}

export default Featured