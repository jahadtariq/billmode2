import { Link } from "react-router-dom";

const MeetingButton = () => {
  return (
    <Link to="/contact" className="fixed z-50 bottom-3 right-6 lg:right-10 w-[100px] md:w-[150px] md:h-[170px] cursor-pointer bg-transparent hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightGreen from-0% to-transparent to-50% smooth-hover">
        <img src="meetingbutton.svg"/>
    </Link>
  )
}

export default MeetingButton;