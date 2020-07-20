# VodafoneCypressAssignment


This project is created against VodafoneZiggoAssignment to automate test cases for ordering a yellow Iphone11.

Solutions

Project Structure:

In Fixture floder we have data to provide the test cases to make the  framework as testdata driven so we can change the user data at any point of time.
In Integration folder we have 2 subfolders 1 for page object and another for their respective testcases. So Each test will get the supporting mehthods and elements from their respective Page object class.

Reusability methods:-
I have created Base URL method to reuse before each test script so we can avoid duplicate lines of code.

Since this Project is build on cypress platform so It will create the test reports and recording of each test cases in the respective folder after each run.
I have confugured the dashboard so anyone can look the Test results reports and recording of each test case in the respective folder.

To see the reports use below command to run the project from CLI :-

------ npx cypress run   

After completion of execution user can see the report in the CLI itself in same window.

To see the reports, result, screenshot of each failed test cases use below command to run from cli so user can view the results in Dashboard of Cypress:-

------ npx cypress run --record --key 84a8a2aa-52c4-4a4b-8148-1e1afff2fa7d

Note:- Please provide a valid card number to run the test case. I have  mocked the card number in my repo but for valid result user can update the card details in fixture floder in card key.