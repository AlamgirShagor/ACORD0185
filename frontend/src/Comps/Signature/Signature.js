import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Signature = ({handleBlur, handleSubmit}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <h5>SIGNATURE</h5>
                </div>
                <div className="row">
                    <p className="lead text-justify">
                    PERSONAL INFORMATION ABOUT YOU, INCLUDING INFORMATION FROM A CREDIT OR OTHER INVESTIGATIVE REPORT, MAY BE COLLECTED FROM PERSONS OTHER THAN YOU IN CONNECTION WITH THIS APPLICATION FOR INSURANCE AND SUBSEQUENT AMENDMENTS AND RENEWALS. SUCH INFORMATION AS WELL AS OTHER PERSONAL AND PRIVILEGED INFORMATION COLLECTED BY US OR OUR AGENTS MAY IN CERTAIN CIRCUMSTANCES BE DISCLOSED TO THIRD PARTIES WITHOUT YOUR AUTHORIZATION. CREDIT SCORING INFORMATION MAY BE USED TO HELP DETERMINE EITHER YOUR ELIGIBILITY FOR INSURANCE OR THE PREMIUM YOU WILL BE CHARGED. WE MAY USE A THIRD PARTY IN CONNECTION WITH THE DEVELOPMENT OF YOUR SCORE. YOU HAVE THE RIGHT TO REVIEW YOUR PERSONAL INFORMATION IN OUR FILES AND CAN REQUEST CORRECTION OF ANY INACCURACIES. A MORE DETAILED DESCRIPTION OF YOUR RIGHTS AND OUR PRACTICES REGARDING SUCH INFORMATION IS AVAILABLE UPON REQUEST. CONTACT YOUR AGENT OR BROKER FOR INSTRUCTIONS ON HOW TO SUBMIT A REQUEST TO US. (Not applicable in MN)
                    </p>
                </div>
                <div className="row">
                    <p className="lead text-justify">MINNESOTA RESIDENTS SHOULD SUBMIT ACORD 38 MN, TO AUTHORIZE RELEASE OF PERSONAL INFORMATION.</p>
                    <p className="lead text-justify">IMPORTANT: CREDIT SCORING CANNOT BE USED IN OREGON FOR RENEWALS UNLESS REQUESTED BY THE INSURED.</p>
                </div>
                <hr/>
                <div className="row">
                    <p className="lead text-justify">ANY PERSON WHO KNOWINGLY AND WITH INTENT TO DEFRAUD ANY INSURANCE COMPANY OR ANOTHER PERSON FILES AN APPLICATION FOR INSURANCE OR STATEMENT OF CLAIM CONTAINING ANY MATERIALLY FALSE INFORMATION, OR CONCEALS FOR THE PURPOSE OF MISLEADING INFORMATION CONCERNING ANY FACT MATERIAL THERETO, COMMITS A FRAUDULENT INSURANCE ACT, WHICH IS A CRIME AND SUBJECTS THE PERSON TO CRIMINAL AND [NY: SUBSTANTIAL] CIVIL PENALTIES. (Not applicable in CO, DC, FL, HI, KS, MA, MN, NE, OH, OK, OR, VT or WA; in LA, ME, TN and VA, insurance benefits may also be denied)</p>
                </div>
                <div className="row">
                    <p className="lead text-justify">IN THE DISTRICT OF COLUMBIA, WARNING: IT IS A CRIME TO PROVIDE FALSE OR MISLEADING INFORMATION TO AN INSURER FOR THE PURPOSE OF DEFRAUDING THE INSURER OR ANY OTHER PERSON. PENALTIES INCLUDE IMPRISONMENT AND/OR FINES. IN ADDITION, AN INSURER MAY DENY INSURANCE BENEFITS, IF FALSE INFORMATION MATERIALLY RELATED TO A CLAIM WAS PROVIDED BY THE APPLICANT.</p>
                </div>
                <div className="row">
                    <p className="lead text-justify">IN FLORIDA, ANY PERSON WHO KNOWINGLY AND WITH INTENT TO INJURE DEFRAUD, OR DECEIVE ANY INSURER FILES A STATEMENT OF CLAIM OR AN APPLICATION CONTAINING ANY FALSE, INCOMPLETE, OR MISLEADING INFORMATION IS GUILTY OF A FELONY OF THE THIRD DEGREE.</p>
                </div>
                <div className="row">
                    <p className="lead text-justify">IN KANSAS, ANY PERSON WHO, KNOWINGLY AND WITH INTENT TO DEFRAUD, PRESENTS, CAUSES TO BE PRESENTED OR PREPARES WITH KNOWLEDGE OR BELIEF THAT IT WILL BE PRESENTED TO OR BY AN INSURER, PURPORTED INSURER, BROKER OR ANY AGENT THEREOF, ANY WRITTEN STATEMENT AS PART OF, OR IN SUPPORT OF, AN APPLICATION FOR THE ISSUANCE OF, OR THE RATING OF AN INSURANCE POLICY FOR PERSONAL OR COMMERCIAL INSURANCE, OR A CLAIM FOR PAYMENT OR OTHER BENEFIT PURSUANT TO AN INSURANCE POLICY FOR COMMERCIAL OR PERSONAL INSURANCE WHICH SUCH PERSON KNOWS TO CONTAIN MATERIALLY FALSE INFORMATION CONCERNING ANY FACT MATERIAL THERETO; OR CONCEALS, FOR THE PURPOSE OF MISLEADING, INFORMATION CONCERNING ANY FACT MATERIAL THERETO COMMITS A FRAUDULENT INSURANCE ACT.</p>
                </div>
                <div className="row">
                    <p className="lead text-justify">IN MASSACHUSETTS, NEBRASKA, OREGON AND VERMONT, ANY PERSON WHO KNOWINGLY AND WITH INTENT TO DEFRAUD ANY INSURANCE COMPANY OR ANOTHER PERSON FILES AN APPLICATION FOR INSURANCE OR STATEMENT OF CLAIM CONTAINING ANY MATERIALLY FALSE INFORMATION, OR CONCEALS FOR THE PURPOSE OF MISLEADING INFORMATION CONCERNING ANY FACT MATERIAL THERETO, MAY BE COMMITTING A FRAUDULENT INSURANCE ACT, WHICH MAY BE A CRIME AND MAY SUBJECT THE PERSON TO CRIMINAL AND CIVIL PENALTIES</p>
                </div>
                <div className="row">
                    <p className="lead text-justify">IN WASHINGTON, IT IS A CRIME TO KNOWINGLY PROVIDE FALSE, INCOMPLETE OR MISLEADING INFORMATION TO AN INSURANCE COMPANY FOR THE PURPOSE OF DEFRAUDING THE COMPANY. PENALTIES INCLUDE IMPRISONMENT, FINES, AND DENIAL OF INSURANCE BENEFITS.S</p>
                </div>
                <div className="row">
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED NAME (Please Print)"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED NAME (Please Print)</label>
                    </div>
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED SIGNATURE"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED SIGNATURE</label>
                    </div>
                    <div className="col-2 text-center">
                        <input type="date" className="form-control" onChange={handleBlur} name="DATE"/>
                        <label htmlFor="">DATE</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED NAME (Please Print)"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED NAME (Please Print)</label>
                    </div>
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED SIGNATURE"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED SIGNATURE</label>
                    </div>
                    <div className="col-2 text-center">
                        <input type="date" className="form-control" onChange={handleBlur} name="DATE"/>
                        <label htmlFor="">DATE</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED NAME (Please Print)"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED NAME (Please Print)</label>
                    </div>
                    <div className="col-5 text-center">
                        <input type="text" className="form-control" onChange={handleBlur} name="APPLICANT / NAMED INSURED SIGNATURE"/>
                        <label htmlFor="">APPLICANT / NAMED INSURED SIGNATURE</label>
                    </div>
                    <div className="col-2 text-center">
                        <input type="date" className="form-control" onChange={handleBlur} name="DATE"/>
                        <label htmlFor="">DATE</label>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Submit" onClick={handleSubmit} className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Signature;