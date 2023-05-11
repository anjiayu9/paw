## 1. Amazon DynamoDB:
I used DynamoDB, a managed NoSQL database provided by AWS, to store and retrieve data. The AdoptionCenters component fetches adoption center data from a DynamoDB table using the AWS SDK.

## 2. Amazon Cognito:
I utilized Amazon Cognito to manage user authentication. With Cognito, users are able to sign up and log in to the application. The logged-in user's email is retrieved via the Auth.currentAuthenticatedUser() function.

## 3. Amazon SES (Simple Email Service):
I utilized Amazon SES to send emails. Specifically, I set up a function to send the top 10 search results to the authenticated user's email address. The email sending logic is encapsulated in an AWS Lambda function which uses the SES service.

## 4. AWS Lambda:
I created an AWS Lambda function, sendEmailFunction, that sends emails using Amazon SES. The function is triggered by a POST request to the /sendEmail endpoint on API Gateway. I configured the function to accept parameters such as the sender's email address, the recipient's email address, the subject, and the HTML content of the email.

## 5. AWS API Gateway:
I configured AWS API Gateway to expose an HTTP endpoint that triggers the sendEmailFunction Lambda function. The /sendEmail POST endpoint accepts a JSON payload with the necessary email parameters and forwards them to the Lambda function.

## 6. AWS Amplify:
I used AWS Amplify to manage the front-end web application and handle the interaction with the back-end AWS services. Amplify's libraries were used in the React application to call the API Gateway endpoint and handle user authentication with Amazon Cognito. The Amplify CLI was used to configure the application's AWS resources.

## 7. Google's Custom Search JSON API:
I also integrated Google's Custom Search JSON API to fetch news articles related to the adoption centers. This is not an AWS service, but it is an important part of the functionality.
All these features come together to create a seamless user experience. Users can search for adoption centers, get updated news articles related to these centers, and receive the top 10 results in their email. All of this is powered by a scalable, secure, and highly available backend infrastructure on AWS.

## 8. GraphQL:
I am utilizing GraphQL, a data query and manipulation language, which offers an efficient, powerful, and flexible approach to developing web APIs. GraphQL promotes a code-first philosophy, and its type system ensures applications only ask for what's possible and provide clear and helpful errors.

## 9. AWS Amplify GraphQL API:
I have incorporated AWS Amplify's GraphQL capabilities to manage and interact with my data. Amplify makes it easy to create, configure, and implement scalable mobile and web apps powered by AWS. Amplify seamlessly provisions and manages my AWS resources, such as my API (AppSync), right from the command line.

## 10. GraphQL Schema:
The GraphQL schema for this application consists of three main types: Cat, Message, and Review.
* Cat: Represents a cat that can be adopted. It has fields for id, name, color, and age. The @model directive indicates that it should be stored in a DynamoDB table, and the @searchable directive automatically configures search capabilities for this model in AWS Elasticsearch. The @auth directive provides owner-based authorization, meaning only the owner of a particular Cat object can perform certain operations (create, delete, update, read).
* Message: Represents a message in the application, and it has fields for id, userID, content, and createdAt. The @model directive indicates that it should be stored in a DynamoDB table, and the @auth directive restricts access to the owner of the message.
* Review: Represents a review of a cat. It has fields for id, catId, rating, comment, and createdAt. The @model directive indicates that it should be stored in a DynamoDB table, and the @auth directive provides owner-based authorization, similar to the Cat model.

