import React from "react";
import './Editprofile.css';

const Editprofile = (props) => {
    return (
        <div className="main-editprofile">
            <div className="bg">
                <div className="wrap">
                    <fieldset>
                        <form>
                            {/* <div className="Title">
                                <h1><strong>Profile Image Upload</strong></h1>
                            </div> */}

                            <div className="container-profilepic">
                                <div className="img">
                                    {/* <input type="file" /> */}
                                    <img src="public/profile.png" width={150} />
                                </div>
                            </div>
                            <br />
                            <div className="Title">
                                <h1><strong>Profile Image Upload</strong></h1>
                            </div>


                            <div className="AddEditForm">

                                <span className="photo" title="Upload your Avatar!"></span>
                                <input type="file" className="btn" />
                                <input name="First Name" type="text" defaultValue={props.profile2.name} />

                                <br />
                                <input name="Last Name" type="text" defaultValue={props.profile2.lastname} />

                                {/* <br />
                                <input name="Email" type="text" defaultValue={props.profile2.email} /> */}

                                <br />

                                <div id="shape">
                                    <div className='item1'><input id='input1' type="number" defaultValue={props.profile2.yrs} name="yrs" required />Yrs</div>
                                    <div className='item1'><input id='input1' type="number" defaultValue={props.profile2.weight} name="weight" required />Kg</div>
                                    <div className='item1'><input id='input1' type="number" defaultValue={props.profile2.height} name="height" required />Cm</div>
                                    <br />

                                </div>

                                <br />
                                <div>
                                    <input name="New Password" type="password" placeholder="New Password" />

                                    <br />
                                    <input name="Confirm New Password" type="password" placeholder="Confirm New Password" />

                                </div>

                                <br />
                                <div id="button">
                                    <a href='/' ><button className='login1' type="submit" >Save Changes</button></a>
                                    <a href='/' ><button className='signup1' type="submit" >Cancel</button></a>
                                </div>

                            </div>


                        </form>
                    </fieldset>
                </div>

            </div>

        </div>
    )
}

export default Editprofile;