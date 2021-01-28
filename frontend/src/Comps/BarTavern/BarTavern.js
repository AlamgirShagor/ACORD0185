import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const BarTavern = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
            <div className="row">
                    <div className="col-6">
                        <h5>BAR / TAVERN / NIGHTCLUB INFORMATION (Complete if applicable)</h5>
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
                        <div className="row">
                            <div className="col-8">
                                <h6>TYPE OF ENTERTAINMENT (Check All That Apply)</h6>
                                <div className="row">
                                    <div className="col-5">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="LIVE MUSIC (ANY TYPE)"
                                            class="custom-control-input"
                                            id="LIVE MUSIC (ANY TYPE)"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="LIVE MUSIC (ANY TYPE)">LIVE MUSIC (ANY TYPE) - Describe:</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            type="text"
                                            onChange={handleBlur}
                                            name="LIVE"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="DANCING"
                                            class="custom-control-input"
                                            id="DANCING"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="DANCING">DANCING</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="DANCE CONTEST(S)"
                                            class="custom-control-input"
                                            id="DANCE CONTEST(S)"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="DANCE CONTEST(S)">DANCE CONTEST(S)</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="DJ"
                                            class="custom-control-input"
                                            id="DJ"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="DJ">DJ</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="KARAOKE"
                                            class="custom-control-input"
                                            id="KARAOKE"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="KARAOKE">KARAOKE</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="JUKE BOX"
                                            class="custom-control-input"
                                            id="KARJUKE BOXAOKE"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="JUKE BOX">JUKE BOX</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="custom-control custom-checkbox">
                                            <input
                                            type="checkbox"
                                            name="PIANO"
                                            class="custom-control-input"
                                            id="PIANO"
                                            onChange={handleBlur}
                                            />
                                            <label class="custom-control-label" for="PIANO">PIANO</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4"><label htmlFor="">DANCE FLOOR</label></div>
                                            <div className="col-8">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <label htmlFor="">Square Feet:</label>
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="text" onChange={handleBlur} name="Square Feet" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <label htmlFor="">Is a dance permit maintained? (Y / N):</label>
                                                    </div>
                                                    <div className="col-3">
                                                        <input type="text" onChange={handleBlur} name="Is a dance permit" className="form-control"/>
                                                    </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row text-center">
                                     <div className="col">
                                         <h6>AVERAGE AGE OF CLIENTELE (Check One)</h6>
                                     </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-check ny-2">
                                        <input class="form-check-input" onChange={handleBlur} type="radio" name="AVERAGE AGE" id="UNDER 21" value="UNDER 21" />
                                        <label class="form-check-label" for="UNDER 21">
                                        UNDER 21
                                        </label>
                                        </div>

                                        <div class="form-check ny-2">
                                        <input class="form-check-input" onChange={handleBlur} type="radio" name="AVERAGE AGE" id="21 - 25" value="21 - 25" />
                                        <label class="form-check-label" for="21 - 25">
                                            21 - 25
                                        </label>
                                        </div>

                                        <div class="form-check ny-2">
                                        <input class="form-check-input" onChange={handleBlur} type="radio" name="AVERAGE AGE" id="26 - 30" value="26 - 30" />
                                        <label class="form-check-label" for="26 - 30">
                                            26 - 30
                                        </label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-check ny-2">
                                        <input class="form-check-input" onChange={handleBlur} type="radio" name="AVERAGE AGE" id="31 - 65" value="31 - 65" />
                                        <label class="form-check-label" for="31 - 65">
                                        31 - 65
                                        </label>
                                        </div>

                                        <div class="form-check ny-2">
                                        <input class="form-check-input" onChange={handleBlur} type="radio" name="AVERAGE AGE" id="OVER 65" value="OVER 65" />
                                        <label class="form-check-label" for="OVER 65">
                                        OVER 65
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-2">
                    <div className="col-4">
                        <div className="row">
                            <div className="col-8">
                                <h6 style={{fontSize: "14px"}}>AMUSEMENT DEVICES (Provide Counts)</h6>
                            </div>
                            <div className="col-4 text-center">
                                <h6>COUNT</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label htmlFor="">POOL TABLES</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="POOL TABLES" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">DART BOARDS</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="DART BOARDS" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">PINBALL MACHINES</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="PINBALL MACHINES" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">GAMBLING DEVICES</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="GAMBLING DEVICES" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">POKER TABLES / DEALERS</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="POKER TABLES / DEALERS" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="row my-1">
                            <div className="col-8">
                                <h6 style={{fontSize: "14px"}}>AMUSEMENT DEVICES (Provide Counts)</h6>
                            </div>
                            <div className="col-4 text-center">
                                <h6>COUNT</h6>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">VIDEO / ELECTRONIC GAMES</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="VIDEO / ELECTRONIC GAMES" onChange={handleBlur}/>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-8">
                                <label htmlFor="">MECHANICAL DEVICES</label>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" name="MECHANICAL DEVICES" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <h6 style={{fontSize: "12px"}}>DESCRIPTION (Video / Electronic Games, Mechanical Devices, Other)</h6>
                        <div className="col">
                            <div className="row">
                                <input type="text" className="form-control my-1" name="DESCRIPTION" onChange={handleBlur}/>
                            </div>
                            <div className="row">
                                <input type="text" className="form-control my-1" name="DESCRIPTION" onChange={handleBlur}/>
                            </div>
                            <div className="row">
                                <input type="text" className="form-control my-1" name="DESCRIPTION" onChange={handleBlur}/>
                            </div>
                            <div className="row">
                                <input type="text" className="form-control my-1" name="DESCRIPTION" onChange={handleBlur}/>
                            </div>
                            <div className="row">
                                <input type="text" className="form-control my-1" name="DESCRIPTION" onChange={handleBlur}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y/N</h6>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">1.  IS THERE A STAGE?</label>
                         <textarea className="form-control ml-2 my-1" name="IS THERE A STAGE?" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                    <input type="text" className="form-control ml-2 my-1" name="IS THERE A STAGE" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2.  IS THERE SPECIAL EQUIPMENT?</label>
                         <textarea className="form-control ml-2 my-1" name="IS THERE SPECIAL EQUIPMENT?" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                    <input type="text" className="form-control ml-2 my-1" name="IS THERE SPECIAL EQUIPMENT?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3.  ARE THERE PYROTECHNICS?</label>
                         <textarea className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. IS THERE A RECREATION AREA OR OTHER ACTIVITIES THAT WOULD INCLUDE PATRON PARTICIPATION (such as wrestling, boxing, volleyball, basketball, etc.)? (If "YES", describe)</label>
                         <textarea className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. ARE SHOTS SPECIALS OFFERED? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. IS THERE A STEADY BAR CLIENTELE? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. ARE BACKGROUND CHECKS CONDUCTED ON EMPLOYEES?</label>
                        <textarea className="form-control ml-2 my-1" name="ARE BACKGROUND CHECKS" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" className="form-control ml-2 my-1" name="ARE THERE PYROTECHNICS?" onChange={handleBlur}/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <h6 style={{fontSize: "15px"}} className="text-center">ARE BACKGROUND CHECKS</h6>
                    </div>
                    <div className="col-5">
                        <h6 className="text-center">EMPLOYEES</h6>
                        <div className="row">
                            <div className="col-6">
                                <h6>NUMBER UNARMED</h6>
                            </div>
                            <div className="col-6">
                                <h6>NUMBER ARMED</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <h6 className="text-center">CONTRACTORS</h6>
                        <div className="row">
                            <div className="col-6">
                                <h6>NUMBER UNARMED</h6>
                            </div>
                            <div className="col-6">
                                <h6>NUMBER ARMED</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2 text-center">
                        <label  htmlFor="">BOUNCERS</label>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="BOUNCERS" className="form-control"/>
                            </div>
                            <div className="col-6">
                            <input type="text" onChange={handleBlur} name="BOUNCERS" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="BOUNCERS" className="form-control"/>
                            </div>
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="BOUNCERS" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2 text-center">
                        <label htmlFor="">DOORMEN</label>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="DOORMEN" className="form-control"/>
                            </div>
                            <div className="col-6">
                            <input type="text" onChange={handleBlur} name="DOORMEN" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="DOORMEN" className="form-control"/>
                            </div>
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="DOORMEN" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-2 text-center">
                        <label  htmlFor="">PARKING PATROL</label>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="PARKING PATROL" className="form-control"/>
                            </div>
                            <div className="col-6">
                            <input type="text" onChange={handleBlur} name="PARKING PATROL" className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="PARKING PATROL" className="form-control"/>
                            </div>
                            <div className="col-6">
                                <input type="text" onChange={handleBlur} name="PARKING PATROL" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default BarTavern;