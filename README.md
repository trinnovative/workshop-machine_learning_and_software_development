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



## Analysis
- Go to the Python website (https://www.python.org/downloads/) and **download** the latest version of **Python** for your operating system. Follow the installation instructions to install Python on your machine.
- Open a command prompt or terminal window on your machine and install required **packages**: <code>pip install pandas matplotlib seaborn scikit-learn joblib</code>.
- In order to work with **Jupyter Notebooks** (.ipynb-files), it may be necessary to download the appropriate **extension** in VSCode. Download will be suggested automatically when trying to run a cell.
- Run [analysis.ipynb](./backend/analysis/analysis.ipynb) with button *Run All*. This will create the machine learning model file *model.joblib* in folder [artifacts](./backend/artifacts/). 

   