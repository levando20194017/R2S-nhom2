import { PersonalForm } from "../../components/Personal";
import { PostForm } from "../../components/Post";
import './style.css'
const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <div className="container">
                <PersonalForm />
                <PostForm />
            </div>
        </div>
    );
};

export default ProfilePage;
