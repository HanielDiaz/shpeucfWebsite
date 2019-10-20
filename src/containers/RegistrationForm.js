import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import firebase from 'firebase'
import '../style/main.css'
import { Header } from '../components/header'
// import Login from '../components/login'
// import { connect } from 'react-redux'
import { createUser } from '../modules/User'


export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            gender:'',
            continent:'',
            country:'',
            college:'',
            major:'',
            birthday: '',
            quote: '',
            picture: '',
            points: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentWillMount() {
        
    }

    handleChange(event) {
        let em = event.target.email;
        let pw = event.target.password;
        let fn = event.target.first_name;
        let ln = event.target.last_name;
        let ge = event.target.gender;
        let cn = event.target.continent;
        let co = event.target.country;
        let cl = event.target.college;
        let ma = event.target.major;
        let bd = event.target.birthday;
        this.setState({fn, ln, em, pw, ge, cn, co, cl, ma, bd});
    }

    handleSubmit(event) {
        
        let em = this.state.email;
        let pw = this.state.password;
        let fn = this.state.first_name;
        let ln = this.state.last_name;
        let ge = this.state.gender;
        let cn = this.state.continent;
        let co = this.state.country;
        let cl = this.state.college;
        let ma = this.state.major;
        let bd = this.state.birthday;
        let po = this.state.picture;
        let pc = this.state.points;
        let qu = this.state.quote
        console.log(em, pw, fn, ln, ge, cn, co, cl, ma, bd)
        
        if (em === null || em === undefined){
            alert("put in your knights email");
        } else if (pw === null || pw === undefined){
            alert("put in a password");
        } else if (fn === null || fn === undefined){
            alert("put in your first name");
        } else if (ln === null || ln === undefined){
            alert("put in your last name");
        } else if (ge === null || ge === undefined){
            alert("put in your gender");
        } else if (cn === null || cn === undefined){
            alert("put in your continent");
        } else if (co === null || co === undefined){
            alert("put in your country");
        } else if (cl === null || cl === undefined){
            alert("put in your college");
        } else if (ma === null || ma === undefined){
            alert("put in your major");
        } else if (bd === null || bd === undefined){
            alert("put in your birthday");
        } else{
            createUser({fn, ln, em, cl, ma, po, pc, pw, qu, cn, co, ge, bd});
        }
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <h2>Sign In</h2>
                    <label>
                        First Name:
                        <input type="text" value={this.state.first_name} placeholder="Enter Your First Name" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Last Name:
                        <input type="text" value={this.state.last_name} placeholder="Enter Your Last Name" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="email" value={this.state.email} placeholder="Enter Your Knights Email" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} placeholder="Enter Your Password" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Gender:
                        <select value={this.state.gender} onChange={this.handleChange}>
                            <option>select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Continent:
                        <select value={this.state.continent} onChange={this.handleChange}>
                            <option>select</option>
                            <option value="Africa">Africa</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="North America">North America</option>
                            <option value="Oceania">Oceania</option>
                            <option value="South America">South America</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Country:
                        <select value={this.state.country} onChange={this.handleChange}>
                            <option>select</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Benin">Benin</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovinia">Bosnia and Herzegovinia</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="England">England</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji Islands">Fiji Islands</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guinea">French Guinea</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gilbratar">Gilbratar</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and McDonald Island">Heard Island and McDonald Island</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Ivory Coast">Ivory Coast</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Krygyzstan">Krygyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Federated States of Micronesia">Federated States of Micronesia</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="North Korea">North Korea</option>
                            <option value="Northern Ireland">Northern Ireland</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and the Grenadines">Saint Vincent and Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Scotland">Scotland</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option value="South Korea">South Korea</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="SriLanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Tajikstan">Tajikstan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="The Democratic Republic of Congo">The Democratic Republic of Congo</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands">Virgin Islands</option>
                            <option value="Wales">Wales</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Yugoslavia">Yugoslavia</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        College:
                        <select value={this.state.college} onChange={this.handleChange}>
                            <option>select</option>
                            <option value="College of Arts and Humanities">College of Arts and Humanities</option>
                            <option value="College of Business Administration">College of Business Administration</option>
                            <option value="College of Education and Human Performance">College of Education and Human Performance</option>
                            <option value="College of Engineering and Computer Science">College of Engineering and Computer Science</option>
                            <option value="College of Health and Public Affairs">College of Health and Public Affairs</option>
                            <option value="Rosen College of Hospitality Management">Rosen College of Hospitality Management</option>
                            <option value="College of Medicine">College of Medicine</option>
                            <option value="College of Nursing">College of Nursing</option>
                            <option value="College of Optics and Photonics">College of Optics and Photonics</option>
                            <option value="College of Sciences">College of Sciences</option>
                            <option value="Undergraduate Studies">Undergraduate Studies</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Major:
                        <select value={this.state.college} onChange={this.handleChange}>
                            <option>select</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Actuarial Science">Actuarial Science</option>
                            <option value="Advertising">Advertising</option>
                            <option value="Aerospace Engineering">Aerospace Engineering</option>
                            <option value="Anthropology">Anthropology</option>
                            <option value="Applied Sciences">Applied Sciences</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Art">Art</option>
                            <option value="Athletic Training">Athletic Training</option>
                            <option value="Biology">Biology</option>
                            <option value="Biomedical Sciences">Biomedical Sciences</option>
                            <option value="Biotechnology">Biotechnology</option>
                            <option value="Business Economics">Business Economics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Civil Engineering">Civil Engineering</option>
                            <option value="Communication and Conflict">Communication and Conflict</option>
                            <option value="Communication Sciences and Disorders">Communication Sciences and Disorders</option>
                            <option value="Computer Engineering">Computer Engineering</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Construction Engineering">Construction Engineering</option>
                            <option value="Criminal Justice">Criminal Justice</option>
                            <option value="Digital Media">Digital Media</option>
                            <option value="Early Childhood Development and Education">Music</option>
                            <option value="Economics">Economics</option>
                            <option value="Electrical Engineering">Electrical Engineering</option>
                            <option value="Elementary Education">Elementary Education</option>
                            <option value="English">English</option>
                            <option value="Entertainment Management">Entertainment Management</option>
                            <option value="Environmental Engineering">Environmental Engineering</option>
                            <option value="Environmental Studies">Environmental Studies</option>
                            <option value="Exceptional Student Education">Exceptional Student Education</option>
                            <option value="Film">Film</option>
                            <option value="Finance">Finance</option>
                            <option value="Forensic Science">Forensic Science</option>
                            <option value="French">French</option>
                            <option value="Health Informatics and Information Management">Health Informatics and Information Management</option>
                            <option value="Health Sciences">Health Sciences</option>
                            <option value="Health Services Administration">Health Services Administration</option>
                            <option value="History">History</option>
                            <option value="Hospitality Management">Hospitality Management</option>
                            <option value="Human Communication">Human Communication</option>
                            <option value="Humanities and Cultural Studies">Humanities and Cultural Studies</option>
                            <option value="Industrial Engineering">Industrial Engineering</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Integrated Business">Integrated Business</option>
                            <option value="Interdisciplinary Studies">Interdisciplinary Studies</option>
                            <option value="International and Global Studies">International and Global Studies</option>
                            <option value="Journalism">Journalism</option>
                            <option value="Latin American Studies">Latin American Studies</option>
                            <option value="Legal Studies">Legal Studies</option>
                            <option value="Management">Management</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                            <option value="Medical Laboratory Sciences">Medical Laboratory Sciences</option>
                            <option value="Music">Music</option>
                            <option value="Music Education">Music Education</option>
                            <option value="Nonprofit Management">Nonprofit Management</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Philosophy">Philosophy</option>
                            <option value="Photonic Science and Engineering">Photonic Science and Engineering</option>
                            <option value="Physics">Physics</option>
                            <option value="Political Science">Political Science</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Public Administration">Public Administration</option>
                            <option value="Radio">Radio</option>
                            <option value="Real Estate">Real Estate</option>
                            <option value="Religion and Cultural Studies">Religion and Cultural Studies</option>
                            <option value="Restaurant and Foodservice Management">Restaurant and Foodservice Management</option>
                            <option value="Secondary Education">Secondary Education</option>
                            <option value="Social Sciences">Social Sciences</option>
                            <option value="Social Work">Social Work</option>
                            <option value="Sociology">Sociology</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Sport and Exercise Science">Sport and Exercise Science</option>
                            <option value="Statistics">Statistics</option>
                            <option value="Teacher Education">Teacher Education</option>
                            <option value="Technical Education and Industry Training">Technical Education and Industry Training</option>
                            <option value="Theatre">Theatre</option>
                            <option value="Theatre Studies">Theatre Studies</option>
                            <option value="Writing and Rhetoric">Writing and Rhetoric</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Birth date:
                        <input type="date" value={this.state.birthday} placeholder="" onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}