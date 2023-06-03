import { PersonalForm } from "../../components/Personal";
import { ListPostForm } from "../../components/ListPost";
import { PostSubmissionForm } from "../../components/PostSubmission";
import './style.css'
const ProfilePage = () => {
    return (
        <div className="profile-page-container">
            <div className="container">
                <PersonalForm />
                <PostSubmissionForm />
                <ListPostForm />
            </div>
        </div>
    );
};

export default ProfilePage;
