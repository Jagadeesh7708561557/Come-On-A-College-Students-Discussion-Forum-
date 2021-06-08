import React, {useState, useStyles} from 'react'
import logo from '../img/book.png';
//import logo1 from '../img/faculty.jpg';
import logo2 from '../img/food.PNG';
import logo3 from '../img/payments.jpg';
import logo4 from '../img/transport.PNG';
import logo5 from '../img/applicant.PNG';
import logo6 from '../img/feedback.PNG';
import logo7 from '../img/question.PNG';
import { Add } from "@material-ui/icons";
import '../css/SidebarOptions.css';
import Modal from './SidebarOptionsModal.js';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



function SidebarOptions(){
	const [openModal, setOpenModal] = useState(false);
	const [openModalOne, setOpenModalOne] = useState(false);
	const [openModalTwo, setOpenModalTwo] = useState(false);
	const [openModalThree, setOpenModalThree] = useState(false);
	const [openModalFour, setOpenModalFour] = useState(false);
	const [openModalFive, setOpenModalFive] = useState(false);
  const [openModalSix, setOpenModalSix] = useState(false);

  
  const classes = useState();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));
	
	const BUTTON_WRAPPER_STYLES = {
		position: 'realtive',
		zIndex: 1,
		color: 'black'
	}

  const modal_Info = {
    color: 'black',
    fontWeight: 400,
    fontSize: 16, 
	}
  const modal_Field = {
    color: 'black',
    lineHeight:1.5,
    fontWeight: 400,
    fontSize: 17,
	}
	return (
		<div className = "sidebaroptions">

		
		<div className = "sidebaroption" style={BUTTON_WRAPPER_STYLES}>
			<img src={logo} />
			<button onClick = {() => setOpenModal(true)} >Where is the BOOK</button>
		
		<Modal isOpen = {openModal}>
            <div className="modal__title">
            <p>HELP YOU TO FIND BOOKS</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>Enough by seeing your ebooks</p>
            </div>
            <div className="modal__Field" style={modal_Field}>
  				<p>
          Being a VIT student is not that much easy, In every courses there is difficulties to find related Books
            for your respective courses and topics. But don't worry My dear Students! this module enhanced you to ask which
            book related to your topics and where to get all these books it can be in library, book stores etc.
          </p> 
          </div>
          <br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
        </Modal>
		</div>


		<div className = "sidebaroption" style={BUTTON_WRAPPER_STYLES}>
			<img src={logo5} />
			<button onClick = {() => setOpenModalOne(true)} >Applicants for YoU</button>
		<Modal isOpen = {openModalOne}>  
            <div className="modal__title">
            <p>HEY Future VITIANS</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>Get some basic ideas of our college regulations</p>
            </div>
            <div className="modal__Field" style={modal_Field}>
  				<p>If you have completed your intermediate and planning to join in VIT but not having any idea about the college 
            regulation don't worry guys! In this section you can ask in question to our college students as well as the staff about: 
          </p>
          <ul>
            <li>Things to know before joining the college</li>
            <li>Any new couses or update in the College</li>
            <li>College Culture</li>
            <li>Student Environment</li>
            <li>Infrastructure and so..</li>
          </ul>
          </div>

          <br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalOne(false)}>
              Cancel
            </Button>      
        </Modal>
		</div>	


		<div className = "sidebaroption" style={BUTTON_WRAPPER_STYLES}>
			<img src={logo2} />
			<button onClick = {() => setOpenModalTwo(true)} >FOOD 😋🍽</button>
		<Modal isOpen = {openModalTwo}>
            <div className="modal__title">
            <p>ALL WE NEED IS FOOD RIGHT!</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>Get Delicious Foods near VIT</p>
            </div>
            <div className="modal__Field" style={modal_Field}>
  				<p>Mostly college students don't carry their lunch boxes will we did in school days but there are more choices of hotels,
            Restaurants, Dabha and also veichle vendor's food shops. Students also wants to give party or treat to their friends on their 
            birthday. Thus in this sectin you can ask your doubts or gain knowledge by asking our app other users about the best hotels 
            menus, budget for your treat and so on..
          </p>
          </div>

          <br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalTwo(false)}>
              Cancel
            </Button> 
        </Modal>
		</div>


		<div className = "sidebaroption" style={BUTTON_WRAPPER_STYLES}>
			<img src={logo4} />
			<button onClick = {() => setOpenModalThree(true)}>Transport Facilities</button>
		<Modal isOpen = {openModalThree}>
            <div className="modal__title">
            <p>TRANSPORT QUERRIES</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>On time to the Class will Help Us to get ATTENDANCE!</p>
            </div>
            <div className="modal__Field" style={modal_Field}>
  				<p>In this college each and every department has studnets of different Countries, States and Districts
          so most of them prefer for hostel but what about the local students still some of the has no idea about local
          private/public transports infact most of them wasting money as they have less knoweldge about bus timings.
          In other hand, students also prefer to go by the college transport as they want to fell comfort while travelling.
          So, this section is all about asking question regarding college transport Facilities.</p>
          </div>
