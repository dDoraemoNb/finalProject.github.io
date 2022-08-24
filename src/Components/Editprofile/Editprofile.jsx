import React, { useState, useEffect } from "react";
import './Editprofile.css';
import useToken from '../../useToken';
import axios from 'axios';
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { instance } from "../../api";

const Editprofile = (props) => {
    const { token, setToken } = useToken();
    const [profile, setProfile] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [newImage, setImage] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [oldPassword, setOldPassword] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    const getProfile = async (user = token) => {
        const response = await instance.get('/users/user', { params: { user_id: user } });
        // console.log(response.data)
        if (response.data.birthday) {
            const date = new Date(response.data.birthday)
            setStartDate(date)
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setOldPassword(response.data.password)
            setHeight(response.data.height)
            setWeight(response.data.weight)
        }
        setProfile(response.data)

    }

    function handleEdit(e) {
        e.preventDefault();
        if (!password && !confirmPassword) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Update Complete!',
                        'Your Profile has been update.',
                        'success'
                    )
                    const data = {
                        password: oldPassword,
                        firstName: first_name,
                        lastName: last_name,
                        //imgProfile:newImage,
                        height: height,
                        weight: weight,
                        birthday: startDate,
                    }
                    instance.put(`/users/user/${token}`, data)
                }
            })
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Confirm Password Invalid',
                footer: ''
              })
        } else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Update Complete!',
                        'Your Profile has been update.',
                        'success'
                    )
                    const data = {
                        password: password,
                        firstName: first_name,
                        lastName: last_name,
                        //imgProfile:newImage,
                        height: height,
                        weight: weight,
                        birthday: startDate,
                    }
                    instance.put(`/users/user/${token}`, data)
                }
            })
        }
    }

    useEffect(() => {
        getProfile();
        //handleEdit();
        // getdetail()
    }, []);

    let imgprofile = `/${profile.imgProfile}`;
    return (
        <div className="main-editprofile">
            <div className="bg">
                <div className="wrap">
                    <fieldset>
                        <form onSubmit={handleEdit}>

                            <div className="img">
                                {/* <input type="file" /> */}
                                <img src={imgprofile} width={150} />

                            </div>
                            <div className="AddEditForm">
                                <span className="photo" title="Upload your Avatar!"></span>
                                {/* <input type="file" className="btn" accept="image/png, image/gif, image/jpeg" onChange={e => setImage(e.target.value)} /> */}
                                <input name="First Name" type="text" defaultValue={profile.firstName} onChange={e => setFirstName(e.target.value)} />

                                <br />
                                <input name="Last Name" type="text" defaultValue={profile.lastName} onChange={e => setLastName(e.target.value)} />

                                {/* <br />
                                <input name="Email" type="text" defaultValue={props.profile2.email} /> */}

                                <br />
                                <div id="shape">
                                    <div className='item1'>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        {/* <input id='input1' type="number"  name="yrs" required defaultValue={profile.birthday}/> */}
                                        Birthday</div>
                                    <div className='item1'><input id='input1' type="number" name="weight" required defaultValue={profile.weight}
                                        onChange={e => setWeight(e.target.value)} />Kg</div>
                                    <div className='item1'><input id='input1' type="number" name="height" required defaultValue={profile.height}
                                        onChange={e => setHeight(e.target.value)} />Cm</div>
                                    <br />

                                </div>

                                <br />
                                <div>
                                    <input name="new_password" type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)} />

                                    <br />
                                    <input name="Confirm_password" type="password" placeholder="Confirm New Password" onChange={e => setConfirmPassword(e.target.value)} />

                                </div>

                                <br />
                                <div id="button">
                                    <button className='login' type="submit">Update</button>
                                    <button className='signup' type="reset">Cancel</button>
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