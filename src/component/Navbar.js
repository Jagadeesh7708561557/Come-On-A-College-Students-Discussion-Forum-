import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import { ExpandMore, Link } from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import '../css/Navbar.css';
import logo from '../img/comeon.JPG';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import firebase from "firebase";
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false)
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const handleQuestion = (e) => {
        e.preventDefault();
        setOpenModal(false);
    
        if (questionName) {
          db.collection("questions").add({
            user: user,
            question: input,
            imageUrl: inputUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
    
        setInput("");
        setInputUrl("");
      };
    const questionName = input;
    const GreenCheckbox = withStyles({
      root: {
        color: green[400],
        '&$checked': {
          color: green[600],
        },
      },
      checked: {},
    })((props) => <Checkbox color="default" {...props} />);
    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedC: true,
      checkedD: true,
      checkedE: true,
      checkedF: true,
      checkedG: true,
      checkedH: true
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div className = 'cHeader'>

            <div className = 'cHeader_logo'>
            <img src={logo} />  
            </div>

            <div className = 'cHeader_icons'>
                <div className = 'cHeader_icon'>
                    <HomeIcon />
                </div>
                
                <div className = 'cHeader_icon'>
                    <FeaturedPlayListOutlinedIcon />
                </div>
                
                <div className = 'cHeader_icon'>
                    <AssignmentTurnedInOutlinedIcon />
                </div>
                
                <div className = 'cHeader_icon'>
                    <PeopleAltOutlinedIcon />
                </div>
                
                <div className = 'cHeader_icon'>
                    <NotificationsOutlinedIcon />
                </div>
            </div>
                
                <div className = 'cHeader_input'>
                <SearchIcon />
                <input type = "text" placeholder = "Find Out" />   
                </div>
                
                <div className = 'cHeader_rem'>
                    <div className = 'cHeader_avatar'>
                    <Tooltip title="Signout" aria-label="add">
                        <Avatar onClick ={() => auth.signOut()} src = {user.photo}/>
                      </Tooltip>  
                    </div>
                    <LanguageIcon />
                    <Button onClick = {() => setOpenModal(true)}>Add Question</Button>
                    
                    <Modal  isOpen = {openModal}
                            onRequestClose = {() => setOpenModal(false)}
                            shouldCloseOnOverlayClick={false}
                            style = {{
                                overlay: {
                                    width: 700,
                                    height: 600,
                                    backgroundColor: "rgba(0,0,0,0.8)",
                                    zIndex: "1000",
                                    top: "50%",
                                    left: "50%",
                                    marginTop: "-300px",
                                    marginLeft: "-350px",
                                  },
                            }}>
                        <div className="modal__title">
                                <h5>Add Question</h5>
                                <h5>Share Link</h5>
                        </div>
          
                <div className="modal__info">
                        <Avatar onClick ={() => auth.signOut()} src = {user.photo}/>
                        <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
                    <div className="modal__scope">
                                <PeopleAltOutlinedIcon />
                                <p>Public</p>
                                <ExpandMore />
                    </div>
                </div>
          
                <div className="modal__Field">
                            <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                            />
                <div className="modal__fieldLink">
                            <Link />
                            <input
                                value={inputUrl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                type="text"
                                placeholder="Optional: inclue a link that gives context"
                            ></input>
            </div>
          </div>
      <div>
      <FormGroup row>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} name="checkedA" />}
        label="Where's the Book?"
      />

      <FormControlLabel
        control={<Checkbox  onChange={handleChange} name="checkedF" />}
        label="For Applicants"
      />
      
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Yumm Foods" />
      
      <FormControlLabel
        control={<Checkbox  onChange={handleChange} name="checkedG" />}
        label="Transporatation"
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="QuestionBank" />
      
      <FormControlLabel control={<Checkbox name="checkedH" />} label="Business Incubator" />

      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name="checkedE"
            indeterminate
          />
        }
        label="Others"
      />
          </FormGroup>
          </div>
          
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setOpenModal(false)}>
              Cancel
            </button>
            <button onClick={handleQuestion} type="sumbit" className="add">
              Add Question
            </button>
          </div>
                
                    </Modal>
            </div>
        </div>
    );
}

export default Navbar;