<br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalThree(false)}>
              Cancel
            </Button>         
          </Modal>
		</div>


		<div className = "sidebaroption">
			<img src={logo7} />
    <button onClick = {() => setOpenModalFive(true)}>Question Bank Point</button>
		<Modal isOpen = {openModalFive}>
            <div className="modal__title">
            <p>Make Exams Cool</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>Collect Questions Before the Exams</p>
            </div>
            <div className="modal__Field" style={modal_Field}>
  				<p>Exams are always a headache to a student beacuse they have no idea about what type of
          questions in each module can be asked. In this section you can be attempting to whatever exams ask an overiew or called
          as sample questions by mentioning your course title and get it, start prepare for your exams.</p>
          </div>
          <br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalFive(false)}>
              Cancel
            </Button>
          </Modal>
		</div>


		<div className = "sidebaroption">
			<img src={logo3} />
      
      <button onClick = {() => setOpenModalFour(true)}>Business Incubator</button>
		  <Modal isOpen = {openModalFour}>
            <div className="modal__title">
            <p>VIT Business Incubator</p>
            </div>
            <div className="modal__info" style={modal_Info}>
               <p>Funding for Your Start-ups</p>
            </div>
            <div className="modal__Field" style={modal_Info}>
  				  <p>VIT Technology Business Incubator (VIT-TBI) is a joint initiative between VIT Vellore and Department of Science & Technology, Govt. of India. VIT-TBI provides
              incubation support to start-up ventures.
              The objective of this programme is to: 
          </p>
          <ul>
            <li>Expose the participants to the key steps in startup enturing process and equip them with adequate knowledge to initiate a venture in Food Processing
            and Agro-based technologies and/or services.</li>
            <li>Equip them with requisite skills, knowledge and competencies to convert their startup idea into a viable business entity.</li>
            <li>Select qualifying individuals with bankable project reports and provide an opportunity to present the same for incubation support or appropriate
            funding support</li>
            <li>So, You can ask regarding how to initiate the process to ask fund from this Business Incubator experienced fellow will
            surely asnwer to you!</li>
            
          </ul>
          </div>
          <div className="link">
            <a>https://www.crunchbase.com/organization/vit-technology-business-incubator</a>
          </div>
          <br/>
          <div className="footer">
            <h3>KNDLY SEND YOUR FEEDBACKS!!! PEACE!!! 🥰</h3>
          </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalFour(false)}>
              Cancel
            </Button>
          </Modal>
		</div>



		<div className = "sidebaroption">
			<img src={logo6} />
      <button onClick = {() => setOpenModalSix(true)}>Feedback</button>
      <Modal isOpen = {openModalSix}>
            <div className="modal__title">
            <p>FEEDBACK</p>
            </div>
            <div className="modal__info">
               <p>Kindly Share your User Experience by Using our Service</p>
            </div>
            <div className="modal__Field">
  				<p>From:</p>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Email Address"
            type="email"
            fullWidth
          />
          <br/>

          <p>To:</p>
          <TextField disabled color="primary"
                     margin="dense" 
                     id="standard-disabled" 
                     defaultValue="jagadeeshhimayan@gmail.com" 
                     fullWidth/>
            <br/>

          <p>Comments:</p>
<TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Your Thoughts" />
          </div>
<br/>

<div className={classes.root}>
        <Fab
          aria-label="save"
          color="primary"
          className={buttonClassname}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>


        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}>
          SEND
        </Button>
        {loading && <CircularProgress size={20} className={classes.buttonProgress} />}

    </div>
<br/>
            <Button  
                  variant="contained"
                  className="cancle" 
                  onClick={() => setOpenModalSix(false)}>
              Cancel
            </Button>
 
          </Modal>
		</div>

		

    <div className="sidebaroption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>

		</div>
		);
}

export default SidebarOptions;