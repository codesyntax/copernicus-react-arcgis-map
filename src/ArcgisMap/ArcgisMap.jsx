import React, { useRef, useEffect, useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Zoom from "@arcgis/core/widgets/Zoom";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import esriConfig from '@arcgis/core/config';
import "./ArcgisMap.css";
import "@arcgis/core/assets/esri/css/main.css";
import MenuContainer from "./MenuContainer";

function ArcgisMap() {
    const [showMapMenu, setShowMapMenu] = useState(false)
    // esriConfig.assetsPath = '/assets';
    const mapDiv = useRef(null);
    useEffect(() => {
        let view;
        if (mapDiv.current) {
            const map = new Map({
                basemap: "topo-vector",
                slider: false
            });
            view = new MapView({
                container: mapDiv.current,
                map: map,
                center: [15, 50],
                zoom: 3,
                ui: {
                    components: ["attribution"] // removes default widgets except for attribution
                }
            });
            view.constraints = {
                minZoom: 3
            };
            var zoom = new Zoom({
                view: view
            });
            view.ui.add(zoom, {
                position: "top-right"
            });
        };
        var basemap_container = document.createElement('div');
        basemap_container.className = "basemap-gallery-container";
        var basemap_button = document.createElement('div');
        basemap_button.className = "esri-icon-basemap esri-widget--button esri-widget esri-interactive";
        basemap_button.id = "map_basemap_button";
        basemap_button.setAttribute("role", "button");
        basemap_button.setAttribute("title", "Basemap gallery");
        // basemap_button.addEventListener('click', function(evt){
        //   if (this.classList.contains("esri-icon-basemap")) {
        //     $(".esri-basemap-gallery").appendTo(".basemap-gallery-container").show();
        //     $(this).removeClass("esri-icon-basemap").addClass("esri-icon-right-arrow")
        //   }
        //   else if (this.classList.contains("esri-icon-right-arrow")) {
        //     $(".esri-basemap-gallery").hide();
        //     $(this).removeClass("esri-icon-right-arrow").addClass("esri-icon-basemap")
        //   }
        // });
        basemap_container.appendChild(basemap_button);
        view.ui.add(basemap_container, "top-right");

        const basemapGallery = new BasemapGallery({
            view: view,
        });
        view.ui.add(basemapGallery, "top-right");

        // Print
        var print_button = document.createElement('div');
        print_button.className = "esri-icon-printer esri-widget--button esri-widget esri-interactive";
        print_button.setAttribute("role", "button");
        print_button.setAttribute("title", "Print");
        print_button.addEventListener('click', function (evt) {
            // action
        });
        view.ui.add(print_button, "top-right");

        // Area selection
        var area_button = document.createElement('div');
        area_button.className = "esri-icon-cursor-marquee esri-widget--button esri-widget esri-interactive";
        area_button.setAttribute("role", "button");
        area_button.setAttribute("title", "Select area");
        area_button.addEventListener('click', function (evt) {
            // action
        });
        view.ui.add(area_button, "top-right");

        // Legend
        var legend_button = document.createElement('div');
        legend_button.className = "esri-icon-legend esri-widget--button esri-widget esri-interactive";
        legend_button.setAttribute("role", "button");
        legend_button.setAttribute("title", "Legend");
        legend_button.addEventListener('click', function (evt) {
            // action
        });
        view.ui.add(legend_button, "top-right");

        // Menu
        var menu_container = document.createElement('div');
        menu_container.className = "map-left-menu-container"
        var menu_button = document.createElement('div');
        menu_button.className = "esri-icon-left-arrow esri-widget--button esri-widget esri-interactive";
        menu_container.innerHTML = `
                <div class="map-menu tab-container">
                    <div class="tabs" role="tablist">
                        <span class="tab tab-selected" id="products_label" role="tab" aria-controls="products_panel" aria-selected="true">Products and datasets</span>
                        <span class="tab" id="active_label" role="tab" aria-controls="active_panel" aria-selected="false">Active on map</span>
                    </div>
                    <div class="panels">
                        <div class="panel panel-selected" id="products_panel" role="tabpanel" aria-hidden="false"></div>
                        <div class="panel" id="active_panel" role="tabpanel" aria-hidden="true"><div class="no-active-datasets">No datasets selected</div></div>
                    </div>
                </div>`;
        menu_button.addEventListener('click', function (evt) {
            console.log(evt)
            if (this.classList.contains("esri-icon-drag-horizontal")) {
                setShowMapMenu(true)
                // $(".map-menu").show();
                // $(this).removeClass("esri-icon-drag-horizontal").addClass("esri-icon-left-arrow")
            }
            else if (this.classList.contains("esri-icon-left-arrow")) {
                // $(".map-menu").hide();
                // $(this).removeClass("esri-icon-left-arrow").addClass("esri-icon-drag-horizontal")
            }
        });
        menu_container.appendChild(menu_button);
        view.ui.add(menu_container, "top-left");
        // loadTestProducts();

        // Scalebar
        var scaleBar = new ScaleBar({
            view: view,
            unit: "dual"
        });
        view.ui.add(scaleBar, "bottom-left");

        // Loading icon
        view.watch('updating', function (evt) {
            if (evt === true) {
                document.querySelector(".loading").style.display = 'flex';
            } else {
                document.querySelector(".loading").style.display = 'none';
            }
        })
    }, []);
    return (
        <>
                <MenuContainer></MenuContainer>
            <div className="map-container">
                
                <div ref={mapDiv} className="map">
                </div>
                <div className="loading"> <FontAwesomeIcon icon={faSpinner} pulse /></div>
            </div>
        </>
    );
}

export default ArcgisMap;