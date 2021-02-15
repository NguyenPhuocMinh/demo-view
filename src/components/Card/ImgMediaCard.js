import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = (props) => {
  const {
    id,
    title,
    addressText,
    aboutDay,
    price,
  } = props;
  const classes = useStyles();

  return (
    <Card id={id} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          // image={img}
          title={title}
          src="https://pix10.agoda.net/hotelImages/286/286164/286164_16100615290047496140.jpg?s=1024x768"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {addressText}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Khỏi hành:  {aboutDay}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Giá : {price} VND/1 khách
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ImgMediaCard.propTypes = {
  id: PropTypes.node,
  title: PropTypes.string,
  addressText: PropTypes.string,
  aboutDay: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number
}

export default ImgMediaCard;