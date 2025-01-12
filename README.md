# ServiceNow Learning Portal Iframe Height Adjuster

This Chrome extension adjusts the iframe height on NowLearning for specific course pages.

## Description

The extension checks if the current page is a valid course page on NowLearning. If it is, it adjusts the height of the iframe with the class `scorm-iframe` to `90vh` and sets up a load listener to log the iframe content once it is fully loaded.

By default content of the course is loaded in modal which height is 50%:

https://github.com/user-attachments/assets/9ef78df8-bc56-44f0-924b-ac6e91052160


After installing extension, height is changed to 90vh:

https://github.com/user-attachments/assets/f092af41-a933-47fb-88d2-d2adbb413033


## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you cloned or downloaded this repository.

## Usage

1. Navigate to a course page on NowLearning that matches the URL pattern `https://nowlearning.servicenow.com/lxp/en/pages/learning-course*`.
2. The extension will automatically check if the page is a valid course page.
3. The script runs only if the id=learning_course and course_id parameters are present and valid.
3. If valid, it will adjust the iframe height to `90vh` and log the iframe content once it is fully loaded.

