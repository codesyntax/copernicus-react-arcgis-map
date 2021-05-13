import React, { useState } from "react";
import "@arcgis/core/assets/esri/css/main.css";
import "./ArcgisMap.css";
import classNames from 'classnames';

function LayerSelector() {
    const [showMapMenu, setShowMapMenu] = useState(false)
    var menuClass = classNames('esri-icon-basemap esri-widget--button esri-widget esri-interactive', {
        'esri-icon-right-arrow': showMapMenu,
        'esri-icon-basemap': !showMapMenu
    });

    function openMenu() {
        if (showMapMenu) {
            document.getElementsByClassName("esri-basemap-gallery")[0].style.display = 'none';
            setShowMapMenu(false);
        } else {
            document.getElementsByClassName("esri-basemap-gallery")[0].classList.add("basemap-gallery-container");
            document.getElementsByClassName("esri-basemap-gallery")[0].style.display = 'block';
            setShowMapMenu(true);
        }
    };
    return (
        <div
            className={menuClass}
            id="map_basemap_button"
            role="button"
            title="Basemap gallery"
            onClick={() => openMenu()}>
        </div>
    );
};

export default LayerSelector;
