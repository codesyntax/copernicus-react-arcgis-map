import React, { useState } from "react";
import "@arcgis/core/assets/esri/css/main.css";
import "./ArcgisMap.css";

function MenuContainer() {
    const [showMapMenu, setShowMapMenu] = useState(false)

    // var menu_container = document.createElement('div');
    // menu_container.className = "map-left-menu-container"
    // var menu_button = document.createElement('div');
    // menu_button.className = "esri-icon-drag-horizontal esri-widget--button esri-widget esri-interactive";
    // menu_container.innerHTML = `
    // <div class="map-menu tab-container">
    // <div class="tabs" role="tablist">
    // <span class="tab tab-selected" id="products_label" role="tab" aria-controls="products_panel" aria-selected="true">Products and datasets</span>
    // <span class="tab" id="active_label" role="tab" aria-controls="active_panel" aria-selected="false">Active on map</span>
    // </div>
    // <div class="panels">
    // <div class="panel panel-selected" id="products_panel" role="tabpanel" aria-hidden="false"></div>
    // <div class="panel" id="active_panel" role="tabpanel" aria-hidden="true"><div class="no-active-datasets">No datasets selected</div></div>
    // </div>
    // </div>`;
    // menu_button.addEventListener('click', function (evt) {
    //     console.log(evt)
    //     if (this.classList.contains("esri-icon-drag-horizontal")) {
    //         setShowMapMenu(true)
    //         // $(".map-menu").show();
    //         // $(this).removeClass("esri-icon-drag-horizontal").addClass("esri-icon-left-arrow")
    //     }
    //     else if (this.classList.contains("esri-icon-left-arrow")) {
    //         // $(".map-menu").hide();
    //         // $(this).removeClass("esri-icon-left-arrow").addClass("esri-icon-drag-horizontal")
    //     }
    // });
    // menu_container.appendChild(menu_button);

    function toggleMenu(){
        if(showMapMenu){
            setShowMapMenu(false);
        }else{
            setShowMapMenu(true);

        }
    }
    return (<>
        <div className="esri-icon-drag-horizontal esri-widget--button esri-widget esri-interactive" onClick={() => toggleMenu()}></div>
        {showMapMenu ?
            <div className="map-left-menu-container">
                KSKJNSKHNSL
                <div class="map-menu tab-container">
                    <div class="tabs" role="tablist">
                        <span class="tab tab-selected" id="products_label" role="tab" aria-controls="products_panel" aria-selected="true">Products and datasets</span>
                        <span class="tab" id="active_label" role="tab" aria-controls="active_panel" aria-selected="false">Active on map</span>
                    </div>
                    <div class="panels">
                        <div class="panel panel-selected" id="products_panel" role="tabpanel" aria-hidden="false"></div>
                        <div class="panel" id="active_panel" role="tabpanel" aria-hidden="true"><div class="no-active-datasets">No datasets selected</div></div>
                    </div>
                </div>
            </div>:''
        }
    </>);
}

export default MenuContainer;
