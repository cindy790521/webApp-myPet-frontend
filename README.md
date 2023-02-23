# TsaijuLin-FinalProject-myPet-frontend
MyPet is a pet caring web aplication that helps the user to record the pet's daily condition. 

demo:  
frontend  
https://tsaijulin-mypet-frontend.herokuapp.com/  
bakend  
https://tsaijulin-mypet-backend.herokuapp.com/  

--Iteration 1  
Frontend :  
(1) Components structures: all the basic structures are built, but the style is yet to be modified.   
a.before login  
![Alt text](./public/screenshot/usespring.png?raw=true "usespring")  
b.profile  
![Alt text](./public/screenshot/profile.png?raw=true "profile")  
c.editprofile  
![Alt text](./public/screenshot/editprofile.png?raw=true "editprofile")  
d.record  
![Alt text](./public/screenshot/record.png?raw=true "record")  
e.editrecord  
![Alt text](./public/screenshot/editrecord.png?raw=true "editrecord")  
(2) Functions: I have the very initial codes for functions calling APIs , but the funtionalities are yet to be tested.  
(3) Third part library: I use 'react-spring' in Profile.js. I use 'useSpring' and 'animated' to make the flashing welcoming text.  
(4) Bootstrap UI component: I use BsFillPencilFill, BsFillPlusCircleFill from "react-icons/bs" in Records.js. BsFillPlusCircleFill means adding a new record and links to EditRecord.js. BsFillPencilFill means editing the record and links to EditRecord.js.  

3.difference from design plan:  
(1)remove the function that users can upload pictures:  
As I search on the web, most says Mongodb is not suggested to store images. And due to the limited time, I decide not to have this funtion.  
(2)remove the diary and editing diary pages:  
Since the records and edting records pages already show how to call APIs to post and update data in the database, and due to the limited time, I decide not to have these pages.  
(3)remove the reminder on the profile page:  
Due to the limited time, I decide not to have this part.


--Iteration 2
 Frontend:
 (1)Fixed bugs for the functions and completed all the functions.
 (2)Updated the css style. 
    Added the background picture on the profile page and the icons on the record page.
    ![Alt text](./public/screenshot/backgroundPicture.png?raw=true "backgroundPicture")  
    ![Alt text](./public/screenshot/icons.png?raw=true "icons")  
    Adjusted the style of layout for the record cards to make it listed from top to down, and the text inside a card is put one next to the other.
    Adjusted the style of layout for the forms, and changed some form items to selected type.
    ![Alt text](./public/screenshot/profileForm.png?raw=true "profileForm") 
    ![Alt text](./public/screenshot/recordForm.png?raw=true "recordForm") 

 (3) Added conditional-statement to the page changing button on the records page so that the first page does not have the button for previous pages and the last page does not have the button for next pages.

  Additional difference from design plan:
  Removed the 'delete record' function since this app is only for the user's self use, there is no need for the user to delete an existing record.

  --Iteration 3
  Checked again and did not find bugs. 
  Same as iteration 2.
