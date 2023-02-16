import { 
    Avatar, 
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography, 
    Card 
} 
from "@mui/material";
import styles from "./Blog.module.scss";

const Blog = () => {
    return (
        <>

            <div className={styles.suj}>
                <Typography
                    fontSize={25}
                    fontWeight="light"
                    color="gray"
                >
                    Blog
                </Typography>
            </div>
            <div>
                <Card sx={{ maxWidth: 245 }}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        </IconButton>
                    </CardActions>
                </Card>
            </div>


        </>
    )
}

export default Blog;