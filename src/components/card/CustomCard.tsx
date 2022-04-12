import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

interface CardProps {
  maxWidth?: number;
  collectionTitle: string;
  collectionDetail: string;
  collectionImg: string;
  collectionUrl: string;
}

const CustomCard: React.FC<CardProps> = (props:CardProps ) => {
  const {
    collectionTitle,
    collectionDetail,
    collectionImg,
    collectionUrl,
  } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>  
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CardActionArea href={collectionUrl}>
          <CardMedia
            component="img"
            height="140"
            image={collectionImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {collectionTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {collectionDetail}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default CustomCard;