import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const AdminPage = () => {
    const handleDeleteEvent = async (eventId) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/event/delete/${eventId}`);
            
            if (response.data.success) {
                toast.success('Event deleted successfully');
                // Update your events list here
                setEvents(events.filter(event => event._id !== eventId));
            } else {
                toast.error('Failed to delete event');
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            toast.error(error.response?.data?.message || 'Failed to delete event');
        }
    };

    return(
        <div className="flex flex-col">
            <Header/>
            {/* <Events/> */}
            This is admin page
            <Footer/>
        </div>
    
    )
}

export default AdminPage;