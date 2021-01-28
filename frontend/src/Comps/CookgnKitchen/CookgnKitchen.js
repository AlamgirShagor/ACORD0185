import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const CookgnKitchen = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h5>COOKING / KITCHEN FIRE PROTECTION</h5>
                    </div>
                    <div className="col-6">
                    <div className="row d-flex justify-content-end">
                        <div className="col">
                            <div className="row ">
                                <div className="col-4">
                                    <label htmlFor="">AGENCY CUSTOMER ID:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    placeholder="AGENCY"
                                    onChange={handleBlur}
                                    name="AGENCY"
                                    className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end mt-1">
                    <div className="col">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                <div className="col-4">
                                    <label htmlFor="">LOC #:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    placeholder="LOC"
                                    onChange={handleBlur}
                                    name="LOC"
                                    className="form-control"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="">BLDG #:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    placeholder="BLDG"
                                    onChange={handleBlur}
                                    name="BLDG"
                                    className="form-control"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">CHECK ALL THAT APPLY</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="GRILLING"
                                    class="custom-control-input"
                                    id="GRILLING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="GRILLING">GRILLING</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ROASTING"
                                    class="custom-control-input"
                                    id="ROASTING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="ROASTING">ROASTING</label>
                                </div>
                    </div>
                    <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="DEEP FAT FRYING"
                                    class="custom-control-input"
                                    id="DEEP FAT FRYING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="DEEP FAT FRYING">DEEP FAT FRYING</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TABLESIDE COOKING"
                                    class="custom-control-input"
                                    id="TABLESIDE COOKING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="TABLESIDE COOKING">TABLESIDE COOKING</label>
                                </div>
                    </div>
                    <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="OPEN BROILING"
                                    class="custom-control-input"
                                    id="OPEN BROILING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="OPEN BROILING">OPEN BROILING</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="BARBECUE"
                                    class="custom-control-input"
                                    id="BARBECUE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="BARBECUE">BARBECUE</label>
                                </div>
                    </div>
                    <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="COOKS WITH SOLID FUEL"
                                    class="custom-control-input"
                                    id="COOKS WITH SOLID FUEL"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="COOKS WITH SOLID FUEL">COOKS WITH SOLID FUEL</label>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="U.L. 300 APPROVED"
                                    class="custom-control-input"
                                    id="U.L. 300 APPROVED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="U.L. 300 APPROVED">U.L. 300 APPROVED AUTOMATIC EXTINGUISHING SYSTEM COVERS ALL COOKING SURFACES</label>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="U.L. 300 APPROVED AUTOMATIC"
                                    class="custom-control-input"
                                    id="U.L. 300 APPROVED AUTOMATIC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="U.L. 300 APPROVED">U.L. 300 APPROVED AUTOMATIC EXTINGUISHING SYSTEM UNDER MAINTENANCE CONTRACT</label>
                                </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="col">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="AUTOMATIC GAS OR ELECTRIC"
                                    class="custom-control-input"
                                    id="AUTOMATIC GAS OR ELECTRIC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="AUTOMATIC GAS OR ELECTRIC">AUTOMATIC GAS OR ELECTRIC SHUT OFFS FOR COOKING</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="AUTOMATIC GAS OR ELECTRIC"
                                    class="custom-control-input"
                                    id="AUTOMATIC GAS OR ELECTRIC"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="HOOD AND FILTERS CLEANED WEEKLY">HOOD AND FILTERS CLEANED WEEKLY BY STAFF</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="BC AND K EXTINGUISHERSY"
                                    class="custom-control-input"
                                    id="BC AND K EXTINGUISHERSY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="BC AND K EXTINGUISHERSY">BC AND K EXTINGUISHERS AVAILABLE IN KITCHEN</label>
                                </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="HOODS"
                                    class="custom-control-input"
                                    id="HOODS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="HOODS">HOODS AND DUCTS OVER ALL COOKING EQUIPMENT</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="HOODS AND DUCTS MAINTENANCE"
                                    class="custom-control-input"
                                    id="HOODS AND DUCTS MAINTENANCE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="HOODS AND DUCTS MAINTENANCE">HOODS AND DUCTS MAINTENANCE CONTRACT SCHEDULE</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ADEQUATE"
                                    class="custom-control-input"
                                    id="ADEQUATE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="ADEQUATE">ADEQUATE CLEARANCE BETWEEN HOODS, DUCTS, COOKING EQUIPMENT AND COMBUSTIBLE MATERIALS</label>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(2) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default CookgnKitchen;