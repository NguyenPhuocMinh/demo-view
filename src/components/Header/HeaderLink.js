import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  List,
  ListItem,
  Tooltip
} from '@material-ui/core';
import {
  Dropdown,
  Button
} from "../index";
import styles from "../../assets/jss/components/headerLinkStyle";

const useStyles = makeStyles(styles);

const HeaderLink = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="home-page"
          title="Trang chủ"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="/"
            color="transparent"
            className={classes.navLink}
          >
            Trang chủ
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Dropdown
          noLiPadding
          buttonText="Tour"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Tất cả tour
            </Link>,
            <a
              rel="noreferrer"
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Tour trong nước
          </a>,
            <a
              rel="noreferrer"
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Tour ngoài nước
          </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Dropdown
          noLiPadding
          buttonText="Dịch vụ"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              rel="noreferrer"
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="news"
          title="Tin tức"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            Tin tức
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="travel-guide"
          title="Cẩm nang du lịch"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            Cẩm nang du lịch
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Dropdown
          noLiPadding
          buttonText="Liên hệ"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/register" className={classes.dropdownLink}>
              Đăng ký
            </Link>,
            <Link to="/login" className={classes.dropdownLink}>
              Đăng nhập
          </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

export default HeaderLink;
