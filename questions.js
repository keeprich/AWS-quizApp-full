


// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "A development team needs to run up a few lab servers on a weekend for a new project. The servers will need to run uninterrupted for a few hours. Which EC2 pricing option would be most suitable?",
    answer: "On-Demand instance",
    options: [
      "Spot instance",
      "Dedecated instance",
      "On-Demand instance",
      "Reserved instance"
    ]
  },
    {
    numb: 2,
    question: "A company needs to ensure that they can failover between AWS Regions in the event of a disaster seamlessly with minimal downtime and data loss. The applications will run in an active-active configuration. Which DR strategy should a Solutions Architect recommend?",
    answer: "Multi-site",
    options: [
      "Backup and restore",
      "Pilot light",
      "Multi-site",
      "Warm standby"
    ]
  },
    {
    numb: 3,
    question: "An Amazon Elastic File System (EFS) has been created to store data that will be accessed by a large number of Amazon EC2 instances. The data is sensitive and a Solutions Architect is creating a design for security measures to protect the data. It is required that network traffic is restricted correctly based on firewall rules and access from hosts is restricted by user or group. How can this be achieved with Amazon EFS? (choose 2)",
    answer: "Use POSIX permissions to control access from hosts by user or group and Use EFS Security Groups to control network traffic",
    options: [
      "Use AWS Web Application Firewall (WAF) to protect EFS",
      "Use Network ACLs to control the traffic",
      "Use POSIX permissions to control access from hosts by user or group and Use EFS Security Groups to control network traffic",
      "Use IAM groups to control access by user or group"
    ]
  },
    {
    numb: 4,
    question: "An Amazon EC2 instance has been launched into an Amazon VPC. A Solutions Architect needs to ensure that instances have both a private and public DNS hostnames. Assuming settings were not changed during creation of the VPC, how will DNS hostnames be assigned by default? (choose 2)",
    answer: "In a default VPC instances will be assigned a public and private DNS hostname and In a non-default VPC instances will be assigned a private but not a public DNS hostname",
    options: [
      "In a default VPC instances will be assigned a private but not a public DNS hostname",
      "In a non-default VPC instances will be assigned a public and private DNS hostname?",
      "In all VPCs instances no DNS hostnames will be assigned",
      "In a default VPC instances will be assigned a public and private DNS hostname and In a non-default VPC instances will be assigned a private but not a public DNS hostname"
    ]
  },
    {
    numb: 5,
    question: "Several Amazon EC2 Spot instances are being used to process messages from an Amazon SQS queue and store results in an Amazon DynamoDB table. Shortly after picking up a message from the queue AWS terminated the Spot instance. The Spot instance had not finished processing the message. What will happen to the message?",
    answer: "The message will become available for processing again after the visibility timeout expires",
    options: [
      "The message will be lost as it would have been deleted from the queue when processed",
      "The message will become available for processing again after the visibility timeout expires",
      "The message will remain in the queue and be immediately picked up by another instance",
      "The results may be duplicated in DynamoDB as the message will likely be processed multiple times"
    ]
  },

];









// creating an array and passing the number, questions, options, and answers
// let questions = [
//     {
//     numb: 1,
//     question: "What does HTML stand for?",
//     answer: "Hyper Text Markup Language",
//     options: [
//       "Hyper Text Preprocessor",
//       "Hyper Text Markup Language",
//       "Hyper Text Multiple Language",
//       "Hyper Tool Multi Language"
//     ]
//   },
//     {
//     numb: 2,
//     question: "What does CSS stand for?",
//     answer: "Cascading Style Sheet",
//     options: [
//       "Common Style Sheet",
//       "Colorful Style Sheet",
//       "Computer Style Sheet",
//       "Cascading Style Sheet"
//     ]
//   },
//     {
//     numb: 3,
//     question: "What does PHP stand for?",
//     answer: "Hypertext Preprocessor",
//     options: [
//       "Hypertext Preprocessor",
//       "Hypertext Programming",
//       "Hypertext Preprogramming",
//       "Hometext Preprocessor"
//     ]
//   },
//     {
//     numb: 4,
//     question: "What does SQL stand for?",
//     answer: "Structured Query Language",
//     options: [
//       "Stylish Question Language",
//       "Stylesheet Query Language",
//       "Statement Question Language",
//       "Structured Query Language"
//     ]
//   },
//     {
//     numb: 5,
//     question: "What does XML stand for?",
//     answer: "eXtensible Markup Language",
//     options: [
//       "eXtensible Markup Language",
//       "eXecutable Multiple Language",
//       "eXTra Multi-Program Language",
//       "eXamine Multiple Language"
//     ]
//   },

// ];











