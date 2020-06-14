# TeamTim-SmarterChatbot_SCDFXIBM

## Contents

1. [Introduction](#introduction)
1. [Pitch Video](#pitch-video)
1. [Architecture](#architecture)
1. [Solution code](#solution-code)
1. [Getting started](#getting-started)
1. [Built with](#built-with)

## Introduction

We are a team of students from Singapore Polytechnic interested in coding. This is our code for the SCDF X IBM Call For Code 2020.

We are:

1) Chau Kum Tim 

2) Aw Ming Xuan

3) Pon Jia Yong

4) Lee Yi Xiang

## Pitch video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=v=2bDFYYMqv_g
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="Creating your own Crisis Management Chatbot" width="240" height="180" border="10" /></a>

## Architecture

User -> Watson Assistant  -> Response -> User

User -> data -> AI -> Response -> User

User -> Image -> Image Recognition -> Response ->User

## Solution Code
Our solutions have 3 parts : Chatbot, Artificially Intelligence and Image Recognition


[Image Recognition](https://github.com/TeamxTim/TeamTim-SmarterChatbot_SCDFXIBM/blob/master/model.zip)
[Chatbot](https://github.com/TeamxTim/TeamTim-SmarterChatbot_SCDFXIBM/blob/master/skill-SCDF.json)

### Chatbot

For the chatbot, its main purpose is to assist newer staff by providing common information and knowledge. This will help the staff-in-charge to have more time to do other more important things. Firstly, the user must type the message into the chatbot. The chatbot will then find entities or intents in the message and look for the response to answer the user.

### Artificial Intelligence (AI)

For the AI, its main purpose is to help to find out if the staff is suited for that type of training. For the AI, provided in the code, it uses mock data to predict if the risk of a staff being able to carry out that type of training ( Good risk or Bad risk). This will help better allocate manpower to training. Hence, improving efficiency. Firstly, you need to enter a few information into the AI. Then, the AI will be able to predict based on previous data input and give an appropriate prediction. The prediction will be better, if there is a large data set, example 1000 data set given.

### Image Recognition

For the Image Recognition, its main purpose it to help the officers of SCDF, predict based on the given situation. For the Image Recognition, provided in the code repository, it uses labelled images to find similarities in the images. When a new image is provided into the code, it will be able to find the similarities in the image and give an appropriate prediction. This is more helpful to new staff as it can tell them the risks involve in this training. The more images in different categories is uploaded to this image recognition, the more accurate the prediction will be.

## Getting Started

For the Chatbot :

1) Launch Watson Assistant

2) Click Create assistant

3) Create an assistant name

4) Click Add dialog skill

5) Click Import skill                      	

6) Import the skill-scdf
 
For the Artificial Intelligence : 

1. Launch the JSON file
 
For the Image Recognition :
1) Unzip the file

2) Launch the JSON file under webapp folder

## Built with

1) Watson Assistant

2) Watson Studio

3) IBM Cloud Object Storage

4) Cloud Annotations

5) Watson Machine Learning
