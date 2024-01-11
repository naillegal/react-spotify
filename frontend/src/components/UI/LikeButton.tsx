import { IconButton } from "@mui/material";
import * as React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export interface ILikeButtonProps {
    styles?: object;
    classname?: string;
}

export default function LikeButton(props: ILikeButtonProps) {
  return (
    <div className={props.classname}>
      <IconButton aria-label="favorite" size="large">
        <FavoriteBorderIcon
          fontSize="inherit"
          style={props.styles}
        />
      </IconButton>
    </div>
  );
}
