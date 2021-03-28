import Member from "./Member";
import { makeStyles, Typography, Grid, Tooltip } from "@material-ui/core";
import { members } from "../memberlist";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    background: theme.palette.primary.main,
    color: "white",
    borderRadius: "6em 0 0 0",
    padding: "5rem 0",
    [theme.breakpoints.down("md")]: {
      padding: "3rem 0",
      marginTop: "5rem",
      fontSize: ".8em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7em",
    },
  },
  swiper: {
    padding: "5rem",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: "0",
    margin: "3rem 0",
  },
}));
const Members = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="members">
      <Typography variant="h1">TEAM</Typography>
      <Typography>Colitics consists of the following pro players:</Typography>
      <Swiper
        navigation
        className={classes.swiper}
        slidesPerView={2}
        breakpoints={{
          1920: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {members.sort().map((member, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Member member={member}></Member>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Members;
