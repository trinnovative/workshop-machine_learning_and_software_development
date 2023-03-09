# Welcome :) Let's get started!

### This project consists of three major tasks:
1) **Analysis**: Analyze data and create a machine learning model.
2) **Backend**: Embed the machine learning model into a RESTful service.
3) **Frontend**: Design a graphical user interface to interact with the machine learning service.

The git branches of this project represent different stages of the project depending on your skill level. If you feel comfortable, you can start with the *blank* level of each section. The *blank* level contains task descriptions and some hints on how to do so. If you need some more guidance, the *guide* level is recommended. The parent branch contains the solution - here you can look up difficult tasks or compare your own solution.

![](./images/git_branches.PNG)

### Choose your starting point: 
- If you want to start with developing a machine learning model, then switch to branch analysis_guide and find tasks there. If you need some guidance, switch to branch analysis_guide and follow the step-by-step guide. In branch analysis you can find the final solution. 
- If you want to skip the machine learning part, you can also directly jump into the backend or the frontend part. **Depending on your skill level, choose either the *blank* or the *guide* starting point**.


### How to get there:
- Show all branches with <code>git branch -a</code>.
- Switch between branches with the checkout command from git. For example: <code>git checkout analysis_guide</code>.


# Frontend
Let's create an appealing user interface! The user should be able to enter feature values and to get the prediction of the machine learning model displayed.
## Preparation
At first, some prep:
- Download nodejs https://nodejs.org/en/download/.
- Open project workspace and navigate to parent directory (where folder 'backend' resides).
- Setup frontend template by executing this command in the terminal: <code>npm create vite@latest frontend -- --template react </code>
- Switch into new direcotry *frontend*: <code>cd frontend</code>
- Install dependencies: <code>npm install</code>
- Run frontend: <code>npm run dev</code>
- Open link http://localhost:5173/ in your browser.
- See the default webpage.
- Use this template to build your own webpage. 

## Step-by-step guide

### #1 Create elements 
Have a look at file *App.jsx*. Adjust the **html** code.
- Replace the headline.
- Replace the two logos with an image about California.
- Add some input fields. 
- Adjust the button.

### #2 Make it look good
You can adjust styling of your html elements with **css** code. Therefore, open file *App.css*. You can set tags on html elements with <code>className="your-tag"</code> and define corresponding styling in the css file. 

### #3 Make it work
Finally, we want to connect frontend with backend. When the user enters values and presses the button, a request should be sent to the backend and the prediction result should be displayed. Therefore, we need to adjust html code and add some javascript. In file *App.jsx*:

- Add tag *type="submit"* to button. 
- Put input fields and button into a *form* element: <code> < form onSubmit={handleFormSubmit}> ... < /form> </code> element.
- Implement function **handleFormSubmit** which is executed when pressing the button. The function gets the data entered in the input fields, sends a request to the backend and stores the result in variable responseMessage. Use *axios* library for sending a REST request. Therefore install axios with npm: <code>npm install axios</code>. Complete the code below:
  ````  
  function App() {
    const [responseMessage, setResponseMessage] = useState('');

    function handleFormSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {
        MedInc: formData.get('MedInc'),
        // TODO Add further features here

      };
      const body = JSON.stringify(data);
      // TODO Add REST request here
      

        .then(response => {
          setResponseMessage(`${JSON.stringify(response.data)} $`);
        })
        .catch(error => {
          setResponseMessage(`Error: ${error.message}`);
        });
    }
  ````

- Add a section to the html code, which shows the **prediction result**. You can retrieve variable values by putting them into curly brackets: <code>{responseMessage}</code>.
<br>
- **Test** your implementation. Do not forget to run backend on your localhost before, otherwise the service would not be reachable (run backend/main.py). 

### Example
If you lack creativity, here's an example how the result may look like:
![example](./images/frontend_example.PNG)