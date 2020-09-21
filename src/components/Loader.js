import React from 'react';
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";

function Loader({ loading }) {
    const override = css`
      background-color:#fff;
      position:fixed;
      width:100%;
      height:100%;
      top:0px;
      left:0px;
      z-index:1000;
    `;
    return (
        <div>
            <BarLoader
                css={override}
                size={100}
                color={"#25D366"}
                loading={loading}
            />
        </div>
    )
}

export default Loader;
