this is an attempt at making an online judge for iit gandhinagar's flagship hackathon "hackrush"

tech stack:<br>
frontend: reactjs <br> 
backend: node <br>
database: mongodb <br>

doubts page: 
- ~post schema (post_id (primary_key), user_id, post_time)~
- comment schema (comment_id (primary_key), user_id, post_id) 
- ~will display all the posts sorted by time (earlier first)~
- when clicked on "show comments" for a post, all the comments with post_id of that post should be shown 

history page:
- submission schema (submission_id, user_id, code, score, submission_time)
- for a particular user, list down all the submissions 

todo: 
- ~print the shell output on the main frontend screen beside the code editor~
- make this beautiful
- make the problem statement(ability to add a problem statement as a markdown file) and doubts pages (have people ask doubt and people can comment here)
