import React, { Component } from 'react';


export default class PhoneSpec extends Component {
    render() {
        let availability = this.props.phone.availability.map(
            (avb,index) => <dd key={index}>{avb}</dd>
         ) ;
         let dimensions = this.props.phone.sizeAndWeight.dimensions.map(
            (dim,index) => <dd key={index}>{dim}</dd> 
         ) ;
         let display = (
             <div>
               <ul className="specs">
                 <li >
                   <span>Availability and Networks</span>
                   <dl>
                     <dt>Availability</dt>
                        {availability}
                   </dl>
                 </li>
                 <li>
                   <span>Battery</span>
                   <dl>
                     <dt>Type</dt>
                     <dd>{this.props.phone.battery.type}</dd>
                     <dt>Talk Time</dt>
                     <dd>{this.props.phone.battery.talkTime}</dd>
                     <dt>Standby time (max)</dt>
                     <dd>{this.props.phone.battery.standbyTime}</dd>
                   </dl>phone.
                 </li> 
                 <li>
                   <span>Storage and Memory</span>
                   <dl>
                     <dt>RAM</dt>
                     <dd>{this.props.phone.storage.ram}</dd>
                     <dt>Internal Storage</dt>
                     <dd>{this.props.phone.storage.flash}</dd>
                   </dl>
                 </li>
                 <li>
                   <span>Connectivity</span>
                   <dl>
                     <dt>Network Support</dt>
                     <dd>{this.props.phone.connectivity.cell}</dd>
                     <dt>WiFi</dt>
                     <dd>{this.props.phone.connectivity.wifi}</dd>
                     <dt>Bluetooth</dt>
                     <dd>{this.props.phone.connectivity.bluetooth}</dd>
                     <dt>Infrared</dt>
                     <dd>{this.props.phone.connectivity.infrared}</dd>
                     <dt>GPS</dt>
                     <dd>{this.props.phone.connectivity.gps}</dd>
                   </dl>
                 </li>
                 <li>
                   <span>Android</span>
                   <dl>
                     <dt>OS Version</dt>
                     <dd>{this.props.phone.android.os}</dd>
                     <dt>UI</dt>
                     <dd>{this.props.phone.android.ui}</dd>
                   </dl>
                 </li>
                 <li>
                   <span>Size and Weight</span>
                   <dl>
                     <dt>Dimensions</dt>
                         {dimensions}
                      <dt>Weight</dt>
                     <dd>{this.props.phone.sizeAndWeight.weight}</dd>
                   </dl>
                 </li> 
                 <li>
                   <span>Display</span>
                   <dl>
                     <dt>Screen size</dt>
                     <dd>{this.props.phone.display.screenSize}</dd>
                     <dt>Screen resolution</dt>
                     <dd>{this.props.phone.display.screenResolution}</dd>
                     <dt>Touch screen</dt>
                     <dd>{this.phone.props.phone.display.touchScreen}</dd>
                   </dl>phone.
                 </li>phone.
                 <li>phone.
                   <span>Haphone.rdware</span>
                   <dl>phone.
                     <dt>CPphone.U</dt>
                     <dd>{this.props.phone.hardware.cpu}</dd>
                     <dt>USB</dt>
                     <dd>{this.props.phone.hardware.usb}</dd>
                     <dt>Audio / headphone jack</dt>
                     <dd>{this.props.phone.hardware.audioJack}</dd>
                     <dt>FM Radio</dt>
                     <dd>{this.props.phone.hardware.fmRadio}</dd>
                     <dt>Accelerometer</dt>
                     <dd>{this.props.phone.hardware.accelerometer}</dd>
                   </dl>
                 </li> 
                 <li>
                   <span>Camera</span>
                   <dl>
                     <dt>Primary</dt>
                     <dd>{this.props.phone.camera.primary}</dd>
                     <dt>Features</dt>
                     <dd>{this.props.phone.camera.features.join(', ')}</dd>
                   </dl>
                 </li>
                 <li>
                   <span>Additional Features</span>
                   <dd>{this.props.phone.additionalFeatures}</dd>
                 </li>           
                 </ul>            
           </div>
          )
         return (
              <div>
                 {display}
             </div>
            );
 
     };
    }
