import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import styles from "../module/Wp.module.scss";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import { Typography } from '@mui/material';


const WorkProject = () => {

    const itemData = [
        {
            img: "/images/Javad-Taghizadeh-Firouzjaee.jpg",
            title: "PHYSIC LECTURE",
            text: "The Physic of Youth Culture Today",
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: "/images/45022370-3376-b__3284.jpg",
            title: "CONFERENCE",
            text: "On The Physic Of Astro",
        },

    ];

    return (
        <>
            <div className={styles.sujText}>
                <Typography
                    fontSize={25}
                    fontWeight="light"
                    color="gray"
                >
                    Work & Project
                </Typography>
            </div>
            <div style={{ padding: "10px" }}>
                <ImageList>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <Image
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                width={619}
                                height={450}
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.text}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </>
    )
}

export default WorkProject