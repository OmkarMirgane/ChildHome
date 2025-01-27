import axios from 'axios'
import { createUrl } from '../Components/util/util'

export async function register(
    material,
    fname,
    lname,
    Gender,
    Nationality,
    Age,
    Dob,
    Occupation,
    Adhar,
    Mobile,
    Email,
    Income,
    Houseno,
    Street,
    District,
    City,
    State,
    Pincode,
    Partnerfname,
    Partnerlname,
    Partnergender,
    Partnerdob,
    Partneradhar_no,
    Partnermobile,
    Partneremail,
    Partnerincome,
    Partneroccupation,
    Partnerage,
    Partnernationality) {
    //const url = createUrl('applicant/addApplicant')
    const url = 'http://localhost:8000/applicant/addApplicant'
    if (material == 'Married') {
        try {
            const body = {
                material,
                fname,
                lname,
                Gender,
                Nationality,
                Age,
                Dob,
                Occupation,
                Adhar,
                Mobile,
                Email,
                Income,
                Houseno,
                Street,
                District,
                City,
                State,
                Pincode,
                Partnerfname,
                Partnerlname,
                Partnergender,
                Partnerdob,
                Partneradhar_no,
                Partnermobile,
                Partneremail,
                Partnerincome,
                Partneroccupation,
                Partnerage,
                Partnernationality
            }

            const response = await axios.post(url, body)
            return response.data
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Registration failed' };
        }
    } else {
        try {
            const body = {
                material,
                fname,
                lname,
                Gender,
                Nationality,
                Age,
                Dob,
                Occupation,
                Adhar,
                Mobile,
                Email,
                Income,
                Houseno,
                Street,
                District,
                City,
                State,
                Pincode,
            }
            const response = await axios.post(url, body)
            return response.data

        } catch (error) {
            console.error(error);
            return { success: false, message: 'Registration failed' };
        }


    }




}