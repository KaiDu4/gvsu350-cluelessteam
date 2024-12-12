# Overview
This document will go over the requirements and artifacts from the "CluelessTeam's" CIS 350 Project website: EduBridge. It will describe both functional and non-functional requirements of EduBridge. As well as artifacts, including, a sequence diagram, a use case diagram, and more. This document will conclude with a demo showcasing the current functionality and progress of EduBridge.
   
# Software Requirements
This section includes both Functional and Non-Functional requirements for features of the EduBridge website. 

## Functional Requirements

### Public Template Page
| ID | Requirement |
| :-------------: | :----------: |
| FR1 | This feature should give the users a description of a specific template and category to inform the reader the purpose of each template|
| FR2 | The public template pages need to include buttons that give the option download or edit a template |
| FR3 | This feature should present the templates in a 3-by-X grid form, where each row has 3 templates, and X columns adjust for number of grids in it's stadard View form |
| FR4 | The public template page needs to give a preview of templates when either the Word, or Doc buttons and used |


### Edubrige Home Page
| ID | Requirement |
| :-------------: | :----------: |
| FR5 | This page should provide an inviting interface to keep users engaged with the website and create a welcoming virtual enviroment |
| FR6 | The Home Page should have a clear indication of a the website's nagivation bar labelled "Dropdown"  |
| FR7 | The feature should include multiple images that parallel a teaching environment, which aims to interest the intended users |
| FR8 | The feature should provide a clear and noticeable button to sign-up for a website account under the rotation of images|


### Create Account Page
| ID | Requirement |
| :-------------: | :----------: |
| FR9 | This page should have clear indications of fields needed to filled out in order for a user to create an account for the EduBridge website |
| FR10 | The sign up button should finalize the account creation process for the user |

### Sign in Page
| ID | Requirement |
| :-------------: | :----------: |
| FR11 | This page should have clear indications of fields needed to filled out in order for a user to sign into their account for the EduBridge website |
| FR12 | Once the sign in button is clicked it should provide a "registration succesfull" message to the user so they can confirm they are in their account |
| FR13 | The sign up button should return the message "Please Try Again" if any of the filled out fields provided incorrect data |

### Private Template Page 
| ID | Requirement |
| :-------------: | :----------: |                                          | FR14 | The private template page should have clear indications of fields that need to be filled out so a template of user's creation can be considered for addition to EduBridge Public Templates |                               | FR15 | Once "upload template" button is clicked all filled out fields should be stored to a .json file for the template review process |

### Navigation Bar
| ID | Requirement |
| :-------------: | :----------: |
| FR16 | The navigation bar labelled "Dropdown" when clicked should show buttons "Start", "Public Template", "Private Template"|
| FR17 | The navigation bar should provide users with a succesful way to traverse from the websites pages which are indicated by their respective names |   

## Non-Functional Requirements

### Public Template Page
| ID | Requirement |
| :-------------: | :----------: |
| NFR1 | The public template pages needs to have some type of connection to Google Drive in order to be edited on on Google Documents |
| NFR2 | This feature needs to be able to also have some type of connection to Word documents to be edited on Microsoft Word |
| NFR3 | This feature needs to be able to updated when a new template is created or given permission to be uploaded to the website |
| NFR4 | The Public template page shall adjust to different screen sizes including smaller ones (like phone sized screens) and present each template card with all information despite size changes |


### Edubrige Home Page
| ID | Requirement |
| :-------------: | :----------: |
| NFR5 | The webiste home page shoud establish links to other pages via the naviagation bar "more" |
| NFR6 | The Home Page needs to ensure the "sign up" button has a link to traverse users to the sign up page |
| NFR7 | The buttons should have travel time between pages less than 10 seconds|


### Create An Account Page
| ID | Requirement |
| :-------------: | :----------: |
| NFR8 | When the sign up button is clicked the data entered should store users data into the MongoDB database for later usage |
| NFR9 | The system should take common types of emails such as @gmail.com, @outlook.com, @icloud.com, but other emails may cause issues in signup process|

### Sign in Page
| ID | Requirement |
| :-------------: | :----------: |
| NFR10 | After the "sign in" button is clicked the website should take the inputs and confirm that match an account in the MongoDB database |
| NFR11 | The system shouldn't give access to user specific templates, if the sign up process was unsuccessful |

### Private Template Page
| ID | Requirement | 
| :-------------: | :----------: | 
| NFR12 | Should be able to accept at least a Google Doc or Microsoft Word verision of a template. Other forms of templates are not accepted to be upload for Public Template pages yet |  
| NFR13 | This feature is not yet automatic, and instead is a manual process to ensure templates are appropriate for the website |                                                                                
### Navigation Bar
| ID | Requirement |
| :-------------: | :----------: |  
| NFR14 | If the size of user's screen is minimized, the dropdown button will then appear as a hamburger bar|
| NFR15 | The navigation bar should transfer users to each each page possible in less than 10 seconds |


# Software Artifacts

<Describe the purpose of this section>
* [I am a link](to_some_file.pdf)
