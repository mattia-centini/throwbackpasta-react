import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  media: {
    height: 400,
  },
});

export default function MediaCard({src, title, text}) {
  const classes = useStyles();

  return (
    <Card className={`card ${classes.root}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={src}
          
        />
        <CardContent className="cardContent">
          <Typography className="title" gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className='text' variant="body2" color="red" component="p">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
