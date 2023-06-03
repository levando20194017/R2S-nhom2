import { PersonalForm } from "../../components/Personal";
import './style.css'
const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <div className="container">
                <PersonalForm />
            </div>
        </div>
    );
};

export default ProfilePage;
