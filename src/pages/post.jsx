import { CameraIcon, ImagePlusIcon } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="create-post">
          <h3 className='logo'>Npabase.</h3>
        <h1>Create New Post</h1>
        
            <div className="form-group">
                <div className="file-upload">
                    <ImagePlusIcon size={40} color="white" />
                    
                </div>
            <input type="text" name="title" placeholder="Title" required />
              <select class="polac-select" onchange="handleSelection(this)">
        <option value="" selected disabled>Select a category</option>
        <option value="education">Education</option>
        <option value="admission">Admission</option>
        <option value="qa">Q&A</option>
        <option value="general">General</option>
    </select>
        
            <textarea name="content" placeholder="Share your thoughts" required></textarea>
            <button type="submit">Submit</button>
            </div>
            
      
    </div>);
}
export default CreatePost;