# Welcome :) Let's get started!

### This project consists of three major tasks:
1) **Analysis**: Analyse data and create a machine learning model.
2) **Backend**: Embed the machine learning model into a RESTful service.
3) **Frontend**: Design a graphical user interface to interact with the machine learning service.

The git branches of this project represent different stages of the project depending on your skills level. 

### Choose your starting point: 
- If you want to start with developing a machine learning model, then switch to branch analysis_blank. If you need some more guidance, switch to branch analysis_guide. In branch analysis you can find the final solution. 
- If you want to skip the machine learning part, you can also directly jump into the backend or the frontend part. **Depending on your skills level, choose either the *_blank* or the *_guide* starting point**.
![](./images/git_branches.PNG)

### How to get there:
You can easily switch between branches with the checkout command from git. For example: <code>git checkout analysis_guide</code>.

# Analysis
## Preparation
1) Go to the Python website (https://www.python.org/downloads/) and **download** the latest version of **Python** for your operating system. Follow the installation instructions to install Python on your machine.
2) Open a command prompt or terminal window on your machine and install required **packages**: <code>pip install pandas matplotlib seaborn scikit-learn joblib</code>.
3) In order to work with **Jupyter Notebooks** (.ipynb-files), it may be necessary to download the appropriate **extension** in VSCode.
4) Let's start! Open file *analysis.ipynb* and follow the **step-by-step guide** there.

## Tips and tricks
- You can easily run jupyter cells with shortcut STRG + ENTER.

# Backend

## Preparation 
- During the process it may be necessary to install some packages:  
    - pip install pydantic
    - pip install uvicorn
    - pip install fastapi
- Run [analysis.ipynb](./backend/analysis/analysis.ipynb) with button *Run All*. This will create the machine learning model file *model.joblib* in folder [artifacts](./backend/artifacts/). 
- If you developed your own machine learning model in the *analysis* level before, you can adjust the final model to your own favorites before exporting it (see last cell in jupyter notebook [analysis.ipynb](./backend/analysis/analysis.ipynb)).


## Step-by-step guide
The aim of this backend is to put the machine learning model into a RESTful service, which enables to call the prediction model in an easy and standardized way.

1) **Think before coding.** What are necessary building blocks? How would you structure the project? Think about a possible approach.

2) **Let's start.** First of all, let's try to bring the model from *model.joblib* to life. Put it into a class which can be used to make predictions. Continue implementation in [prediction_model.py](./backend/src/prediction_model.py).
3) The prediction model should be approachable via a REST call. Therefore, implement a REST endpoint. Continue implementation in [main.py](./backend/src/main.py).
4) You may noticed, that requestors post some data, which serves as input for the prediction model. Define an appropriate datatype. Continue implementation in [data_types.py](./backend/src/data_types.py).

5) **Let's see if it works!** If you think you are ready, run [main.py](/backend/src/main.py). Open a tool like postman and send a request to *localhost:80*. Do you get a response?

    ![Postman Example](./images/postman_example.PNG)

# Frontend
Let's create an appealing user interface! The user should be able to enter feature values and to get the prediction of the machine learning model displayed.
## Preparation
At first, some prep:
- Switch into direcotry *frontend*: <code>cd frontend</code>
- Install dependencies: <code>npm install</code>
- Run frontend: <code>npm run dev</code>
- Open link http://localhost:5173/ in your browser.
- See the REACT default template.
- Use this template to build your own webpage. 

## Step-by-step guide

### #1 Create elements 
Have a look at file [App.jsx](./frontend/src/App.jsx). Adjust the **html** code.
- Replace the headline.
- Replace the react logo with an image about California (e.g. [california.jpg](./frontend/src/assets/california.jpg)).
- Add some input fields with <code> < input type="text"/> </code>.
- Adjust the button.

### #2 Make it look good
You can adjust styling of your html elements with **css** code. Therefore, open file [App.css](./frontend/src/App.css). You can set tags on html elements with <code>className="your-tag"</code> and define corresponding styling in the css file. Example: 
- Add tag <code>class="input-field"</code> to your input fields.
- Add following css code:
````
.input-field {
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px;
  margin: 8px;
  width: 200px;
}
````

### #3 Make it work
Finally, we want to connect frontend with backend. When the user enters values and presses the button, a request should be sent to the backend and the prediction result should be displayed. Therefore, we need to adjust html code and add some javascript. In file *App.jsx*:

- Add tag <code>type="submit"</code> to button. 
- Put input fields and button into a *form* element: <code> < form> ... < /form> </code> element.
- Add a name tag (e.g. <code>name="MedInc"</code>) to all input fields, so we can retrieve entered values.
- Add tag <code>onSubmit={handleFormSubmit}</code> to form element.
- Implement function **handleFormSubmit** which is executed when pressing the button. The function gets the data entered in the input fields, sends a request to the backend and stores the result in variable responseMessage. 

  Insert and complete the code below:
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
  Use *axios* library for sending a REST request (see an example [here](https://axios-http.com/docs/post_example)). Therefore install axios with npm: <code>npm install axios</code>. 

- Add a section to the html code, which shows the **prediction result**. 
  - You can retrieve variable values by putting them into curly brackets: <code>{responseMessage}</code>. 
  - If you want to display an element only if variable responseMessage is set, you can use conditional expression: <code>{responseMessage && < p>whatsoever< /p>}</code> <br></br>
- **Test** your implementation. Enter some values and press the button. Do you get a result? Do not forget to run backend on your localhost before, otherwise the service would not be reachable (run backend/main.py). 

### Example
If you lack creativity, here's an example how the result may look like:
![example](./images/frontend_example.PNG)