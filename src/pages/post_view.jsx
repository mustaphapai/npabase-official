import '../styles/general.css';
import { UserCircle } from 'lucide-react';

const ViewPost = () => {


const Reaction = ({ emoji, count }) => {
    return (
        <div className='reaction'>
            <span role="img" aria-label={emoji}>{emoji}</span>
            <span>{count}</span>
        </div>
    );
}


const ReactionList = () => {
    return (
        <div className='reaction-list'>
            <Reaction emoji="👍" count={120} />
            <Reaction emoji="❤️" count={45} />
            <Reaction emoji="😂" count={30} />
            <Reaction emoji="😮" count={15} />
        </div>
    );
}

const CommentCard = ({ username, comment }) => {
    return (
        <div className='comment-card'>
            <div className='comment-header'>
                <UserCircle size={20} />
                <span>{username}</span>
            </div>
            <p>{comment}</p>
        </div>
    );  
}



const CommentList = () => {
    const comments = [
        { username: 'user1', comment: 'This is very helpful, thanks!' },
        { username: 'user2', comment: 'Great information, I appreciate it.' },
        { username: 'user3', comment: 'Looking forward to the next steps!' },
        { username: 'user4', comment: 'Can you provide more details on the physical test?' },]
    return (
        <div className='comment-list'>

            <div className='comment-section'>
                <h4>Comments</h4>
                <p>Join the discussion and share your thoughts!</p>
                <textarea type="text" placeholder="Add a comment..." className='comment-input' />
                <button className='comment-button'>Post Comment</button>
            </div>
            {comments.map((c, index) => (
                <CommentCard key={index} username={c.username} comment={c.comment} />
            ))}
        </div>
    );
}

    return (<div>
         
        <div className='view-post'>
              <h3 className='logo'>Npabase.</h3>
              <br/>
<h1>Admission Step 1 dont get scammed.</h1>
<div className='post-info'><p>20 june 2025.</p><div>Admin <UserCircle size={23}/></div></div>
<img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Post Image" />
<ReactionList />
<p>Here's a comprehensive overview of **POLAC (Police Academy, Lagos) admissions** in Nigeria:

---

### **POLAC Admission Requirements (2024/2025)**
To qualify for the Nigeria Police Academy (POLAC), candidates must meet these criteria:

1. **Nationality**  
   - Must be a Nigerian citizen by birth.

2. **Age Limit**  
   - Between **17–22 years** (for SSCE holders).  
   - **Up to 26 years** for university graduates or ND/NCE holders.

3. **Educational Qualifications**  
   - **SSCE/WASSCE/GCE**: Minimum of **5 credits** (including English, Math, and 3 other subjects) in **not more than 2 sittings**.  
   - **Degree/ND/NCE holders**: Must provide certificates.  

4. **Physical & Medical Fitness**  
   - **Height**: Minimum **1.67m (male)** or **1.62m (female)**.  
   - **Chest Measurement**: **0.87m (expanded)** for males.  
   - Must pass medical/psychological tests.

5. **Character**  
   - No criminal record; must be of good conduct.

---

### **POLAC Admission Process (5 Stages)**  
1. **Online Application**  
   - Via [POLAC portal](https://www.polac.edu.ng) (₦3,500 fee).  
   - Submit credentials (WAEC/NECO, birth certificate, etc.).  

2. **Entrance Exam**  
   - Computer-Based Test (CBT) covering:  
     - **English**  
     - **Math**  
     - **Current Affairs**  
     - **General Knowledge**  

3. **Physical Screening**  
   - Verification of documents.  
   - Physical/medical tests (height, vision, fitness).  

4. **Interview**  
   - Oral interview with a panel (assesses confidence, communication, and awareness).  

5. **Final Selection & Training**  
   - Successful candidates undergo **5 years of training** (academic + paramilitary).  

---

### **Key Tips for Success**  
✅ **Exam Prep**: Focus on past questions (English/Math dominate 60% of the test).  
✅ **Physical Prep**: Regular exercise to meet fitness standards.  
✅ **Interview Prep**: Practice common questions (e.g., "Why do you want to join the police?").  
✅ **Documents**: Organize original certificates and photocopies.  

---

### **POLAC Training Program**  
- **Duration**: 5 years (combines degree + police training).  
- **Degree Awarded**: B.Sc. in **Police Science**.  
- **Curriculum**: Includes law, forensic science, weapons handling, and fieldwork.  

---

### **Important Notes**  
⚠️ **No shortcuts**: Beware of scams promising admission.  
⚠️ **Updates**: Check [@PoliceNG](https://twitter.com/PoliceNG) for announcements.  

Need study materials or mock tests? **[Explore Npabase Resources](#)** 📚  

Would you like details on **specific states' recruitment quotas** or **how to prepare for the physical test**? Let me know! 👮♂️</p>
<CommentList/>
    </div></div>);
}

export default ViewPost;